import { useEffect, useId, useRef, useState } from "react";
import { Play, Pause, Sparkles, Volume2 } from "lucide-react";
import { pauseHeroVideo } from "./HeroVideoPlayer";

declare global {
  interface Window {
    YT?: {
      Player: new (
        elementId: string,
        options: {
          videoId: string;
          playerVars?: Record<string, string | number>;
          events?: {
            onReady?: (event: { target: YTPlayerInstance }) => void;
            onStateChange?: (event: { data: number; target: YTPlayerInstance }) => void;
          };
        }
      ) => YTPlayerInstance;
      PlayerState?: {
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
        BUFFERING: number;
        CUED: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YTPlayerInstance {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  getCurrentTime: () => number;
  getDuration: () => number;
  unloadModule?: (moduleName: string) => void;
  setOption?: (module: string, option: string, value: unknown) => void;
  destroy: () => void;
}

interface VslVideoPlayerProps {
  videoId: string;
  title?: string;
  className?: string;
}

let ytApiPromise: Promise<void> | null = null;

function loadYouTubeIframeApi(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }
  if (window.YT && window.YT.Player) {
    return Promise.resolve();
  }
  if (ytApiPromise) {
    return ytApiPromise;
  }

  ytApiPromise = new Promise<void>((resolve) => {
    const previousCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (previousCallback) previousCallback();
      resolve();
    };

    const existingScript = document.querySelector(
      'script[src="https://www.youtube.com/iframe_api"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.head.appendChild(script);
    }
  });

  return ytApiPromise;
}

function disableYouTubeCaptions(player: YTPlayerInstance) {
  try {
    player.unloadModule?.("captions");
    player.unloadModule?.("cc");
    player.setOption?.("captions", "track", {});
  } catch {
    // Ignora caso o módulo de legendas não esteja carregado
  }
}

export function VslVideoPlayer({
  videoId,
  title = "Apresentação Oficial — NC CRM",
  className = "",
}: VslVideoPlayerProps) {
  const rawId = useId();
  const playerElementId = `yt-vsl-${rawId.replace(/:/g, "")}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayerInstance | null>(null);
  const isInViewRef = useRef(false);
  const userPausedRef = useRef(false);
  const userUnmutedRef = useRef(false);

  const [isReady, setIsReady] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [easedProgress, setEasedProgress] = useState(0);

  useEffect(() => {
    let isMounted = true;

    loadYouTubeIframeApi().then(() => {
      if (!isMounted || !window.YT?.Player) return;

      playerRef.current = new window.YT.Player(playerElementId, {
        videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          cc_load_policy: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            if (!isMounted) return;
            const player = event.target;
            disableYouTubeCaptions(player);
            // Inicia mutado para garantir autoplay confiável ao rolar a página
            player.mute();
            setIsMuted(true);
            setIsReady(true);

            if (isInViewRef.current && !userPausedRef.current) {
              pauseHeroVideo();
              player.playVideo();
            }
          },
          onStateChange: (event) => {
            if (!isMounted) return;
            const YTState = window.YT?.PlayerState;
            if (event.data === (YTState?.PLAYING ?? 1)) {
              disableYouTubeCaptions(event.target);
              setHasStarted(true);
              setIsPlaying(true);
            } else if (
              event.data === (YTState?.PAUSED ?? 2) ||
              event.data === (YTState?.ENDED ?? 0)
            ) {
              setIsPlaying(false);
              if (event.data === (YTState?.ENDED ?? 0)) {
                setEasedProgress(100);
              }
            }
          },
        },
      });
    });

    return () => {
      isMounted = false;
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch {
          // Ignora erros de limpeza caso o iframe já tenha sido desmontado
        }
        playerRef.current = null;
      }
    };
  }, [playerElementId, videoId]);

  // Autoplay ao rolar até o vídeo e pausa automática ao sair da visualização
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isInViewRef.current = entry.isIntersecting;
          const player = playerRef.current;
          if (!player || !isReady) return;

          if (entry.isIntersecting) {
            if (!userPausedRef.current) {
              pauseHeroVideo();
              if (!userUnmutedRef.current) {
                player.mute();
                setIsMuted(true);
              }
              player.playVideo();
            }
          } else {
            player.pauseVideo();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [isReady]);

  // Atualiza a barra de progresso com curva rápida no início e lenta até o final
  useEffect(() => {
    if (!isPlaying || !isReady) return;

    const interval = window.setInterval(() => {
      const player = playerRef.current;
      if (!player) return;

      try {
        const current = player.getCurrentTime();
        const duration = player.getDuration();
        if (duration > 0) {
          const linear = Math.min(Math.max(current / duration, 0), 1);
          const eased = Math.pow(linear, 0.38) * 100;
          setEasedProgress(eased);
        }
      } catch {
        // Ignora leituras transitórias antes do player estar pronto
      }
    }, 120);

    return () => window.clearInterval(interval);
  }, [isPlaying, isReady]);

  const handleUnmute = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const player = playerRef.current;
    if (!player || !isReady) return;

    userUnmutedRef.current = true;
    player.unMute();
    setIsMuted(false);
    if (!isPlaying) {
      userPausedRef.current = false;
      pauseHeroVideo();
      player.playVideo();
    }
  };

  const togglePlayPause = () => {
    const player = playerRef.current;
    if (!player || !isReady) return;

    if (isPlaying) {
      userPausedRef.current = true;
      player.pauseVideo();
    } else {
      userPausedRef.current = false;
      pauseHeroVideo();
      setHasStarted(true);
      player.playVideo();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      togglePlayPause();
    }
  };

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={title}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`group relative w-full rounded-2xl border border-white/12 bg-[#0c0c0e] shadow-[0_25px_60px_rgba(239,64,69,0.18)] overflow-hidden font-sans outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all duration-300 ${className}`}
    >
      {/* Barra Superior Executiva */}
      <div className="flex items-center justify-between border-b border-white/8 bg-[#141416] px-4 py-3 text-[11px] text-muted-foreground select-none">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <span className="font-mono text-[11px] font-semibold text-white/80 tracking-wide uppercase flex items-center gap-2">
            <Sparkles className="h-3 w-3 text-primary" />
            <span>{title}</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5 rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 text-[10px] font-mono text-primary font-medium">
          <span
            className={`h-1.5 w-1.5 rounded-full bg-primary ${
              isPlaying ? "animate-pulse" : "opacity-40"
            }`}
          />
          <span>{isPlaying ? "Reproduzindo" : hasStarted ? "Pausado" : "Pronto"}</span>
        </div>
      </div>

      {/* Container 16:9 com bloqueio total de controles/menus nativos do YouTube */}
      <div className="relative aspect-video w-full bg-[#070709] select-none overflow-hidden">
        <div
          id={playerElementId}
          className="h-full w-full pointer-events-none"
        />

        {/* Camada interativa exclusiva para Play / Pause */}
        <button
          type="button"
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
          title={isPlaying ? "Clique para pausar" : "Clique para reproduzir"}
          className={`absolute inset-0 z-10 flex w-full h-full items-center justify-center cursor-pointer transition-colors duration-200 focus:outline-none ${
            !hasStarted || !isPlaying
              ? "bg-black/45 backdrop-blur-[2px]"
              : "bg-transparent"
          }`}
        >
          {!hasStarted || !isPlaying ? (
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-white/25 bg-primary/95 text-white shadow-2xl transition-transform duration-200 group-hover:scale-105">
                <Play className="h-7 w-7 sm:h-9 sm:w-9 translate-x-0.5 fill-white text-white" />
              </div>
              <span className="rounded-full border border-white/15 bg-black/70 px-3.5 py-1 text-[11px] font-mono uppercase tracking-wider text-white/90">
                {hasStarted ? "Continuar vídeo" : "Assistir apresentação"}
              </span>
            </div>
          ) : (
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <Pause className="h-6 w-6 fill-white text-white" />
            </div>
          )}
        </button>

        {/* Botão discreto para ativar áudio quando o autoplay inicia mutado */}
        {isMuted && isPlaying && (
          <button
            type="button"
            onClick={handleUnmute}
            className="absolute bottom-5 right-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/80 px-3.5 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition-transform hover:scale-105 hover:border-primary/60 cursor-pointer"
          >
            <Volume2 className="h-4 w-4 text-primary animate-pulse" />
            <span>Ativar som</span>
          </button>
        )}

        {/* Barra de progresso visual (rápida no início, lenta até o fim — não clicável) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1.5 bg-white/15"
        >
          <div
            className="h-full bg-primary shadow-[0_0_10px_rgba(239,64,69,0.75)] transition-[width] duration-150 ease-linear"
            style={{ width: `${easedProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
