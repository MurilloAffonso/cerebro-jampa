"use client";

import { useState } from "react";

interface FAQItem {
  pergunta: string;
  resposta: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={className}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-black/[0.07] last:border-b-0">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full text-left py-5 flex justify-between items-center gap-4 min-h-[56px] group"
              aria-expanded={isOpen}
              aria-controls={`faq-${index}`}
            >
              <span className="font-semibold text-dark text-sm md:text-base leading-snug group-hover:text-primary transition-colors">
                {item.pergunta}
              </span>
              <span
                className="shrink-0 w-7 h-7 rounded-full bg-black/[0.05] flex items-center justify-center text-muted transition-transform duration-200"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                aria-hidden="true"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>

            {isOpen && (
              <div id={`faq-${index}`} className="pb-5">
                <p className="text-muted text-sm leading-relaxed">{item.resposta}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
