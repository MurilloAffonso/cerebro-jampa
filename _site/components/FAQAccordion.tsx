/**
 * FAQAccordion Component
 *
 * Accordion para FAQ
 * - Cada item é clicável (44px+ tap target)
 * - Expande/colapsa resposta
 * - Schema markup JSON-LD incluído
 * - Mobile-friendly
 *
 * Fonte: _conhecimento/decisoes-estrategicas.md (FAQ antes de CTA final)
 */

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

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className={className}>
        {items.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200 last:border-b-0"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left py-4 md:py-6 px-0 flex justify-between items-center min-h-[44px] hover:bg-light transition-colors rounded"
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              <h3 className="font-semibold text-dark pr-4">{item.pergunta}</h3>
              <span className="text-primary font-bold flex-shrink-0">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div
                id={`faq-${index}`}
                className="pb-4 md:pb-6 px-0 text-gray-700"
              >
                <p>{item.resposta}</p>
              </div>
            )}
          </div>
        ))}
      </div>

    </>
  );
}
