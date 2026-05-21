import React, { useState, useEffect } from 'react';
import './App.css';
import aiPreviewStep3 from './assets/ai_content_preview_step3.png';
import AgenticWorkflow from './components/AgenticWorkflow';


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

// --- POLICY VIEWS ---
const TermsOfServiceView = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="w-full max-w-none px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-24 bg-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 hover:text-white hover:bg-white/[0.08] transition-all mb-12 group cursor-pointer"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>
        
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-12">Last updated: May 22, 2026</p>
        
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border-white/10 space-y-8 text-gray-300 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Agreement to Terms</h2>
            <p>Welcome to PulsePost. By accessing or using our website, services, and autonomous agent systems, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.</p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. Description of Service</h2>
            <p>PulsePost provides autonomous AI agents that analyze social trends, draft media copy, perform human-in-the-loop approvals via WhatsApp, and auto-publish content directly to your connected social channels (Instagram, WhatsApp, LinkedIn, TikTok, Facebook, and YouTube). You retain ownership of all media uploaded or drafts approved by your user account.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. User Responsibilities & Conduct</h2>
            <p>You represent and warrant that all content uploaded, processed, or generated through your autonomous agents complies with all applicable national laws, intellectual property rights, and third-party terms of service (including Meta, LinkedIn, and TikTok developer terms).</p>
            <p>You agree not to use our agent network to generate or disseminate spam, harassment, hate speech, or intentionally misleading materials.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Account Security & WhatsApp Approvals</h2>
            <p>You are solely responsible for maintaining the confidentiality and security of the phone number linked to your WhatsApp approval loop. Any draft approved or scheduled via command confirmations sent from your verified phone number is considered authorized and validly executed by you.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Limitation of Liability</h2>
            <p>PulsePost is provided "as is" without warranties of any kind. Under no circumstances shall PulsePost Inc. be liable for any direct, indirect, or incidental damages resulting from social channel account suspension, shadowbans, content deletion, or agent performance inconsistencies.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">6. Modifications to Service and Terms</h2>
            <p>We reserve the right to modify, suspend, or terminate the service at any time. We will notify users of material changes to these Terms of Service via email or by posting a prominent notice on our homepage.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

const PrivacyPolicyView = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="w-full max-w-none px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-24 bg-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 hover:text-white hover:bg-white/[0.08] transition-all mb-12 group cursor-pointer"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>
        
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-12">Last updated: May 22, 2026</p>
        
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border-white/10 space-y-8 text-gray-300 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including your Name, Email, Phone number, Business name, and Occupation when you submit inquiries, create accounts, or connect your WhatsApp phone lines for manual approval routing.</p>
            <p>Additionally, when you link social media channels (such as Instagram or TikTok), we collect OAuth access tokens and platform metadata solely required to authorize, draft, and schedule your approved posts.</p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
            <p>Your data is processed to coordinate autonomous content strategies, generate localized drafts, and transmit WhatsApp notification cards. We do **not** sell, rent, or distribute your private contact details, media logs, or brand style guides to any third-party advertising companies.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Secure Data Integrity & AI Processing</h2>
            <p>All brand assets, guidelines, and style profiles are ingested securely and stored inside isolated database environments. OpenAI or other large language model integrations are bound by enterprise data privacy terms, ensuring your proprietary ideas are never used to train global public AI models.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Cookies & Analytics</h2>
            <p>We employ basic diagnostic cookies and local session tokens to persist your active dashboard sessions, analyze user navigation paths, and optimize overall site loading speeds.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Your Choices & Data Rights</h2>
            <p>You can request full deletion of your linked WhatsApp numbers, connected social channel API credentials, and saved brand voice style guides at any time. Simply drop an email to <strong>hello@pulsepost.ai</strong>, and your records will be wiped from our server endpoints within 48 hours.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

