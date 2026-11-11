import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2, Sparkles } from "lucide-react";

/**
 * Evento universal para pausar o vídeo do Hero quando outro vídeo interativo for reproduzido
 */
export const PAUSE_HERO_VIDEO_EVENT = "nc-pause-hero-video";

export function pauseHeroVideo(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(PAUSE_HERO_VIDEO_EVENT));
  }
}

interface HeroVideoPlayerProps {
  className?: string;
}

export function HeroVideoPlayer({ className = "" }: HeroVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);

  // Monitora prefers-reduced-motion e evento de pausa mútua
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }

    const handleExternalPause = () => {
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    window.addEventListener(PAUSE_HERO_VIDEO_EVENT, handleExternalPause);
    return () => {
      window.removeEventListener(PAUSE_HERO_VIDEO_EVENT, handleExternalPause);
    };
  }, []);

  // Monitora estado de tela cheia
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const toggleFullscreen = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      togglePlayPause();
    } else if (e.key === "m" || e.key === "M") {
      e.preventDefault();
      toggleSound();
    } else if (e.key === "f" || e.key === "F") {
      e.preventDefault();
      toggleFullscreen();
    }
  };

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Demonstração do NC CRM — IA em Ação"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`group relative w-full rounded-2xl border border-white/12 bg-[#0c0c0e] shadow-[0_25px_60px_rgba(239,64,69,0.18)] overflow-hidden font-sans outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all duration-300 ${className}`}
    >
      {/* Barra Superior da Janela Executiva */}
      <div className="flex items-center justify-between border-b border-white/8 bg-[#141416] px-4 py-3 text-[11px] text-muted-foreground select-none">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <span className="font-mono text-[11px] font-semibold text-white/80 tracking-wide uppercase flex items-center gap-2">
            <Sparkles className="h-3 w-3 text-primary" />
            <span>NC CRM — IA de Atendimento Automotivo</span>
          </span>
        </div>

        {/* Controles de Topo: Status, Som e Tela Cheia */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Botão de Som Destacado */}
          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Ativar som do vídeo" : "Silenciar áudio"}
            className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition-all ${
              isMuted
                ? "border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                : "border-primary/40 bg-primary/20 text-primary font-semibold shadow-glow"
            }`}
            title={isMuted ? "Clique para ativar o som (tecla M)" : "Clique para silenciar (tecla M)"}
          >
            {isMuted ? (
              <>
                <VolumeX className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Sem som</span>
              </>
            ) : (
              <>
                <Volume2 className="h-3.5 w-3.5 animate-pulse text-primary" />
                <span className="hidden sm:inline">Com som</span>
              </>
            )}
          </button>

          {/* Botão Tela Cheia */}
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Sair da tela cheia" : "Ver em tela cheia"}
            className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70 hover:bg-white/10 hover:text-white transition-all"
            title={isFullscreen ? "Sair da tela cheia (tecla F)" : "Expandir para tela cheia (tecla F)"}
          >
            {isFullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
          </button>

          {/* Status Ao Vivo */}
          <div className="hidden sm:flex items-center gap-1.5 rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 text-[10px] font-mono text-primary font-medium">
            <span
              className={`h-1.5 w-1.5 rounded-full bg-primary ${
                isPlaying ? "animate-pulse" : "opacity-40"
              }`}
            />
            <span>{isPlaying ? "Reproduzindo" : "Pausado"}</span>
          </div>
        </div>
      </div>

      {/* Container do Player com Proporção 16:9 Estrita e Nitidez Máxima */}
      <div
        onClick={togglePlayPause}
        className="relative aspect-video w-full cursor-pointer bg-[#070709] select-none overflow-hidden"
        title={isPlaying ? "Clique para pausar" : "Clique para continuar"}
      >
        <video
          ref={videoRef}
          src="/videos/hero-crm-ia.mp4"
          poster="/videos/hero-crm-ia-poster.png"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-contain pointer-events-none"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
        />

        {/* Overlay quando pausado */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px] transition-opacity duration-200">
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-white/25 bg-primary text-white shadow-2xl transition-transform hover:scale-110">
              <Play className="h-7 w-7 sm:h-9 sm:w-9 translate-x-0.5 fill-white text-white" />
            </div>
          </div>
        )}

        {/* Linha de Progresso Interativa no Rodapé do Vídeo */}
        <div
          onClick={handleSeek}
          className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10 hover:h-2.5 transition-all cursor-pointer z-10"
        >
          <div
            className="h-full bg-primary transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Barra de Rodapé com Controles e Contexto */}
      <div className="border-t border-white/8 bg-[#101012] px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs text-white/80">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={togglePlayPause}
            className="flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 text-xs text-white/90 hover:bg-white/10 hover:text-white transition-colors"
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 fill-white" />}
            <span className="font-medium">{isPlaying ? "Pausar" : "Reproduzir"}</span>
          </button>

          <button
            type="button"
            onClick={toggleSound}
            className="flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 text-xs text-white/90 hover:bg-white/10 hover:text-white transition-colors"
          >
            {isMuted ? <VolumeX className="h-3.5 w-3.5 text-white/60" /> : <Volume2 className="h-3.5 w-3.5 text-primary" />}
            <span>{isMuted ? "Ativar som" : "Desativar som"}</span>
          </button>
        </div>

        <div className="flex items-center gap-3 text-white/60 text-[11px] font-mono">
          <span className="hidden md:inline">Clique no vídeo para pausar ou continuar • Pressione F para tela cheia</span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="text-white/80">Demonstração Real</span>
        </div>
      </div>
    </div>
  );
}
