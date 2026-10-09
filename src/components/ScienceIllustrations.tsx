import React from 'react';
import { IllustrationType } from '../types';

interface ScienceGraphicProps {
  type: IllustrationType;
  className?: string;
  title?: string;
}

export const ScienceGraphic: React.FC<ScienceGraphicProps> = ({ type, className = '', title }) => {
  switch (type) {
    case 'neptune':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-b from-slate-950 via-sky-950 to-blue-950 flex items-center justify-center ${className}`}>
          {/* Subtle atmosphere layers */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.25),transparent_70%)]" />
          
          <svg className="w-full h-full" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="neptuneAtmosphere" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#082f49" />
                <stop offset="50%" stopColor="#0369a1" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <radialGradient id="diamondSparkle" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="30%" stopColor="#bae6fd" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <linearGradient id="mantlePressure" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0c4a6e" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Planetary horizon curve */}
            <path d="M-50 450 C 150 160, 450 160, 650 450 Z" fill="url(#neptuneAtmosphere)" opacity="0.9" />
            <path d="M-50 450 C 150 200, 450 200, 650 450 Z" fill="url(#mantlePressure)" />

            {/* Depth pressure lines */}
            <path d="M50 240 Q 300 210 550 240" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
            <path d="M80 270 Q 300 245 520 270" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 8" opacity="0.6" />
            <path d="M110 300 Q 300 280 490 300" stroke="#7dd3fc" strokeWidth="1.5" opacity="0.8" />

            {/* Diamond Crystal Geometries falling */}
            <g transform="translate(180, 180) scale(0.9)">
              <polygon points="0,-22 16,0 0,22 -16,0" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1.5" />
              <polygon points="0,-22 8,0 0,22 -8,0" fill="#ffffff" fillOpacity="0.8" />
              <circle cx="0" cy="0" r="14" fill="url(#diamondSparkle)" opacity="0.6" />
            </g>

            <g transform="translate(300, 150) scale(1.3)">
              <polygon points="0,-24 18,0 0,24 -18,0" fill="#f0f9ff" stroke="#7dd3fc" strokeWidth="2" />
              <polygon points="0,-24 9,0 0,24 -9,0" fill="#ffffff" fillOpacity="0.9" />
              <line x1="-18" y1="0" x2="18" y2="0" stroke="#0284c7" strokeWidth="1" />
              <circle cx="0" cy="0" r="18" fill="url(#diamondSparkle)" opacity="0.7" />
            </g>

            <g transform="translate(420, 200) scale(0.8)">
              <polygon points="0,-20 14,0 0,20 -14,0" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1.5" />
              <polygon points="0,-20 7,0 0,20 -7,0" fill="#ffffff" fillOpacity="0.7" />
            </g>

            <g transform="translate(240, 250) scale(0.7)">
              <polygon points="0,-18 12,0 0,18 -12,0" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
            </g>

            <g transform="translate(360, 260) scale(0.75)">
              <polygon points="0,-18 12,0 0,18 -12,0" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
            </g>

            {/* Pressure label */}
            <text x="300" y="330" textAnchor="middle" fill="#7dd3fc" fontSize="12" fontFamily="JetBrains Mono, monospace" opacity="0.8">
              P &gt; 150 GPa · T &gt; 5,000 K · SUPERCRITICAL CH₄ MANTLE
            </text>
          </svg>
        </div>
      );

    case 'earth':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.15),transparent_60%)]" />
          
          <svg className="w-full h-full" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="earthAtmosphereLimb" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="15%" stopColor="#0284c7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#082f49" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="oceanSurface" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0c4a6e" />
                <stop offset="50%" stopColor="#0369a1" />
                <stop offset="100%" stopColor="#075985" />
              </linearGradient>
            </defs>

            {/* Deep space stars */}
            <circle cx="80" cy="50" r="1.5" fill="#ffffff" opacity="0.8" />
            <circle cx="210" cy="30" r="1" fill="#bae6fd" opacity="0.6" />
            <circle cx="380" cy="60" r="1.5" fill="#ffffff" opacity="0.9" />
            <circle cx="510" cy="40" r="1.2" fill="#bae6fd" opacity="0.7" />
            <circle cx="150" cy="80" r="0.8" fill="#ffffff" opacity="0.5" />
            <circle cx="450" cy="90" r="1" fill="#ffffff" opacity="0.6" />

            {/* Earth horizon arc */}
            <path d="M-80 380 C 120 140, 480 140, 680 380 Z" fill="url(#oceanSurface)" />
            {/* Glowing atmosphere limb */}
            <path d="M-80 380 C 120 135, 480 135, 680 380 C 480 120, 120 120, -80 380 Z" fill="url(#earthAtmosphereLimb)" />
            
            {/* Cloud formations swirl along curvature */}
            <path d="M60 270 Q 180 210 280 230 Q 380 250 480 200" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" opacity="0.35" filter="blur(2px)" />
            <path d="M120 250 Q 250 180 370 210 Q 450 230 520 220" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity="0.45" />
            <path d="M180 290 Q 300 240 430 260" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity="0.3" />

            {/* Geodetic curvature tangent line demonstrating dip */}
            <line x1="120" y1="170" x2="480" y2="170" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
            <text x="300" y="155" textAnchor="middle" fill="#38bdf8" fontSize="11" fontFamily="JetBrains Mono, monospace" opacity="0.8">
              TANGENT HORIZON · R = 6,371 km · DIP = arccos(R/(R+h))
            </text>
          </svg>
        </div>
      );

    case 'blackhole':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-slate-950 flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(2,132,199,0.2),transparent_70%)]" />

          <svg className="w-full h-full" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="accretionGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#0284c7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="jetBeam" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#0284c7" stopOpacity="0" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.7" />
              </linearGradient>
            </defs>

            {/* Stars background */}
            <circle cx="100" cy="70" r="1.5" fill="#fff" opacity="0.7" />
            <circle cx="500" cy="80" r="1.2" fill="#fff" opacity="0.8" />
            <circle cx="140" cy="300" r="1.2" fill="#fff" opacity="0.6" />
            <circle cx="480" cy="290" r="1.5" fill="#fff" opacity="0.7" />

            {/* Relativistic Jet Rays */}
            <line x1="300" y1="0" x2="300" y2="360" stroke="url(#jetBeam)" strokeWidth="2" strokeDasharray="3 6" opacity="0.6" />

            {/* Accretion disk lensed rear arc (gravitational lensing) */}
            <ellipse cx="300" cy="180" rx="190" ry="85" stroke="#0284c7" strokeWidth="18" opacity="0.4" />
            <ellipse cx="300" cy="180" rx="170" ry="70" stroke="#38bdf8" strokeWidth="8" opacity="0.6" />
            <ellipse cx="300" cy="180" rx="150" ry="45" stroke="#e0f2fe" strokeWidth="3" opacity="0.8" />

            {/* Photon Sphere Ring (1.5 Rs) */}
            <circle cx="300" cy="180" r="62" stroke="#38bdf8" strokeWidth="2.5" opacity="0.9" />
            <circle cx="300" cy="180" r="60" fill="url(#accretionGlow)" />

            {/* Event Horizon Black Void Shadow */}
            <circle cx="300" cy="180" r="54" fill="#030712" stroke="#0f172a" strokeWidth="2" />

            {/* Accretion disk front arc */}
            <path d="M120 185 Q 300 240 480 185" stroke="#38bdf8" strokeWidth="14" strokeLinecap="round" opacity="0.75" />
            <path d="M140 185 Q 300 230 460 185" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.9" />

            {/* Telemetry Annotation */}
            <text x="300" y="335" textAnchor="middle" fill="#7dd3fc" fontSize="11" fontFamily="JetBrains Mono, monospace" opacity="0.8">
              SCHWARZSCHILD RADIUS Rs = 2GM/c² · PHOTON SPHERE r = 1.5 Rs
            </text>
          </svg>
        </div>
      );

    case 'quantum':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-slate-950 flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.12),transparent_70%)]" />

          <svg className="w-full h-full" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Wave emitter */}
            <circle cx="80" cy="180" r="12" fill="#0284c7" opacity="0.4" />
            <circle cx="80" cy="180" r="4" fill="#38bdf8" />

            {/* Incident waves */}
            <circle cx="80" cy="180" r="35" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
            <circle cx="80" cy="180" r="65" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
            <circle cx="80" cy="180" r="95" stroke="#38bdf8" strokeWidth="1" strokeDasharray="5 5" opacity="0.6" />

            {/* Slit Barrier */}
            <rect x="220" y="20" width="12" height="110" rx="3" fill="#1e293b" stroke="#334155" />
            <rect x="220" y="150" width="12" height="60" rx="3" fill="#1e293b" stroke="#334155" />
            <rect x="220" y="230" width="12" height="110" rx="3" fill="#1e293b" stroke="#334155" />

            {/* Diffracted Waves from Slit 1 */}
            <path d="M240 135 A 40 40 0 0 1 270 170" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.6" />
            <path d="M240 135 A 80 80 0 0 1 300 200" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.5" />
            <path d="M240 135 A 130 130 0 0 1 340 230" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.4" />

            {/* Diffracted Waves from Slit 2 */}
            <path d="M240 225 A 40 40 0 0 0 270 190" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />
            <path d="M240 225 A 80 80 0 0 0 300 160" stroke="#38bdf8" strokeWidth="1.5" opacity="0.5" />
            <path d="M240 225 A 130 130 0 0 0 340 130" stroke="#38bdf8" strokeWidth="1.5" opacity="0.4" />

            {/* Detection Screen with Interference Pattern */}
            <line x1="520" y1="30" x2="520" y2="330" stroke="#475569" strokeWidth="3" />

            {/* Bright fringes on screen */}
            <rect x="525" y="165" width="28" height="30" rx="2" fill="#38bdf8" opacity="0.95" />
            <rect x="525" y="115" width="20" height="24" rx="2" fill="#38bdf8" opacity="0.65" />
            <rect x="525" y="221" width="20" height="24" rx="2" fill="#38bdf8" opacity="0.65" />
            <rect x="525" y="70" width="12" height="18" rx="2" fill="#38bdf8" opacity="0.35" />
            <rect x="525" y="272" width="12" height="18" rx="2" fill="#38bdf8" opacity="0.35" />

            {/* Wavefunction formula */}
            <text x="370" y="325" fill="#7dd3fc" fontSize="11" fontFamily="JetBrains Mono, monospace" opacity="0.8">
              Ψ(x,t) = Ψ₁(x) + Ψ₂(x) · PROBABILITY P = |Ψ₁ + Ψ₂|²
            </text>
          </svg>
        </div>
      );

    case 'dna':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-slate-950 flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]" />

          <svg className="w-full h-full" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Double helix strands and base pairs */}
            {Array.from({ length: 14 }).map((_, i) => {
              const x = 70 + i * 36;
              const angle = i * 0.45;
              const yTop = 180 + Math.sin(angle) * 70;
              const yBottom = 180 - Math.sin(angle) * 70;
              const isCleaved = i === 7;

              return (
                <g key={i}>
                  {/* Base pair rung */}
                  <line
                    x1={x}
                    y1={yTop}
                    x2={x}
                    y2={yBottom}
                    stroke={isCleaved ? '#f43f5e' : '#0284c7'}
                    strokeWidth={isCleaved ? '2.5' : '1.5'}
                    strokeDasharray={isCleaved ? '4 3' : 'none'}
                    opacity={0.8}
                  />
                  {/* Top node */}
                  <circle cx={x} cy={yTop} r={isCleaved ? 6 : 4.5} fill={isCleaved ? '#fb7185' : '#38bdf8'} />
                  {/* Bottom node */}
                  <circle cx={x} cy={yBottom} r={isCleaved ? 6 : 4.5} fill={isCleaved ? '#fb7185' : '#7dd3fc'} />
                </g>
              );
            })}

            {/* Cas9 Cleavage Marker */}
            <g transform="translate(322, 180)">
              <circle cx="0" cy="0" r="26" fill="#0284c7" fillOpacity="0.15" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="0" y="38" textAnchor="middle" fill="#f43f5e" fontSize="10" fontFamily="JetBrains Mono, monospace">
                Cas9 TARGET CUT (gRNA)
              </text>
            </g>

            <text x="300" y="335" textAnchor="middle" fill="#7dd3fc" fontSize="11" fontFamily="JetBrains Mono, monospace" opacity="0.8">
              WATSON-CRICK BASE PAIRING · A-T (2 H-BONDS) · C-G (3 H-BONDS)
            </text>
          </svg>
        </div>
      );

    case 'telescope':
    case 'space':
    default:
      return (
        <div className={`relative w-full h-full overflow-hidden bg-slate-950 flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(14,165,233,0.2),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.15),transparent_60%)]" />

          <svg className="w-full h-full" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Hexagonal Gold Mirror Array (JWST style) */}
            <g transform="translate(300, 170) scale(0.85)">
              {[
                { x: 0, y: 0 },
                { x: 52, y: 30 },
                { x: -52, y: 30 },
                { x: 0, y: 60 },
                { x: 52, y: -30 },
                { x: -52, y: -30 },
                { x: 0, y: -60 },
                { x: 104, y: 0 },
                { x: -104, y: 0 },
                { x: 52, y: 90 },
                { x: -52, y: 90 },
                { x: 52, y: -90 },
                { x: -52, y: -90 },
              ].map((pos, idx) => (
                <polygon
                  key={idx}
                  points="0,-28 24,-14 24,14 0,28 -24,14 -24,-14"
                  transform={`translate(${pos.x}, ${pos.y})`}
                  fill="#0369a1"
                  fillOpacity="0.4"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                />
              ))}
              <circle cx="0" cy="0" r="16" fill="#030712" stroke="#38bdf8" strokeWidth="2" />
            </g>

            {/* Distant cosmic redshift galaxies */}
            <ellipse cx="120" cy="80" rx="14" ry="5" fill="#f43f5e" fillOpacity="0.7" transform="rotate(-25 120 80)" filter="blur(1px)" />
            <ellipse cx="490" cy="270" rx="18" ry="6" fill="#f97316" fillOpacity="0.7" transform="rotate(35 490 270)" filter="blur(1px)" />
            <circle cx="160" cy="280" r="1.5" fill="#fff" opacity="0.8" />
            <circle cx="440" cy="70" r="1.5" fill="#fff" opacity="0.9" />

            <text x="300" y="335" textAnchor="middle" fill="#7dd3fc" fontSize="11" fontFamily="JetBrains Mono, monospace" opacity="0.8">
              JWST L2 ORBIT · INFRARED REDSHIFT z &gt; 13 · 6.5m PRIMARY APERTURE
            </text>
          </svg>
        </div>
      );
  }
};
