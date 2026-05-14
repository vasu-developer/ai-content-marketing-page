import React, { useState, useEffect } from 'react';
import './App.css';

// --- REUSABLE UI COMPONENTS ---
const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const base = "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold transition-all focus:outline-none";
  const variants = {
    primary: "generate-btn-gradient text-white",
    secondary: "border border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08]",
    ghost: "text-gray-400 hover:text-white"
  };
  return (
    <button className={`${base} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = '' }: any) => (
  <div className={`rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-md ${className}`}>
    {children}
  </div>
);

// --- DATA ---
const navLinks = [
  { name: 'Workflow', href: '#workflow' },
  { name: 'Agents', href: '#agents' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
];

const testimonials = [
  { quote: "The Strategy Agent found trends we completely missed. We went from posting twice a week to daily high-quality threads without adding a single headcount.", name: "Sarah Chen", role: "CMO at HyperGrowth" },
  { quote: "WhatsApp approvals are the game changer. My founder actually engages with the content now because it takes 5 seconds to approve a post.", name: "Marcus Thorne", role: "Head of Content, Nexus" },
  { quote: "PulsePost doesn't just write; it thinks. It understands our brand voice better than most freelancers we've hired in the past.", name: "Elena Rossi", role: "Creative Director, Studio X" },
];

const plans = [
  { name: 'Standard', price: '$0', period: 'forever', desc: 'Perfect for solo creators testing agentic loops.', features: ['1 Active Strategy Agent', '20 drafts per month', 'WhatsApp Approvals', 'Standard Prompt Library'], featured: false },
  { name: 'Growth', price: '$99', period: 'mo', desc: 'For scaling teams and small agencies.', features: ['3 Active Strategy Agents', 'Unlimited drafts', 'Custom Brand Voices', 'Slack & WhatsApp loops', 'Priority Agent Queues'], featured: true },
  { name: 'Scale', price: '$499', period: 'mo', desc: 'Full autonomous content operations for enterprise.', features: ['Unlimited Agents', 'API Access', 'White-labeled Portals', 'Dedicated Support', 'Custom Guardrail Training'], featured: false },
];

export default function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((curr) => (curr + 1) % testimonials.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-transparent text-white font-sans overflow-hidden">
      
      {/* GLOBAL BACKGROUND GLOWS */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[-1]">
        <div className="absolute top-[-10%] left-1/2 h-150 w-200 -translate-x-1/2 rounded-full bg-purple-900/15 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] h-125 w-125 rounded-full bg-fuchsia-600/10 blur-[150px]" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-gray-950/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-300 items-center justify-between px-6 sm:px-8">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-fuchsia-500 to-purple-600 shadow-[0_0_15px_rgba(217,70,239,0.4)]">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            PulsePost
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-sm font-medium text-gray-400 hover:text-fuchsia-300 transition-colors">
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-3 ml-4">
              <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Sign in</a>
              <Button className="px-5 py-2">Get Started</Button>
            </div>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-gray-950/95 border-b border-white/10 backdrop-blur-xl p-6 flex flex-col gap-4 shadow-2xl">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-lg font-semibold text-gray-300 hover:text-fuchsia-300">
                {link.name}
              </a>
            ))}
            <Button className="mt-4 w-full">Get Started</Button>
          </div>
        )}
      </nav>

      <main className="pt-20">
        
        {/* === HOME / HERO SECTION === */}
        <section id="home" className="mx-auto max-w-300 px-6 py-20 sm:px-8 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                The World's First Agentic Content Engine
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                Scale Your Brand with <span className="text-transparent bg-clip-text bg-linear-to-r from-fuchsia-400 via-purple-400 to-indigo-400">Autonomous Agents.</span>
              </h1>
              <p className="text-gray-400 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
                PulsePost deploys a team of AI agents that research, design, and publish your content across all channels—while you keep total control with 1-click WhatsApp approvals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Button className="px-10 py-5 text-lg">Deploy Your Agent Free</Button>
                <Button variant="secondary" className="px-10 py-5 text-lg" onClick={(e: any) => scrollToSection(e, '#workflow')}>See the Workflow</Button>
              </div>
            </div>

            {/* Floating Visuals */}
            <div className="relative h-87.5 sm:h-100 flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 blur-[100px] animate-pulse"></div>
              
              <div className="relative z-10 w-full h-full">
                <div className="absolute top-10 right-10 w-48 sm:w-56 aspect-4/5 glass-panel rounded-2xl overflow-hidden animate-float rotate-6 border border-white/20 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 mix-blend-overlay" alt="Dashboard" />
                  <div className="absolute inset-x-4 bottom-4 glass-panel p-3 rounded-xl border-white/10">
                    <div className="h-2 w-1/2 bg-white/20 rounded mb-2"></div>
                    <div className="h-2 w-3/4 bg-fuchsia-400/50 rounded"></div>
                  </div>
                </div>
                
                <div className="absolute bottom-16 left-4 px-6 py-4 glass-panel rounded-xl font-bold text-lg text-fuchsia-300 border border-fuchsia-500/30 shadow-[0_0_20px_rgba(217,70,239,0.2)] animate-float-delayed flex items-center gap-3">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-fuchsia-500"></span>
                  </span>
                  Approved via WhatsApp
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === NEW: LOGO WALL (SOCIAL PROOF) === */}
        <section className="border-y border-white/5 bg-white/1 py-12 overflow-hidden">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-8">
            Trusted by the world's most aggressive growth teams
          </p>
          <div className="flex overflow-hidden">
            <div className="animate-marquee flex gap-20 items-center pr-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
              {['Acme Corp', 'Nexus Media', 'Studio North', 'LaunchGrid', 'BluePeak', 'Elevate', 'Acme Corp', 'Nexus Media', 'Studio North', 'LaunchGrid', 'BluePeak', 'Elevate'].map((logo, i) => (
                <span key={i} className="text-3xl font-black text-white tracking-tighter uppercase whitespace-nowrap">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* === NEW: AGENTIC WORKFLOW === */}
        <section id="workflow" className="mx-auto max-w-300 px-6 py-24 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-fuchsia-400 mb-4">The Engine</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">Human-in-the-loop Automation.</h3>
            <p className="mt-6 text-gray-400 text-xl max-w-2xl mx-auto">PulsePost doesn't just generate; it orchestrates a full content lifecycle with autonomous precision.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 relative">
            {[
              { step: '01', title: 'Strategy Agent', desc: 'Analyzes your brand voice, industry trends, and target audience to build a content plan.', icon: '🎯' },
              { step: '02', title: 'Creative Agent', desc: 'Generates platform-specific copy, hooks, and visual prompts optimized for engagement.', icon: '🎨' },
              { step: '03', title: 'Approval Loop', desc: 'Sends drafts to your WhatsApp. One tap to approve, refine, or schedule instantly.', icon: '📱' },
              { step: '04', title: 'Publishing Agent', desc: 'Handles multi-platform distribution and monitors performance for the next cycle.', icon: '🚀' },
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border-white/5 hover:border-fuchsia-500/30 transition-all group">
                <div className="text-3xl mb-6">{item.icon}</div>
                <div className="text-fuchsia-500 font-black text-xs tracking-widest mb-2">{item.step}</div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-fuchsia-300 transition-colors">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-fuchsia-500/20 to-transparent -z-10"></div>
          </div>
        </section>

        {/* === NEW: ROI METRICS REFINED === */}
        <section className="mx-auto max-w-300 px-6 py-12 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { val: '98%', label: 'Approval Rate', sub: 'on first agent draft' },
               { val: '14x', label: 'Scale Factor', sub: 'increase in post volume' },
               { val: '$0', label: 'Ad Spend', sub: 'organic growth focused' },
               { val: '24/7', label: 'Monitoring', sub: 'autonomous trend detection' },
             ].map((stat, i) => (
               <div key={i} className="text-center p-6 glass-panel rounded-3xl border-white/5">
                 <div className="text-3xl sm:text-4xl font-black text-white mb-1">{stat.val}</div>
                 <div className="text-fuchsia-400 text-[10px] font-black uppercase tracking-widest mb-2">{stat.label}</div>
                 <div className="text-gray-500 text-xs">{stat.sub}</div>
               </div>
             ))}
          </div>
        </section>

        {/* === NEW: AGENT SHOWCASE === */}
        <section id="agents" className="mx-auto max-w-300 px-6 py-24 sm:px-8 border-t border-white/5">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-fuchsia-500/20 blur-[120px] rounded-full"></div>
              <div className="relative glass-panel rounded-3xl p-8 border-white/10 overflow-hidden">
                <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
                  <div className="h-3 w-3 rounded-full bg-red-500/50"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/50"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/50"></div>
                  <div className="ml-auto text-[10px] font-mono text-gray-500 uppercase tracking-widest">Active Agent: Strategy_01</div>
                </div>
                <div className="space-y-6 font-mono text-xs">
                  <div className="flex gap-4">
                    <span className="text-fuchsia-500">[09:41:02]</span>
                    <span className="text-gray-300">Analyzing competitor LinkedIn threads...</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-fuchsia-500">[09:41:15]</span>
                    <span className="text-gray-300">Trend detected: "Agentic Workflows" rising +240%</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-fuchsia-500">[09:41:28]</span>
                    <span className="text-green-400">Drafting 5 variation hooks for Instagram Reels...</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-fuchsia-500">[09:41:40]</span>
                    <span className="text-blue-400">Sending draft to WhatsApp +1 (555) 0123...</span>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="h-8 w-8 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center text-[10px] font-bold">A{i}</div>)}
                  </div>
                  <div className="text-[10px] text-fuchsia-400 font-bold animate-pulse">SYSTEM ONLINE</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-fuchsia-400 mb-4">Advanced Capabilities</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">Deep Context. <br/>High Intent.</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Unlike generic LLMs, PulsePost agents are trained on high-performance marketing frameworks. They don't just write; they strategize based on real-time feedback loops.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Cross-Platform Memory', desc: 'Agents remember what worked on LinkedIn to optimize your next TikTok script.' },
                  { title: 'Brand-Voice Lock', desc: 'Rigid guardrails ensure your agents never drift from your specific tone and values.' },
                  { title: 'Autonomous Research', desc: 'Automatically pulls data from the web to back your claims with authority.' },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-6 w-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 text-[10px] font-bold shrink-0 mt-1">✓</div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                      <p className="text-gray-500 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === INTEGRATIONS SHOWCASE === */}
        <section id="integrations" className="mx-auto max-w-300 px-6 py-20 sm:px-8 border-t border-white/5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Connects perfectly with your stack.</h2>
              <p className="mt-4 text-gray-400 text-lg mb-8">Deploy agents to the platforms your audience inhabits, and manage approvals where your team already lives.</p>
              
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></div>
                  <span><strong>Instant Approvals:</strong> WhatsApp & Slack integration for zero-friction sign-offs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></div>
                  <span><strong>Visual Mastery:</strong> Native connectors for Canva, Figma, and Adobe Express.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></div>
                  <span><strong>Omnichannel Reach:</strong> Auto-publish to LinkedIn, X, Instagram, TikTok, and Threads.</span>
                </li>
              </ul>
            </div>

            {/* Visual Node Graph */}
            <div className="relative h-75 sm:h-100 flex items-center justify-center">
               <div className="absolute w-20 h-20 bg-linear-to-br from-fuchsia-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(217,70,239,0.5)] z-20">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
               </div>
               {/* Connecting lines */}
               <div className="absolute w-70 h-70 border border-white/10 rounded-full animate-[spin_20s_linear_infinite] z-10">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 glass-panel rounded-full flex items-center justify-center text-[10px] font-black bg-[#25D366]/20 border-[#25D366]/30 text-[#25D366]">WA</div>
                  <div className="absolute bottom-6 -right-2 w-12 h-12 glass-panel rounded-full flex items-center justify-center text-[10px] font-black bg-[#E1306C]/20 border-[#E1306C]/30 text-[#E1306C]">IG</div>
                  <div className="absolute bottom-6 -left-2 w-12 h-12 glass-panel rounded-full flex items-center justify-center text-[10px] font-black bg-[#0077B5]/20 border-[#0077B5]/30 text-[#0077B5]">IN</div>
               </div>
               <div className="absolute w-45 h-45 border border-white/10 rounded-full animate-[spin_12s_linear_infinite_reverse] z-10">
                  <div className="absolute -top-4 left-1/4 w-10 h-10 glass-panel rounded-full flex items-center justify-center text-[10px] font-black bg-white/10 border-white/20 text-white">X</div>
                  <div className="absolute -bottom-4 right-1/4 w-10 h-10 glass-panel rounded-full flex items-center justify-center text-[10px] font-black bg-[#FF0000]/20 border-[#FF0000]/30 text-[#FF0000]">YT</div>
               </div>
            </div>
          </div>
        </section>

        {/* === USE CASES === */}
        <section id="use-cases" className="mx-auto max-w-300 px-6 py-24 sm:px-8 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white">Built for high-velocity teams.</h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">PulsePost is the secret weapon for organizations that need to dominate the attention economy.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="hover:border-purple-500/30 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 font-black text-xl">AG</div>
              <h3 className="text-xl font-bold text-white mb-3">Content Agencies</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Manage 50+ clients with a single strategy head. Agents handle the drafting; you handle the high-level relationship.</p>
              <ul className="text-xs text-gray-500 space-y-3">
                <li className="flex gap-2 items-center"><span className="text-purple-500">→</span> Multi-tenant workspace architecture</li>
                <li className="flex gap-2 items-center"><span className="text-purple-500">→</span> White-labeled approval portals</li>
              </ul>
            </Card>

            <Card className="hover:border-fuchsia-500/30 transition-all hover:-translate-y-1 border-fuchsia-500/20 bg-fuchsia-500/5">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center mb-6">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Venture Startups</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Build a "Founders Brand" on autopilot. Agents extract insights from your calendar to create thought-leadership content.</p>
              <ul className="text-xs text-gray-500 space-y-3">
                <li className="flex gap-2 items-center"><span className="text-fuchsia-500">→</span> Calendar & Meeting transcript parsing</li>
                <li className="flex gap-2 items-center"><span className="text-fuchsia-500">→</span> Immediate "Hot Take" generation</li>
              </ul>
            </Card>

            <Card className="hover:border-indigo-500/30 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">💼</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Marketing</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Maintain rigid brand governance while scaling output. Use Strategy Agents to enforce legal and brand guidelines.</p>
              <ul className="text-xs text-gray-500 space-y-3">
                <li className="flex gap-2 items-center"><span className="text-indigo-500">→</span> Custom guardrail training</li>
                <li className="flex gap-2 items-center"><span className="text-indigo-500">→</span> Audit-ready approval history</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* === TESTIMONIALS === */}
        <section id="testimonials" className="mx-auto max-w-300 px-6 py-24 sm:px-8 border-t border-white/5">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Loved by modern content teams</h2>
            <p className="mt-4 text-gray-400 text-lg">Teams use PulsePost to reduce approval delays and keep content moving.</p>
          </div>

          <div className="feedback-carousel-border mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white/2 p-0 shadow-2xl">
            <div className="grid md:grid-cols-[1fr_280px]">
              <div className="relative min-h-85 overflow-hidden p-8 sm:p-12 flex items-center">
                {testimonials.map((item, index) => (
                  <article
                    key={index}
                    className={`absolute inset-0 flex flex-col justify-center p-8 sm:p-12 transition-all duration-700 ease-in-out ${
                      activeTestimonial === index ? "translate-x-0 opacity-100" : index < activeTestimonial ? "-translate-x-8 opacity-0" : "translate-x-8 opacity-0"
                    }`}
                  >
                    <p className="text-2xl sm:text-3xl font-bold leading-tight text-white italic">"{item.quote}"</p>
                    <div className="mt-8">
                      <p className="text-lg font-bold text-fuchsia-300">{item.name}</p>
                      <p className="text-sm text-gray-400">{item.role}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="border-t border-white/10 bg-black/40 p-4 md:border-l md:border-t-0 flex flex-col justify-center gap-3">
                {testimonials.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`relative overflow-hidden rounded-xl border px-4 py-3 text-left transition ${
                      activeTestimonial === index ? "border-fuchsia-500/50 bg-fuchsia-500/10 text-white" : "border-white/5 bg-white/2 text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    <span className="block text-sm font-bold">{item.name}</span>
                    <span className="block text-xs mt-0.5 opacity-80">{item.role}</span>
                    {activeTestimonial === index && <span className="absolute bottom-0 left-0 h-0.5 animate-[testimonialProgress_4.2s_linear] bg-fuchsia-400" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === PRICING === */}
        <section id="pricing" className="mx-auto max-w-300 px-6 py-24 sm:px-8 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white">Simple, scalable pricing.</h2>
            <p className="mt-4 text-gray-400 text-lg">Choose the level of autonomy your team needs.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto items-center">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative group ${plan.featured ? 'z-10' : ''}`}>
                {plan.featured && <div className="absolute -inset-0.5 rounded-4xl bg-linear-to-b from-fuchsia-500 to-indigo-600 blur opacity-30"></div>}
                
                <Card className={`relative h-full rounded-4xl p-10 transition-all duration-500 ${plan.featured ? 'border-fuchsia-500/30 bg-gray-900/90 shadow-2xl scale-105' : 'border-white/5 bg-white/2 hover:border-white/10'}`}>
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-fuchsia-500 to-purple-600 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-black text-white">{plan.name}</h3>
                  <p className="text-xs text-gray-500 mt-2 min-h-10">{plan.desc}</p>
                  <div className="mt-8 mb-10">
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                    <span className="text-sm font-medium text-gray-500 ml-2">/ {plan.period}</span>
                  </div>
                  <Button className="w-full mb-10 py-4 font-black" variant={plan.featured ? 'primary' : 'secondary'}>Get Started</Button>
                  <ul className="space-y-4 text-xs text-gray-400">
                    {plan.features.map(f => (
                      <li key={f} className="flex gap-3 items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-fuchsia-500/50"></div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* === CONTACT US === */}
        <section id="contact" className="mx-auto max-w-300 px-6 py-24 sm:px-8 border-t border-white/5">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Let's elevate your content game.</h2>
              <p className="mt-4 text-gray-400 text-lg mb-8">Have questions about enterprise plans, integrations, or just want to say hi? Drop us a message.</p>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><svg className="w-5 h-5 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                  <span>hello@pulsepost.ai</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><svg className="w-5 h-5 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            
            <Card className="p-8 border-fuchsia-500/20 bg-black/40">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Name</label>
                  <input type="text" className="w-full bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500 transition-colors" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email</label>
                  <input type="email" className="w-full bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500 transition-colors" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500 transition-colors resize-none" placeholder="How can we help?"></textarea>
                </div>
                <Button className="w-full py-3.5 mt-2">Send Message</Button>
              </form>
            </Card>
          </div>
        </section>

      </main>

      {/* === FOOTER === */}
      <footer className="border-t border-white/5 bg-gray-950 pt-20 pb-10 text-center sm:text-left">
        <div className="mx-auto max-w-300 px-6 sm:px-8">
          <div className="grid gap-12 md:grid-cols-4 mb-16">
            <div className="md:col-span-2">
               <div className="flex items-center justify-center sm:justify-start gap-2 text-xl font-bold tracking-tight text-white mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-linear-to-br from-fuchsia-500 to-purple-600">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                PulsePost
              </div>
              <p className="text-gray-400 text-sm max-w-sm mx-auto sm:mx-0 leading-relaxed">
                The world's first agentic content engine. Deploy autonomous AI agents to research, design, and publish your content across all channels.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-6">Product</p>
              <ul className="space-y-4">
                {navLinks.map(link => (
                   <li key={link.name}><a href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-sm text-gray-400 hover:text-fuchsia-300 transition-colors">{link.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-6">Company</p>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-gray-400 hover:text-fuchsia-300 transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-fuchsia-300 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-fuchsia-300 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-gray-500 font-medium">© {new Date().getFullYear()} PulsePost Inc. Autonomous content ops.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}