import { useEffect, useRef, useState } from "react";
import { Sparkles, Play } from "lucide-react";
import { pauseHeroVideo } from "./HeroVideoPlayer";

interface AiDemoVideoPlayerProps {
  className?: string;
}

export function AiDemoVideoPlayer({ className = "" }: AiDemoVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
        .catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
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
      aria-label="Demonstração prática do NC CRM — Atendimento IA no WhatsApp"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`group relative w-full rounded-2xl border border-white/12 bg-[#0c0c0e] shadow-[0_25px_60px_rgba(239,64,69,0.18)] overflow-hidden font-sans outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all duration-300 ${className}`}
    >
      {/* Barra Superior da Janela */}
      <div className="flex items-center justify-between border-b border-white/8 bg-[#141416] px-4 py-3 text-[11px] text-muted-foreground select-none">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <span className="font-mono text-[11px] font-semibold text-white/80 tracking-wide uppercase flex items-center gap-2">
            <Sparkles className="h-3 w-3 text-primary" />
            <span>NC CRM › Conversas › Atendimento IA</span>
          </span>
        </div>

        {/* Status Discreto */}
        <div className="flex items-center gap-1.5 rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 text-[10px] font-mono text-primary font-medium">
          <span
            className={`h-1.5 w-1.5 rounded-full bg-primary ${
              isPlaying ? "animate-pulse" : "opacity-40"
            }`}
          />
          <span>{isPlaying ? "Em reprodução" : "Demonstração Prática"}</span>
        </div>
      </div>

      {/* Container do Player 16:9 */}
      <div
        onClick={togglePlayPause}
        className="relative aspect-video w-full cursor-pointer bg-[#070709] select-none overflow-hidden"
        title={isPlaying ? "Clique para pausar o vídeo" : "Clique para assistir ao vídeo"}
      >
        <video
          ref={videoRef}
          src="/videos/ia-conversas-demo.mp4"
          poster="/videos/ia-conversas-demo-poster.png"
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
      </div>
    </div>
  );
}
