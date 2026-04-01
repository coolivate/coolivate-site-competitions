import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      if (video.currentTime >= video.duration - 0.15) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#0D0630]">
      {/* Subtle radial glow behind the video */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#1DBDD7]/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Caption label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-semibold text-xl md:text-2xl mb-10 tracking-wide"
          style={{
            background: 'linear-gradient(90deg, #1DBDD7 0%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block',
            width: '100%'
          }}
        >
          100% Passive. Zero Liquid. Total Control.
        </motion.p>

        {/* Video card */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[28px] overflow-hidden shadow-[0_0_80px_rgba(29,189,215,0.12)] border border-white/10"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          <div className="p-3 md:p-4">
            <div className="rounded-[18px] overflow-hidden aspect-video bg-[#080b20]">
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                autoPlay
                muted
                playsInline
                preload="auto"
              >
                <source src={`${import.meta.env.BASE_URL}videos/application.mp4`} type="video/mp4" />
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
