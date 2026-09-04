"use client";

// Marquee-like scrolling strip listing the shop items sold at the counter.
// Doubled content so the animation loops seamlessly.

import { shopItems, brands } from "@/lib/data";

export default function ShopStrip() {
  const items = [...shopItems, ...brands, ...shopItems, ...brands];

  return (
    <section className="relative overflow-hidden bg-bone-50 py-8">
      <div className="border-y border-slate-900/10 py-6">
        <div className="flex gap-12 whitespace-nowrap will-change-transform animate-[marquee_36s_linear_infinite]">
          {items.map((it, i) => (
            <span
              key={`${it}-${i}`}
              className="flex items-center gap-12 font-display text-[26px] font-light tracking-brand-tight text-slate-800"
            >
              {it}
              <span className="text-forest-500">·</span>
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
