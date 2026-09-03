import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus, Minus, ArrowRight, HelpCircle, Sparkles, MessageSquare } from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';
import { PageContainer } from '../components/layout/PageContainer';
import { Reveal, RevealGroup, Typewriter } from '../components/common/Reveal';

export const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['faq-01']));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', 'Admissions', 'Curriculum', 'Certification', 'Community', 'Technical Lab'];

  const filteredFAQs = FAQ_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <PageContainer maxWidth="5xl">
      <div className="pb-16">
        <section className="mb-16 sm:mb-20 text-left">
          
          <div
            className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-mono-300">
              <Typewriter text="KNOWLEDGE BASE & SUPPORT //" speedMs={20} />
            </span>
          </div>

          <Reveal as="h1" className="font-display font-black uppercase tracking-[-0.03em] text-white leading-[0.92] mb-6">
            <span className="block">FREQUENTLY ASKED</span>
            <span className="block text-gradient-silver">QUESTIONS.</span>
          </Reveal>

          <Reveal as="p" delayMs={100} className="text-base sm:text-lg text-mono-300 font-sans leading-relaxed max-w-2xl">
            Clear, authoritative answers regarding OSINT cohort structure, curriculum standards, legal ethics, certification, and admissions requirements.
          </Reveal>

        </section>

        <section className="mb-12 space-y-4 text-left">
          
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-mono-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search answers by keyword (e.g. legal, prerequisites, certificate, live sessions)..."
              className="w-full pl-11 pr-10 py-3.5 bg-[#070707] border border-white/15 rounded-2xl text-sm text-white placeholder-mono-500 font-mono focus:outline-none focus:border-white/40 focus:bg-white/[0.04] focus:ring-1 focus:ring-white/20 transition-all select-text"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-mono-400 hover:text-white"
              >
                CLEAR
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono rounded-full transition-all duration-200 uppercase tracking-wider ${
                    active
                      ? 'bg-white text-black font-bold shadow-sm'
                      : 'bg-white/[0.03] text-mono-400 hover:text-white hover:bg-white/[0.06] border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {searchQuery && (
            <p className="text-xs font-mono text-mono-400 pt-1">
              Found {filteredFAQs.length} matching question{filteredFAQs.length === 1 ? '' : 's'}
            </p>
          )}

        </section>

        <RevealGroup className="mb-20 space-y-4 text-left">
          {filteredFAQs.map((faq, idx) => {
            const isOpen = openIds.has(faq.id);
            const indexNumber = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={faq.id}
                className="glass-card reveal-item"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between gap-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="mono-index shrink-0 font-bold">
                      {indexNumber}
                    </span>
                    <h3 className={`font-display text-base sm:text-lg font-bold tracking-tight transition-colors ${
                      isOpen ? 'text-white' : 'text-mono-200 group-hover:text-white'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest text-mono-400 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/10">
                      {faq.category}
                    </span>

                    <div className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'border-white bg-white text-black rotate-45'
                        : 'border-white/20 bg-white/[0.03] text-mono-300 hover:border-white/40'
                    }`}>
                      <Plus className="w-3.5 h-3.5 transition-transform" />
                    </div>
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 sm:px-7 pb-7 pt-1 border-t border-white/[0.06] text-left">
                    <p className="text-sm sm:text-base text-mono-300 font-sans leading-relaxed font-normal pl-8 sm:pl-10 select-text">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredFAQs.length === 0 && (
            <div className="p-12 text-center bg-[#070707] border border-white/10 rounded-2xl space-y-3">
              <HelpCircle className="w-8 h-8 text-mono-500 mx-auto" />
              <p className="text-sm text-mono-300 font-medium">No matching questions found.</p>
              <p className="text-xs text-mono-500">
                Try searching for broader keywords or contact our team directly below.
              </p>
            </div>
          )}
        </RevealGroup>

        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#090909] to-[#040404] border border-white/15 relative overflow-hidden text-left shadow-2xl">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-mono-400 font-bold block">
                UNRESOLVED INQUIRY?
              </span>
              <Reveal as="h3" className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                Have specific questions regarding enrollment?
              </Reveal>
              <p className="text-xs sm:text-sm text-mono-300 font-sans leading-relaxed">
                Connect directly with the admissions and verification coordinators via our official communication desk.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-mono-100 transition-all duration-200 active:scale-[0.98] shrink-0 shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              <span>Connect With Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </section>

      </div>
    </PageContainer>
  );
};
