import { useState, useEffect, useRef } from 'react';

const steps = [
  { 
    step: '01', 
    title: 'Strategy Agent', 
    desc: 'Analyzes your brand voice, industry trends, and target audience to build a content plan.', 
    icon: (
      <svg className="w-6 h-6 text-fuchsia-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ) 
  },
  { 
    step: '02', 
    title: 'Creative Agent', 
    desc: 'Generates platform-specific copy, hooks, and visual prompts optimized for engagement.', 
    icon: (
      <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5z" />
        <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" />
      </svg>
    ) 
  },
  { 
    step: '03', 
    title: 'Approval Loop', 
    desc: 'Sends drafts to your WhatsApp. One tap to approve, refine, or schedule instantly.', 
    icon: (
      <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="m9 10 2 2 4-4" />
      </svg>
    ) 
  },
  { 
    step: '04', 
    title: 'Publishing Agent', 
    desc: 'Handles multi-platform distribution and monitors performance for the next cycle.', 
    icon: (
      <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 15 2 22" />
        <path d="M15 9h.01" />
      </svg>
    ) 
  },
];

const DesktopConnector = ({ active }: { active: boolean }) => {
  return (
    <div className="absolute top-[40%] -right-[26px] w-[52px] h-[32px] z-20 hidden md:block pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 52 32" fill="none">
        {/* Base connection path */}
        <path 
          d="M 0 16 H 52" 
          stroke="rgba(255, 255, 255, 0.08)" 
          strokeWidth="2" 
          strokeDasharray="4 4"
        />
        {/* Arrow head */}
        <path 
          d="M 42 10 L 48 16 L 42 22" 
          stroke="rgba(255, 255, 255, 0.2)" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Glowing laser path */}
        {active && (
          <>
            <path 
              d="M 0 16 H 52" 
              stroke="url(#laserGradient)" 
              strokeWidth="3" 
              strokeLinecap="round"
              style={{
                strokeDasharray: '20 80',
                animation: 'laserSweep 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite'
              }}
            />
            <path 
              d="M 42 10 L 48 16 L 42 22" 
              stroke="#d946ef" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="animate-pulse"
            />
          </>
        )}
        <defs>
          <linearGradient id="laserGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#d946ef" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const MobileConnector = ({ active }: { active: boolean }) => {
  return (
    <div className="absolute -bottom-[26px] left-1/2 -translate-x-1/2 w-[32px] h-[52px] z-20 md:hidden pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 32 52" fill="none">
        {/* Base connection path */}
        <path 
          d="M 16 0 V 52" 
          stroke="rgba(255, 255, 255, 0.08)" 
          strokeWidth="2" 
          strokeDasharray="4 4"
        />
        {/* Arrow head */}
        <path 
          d="M 10 42 L 16 48 L 22 42" 
          stroke="rgba(255, 255, 255, 0.2)" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Glowing laser path */}
        {active && (
          <>
            <path 
              d="M 16 0 V 52" 
              stroke="url(#laserGradientVertical)" 
              strokeWidth="3" 
              strokeLinecap="round"
              style={{
                strokeDasharray: '20 80',
                animation: 'laserSweep 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite'
              }}
            />
            <path 
              d="M 10 42 L 16 48 L 22 42" 
              stroke="#d946ef" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="animate-pulse"
            />
          </>
        )}
        <defs>
          <linearGradient id="laserGradientVertical" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#d946ef" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default function AgenticWorkflow() {
  const [activeStep, setActiveStep] = useState(0);
  const [isTransferring, setIsTransferring] = useState(false);
  const timerRef = useRef<any>(null);
  const cycleRef = useRef<any>(null);

  const startAnimationLoop = () => {
    if (cycleRef.current) clearInterval(cycleRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);

    cycleRef.current = setInterval(() => {
      setIsTransferring(true);

      timerRef.current = setTimeout(() => {
        setIsTransferring(false);
        setActiveStep((prev) => (prev + 1) % 4);
      }, 1200);

    }, 5000);
  };

  useEffect(() => {
    startAnimationLoop();

    return () => {
      if (cycleRef.current) clearInterval(cycleRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
      {steps.map((item, i) => (
        <div key={i} className="relative">
          <div 
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            className={`p-8 rounded-3xl transition-all duration-300 group cursor-default h-full select-none flex flex-col items-start ${
              activeStep === i 
                ? 'active-workflow-border' 
                : 'glass-panel border border-white/5 hover:border-fuchsia-500/30'
            }`}
          >
            {/* Premium Icon Badge Wrapper */}
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-300 ${
              activeStep === i 
                ? (i === 0 ? 'bg-fuchsia-500/10 border-fuchsia-500/30' :
                   i === 1 ? 'bg-purple-500/10 border-purple-500/30' :
                   i === 2 ? 'bg-indigo-500/10 border-indigo-500/30' :
                   'bg-cyan-500/10 border-cyan-500/30')
                : 'bg-white/[0.02] border-white/5 group-hover:border-white/10 group-hover:bg-white/[0.04]'
            }`}>
              {item.icon}
            </div>

            <div className="text-fuchsia-500 font-black text-xs tracking-widest mb-2">{item.step}</div>
            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-fuchsia-300 transition-colors">{item.title}</h4>
            <p className={`text-gray-400 text-sm leading-relaxed transition-all duration-300 ${activeStep === i ? 'block' : 'hidden md:block'}`}>{item.desc}</p>
          </div>

          {/* Desktop Arrow Connector */}
          {i < 3 && (
            <DesktopConnector active={activeStep === i && isTransferring} />
          )}

          {/* Mobile Arrow Connector */}
          {i < 3 && (
            <MobileConnector active={activeStep === i && isTransferring} />
          )}
        </div>
      ))}
      
      {/* Visual background connection path (Desktop) */}
      <div className="hidden md:block absolute top-[40%] left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent -z-10" />
    </div>
  );
}

