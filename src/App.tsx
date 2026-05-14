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
  { name: 'Home', href: '#home' },
  { name: 'Demo', href: '#demo' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
];

const features = [
  { title: "Brief → variations in minutes", desc: "Turn one idea into multiple angles, lengths, and formats without losing brand voice." },
  { title: "WhatsApp approvals built-in", desc: "Route drafts to stakeholders where they already respond. One tap approve, one tap request edits." },
  { title: "Platform-ready outputs", desc: "Captions, hashtags, hooks, image prompts — tailored for Instagram, LinkedIn, YouTube, and more." },
];

const testimonials = [
  { quote: "PulsePost cut our approval cycle from two days to one afternoon. WhatsApp approvals are the part clients actually use.", name: "Maya Iyer", role: "Founder, Studio North" },
  { quote: "The library changed how we reuse winners. We now turn one performing post into five channel-ready variations.", name: "Jon Bell", role: "Growth Lead, LaunchGrid" },
  { quote: "Our team needed less copy chaos and more repeatable output. This finally made content feel like an operating system.", name: "Sara Khan", role: "Marketing Director, BluePeak" },
];

const plans = [
  { name: 'Starter', price: '$0', period: 'forever', desc: 'Perfect for trying out the workflow.', features: ['5 generations per month', 'Basic formats', 'Standard library'], featured: false },
  { name: 'Pro', price: '$19', period: 'per month', desc: 'Best for consistent creators.', features: ['100 generations per month', 'Advanced tone controls', 'WhatsApp approvals'], featured: true },
  { name: 'Scale', price: '$49', period: 'per month', desc: 'For agencies and high volume.', features: ['Unlimited generations', 'Custom brand voice', 'Multi-platform auto-publishing'], featured: false },
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
        <div className="absolute top-[-10%] left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-purple-900/15 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[150px]" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-gray-950/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 sm:px-8">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 shadow-[0_0_15px_rgba(217,70,239,0.4)]">
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
            <Button className="px-5 py-2">Get Started</Button>
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
        <section id="home" className="mx-auto max-w-[1200px] px-6 py-20 sm:px-8 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                AI Content Automation
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Create. Automate.<br />
                Grow on <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">Social Media.</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Upload your content or share your idea, and let AI create stunning posts tailored for every platform in seconds. Route approvals right to WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Button className="px-8 py-4 text-base">Start Generating for Free</Button>
                <Button variant="secondary" className="px-8 py-4 text-base" onClick={(e: any) => scrollToSection(e, '#demo')}>See how it works</Button>
              </div>
            </div>

            {/* Floating Visuals */}
            <div className="relative h-[350px] sm:h-[400px] flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 blur-[100px] animate-pulse"></div>
              
              <div className="relative z-10 w-full h-full">
                <div className="absolute top-10 right-10 w-48 sm:w-56 aspect-[4/5] glass-panel rounded-2xl overflow-hidden animate-float rotate-6 border border-white/20 shadow-2xl">
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
        <section className="border-y border-white/5 bg-white/[0.01] py-10 overflow-hidden">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-6">
            Powering modern content teams at
          </p>
          {/* We duplicate the logos array to create a seamless infinite loop */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee flex gap-16 items-center pr-16">
              {['Acme Corp', 'Nexus Media', 'Studio North', 'LaunchGrid', 'BluePeak', 'Elevate', 'Acme Corp', 'Nexus Media', 'Studio North', 'LaunchGrid', 'BluePeak', 'Elevate'].map((logo, i) => (
                <span key={i} className="text-2xl font-black text-white/20 tracking-tighter uppercase whitespace-nowrap">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* === NEW: ROI METRICS === */}
        <section className="mx-auto max-w-[1200px] px-6 py-16 sm:px-8">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border-fuchsia-500/20 shadow-[0_0_40px_rgba(217,70,239,0.05)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
              <div className="pt-4 md:pt-0">
                <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 mb-2">12+ Hrs</p>
                <p className="text-gray-400 font-medium">Saved per week on copywriting</p>
              </div>
              <div className="pt-8 md:pt-0">
                <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-2">3x Faster</p>
                <p className="text-gray-400 font-medium">Client approval cycles</p>
              </div>
              <div className="pt-8 md:pt-0">
                <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-2">10x</p>
                <p className="text-gray-400 font-medium">Increase in content output</p>
              </div>
            </div>
          </div>
        </section>

        {/* === NEW: PRODUCT DEMO === */}
        <section id="demo" className="mx-auto max-w-[1200px] px-6 py-20 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold uppercase tracking-widest text-fuchsia-400 mb-3">See it in action</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">Content creation, visualized.</h3>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">Watch how a single prompt turns into platform-ready assets and instantly routes to stakeholders for approval.</p>
          </div>
          
          <div className="relative mx-auto max-w-4xl aspect-video rounded-3xl overflow-hidden glass-panel border-white/20 group cursor-pointer shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            {/* Fake Video Thumbnail / Interface */}
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" alt="App Demo" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(217,70,239,0.3)] group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
          </div>
        </section>

        {/* === NEW: INTEGRATIONS SHOWCASE === */}
        <section className="mx-auto max-w-[1200px] px-6 py-20 sm:px-8 border-t border-white/5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Connects perfectly with your stack.</h2>
              <p className="mt-4 text-gray-400 text-lg mb-8">Generate for the platforms you use, and get approvals where your clients already live.</p>
              
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></div>
                  <span><strong>WhatsApp & Email:</strong> Auto-route drafts for 1-click approvals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></div>
                  <span><strong>Instagram & TikTok:</strong> Tailored hook variations and caption limits.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></div>
                  <span><strong>LinkedIn & X:</strong> Professional thread generation and rich formatting.</span>
                </li>
              </ul>
            </div>

            {/* Visual Node Graph */}
            <div className="relative h-[300px] sm:h-[400px] flex items-center justify-center">
               <div className="absolute w-20 h-20 bg-gradient-to-br from-fuchsia-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(217,70,239,0.5)] z-20">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
               </div>
               {/* Connecting lines (Mocked with CSS borders) */}
               <div className="absolute w-[280px] h-[280px] border border-white/10 rounded-full animate-[spin_15s_linear_infinite] z-10">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 glass-panel rounded-full flex items-center justify-center text-xs font-bold bg-[#25D366]/20 border-[#25D366]/30 text-[#25D366]">WA</div>
                  <div className="absolute bottom-6 -right-2 w-12 h-12 glass-panel rounded-full flex items-center justify-center text-xs font-bold bg-[#E1306C]/20 border-[#E1306C]/30 text-[#E1306C]">IG</div>
                  <div className="absolute bottom-6 -left-2 w-12 h-12 glass-panel rounded-full flex items-center justify-center text-xs font-bold bg-[#0077B5]/20 border-[#0077B5]/30 text-[#0077B5]">IN</div>
               </div>
               <div className="absolute w-[180px] h-[180px] border border-white/10 rounded-full animate-[spin_10s_linear_infinite_reverse] z-10">
                  <div className="absolute -top-4 left-1/4 w-10 h-10 glass-panel rounded-full flex items-center justify-center text-xs font-bold bg-white/10 border-white/20 text-white">X</div>
                  <div className="absolute -bottom-4 right-1/4 w-10 h-10 glass-panel rounded-full flex items-center justify-center text-xs font-bold bg-[#FF0000]/20 border-[#FF0000]/30 text-[#FF0000]">YT</div>
               </div>
            </div>
          </div>
        </section>

        {/* === NEW: WHO IS THIS FOR (USE CASES) === */}
        <section id="use-cases" className="mx-auto max-w-[1200px] px-6 py-20 sm:px-8 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Built for modern growth teams</h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">Whether you are a solo creator or managing 50 client accounts, PulsePost adapts to your workflow.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="hover:border-purple-500/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 font-bold text-xl">@</div>
              <h3 className="text-xl font-bold text-white mb-2">For Agencies</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Manage approvals across multiple clients. No more "Wait, did they approve V1 or V2?" Keep a crystal clear audit trail of every decision.</p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex gap-2 items-center"><svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Multi-workspace support</li>
                <li className="flex gap-2 items-center"><svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> White-label client links</li>
              </ul>
            </Card>

            <Card className="hover:border-fuchsia-500/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center mb-6"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
              <h3 className="text-xl font-bold text-white mb-2">For Solo Creators</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Ship content consistently without getting bogged down in the writing process. Turn one video into 10 platform-specific assets.</p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex gap-2 items-center"><svg className="w-4 h-4 text-fuchsia-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Reusable prompt library</li>
                <li className="flex gap-2 items-center"><svg className="w-4 h-4 text-fuchsia-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Auto-scheduling built in</li>
              </ul>
            </Card>

            <Card className="hover:border-indigo-500/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg></div>
              <h3 className="text-xl font-bold text-white mb-2">For Marketing Teams</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Keep a central hub to iterate, track outcomes, and maintain brand voice across a team of designers and writers.</p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex gap-2 items-center"><svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Brand voice tuning</li>
                <li className="flex gap-2 items-center"><svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Shared winning assets</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* === TESTIMONIALS === */}
        <section id="testimonials" className="mx-auto max-w-[1200px] px-6 py-24 sm:px-8 border-t border-white/5">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Loved by modern content teams</h2>
            <p className="mt-4 text-gray-400 text-lg">Teams use PulsePost to reduce approval delays and keep content moving.</p>
          </div>

          <div className="feedback-carousel-border mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white/[0.02] p-0 shadow-2xl">
            <div className="grid md:grid-cols-[1fr_280px]">
              <div className="relative min-h-[340px] overflow-hidden p-8 sm:p-12 flex items-center">
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
                      activeTestimonial === index ? "border-fuchsia-500/50 bg-fuchsia-500/10 text-white" : "border-white/5 bg-white/[0.02] text-gray-500 hover:text-gray-300"
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
        <section id="pricing" className="mx-auto max-w-[1200px] px-6 py-24 sm:px-8 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Simple, transparent pricing</h2>
            <p className="mt-4 text-gray-400 text-lg">Choose the plan that matches your content rhythm. No hidden fees.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto items-center">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative group ${plan.featured ? 'z-10' : ''}`}>
                {plan.featured && <div className="absolute -inset-0.5 rounded-[2rem] bg-gradient-to-b from-fuchsia-500 to-indigo-600 blur opacity-30"></div>}
                
                <Card className={`relative h-full rounded-[2rem] p-8 transition-transform duration-300 ${plan.featured ? 'border-fuchsia-500/30 bg-gray-900/90 shadow-2xl scale-105' : 'border-white/5 bg-white/[0.02]'}`}>
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mt-2 min-h-[40px]">{plan.desc}</p>
                  <div className="mt-6 mb-8">
                    <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                    <span className="text-sm font-medium text-gray-400 ml-1">/ {plan.period}</span>
                  </div>
                  <Button className="w-full mb-8 py-3.5" variant={plan.featured ? 'primary' : 'secondary'}>Get Started</Button>
                  <ul className="space-y-4 text-sm text-gray-300">
                    {plan.features.map(f => (
                      <li key={f} className="flex gap-3 items-start">
                        <svg className="w-5 h-5 text-fuchsia-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
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
        <section id="contact" className="mx-auto max-w-[1200px] px-6 py-24 sm:px-8 border-t border-white/5">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Let's elevate your content game.</h2>
              <p className="mt-4 text-gray-400 text-lg mb-8">Have questions about enterprise plans, integrations, or just want to say hi? Drop us a message.</p>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center"><svg className="w-5 h-5 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                  <span>hello@pulsepost.ai</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center"><svg className="w-5 h-5 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
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
      <footer className="border-t border-white/5 bg-gray-950 pt-16 pb-8 text-center sm:text-left">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="grid gap-10 md:grid-cols-4 mb-12">
            <div className="md:col-span-2">
               <div className="flex items-center justify-center sm:justify-start gap-2 text-xl font-bold tracking-tight text-white mb-4">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-fuchsia-500 to-purple-600">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                PulsePost
              </div>
              <p className="text-gray-400 text-sm max-w-sm mx-auto sm:mx-0">
                AI content automation built for modern creators. Idea → Generate → Approve → Publish.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 mb-5">Navigation</p>
              <ul className="space-y-3">
                {navLinks.map(link => (
                   <li key={link.name}><a href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-sm text-gray-400 hover:text-fuchsia-300">{link.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 mb-5">Legal</p>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-400 hover:text-fuchsia-300">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-fuchsia-300">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} PulsePost. All rights reserved.</p>
            <p className="text-sm text-gray-500">Designed for fast workflows.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}