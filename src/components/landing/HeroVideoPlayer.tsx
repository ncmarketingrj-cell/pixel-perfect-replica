import { useEffect, useRef, useState } from "react";

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

  // Alterna reprodução/pausa sem reiniciar o vídeo
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay policy fallback
        });
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
      role="region"
      aria-label="Demonstração do NC Performance Suite — IA em Ação"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`group relative w-full max-w-2xl rounded-2xl border border-white/12 bg-[#0c0c0e] shadow-[0_20px_50px_rgba(239,64,69,0.12)] overflow-hidden font-sans outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all duration-300 ${className}`}
    >
      {/* Barra Superior da Janela Executiva */}
      <div className="flex items-center justify-between border-b border-white/8 bg-[#141416] px-4 py-2.5 text-[11px] text-muted-foreground select-none">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <span className="font-mono text-[10px] text-white/60 ml-2 tracking-wide uppercase">
            NC PERFORMANCE SUITE — IA EM AÇÃO
          </span>
        </div>

        <div className="flex items-center gap-1.5 rounded-md border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[10px] font-mono text-primary font-medium">
          <span
            className={`h-1.5 w-1.5 rounded-full bg-primary ${
              isPlaying ? "animate-pulse" : "opacity-40"
            }`}
          />
          <span>{isPlaying ? "IA em Ação • Ao Vivo" : "Pausado (Clique p/ Continuar)"}</span>
        </div>
      </div>

      {/* Container do Player com Proporção Estrita 16:9 */}
      <div
        onClick={togglePlayPause}
        className="relative aspect-video w-full cursor-pointer bg-[#09090b] select-none overflow-hidden"
        title={isPlaying ? "Clique para pausar o vídeo" : "Clique para continuar o vídeo"}
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
      </div>

      {/* Barra de Rodapé Sutil do Player */}
      <div className="border-t border-white/8 bg-[#101012] px-4 py-2.5 flex items-center justify-between text-[11px] text-white/70">
        <span className="flex items-center gap-2 text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>Atendimento com IA, troca e qualificação comercial</span>
        </span>
        <span className="text-[10px] font-mono text-white/40 hidden sm:inline">
          Clique no vídeo para pausar / continuar
        </span>
      </div>
    </div>
  );
}
