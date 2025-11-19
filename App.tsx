import React, { useEffect, useState } from 'react';
import { LineChart, Briefcase, Clapperboard, ChevronDown } from 'lucide-react';
import CompanyCard from './components/CompanyCard';
import { CompanyProfile } from './types';

const companies: CompanyProfile[] = [
  {
    id: '1',
    name: 'Ronak Capital',
    description: 'Strategic capital providing access to value creation opportunities in the lower middle market to middle class individuals.',
    icon: LineChart,
    href: '#',
  },
  {
    id: '2',
    name: 'Ronak Advisory',
    description: 'A specialized mergers and acquisitions transaction advisory shop facilitating complex financial dealings.',
    icon: Briefcase,
    href: '#',
  },
  {
    id: '3',
    name: 'Ronak Studios',
    description: 'A forward-thinking media house dedicated to producing high-quality, impactful content across various digital platforms.',
    icon: Clapperboard,
    href: '#',
  }
];

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-slate-200 overflow-x-hidden selection:bg-[#006464] selection:text-white">
      
      {/* Ambient Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[#006464] opacity-[0.08] blur-[120px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#006464] opacity-[0.05] blur-[100px] rounded-full mix-blend-screen"></div>
        {/* Noise Texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      <main className="relative z-10 flex flex-col min-h-screen px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        
        {/* Navigation / Header (Minimal) */}
        <header className={`flex justify-between items-center py-10 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-2">
             <div className="w-3 h-3 bg-[#006464] rounded-full"></div>
             <span className="text-xs font-light tracking-[0.2em] text-slate-400 uppercase">Holding Corp</span>
          </div>
          <nav>
             <a href="#" className="text-xs font-light tracking-widest text-slate-500 hover:text-white transition-colors">CONTACT</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex-grow flex flex-col justify-center items-center text-center py-20 lg:py-32">
          <div className={`transition-all duration-1000 ease-out delay-300 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-6 leading-[1.1]">
              RONAK <span className="text-[#006464]">VENTURES</span>
            </h1>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#006464] to-transparent mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-400 font-light tracking-wide leading-relaxed">
              Architecting the future through strategic capital allocation. We build, acquire, and elevate premier companies across finance, advisory, and media sectors.
            </p>
          </div>
          
          {/* Scroll Indicator */}
          <div className={`mt-24 transition-opacity duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="animate-bounce">
              <ChevronDown className="text-slate-600" size={24} strokeWidth={1} />
            </div>
          </div>
        </section>

        {/* Portfolio Grid Section */}
        <section className="w-full pb-24">
          <div className={`mb-12 flex items-center gap-4 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
             <span className="h-px w-8 bg-[#006464]"></span>
             <h2 className="text-xs font-light tracking-[0.3em] uppercase text-slate-400">Our Portfolio</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {companies.map((company, index) => (
              <CompanyCard key={company.id} company={company} index={index} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-light tracking-wider">
          <p>&copy; {new Date().getFullYear()} Ronak Ventures LLC. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#006464] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#006464] transition-colors">Terms of Service</a>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;