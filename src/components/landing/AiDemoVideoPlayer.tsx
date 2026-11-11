import { useEffect, useRef, useState } from "react";
import { Sparkles, Play, RotateCcw, AlertCircle } from "lucide-react";
import { pauseHeroVideo } from "./HeroVideoPlayer";

interface AiDemoVideoPlayerProps {
  className?: string;
}

export function AiDemoVideoPlayer({ className = "" }: AiDemoVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  const startPlay = () => {
    const video = videoRef.current;
    if (!video) return;

    // Pausa o vídeo do Hero para evitar reprodução simultânea
    pauseHeroVideo();
    setHasError(false);
    setErrorMessage(null);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          // Ignora AbortError decorrente de pausas manuais imediatas
          if (err.name !== "AbortError") {
            console.warn("Falha na reprodução do vídeo de demonstração:", err);
            setHasError(true);
            setErrorMessage("Não foi possível iniciar o vídeo. Clique para tentar novamente.");
            setIsPlaying(false);
          }
        });
    }
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      startPlay();
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

      {/* Container do Player 16:9 — Clique alterna reprodução e pausa */}
      <div
        onClick={togglePlayPause}
        className="relative aspect-video w-full cursor-pointer bg-[#070709] select-none overflow-hidden"
        title={isPlaying ? "Clique para pausar" : "Clique para assistir"}
      >
        <video
          ref={videoRef}
          src="/videos/ia-conversas-demo.mp4"
          poster="/videos/ia-conversas-demo-poster.png"
          playsInline
          preload="metadata"
          className="h-full w-full object-contain pointer-events-none"
          onPlay={() => {
            setIsPlaying(true);
            setHasError(false);
          }}
          onPause={() => setIsPlaying(false)}
          onEnded={handleEnded}
          onError={() => {
            setHasError(true);
            setIsPlaying(false);
            setErrorMessage("Erro ao carregar o vídeo. Clique para tentar novamente.");
          }}
        />

        {/* Overlay com Opacidade Sutil e Botão de Play Central Elegante */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-200">
            {hasError ? (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  startPlay();
                }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/15 bg-[#121216]/95 px-6 py-4 text-center shadow-2xl"
              >
                <AlertCircle className="h-6 w-6 text-primary" />
                <p className="text-xs text-white/90 max-w-xs">{errorMessage}</p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    startPlay();
                  }}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-1.5 text-xs font-semibold text-white shadow-glow hover:bg-primary/90 transition-all cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Tentar novamente</span>
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={(e) => {
                  // Impede propagação para o container pai para evitar dupla alternância (bubbling)
                  e.stopPropagation();
                  startPlay();
                }}
                aria-label="Assistir demonstração da IA"
                className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-white/25 bg-primary text-white shadow-[0_10px_35px_rgba(239,64,69,0.45)] transition-all duration-200 hover:scale-108 hover:shadow-[0_15px_45px_rgba(239,64,69,0.6)] active:scale-95 focus:outline-none cursor-pointer"
              >
                <Play className="h-7 w-7 sm:h-9 sm:w-9 translate-x-0.5 fill-white text-white" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