// --- DATA ---
const navLinks = [
  { name: 'Workflow', href: '#workflow' },
  { name: 'Agents', href: '#agents' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'Team', href: '#team' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQs', href: '#faqs' },
];

const testimonials = [
  { 
    quote: "The Strategy Agent found trends we completely missed. We went from posting twice a week to daily high-quality threads without adding a single headcount.", 
    name: "Sarah Chen", 
    role: "CMO at HyperGrowth",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  { 
    quote: "WhatsApp approvals are the game changer. My founder actually engages with the content now because it takes 5 seconds to approve a post.", 
    name: "Marcus Thorne", 
    role: "Head of Content, Nexus",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  { 
    quote: "PulsePost doesn't just write; it thinks. It understands our brand voice better than most freelancers we've hired in the past.", 
    name: "Elena Rossi", 
    role: "Creative Director, Studio X",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  },
];

const plans = [
  { name: 'Standard', price: '$0', period: 'forever', desc: 'Perfect for solo creators testing agentic loops.', features: ['1 Active Strategy Agent', '20 drafts per month', 'WhatsApp Approvals', 'Standard Prompt Library'], featured: false },
  { name: 'Growth', price: '$99', period: 'mo', desc: 'For scaling teams and small agencies.', features: ['3 Active Strategy Agents', 'Unlimited drafts', 'Custom Brand Voices', 'Slack & WhatsApp loops', 'Priority Agent Queues'], featured: true },
  { name: 'Scale', price: '$499', period: 'mo', desc: 'Full autonomous content operations for enterprise.', features: ['Unlimited Agents', 'API Access', 'White-labeled Portals', 'Dedicated Support', 'Custom Guardrail Training'], featured: false },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'terms' | 'privacy'>('home');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const proceed = () => {
      const element = document.querySelector(href);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };

    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(proceed, 50);
    } else {
      proceed();
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
        <div className="mx-auto flex h-20 w-full max-w-none items-center justify-between px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
          <a href="#home" onClick={(e) => { e.preventDefault(); if (currentPage !== 'home') { setCurrentPage('home'); setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50); } else { window.scrollTo({ top: 0, behavior: 'smooth' }); } }} className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
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
              <Button className="px-5 py-2" onClick={(e: any) => scrollToSection(e, '#contact')}>Get Started</Button>
            </div>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-gray-950/80 border-b border-white/5 backdrop-blur-2xl py-8 px-8 flex flex-col gap-5 shadow-2xl z-50">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-lg font-semibold text-gray-300 hover:text-fuchsia-300 transition-colors">
                {link.name}
              </a>
            ))}
            <Button className="mt-4 w-full" onClick={(e: any) => scrollToSection(e, '#contact')}>Get Started</Button>
          </div>
        )}
      </nav>

      <main className="pt-20">
        {currentPage === 'terms' ? (
          <TermsOfServiceView onBack={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'instant' as any }); }} />
        ) : currentPage === 'privacy' ? (
          <PrivacyPolicyView onBack={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'instant' as any }); }} />
        ) : (
          <>
        
        {/* === HOME / HERO SECTION === */}
        <section id="home" className="relative overflow-hidden bg-gray-950 min-h-screen">
          {/* Background Glow */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
            <div className="absolute bottom-[-260px] right-[-180px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/15 blur-[140px]" />
            <div className="absolute top-[22%] left-[-220px] h-[420px] w-[420px] rounded-full bg-indigo-500/15 blur-[140px]" />
          </div>

          <div className="mx-auto w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 pb-8 pt-5 relative z-10">
            {/* HERO SECTION */}
            <div className="grid lg:grid-cols-2 gap-8 items-center pt-0.5 pb-6">
              <div className="space-y-4">
                {/* Tagline */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[12px] font-bold uppercase tracking-wider">
                  <span className="w-1 h-1 rounded-full bg-purple-500 animate-pulse"></span>
                  AI Automation for Social Media
                </div>

                {/* Headline */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.1]">
                  Create. Automate.<br />
                  Grow on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Social Media.</span>
                </h1>

                {/* Subheadline */}
                <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
                  Upload your content or share your idea, and let AI create stunning posts tailored for every platform in seconds.
                </p>

                {/* Quick Features Row */}
                <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-2">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <div>
                      <p className="text-white text-xs sm:text-sm font-bold">AI-Powered</p>
                      <p className="text-gray-500 text-[10px] sm:text-xs mt-1 hidden sm:block">Create engaging content in seconds</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <div>
                      <p className="text-white text-xs sm:text-sm font-bold">Save Time</p>
                      <p className="text-gray-500 text-[10px] sm:text-xs mt-1 hidden sm:block">Automate your creation workflow</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/></svg>
                    </div>
                    <div>
                      <p className="text-white text-xs sm:text-sm font-bold">Grow Faster</p>
                      <p className="text-gray-500 text-[10px] sm:text-xs mt-1 hidden sm:block">Optimize posts for engagement</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Floating Visuals */}
              <div className="relative h-[200px] sm:h-[300px] flex items-center justify-center">
                {/* Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 blur-[100px] animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-blue-500/15 blur-[90px] animate-pulse delay-700"></div>

                {/* Main Composition */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  
                  {/* Central Floating Instagram Card (Simple & Elegant) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-44 aspect-[4/5] glass-panel rounded-2xl overflow-hidden animate-float rotate-6 border border-white/20 shadow-2xl z-20">
                    <img src="https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="IG Post" />
                  </div>

                  {/* Floating AI Badge */}
                  <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 glass-panel rounded-xl font-bold text-xs text-blue-300 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)] animate-float-delayed z-30">
                    AI Powered
                  </div>

                  {/* Orbiting Icons (Tight Spacing / Reduced Margins) */}
                  
                  {/* Facebook (Left Side - Top) */}
                  <div className="absolute hidden sm:flex top-8 left-4 sm:top-14 sm:left-14 w-15 h-15 sm:w-18 sm:h-18 rounded-2xl glass-panel flex items-center justify-center animate-float rotate-12 border border-[#1877F2]/30 shadow-[0_0_15px_rgba(24,119,242,0.2)] hover:scale-110 transition-transform">
                    <svg className="w-7.5 h-7.5 sm:w-9 sm:h-9 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </div>

                  {/* YouTube (Left Side - Bottom) */}
                  <div className="absolute hidden sm:flex bottom-10 left-6 sm:bottom-16 sm:left-16 w-13 h-13 sm:w-16 sm:h-16 rounded-2xl glass-panel flex items-center justify-center animate-float-delayed -rotate-12 border border-[#FF0000]/30 shadow-[0_0_15px_rgba(255,0,0,0.2)] hover:scale-110 transition-transform">
                    <svg className="w-6.5 h-6.5 sm:w-8 sm:h-8 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>

                  {/* WhatsApp (Right Side - Top) */}
                  <div className="absolute hidden sm:flex top-8 right-4 sm:top-14 sm:right-14 w-15 h-15 sm:w-18 sm:h-18 rounded-2xl glass-panel flex items-center justify-center animate-float rotate-6 border border-[#25D366]/30 shadow-[0_0_15px_rgba(37,211,102,0.2)] hover:scale-110 transition-transform">
                    <svg className="w-7.5 h-7.5 sm:w-9 sm:h-9 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>

                  {/* TikTok (Right Side - Middle) */}
                  <div className="absolute hidden sm:flex top-1/2 -translate-y-1/2 right-2 sm:right-12 w-11 h-11 sm:w-14 sm:h-14 rounded-2xl glass-panel flex items-center justify-center animate-float-delayed -rotate-12 border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:scale-110 transition-transform">
                    <svg className="w-5.5 h-5.5 sm:w-7 sm:h-7 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52V6.69z"/>
                    </svg>
                  </div>

                  {/* LinkedIn (Right Side - Bottom) */}
                  <div className="absolute hidden sm:flex bottom-10 right-6 sm:bottom-16 sm:right-16 w-13 h-13 sm:w-16 sm:h-16 rounded-2xl glass-panel flex items-center justify-center animate-float rotate-12 border border-[#0077B5]/30 shadow-[0_0_15px_rgba(0,119,181,0.2)] hover:scale-110 transition-transform">
                    <svg className="w-6.5 h-6.5 sm:w-8 sm:h-8 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>

                </div>
              </div>
            </div>

            {/* WORKFLOW PREVIEW SECTION */}
            <div className="relative mb-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative">
                {/* Arrow 1-2 */}
                <div className="hidden lg:flex absolute left-[41%] top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <svg className="w-5 h-5 text-indigo-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                </div>
                {/* Arrow 2-3 */}
                <div className="hidden lg:flex absolute left-[74.5%] top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <svg className="w-5 h-5 text-pink-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                </div>

                {/* Step 1: Input */}
                <div className="glass-panel p-5 pb-5 rounded-3xl relative overflow-hidden group lg:col-span-5 border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-[0_0_15px_rgba(147,51,234,0.5)]">1</span>
                    <div>
                      <h3 className="text-white font-bold text-base">What do you want to create?</h3>
                      <p className="text-gray-400 text-xs mt-0.5">Choose your input type</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 pb-5">
                    {[
                      { id: 'generate', name: 'Generate Media with Prompt', shortName: 'Generate AI', desc: 'Describe what you want to create and let AI generate stunning media.', color: 'purple', btnText: 'Generate', icon: (
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 100-2h-1a1 1 0 100 2h1zM5.05 6.464A1 1 0 106.46 5.05L5.75 4.343a1 1 0 10-1.41 1.414l.707.707zM5 10a1 1 0 110-2h1a1 1 0 110 2H5zM6.464 14.95a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 111.414-1.414l.707.707zM11 15a1 1 0 10-2 0v1a1 1 0 102 0v-1zM14.95 13.536a1 1 0 111.414-1.414l.707.707a1 1 0 11-1.414 1.414l-.707-.707zM10 5a5 5 0 100 10 5 5 0 000-10z"/></svg>
                      )},
                      { id: 'upload', name: 'Upload Media', shortName: 'Upload', desc: 'Upload your existing images or videos to optimize and distribute.', color: 'blue', btnText: 'Upload', icon: (
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4.002 0 017.753-1.977A4.5 4.5 0 0113.5 13H11V9.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"/><path d="M9 13h2v5H9v-5z"/></svg>
                      )},
                      { id: 'edit', name: 'Edit Media', shortName: 'AI Editor', desc: 'Use our AI editor to trim, crop, or add text and voiceovers to your media.', color: 'emerald', btnText: 'Edit', icon: (
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/></svg>
                      )}
                    ].map((item) => (
                      <div 
                        key={item.id}
                        className={`flex flex-col items-center text-center p-2.5 sm:p-4 rounded-xl sm:rounded-2xl transition-all border h-full group/card hover:scale-[1.02] duration-300 ${
                          item.color === 'purple' ? 'bg-purple-500/10 border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.1)]' : 
                          item.color === 'blue' ? 'bg-blue-500/10 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)]' : 
                          'bg-emerald-500/10 border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]'
                        }`}
                      >
                        <div className={`mb-3 sm:mb-6 transition-transform duration-500 group-hover/card:scale-110 scale-75 sm:scale-100 ${
                          item.color === 'purple' ? 'text-purple-400' : 
                          item.color === 'blue' ? 'text-blue-400' : 
                          'text-emerald-400'
                        }`}>
                          {item.icon}
                        </div>
                        <h4 className="text-white font-bold text-[10px] sm:text-xs mb-2 leading-tight">
                          <span className="hidden sm:inline">{item.name}</span>
                          <span className="sm:hidden">{item.shortName}</span>
                        </h4>
                        <p className="text-gray-500 text-[9px] leading-relaxed mb-4 sm:mb-6 flex-grow hidden sm:block">{item.desc}</p>
                        
                        <button className={`w-full py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-bold transition-all duration-300 ${
                          item.color === 'purple' ? 'bg-purple-600/80 text-white hover:bg-purple-600' : 
                          item.color === 'blue' ? 'bg-blue-600/80 text-white hover:bg-blue-600' : 
                          'bg-emerald-600/80 text-white hover:bg-emerald-600'
                        }`}>
                          {item.btnText}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Connector Arrow 1-2 */}
                <div className="flex lg:hidden justify-center items-center py-2 col-span-1">
                  <svg className="w-6 h-6 text-indigo-500/60 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m0 0l-4-4m4 4l4-4"/>
                  </svg>
                </div>

                {/* Step 2: Platforms */}
                <div className="glass-panel p-5 rounded-3xl lg:col-span-4 border-white/10 relative">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-[0_0_15px_rgba(79,70,229,0.5)]">2</span>
                    <div>
                      <h3 className="text-white font-bold text-base">Choose Platforms</h3>
                      <p className="text-gray-400 text-xs mt-0.5">Select where you want to post</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    {[
                      { 
                        name: 'Instagram', 
                        bg: 'bg-[#E1306C]/10',
                        border: 'border-[#E1306C]/20',
                        desc: 'Feed, Reels, Stories', 
                        icon: (
                          <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        )
                      },
                      { 
                        name: 'WhatsApp', 
                        bg: 'bg-[#25D366]/10',
                        border: 'border-[#25D366]/20',
                        desc: 'Status, Messages', 
                        icon: (
                          <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        )
                      },
                      { 
                        name: 'LinkedIn', 
                        bg: 'bg-[#0077B5]/10',
                        border: 'border-[#0077B5]/20',
                        desc: 'Posts, Articles', 
                        icon: (
                          <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        )
                      },
                      { 
                        name: 'TikTok', 
                        bg: 'bg-cyan-400/10',
                        border: 'border-cyan-400/20',
                        desc: 'Videos', 
                        icon: (
                          <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52V6.69z"/>
                          </svg>
                        )
                      },
                      { 
                        name: 'Facebook', 
                        bg: 'bg-blue-600/10',
                        border: 'border-blue-600/20',
                        desc: 'Posts, Reels', 
                        icon: (
                          <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                          </svg>
                        )
                      },
                      { 
                        name: 'YouTube', 
                        bg: 'bg-red-500/10',
                        border: 'border-red-500/20',
                        desc: 'Shorts, Videos', 
                        icon: (
                          <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                        )
                      },
                    ].map((p) => (
                      <div 
                        key={p.name} 
                        className="flex items-center gap-2 sm:gap-4 p-2 sm:p-2.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all duration-300 hover:scale-[1.02] cursor-default"
                      >
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 ${p.bg} ${p.border} border`}>
                          {p.icon}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] sm:text-xs text-white font-bold leading-tight">{p.name}</span>
                          <span className="text-[10px] text-gray-500 mt-1 hidden sm:block">{p.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Connector Arrow 2-3 */}
                <div className="flex lg:hidden justify-center items-center py-2 col-span-1">
                  <svg className="w-6 h-6 text-pink-500/60 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m0 0l-4-4m4 4l4-4"/>
                  </svg>
                </div>

                {/* Step 3: Review */}
                <div className="glass-panel p-5 rounded-3xl flex flex-col justify-between lg:col-span-3 border-white/10">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-7 h-7 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold text-xs shadow-[0_0_15px_rgba(219,39,119,0.5)]">3</span>
                      <div>
                        <h3 className="text-white font-bold text-base">Review & Generate</h3>
                        <p className="text-gray-400 text-xs mt-0.5">AI will create and optimize your content</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center py-4 px-2">
                      <div className="relative w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl glass-panel group">
                        <img 
                          src={aiPreviewStep3} 
                          className="w-80 h-35 object-cover transition-transform duration-700 group-hover:scale-110" 
                          alt="AI Content Preview" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                        <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                          <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse delay-150"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse delay-300"></div>
                          </div>
                          <span className="text-[8px] font-bold text-white/70 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-md">OPTIMIZING...</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-3 rounded-2xl generate-btn-gradient text-white text-sm font-bold flex items-center justify-center gap-3 group transition-transform hover:scale-[1.02]" onClick={(e: any) => scrollToSection(e, '#contact')}>
                    Generate Content
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* === NEW: LOGO WALL (SOCIAL PROOF) ===
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
        </section> */}

        {/* === NEW: AGENTIC WORKFLOW === */}
        <section id="workflow" className="mx-auto w-full max-w-none px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-24">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-fuchsia-400 mb-4">The Engine</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">Human-in-the-loop Automation.</h3>
            <p className="mt-6 text-gray-400 text-xl max-w-2xl mx-auto">PulsePost doesn't just generate; it orchestrates a full content lifecycle with autonomous precision.</p>
          </div>
          
          <AgenticWorkflow />
        </section>

        {/* === NEW: AGENT SHOWCASE === */}
        <section id="agents" className="w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-24 border-t border-white/5 bg-gray-950">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-fuchsia-500/20 blur-[120px] rounded-full"></div>
              <div className="relative glass-panel rounded-3xl p-6 sm:p-8 border-white/10 overflow-hidden">
                <div className="flex items-center gap-4 mb-6 sm:mb-8 border-b border-white/5 pb-4 sm:pb-6">
                  <div className="h-3 w-3 rounded-full bg-red-500/50"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/50"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/50"></div>
                  <div className="ml-auto text-[10px] font-mono text-gray-500 uppercase tracking-widest">Active Agent: Strategy_01</div>
                </div>
                <div className="space-y-4 sm:space-y-6 font-mono text-[10px] sm:text-xs">
                  <div className="flex gap-4">
                    <span className="text-fuchsia-500">[09:41:02]</span>
                    <span className="text-gray-300">Analyzing competitor LinkedIn threads...</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-fuchsia-500">[09:41:15]</span>
                    <span className="text-gray-300">Trend detected: "Agentic Workflows" rising +240%</span>
                  </div>
                  <div className="hidden sm:flex gap-4">
                    <span className="text-fuchsia-500">[09:41:28]</span>
                    <span className="text-green-400">Drafting 5 variation hooks for Instagram Reels...</span>
                  </div>
                  <div className="hidden sm:flex gap-4">
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
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">Generate Anywhere. <br/>Approve on WhatsApp.</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Create scroll-stopping copy, photorealistic images, and high-engagement videos instantly. Best of all, your entire workflow is automated via WhatsApp: receive generation requests, review drafts, and publish to all your channels with a single reply.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Omni-Format AI Engine', desc: 'Generate high-converting social texts, hyper-realistic images, and premium short-form videos tailored perfectly for every platform.' },
                  { title: 'WhatsApp Creation Prompts', desc: 'Kickstart content creation on the go. Send simple text prompts directly to your AI agent via WhatsApp, and watch your drafts come to life in seconds.' },
                  { title: 'One-Word Approve & Publish', desc: 'No portals or complex dashboards needed. Just reply "Approve" to the WhatsApp notification, and the agent automatically schedules and publishes across all channels.' },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-5 w-5 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 text-[10px] font-bold shrink-0 mt-0.5">✓</div>
                    <div>
                      <h4 className="text-white font-bold mb-1 text-sm sm:text-base">{feature.title}</h4>
                      <p className="text-gray-500 text-xs sm:text-sm hidden sm:block">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === INTEGRATIONS SHOWCASE === */}
        <section id="integrations" className="mx-auto w-full max-w-none px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-20 border-t border-white/5 bg-gray-950">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-sm font-black uppercase tracking-[0.3em] text-fuchsia-400 mb-4">Ecosystem</h2>
               <h3 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">Connects perfectly with your stack.</h3>
               <p className="text-gray-400 text-lg leading-relaxed mb-8">Deploy agents to the platforms your audience inhabits, and manage approvals where your team already lives.</p>
               
               <ul className="space-y-4 text-gray-300">
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></div>
                   <span className="text-xs sm:text-sm"><strong>WhatsApp Approvals:</strong><span className="hidden sm:inline"> Instant notifications and one-tap replies to review and publish content.</span></span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></div>
                   <span className="text-xs sm:text-sm"><strong>AI Content Engine:</strong><span className="hidden sm:inline"> Generate engaging social media copy, hyper-realistic images, and video.</span></span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></div>
                   <span className="text-xs sm:text-sm"><strong>Omnichannel Publish:</strong><span className="hidden sm:inline"> Auto-publish directly to LinkedIn, Instagram, TikTok, YouTube, and Threads.</span></span>
                 </li>
               </ul>
             </div>

            {/* Visual Node Graph */}
            <div className="relative h-75 sm:h-100 hidden sm:flex items-center justify-center">
               <div className="absolute w-20 h-20 bg-linear-to-br from-fuchsia-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(217,70,239,0.5)] z-20">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
               </div>
               {/* Connecting lines */}
               <div className="absolute w-70 h-70 border border-white/10 rounded-full animate-[spin_20s_linear_infinite] z-10">
                   {/* WhatsApp */}
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 glass-panel rounded-full flex items-center justify-center bg-[#25D366]/20 border-[#25D366]/30 shadow-[0_0_12px_rgba(37,211,102,0.2)]">
                      <svg className="w-5.5 h-5.5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                   </div>
                   {/* Instagram */}
                   <div className="absolute bottom-6 -right-2 w-12 h-12 glass-panel rounded-full flex items-center justify-center bg-[#E1306C]/20 border-[#E1306C]/30 shadow-[0_0_12px_rgba(225,48,108,0.2)]">
                      <svg className="w-5.5 h-5.5 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                   </div>
                   {/* LinkedIn */}
                   <div className="absolute bottom-6 -left-2 w-12 h-12 glass-panel rounded-full flex items-center justify-center bg-[#0077B5]/20 border-[#0077B5]/30 shadow-[0_0_12px_rgba(0,119,181,0.2)]">
                      <svg className="w-5.5 h-5.5 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                   </div>
               </div>
               <div className="absolute w-45 h-45 border border-white/10 rounded-full animate-[spin_12s_linear_infinite_reverse] z-10">
                   {/* TikTok */}
                   <div className="absolute -top-4 left-1/4 w-10 h-10 glass-panel rounded-full flex items-center justify-center bg-cyan-400/20 border-cyan-400/30 shadow-[0_0_12px_rgba(34,211,238,0.2)]">
                      <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12.525.02c1.31-.05 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.09-1.06-1.23-.75-2.18-1.84-2.74-3.13-.56-1.28-.68-2.68-.34-4.04.34-1.36 1.11-2.55 2.21-3.41 1.11-.86 2.47-1.33 3.87-1.33.15 0 .3.01.45.02.04 1.34.02 2.68.05 4.02-.34-.14-.7-.21-1.06-.21-1.03 0-1.92.59-2.27 1.48-.35.89-.16 1.91.47 2.64.63.73 1.62 1.05 2.58.83.96-.22 1.74-.93 1.98-1.87.03-.12.04-.25.05-.38.03-2.66.01-5.32.02-7.98z"/>
                      </svg>
                   </div>
                   {/* YouTube */}
                   <div className="absolute -bottom-4 right-1/4 w-10 h-10 glass-panel rounded-full flex items-center justify-center bg-[#FF0000]/20 border-[#FF0000]/30 shadow-[0_0_12px_rgba(255,0,0,0.2)]">
                      <svg className="w-5.5 h-5.5 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                   </div>
                </div>
             </div>
           </div>
         </section>
        
        {/* === USE CASES === */}
        <section id="use-cases" className="mx-auto w-full max-w-none px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-24 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-fuchsia-400 mb-4">Use Cases</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">Built for high-velocity teams.</h3>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">PulsePost is the secret weapon for organizations that need to dominate the attention economy on autopilot.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Creators Card */}
            <Card className="hover:border-fuchsia-500/30 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)] transition-all duration-300 hover:-translate-y-1.5 border-fuchsia-500/10 bg-fuchsia-500/[0.02]">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center mb-6 shadow-lg shadow-fuchsia-500/10">
                <svg className="w-6 h-6 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 0M8 21c-2-2-2-5 0-7l8-8 3 3-7 8c-2 2-5 2-7 0zm11-13l-3-3m0 0l-1.5-1.5M16 2.5L14.5 1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Creators</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-400 font-bold mt-1 text-[10px]">✦</span>
                  <span className="text-gray-300 text-xs leading-normal"><strong>AI Generation:</strong><span className="hidden sm:inline"> Auto-create text, images, and videos.</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-400 font-bold mt-1 text-[10px]">✦</span>
                  <span className="text-gray-300 text-xs leading-normal"><strong>WhatsApp Prompts:</strong><span className="hidden sm:inline"> Text post ideas to trigger drafts.</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-400 font-bold mt-1 text-[10px]">✦</span>
                  <span className="text-gray-300 text-xs leading-normal"><strong>One-Word Posting:</strong><span className="hidden sm:inline"> Reply "Approve" to publish instantly.</span></span>
                </li>
              </ul>
            </Card>

            {/* Brands Card */}
            <Card className="hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 hover:-translate-y-1.5 border-cyan-500/10 bg-cyan-500/[0.02]">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/10">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Brands</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-1 text-[10px]">✦</span>
                  <span className="text-gray-300 text-xs leading-normal"><strong>Consistent Voice:</strong><span className="hidden sm:inline"> Automate customized daily posts.</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-1 text-[10px]">✦</span>
                  <span className="text-gray-300 text-xs leading-normal"><strong>On-the-Go Drafts:</strong><span className="hidden sm:inline"> WhatsApp links or details to start.</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-1 text-[10px]">✦</span>
                  <span className="text-gray-300 text-xs leading-normal"><strong>Tap to Approve:</strong><span className="hidden sm:inline"> Review and post from phone chats.</span></span>
                </li>
              </ul>
            </Card>

            {/* Agencies Card */}
            <Card className="hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 hover:-translate-y-1.5 border-purple-500/10 bg-purple-500/[0.02]">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/10">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Agencies</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1 text-[10px]">✦</span>
                  <span className="text-gray-300 text-xs leading-normal"><strong>Bulk Production:</strong><span className="hidden sm:inline"> Mass-produce copy and visuals.</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1 text-[10px]">✦</span>
                  <span className="text-gray-300 text-xs leading-normal"><strong>Client Routing:</strong><span className="hidden sm:inline"> Forward drafts to client WhatsApp lines.</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1 text-[10px]">✦</span>
                  <span className="text-gray-300 text-xs leading-normal"><strong>Reply to Schedule:</strong><span className="hidden sm:inline"> Clients text "Approve" to post.</span></span>
                </li>
              </ul>
            </Card>

            {/* Teams Card */}
            <Card className="hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300 hover:-translate-y-1.5 border-indigo-500/10 bg-indigo-500/[0.02]">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/10">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Teams</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold mt-1 text-[10px]">✦</span>
                  <span className="text-gray-300 text-xs leading-normal"><strong>Brand Safe Assets:</strong><span className="hidden sm:inline"> Co-create verified corporate copy.</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold mt-1 text-[10px]">✦</span>
                  <span className="text-gray-300 text-xs leading-normal"><strong>Fast Review Loops:</strong><span className="hidden sm:inline"> Send drafts to Slack or WhatsApp groups.</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold mt-1 text-[10px]">✦</span>
                  <span className="text-gray-300 text-xs leading-normal"><strong>Secure Publishing:</strong><span className="hidden sm:inline"> Post multi-channel with quick replies.</span></span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* === TEAM SHOWCASE === */}
        <section id="team" className="mx-auto w-full max-w-none px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-24 border-t border-white/5 bg-gray-950/40">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-fuchsia-400 mb-4">The Builders</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">Behind the Automation.</h3>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">Meet the creators who engineered PulsePost's autonomous marketing workflow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Founder */}
            <div className="team-founder-glow rounded-3xl p-[1px] hover:scale-[1.02] transition-all duration-300">
              <div className="bg-gray-950/95 rounded-[23px] p-8 flex flex-col items-center text-center h-full">
                <div className="w-28 h-28 rounded-2xl overflow-hidden mb-6 border-2 border-fuchsia-500/20 shadow-xl shadow-fuchsia-500/5">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover" alt="Marcus Thorne" />
                </div>
                <span className="px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-[10px] font-bold uppercase tracking-wider mb-4">Founder & CEO</span>
                <h4 className="text-xl font-bold text-white mb-2">Marcus Thorne</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">Orchestrates product vision and designs autonomous growth models for aggressive content operations.</p>
                <div className="flex gap-4 mt-auto">
                  <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="X Profile">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn Profile">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Developer */}
            <div className="team-developer-glow rounded-3xl p-[1px] hover:scale-[1.02] transition-all duration-300">
              <div className="bg-gray-950/95 rounded-[23px] p-8 flex flex-col items-center text-center h-full">
                <div className="w-28 h-28 rounded-2xl overflow-hidden mb-6 border-2 border-purple-500/20 shadow-xl shadow-purple-500/5">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover" alt="Dr. Aris Vance" />
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-bold uppercase tracking-wider mb-4">Chief AI Architect</span>
                <h4 className="text-xl font-bold text-white mb-2">Dr. Aris Vance</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">Designed the core multi-agent orchestration architecture and advanced localized brand voice vector storage.</p>
                <div className="flex gap-4 mt-auto">
                  <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="X Profile">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn Profile">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: Executor */}
            <div className="team-executor-glow rounded-3xl p-[1px] hover:scale-[1.02] transition-all duration-300">
              <div className="bg-gray-950/95 rounded-[23px] p-8 flex flex-col items-center text-center h-full">
                <div className="w-28 h-28 rounded-2xl overflow-hidden mb-6 border-2 border-cyan-500/20 shadow-xl shadow-cyan-500/5">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover" alt="Elena Rossi" />
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[10px] font-bold uppercase tracking-wider mb-4">Creative Operations</span>
                <h4 className="text-xl font-bold text-white mb-2">Elena Rossi</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">Manages client-facing integrations and ensures manual WhatsApp feedback loops execute beautifully for all brands.</p>
                <div className="flex gap-4 mt-auto">
                  <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="X Profile">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn Profile">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === TESTIMONIALS === */}
        <section id="testimonials" className="mx-auto w-full max-w-none px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-24 border-t border-white/5 bg-gray-950/20">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-fuchsia-400 mb-4">Social Proof</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">Loved by modern content teams</h3>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">Teams use PulsePost to eliminate content bottlenecks and accelerate audience growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
            {testimonials.map((item, index) => (
              <div 
                key={index}
                className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-fuchsia-500/30 transition-all duration-300 hover:-translate-y-1.5 bg-white/[0.01] hover:bg-white/[0.03] flex flex-col justify-between relative overflow-hidden group shadow-2xl"
              >
                {/* Large Background Quote Watermark */}
                <div className="absolute right-6 top-6 text-fuchsia-500/[0.04] group-hover:text-fuchsia-500/[0.08] group-hover:scale-110 transition-all duration-500 pointer-events-none">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                <div className="relative z-10">
                  {/* Rating Stars Row */}
                  <div className="flex gap-1 mb-6 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-gray-200 text-base sm:text-lg leading-relaxed italic mb-8 relative">
                    "{item.quote}"
                  </p>
                </div>

                {/* Card Footer with Profile */}
                <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto relative z-10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-fuchsia-500/30 shadow-md shadow-fuchsia-500/10">
                    <img src={item.avatar} className="w-full h-full object-cover" alt={item.name} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">{item.name}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === FAQS SECTION === */}
        <section id="faqs" className="mx-auto w-full max-w-none px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-24 border-t border-white/5 bg-transparent">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-fuchsia-400 mb-4">Questions?</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">Frequently Asked Questions</h3>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">Got questions about automated loops, security, or customization? We have answers.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How do autonomous agents research social media trends?",
                a: "Our Strategy Agent runs deep trend ingestion queries across LinkedIn, TikTok, and Instagram metadata hourly. It identifies viral hooks, rising topics, and structural patterns, then drafts matching content vectors for your brand style guide."
              },
              {
                q: "Is it safe to link and schedule posts via WhatsApp?",
                a: "Yes, absolutely. PulsePost uses authorized developer API channels for post execution. The WhatsApp integration is simply your human-in-the-loop control dashboard where you receive notification drafts and reply with a single word to confirm publication."
              },
              {
                q: "Can I train the model on my brand voice?",
                a: "Yes. You can upload existing style guides, past newsletters, blogs, and marketing assets. The agents analyze these elements in a secure, isolated database environment to perfectly replicate your conversational style and vocabulary."
              },
              {
                q: "What platforms are currently supported?",
                a: "We support direct native auto-publishing to Instagram (Reels & Feed), LinkedIn, TikTok, YouTube (Shorts & Videos), Facebook (Reels & Posts), and WhatsApp Status broadcast channels."
              }
            ].map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div 
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-fuchsia-500/30 bg-fuchsia-500/[0.03] shadow-[0_0_20px_rgba(217,70,239,0.05)]' 
                      : 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
                  }`}
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  >
                    <span className="font-bold text-white text-base sm:text-lg pr-4">{faq.q}</span>
                    <span className={`w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-fuchsia-400 border-fuchsia-500/20 bg-fuchsia-500/10' : ''}`}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/[0.03] pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* === CONTACT US === */}
        <section id="contact" className="mx-auto w-full max-w-none px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-24 border-t border-white/5 bg-gray-950">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Name *</label>
                    <input required type="text" className="w-full bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500 transition-colors" placeholder="Marcus Thorne" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email *</label>
                    <input required type="email" className="w-full bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500 transition-colors" placeholder="marcus@pulsepost.ai" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Phone *</label>
                    <input required type="tel" className="w-full bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500 transition-colors" placeholder="+1 (555) 012-3456" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Occupation <span className="text-gray-500 font-normal lowercase">(optional)</span></label>
                    <input type="text" className="w-full bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500 transition-colors" placeholder="Growth Lead" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Business Name <span className="text-gray-500 font-normal lowercase">(optional)</span></label>
                    <input type="text" className="w-full bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500 transition-colors" placeholder="Nexus Media" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Web URL <span className="text-gray-500 font-normal lowercase">(optional)</span></label>
                    <input type="url" className="w-full bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500 transition-colors" placeholder="https://nexusmedia.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Message *</label>
                    <textarea required rows={4} className="w-full bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500 transition-colors resize-none" placeholder="Tell us about your brand and what you want to automate..."></textarea>
                  </div>
                </div>
                <Button className="w-full py-3.5 mt-2">Send Inquiry</Button>
              </form>
            </Card>
          </div>
        </section>
          </>
        )}
      </main>

      {/* === FOOTER === */}
      <footer className="border-t border-white/5 bg-gray-950 pt-20 pb-10 text-center sm:text-left">
        <div className="mx-auto w-full max-w-none px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
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
                <li><a href="#about" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setTimeout(() => { const el = document.querySelector('#team'); if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top, behavior: 'smooth' }); } }, 50); }} className="text-sm text-gray-400 hover:text-fuchsia-300 transition-colors">About Us</a></li>
                <li><a href="#privacy" onClick={(e) => { e.preventDefault(); setCurrentPage('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-sm text-gray-400 hover:text-fuchsia-300 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" onClick={(e) => { e.preventDefault(); setCurrentPage('terms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-sm text-gray-400 hover:text-fuchsia-300 transition-colors">Terms of Service</a></li>
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