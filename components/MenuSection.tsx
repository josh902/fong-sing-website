"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { menuData, type MenuCategory, type MenuItem } from "@/lib/menuData";
import { cn } from "@/lib/utils";

// ── Tab structure ─────────────────────────────────────────────────────────────
//
// The 10 Chinese-Classics sub-categories are merged into one tab so the bar
// matches the original 9-tab layout.

const CHINESE_CLASSICS_IDS = new Set([
  "beef", "chicken", "pork-ribs", "sweet-sour", "curry",
  "szechuan", "chow-mein-chop-suey", "egg-foo-young", "gai-ding", "veggies",
]);

type SingleTab = { kind: "single"; id: string; label: string; category: MenuCategory };
type GroupTab  = { kind: "group";  id: string; label: string; categories: MenuCategory[] };
type Tab = SingleTab | GroupTab;

const chineseClassicsCategories = menuData.filter(c => CHINESE_CLASSICS_IDS.has(c.id));
const otherCategories            = menuData.filter(c => !CHINESE_CLASSICS_IDS.has(c.id));
const riceIdx                    = otherCategories.findIndex(c => c.id === "rice-dishes");

const TABS: Tab[] = [
  ...otherCategories.slice(0, riceIdx + 1).map(
    (c): SingleTab => ({ kind: "single", id: c.id, label: c.label, category: c })
  ),
  { kind: "group", id: "chinese-classics", label: "Chinese Classics", categories: chineseClassicsCategories },
  ...otherCategories.slice(riceIdx + 1).map(
    (c): SingleTab => ({ kind: "single", id: c.id, label: c.label, category: c })
  ),
];

// ── Animation variants ────────────────────────────────────────────────────────

const cardGrid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const cardEntry: Variants = {
  hidden:  { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25, ease: "easeOut" } },
};

// ── Sub-components ────────────────────────────────────────────────────────────

function BadgePill({ badge }: { badge: string }) {
  return (
    <span
      className={cn(
        "mt-2 inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold",
        badge === "Chef's Special"
          ? "bg-brand-red text-white"
          : "bg-brand-gold text-brand-dark"
      )}
    >
      {badge}
    </span>
  );
}

function ItemCard({ item }: { item: MenuItem }) {
  return (
    <motion.div
      variants={cardEntry}
      className="flex flex-col bg-white/5 rounded-xl p-5 border border-white/10 hover:border-brand-gold/50 transition-colors"
    >
      <div className="flex items-start justify-between gap-3 mb-1">
        <h3 className="font-playfair text-white text-base leading-snug">{item.name}</h3>
        <span className="text-brand-gold font-semibold text-sm shrink-0 whitespace-nowrap">
          {item.price}
        </span>
      </div>
      {item.description && (
        <p className="text-white/50 text-xs leading-relaxed mt-1">{item.description}</p>
      )}
      {item.badge && <BadgePill badge={item.badge} />}
    </motion.div>
  );
}

function ItemsGrid({ items, note }: { items: MenuItem[]; note?: string }) {
  return (
    <>
      {note && (
        <p className="text-brand-gold/70 text-sm text-center italic mb-6">{note}</p>
      )}
      <motion.div
        variants={cardGrid}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {items.map((item, i) => (
          <ItemCard key={`${item.name}-${i}`} item={item} />
        ))}
      </motion.div>
    </>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function MenuSection() {
  const [activeId, setActiveId] = useState<string>(TABS[0].id);

  const activeTab = TABS.find(t => t.id === activeId) ?? TABS[0];

  return (
    <section id="menu" className="bg-brand-dark py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-3">
            Explore
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-white">
            Our Menu
          </h2>
        </div>

        {/* Scrollable tab bar */}
        <div className="relative mb-10">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 pb-2 min-w-max">
              {TABS.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveId(tab.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                    activeId === tab.id
                      ? "bg-brand-gold text-brand-dark"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          {/* Right fade hints that tabs are scrollable */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-brand-dark" />
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {activeTab.kind === "single" ? (
              <ItemsGrid
                items={activeTab.category.items}
                note={activeTab.category.note}
              />
            ) : (
              <div className="space-y-12">
                {activeTab.categories.map(cat => (
                  <div key={cat.id}>
                    <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
                      {cat.label}
                    </p>
                    <ItemsGrid items={cat.items} note={cat.note} />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
