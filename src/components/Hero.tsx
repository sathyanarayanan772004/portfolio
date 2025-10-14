import { useEffect, useRef } from 'react';
import { Github, Mail, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = 'rgba(3, 7, 18, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 - dist / 500})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 text-center px-4 animate-fadeIn">
        <div className="mb-8 inline-block">
          <div className="relative w-32 h-32 mx-auto mb-6 animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="relative w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-2xl">
              SA
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-slideUp">
          Sathyanarayanan A
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slideUp" style={{ animationDelay: '0.2s' }}>
          AI & Data Science Engineer
        </p>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-slideUp" style={{ animationDelay: '0.4s' }}>
          B.Tech student specializing in Artificial Intelligence and Data Science.
          Passionate about building data-driven solutions and impactful applications.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slideUp" style={{ animationDelay: '0.6s' }}>
          <a href="mailto:727822tuad047@skct.edu.in"
             className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
            <Mail size={20} />
            <span>Email Me</span>
          </a>

          <a href="https://github.com/sathyanarayanan772004"
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all transform hover:scale-105 hover:shadow-lg">
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 animate-slideUp" style={{ animationDelay: '0.8s' }}>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+91-9360314216</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Coimbatore, Tamil Nadu</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-blue-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
