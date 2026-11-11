import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { pauseHeroVideo } from "./HeroVideoPlayer";

interface AiDemoVideoPlayerProps {
  className?: string;
}

export function AiDemoVideoPlayer({ className = "" }: AiDemoVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Pausa o vídeo automaticamente quando sair do campo de visão (IntersectionObserver)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      // Pausa o vídeo do Hero para evitar reprodução simultânea
      pauseHeroVideo();
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Fallback se bloqueado
        });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      setIsPlaying(false);
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
      aria-label="Demonstração prática da IA de atendimento no WhatsApp"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`group relative w-full max-w-2xl rounded-2xl border border-white/12 bg-[#0c0c0e] shadow-[0_20px_50px_rgba(239,64,69,0.12)] overflow-hidden font-sans outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all duration-300 ${className}`}
    >
      {/* Barra Superior da Janela */}
      <div className="flex items-center justify-between border-b border-white/8 bg-[#141416] px-4 py-2.5 text-[11px] text-muted-foreground select-none">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <span className="font-mono text-[10px] text-white/60 ml-2 tracking-wide uppercase">
            NC Agência › Conversas › Atendimento IA
          </span>
        </div>

        <div className="flex items-center gap-1.5 rounded-md border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[10px] font-mono text-primary font-medium">
          <span
            className={`h-1.5 w-1.5 rounded-full bg-primary ${
              isPlaying ? "animate-pulse" : "opacity-40"
            }`}
          />
          <span>{isPlaying ? "Reproduzindo Demonstração" : "Demonstração Prática"}</span>
        </div>
      </div>

      {/* Container do Player 16:9 */}
      <div
        onClick={togglePlayPause}
        className="relative aspect-video w-full cursor-pointer bg-[#09090b] select-none overflow-hidden"
        title={isPlaying ? "Clique para pausar o vídeo" : "Clique para assistir ao vídeo"}
      >
        <video
          ref={videoRef}
          src="/videos/ia-conversas-demo.mp4"
          poster="/videos/ia-conversas-demo-poster.png"
          muted={isMuted}
          playsInline
          preload="metadata"
          className="h-full w-full object-contain pointer-events-none"
          onEnded={handleEnded}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Botão de Play Central Elegante (exibido apenas quando pausado) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[1px] transition-opacity duration-200">
            <button
              type="button"
              onClick={togglePlayPause}
              aria-label="Assistir demonstração da IA"
              className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-white/25 bg-primary text-white shadow-2xl transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none"
            >
              <Play className="h-7 w-7 sm:h-9 sm:w-9 translate-x-0.5 fill-white text-white" />
            </button>
          </div>
        )}

        {/* Controle Discreto de Áudio no Canto Inferior Direito */}
        <button
          type="button"
          onClick={toggleSound}
          aria-label={isMuted ? "Ativar som" : "Desativar som"}
          title={isMuted ? "Ativar som" : "Desativar som"}
          className="absolute bottom-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-black/60 text-white/85 backdrop-blur-md transition-colors hover:bg-black/90 hover:text-white focus:outline-none"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-primary" />}
        </button>
      </div>

      {/* Barra de Rodapé Sutil do Player */}
      <div className="border-t border-white/8 bg-[#101012] px-4 py-2.5 flex items-center justify-between text-[11px] text-white/70">
        <span className="flex items-center gap-2 text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span>Atendimento com IA, qualificação e envio de fotos</span>
        </span>
        <span className="text-[10px] font-mono text-white/40 hidden sm:inline">
          {isPlaying ? "Clique para pausar" : "Clique para assistir"}
        </span>
      </div>
    </div>
  );
}
