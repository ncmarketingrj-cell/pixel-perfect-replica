import { useEffect, useRef, useState } from "react";
import { Sparkles, Play } from "lucide-react";

/**
 * Evento universal para pausar o vídeo do Hero quando outro vídeo for reproduzido
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
            <span>NC CRM — IA EM AÇÃO</span>
          </span>
        </div>

        {/* Indicador de Status Discreto */}
        <div className="flex items-center gap-1.5 rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 text-[10px] font-mono text-primary font-medium">
          <span
            className={`h-1.5 w-1.5 rounded-full bg-primary ${
              isPlaying ? "animate-pulse" : "opacity-40"
            }`}
          />
          <span>{isPlaying ? "Reproduzindo" : "Pausado"}</span>
        </div>
      </div>

      {/* Container do Player com Proporção 16:9 Estrita e Nitidez Original */}
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
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-contain pointer-events-none"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Indicador central sutil apenas quando pausado */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[1px] transition-opacity duration-200">
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-white/25 bg-primary text-white shadow-2xl transition-transform hover:scale-110">
              <Play className="h-7 w-7 sm:h-9 sm:w-9 translate-x-0.5 fill-white text-white" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
