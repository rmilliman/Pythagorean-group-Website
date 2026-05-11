"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Layers, LineChart, ShieldCheck, Network, Mail, Phone } from "lucide-react";

const deals = ["Structured Capital","Private Credit","Growth Equity","Sponsor-Led Buyouts","Real Estate & Infrastructure","Strategic Capital Formation"];
const sectors = ["Industrial & Manufacturing","Healthcare & MedTech","Energy Transition","Infrastructure","Experiential Real Estate","Special Situations"];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="font-semibold tracking-wide text-xl">Pythagorean Group</div>
          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a><a href="#services" className="hover:text-white">Services</a><a href="#sectors" className="hover:text-white">Sectors</a><a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(20,184,166,.18),transparent_35%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
            <p className="uppercase tracking-[0.3em] text-sm text-cyan-300 mb-5">Capital Formation • Strategic Finance • Private Markets</p>
            <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-8">Structured capital solutions for complex private market opportunities.</h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">Pythagorean Group works with sponsors, founders, and private companies to structure, position, and source capital across debt, equity, and hybrid financing solutions.</p>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-white text-slate-950 px-6 py-4 font-medium shadow-lg hover:bg-slate-200 transition">Start a conversation <ArrowRight size={18} /></a>
          </motion.div>
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-4xl font-semibold mb-6">An institutional approach to entrepreneurial transactions.</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-5">We help translate complex opportunities into financeable, investor-ready stories. Our work spans capital stack design, investor targeting, lender coordination, transaction positioning, and sponsor advisory.</p>
          <p className="text-slate-300 text-lg leading-relaxed">The firm focuses on situations where thoughtful structure matters: founder-led transitions, platform acquisitions, growth financings, private credit solutions, and special situations requiring a disciplined capital formation process.</p>
        </div>
        <div className="grid gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl"><Building2 className="text-cyan-300 mb-4" size={28}/><h3 className="text-xl font-semibold mb-2">Sponsor Advisory</h3><p className="text-slate-300">Guidance on GP/LP structures, governance, and capital strategy.</p></div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl"><LineChart className="text-cyan-300 mb-4" size={28}/><h3 className="text-xl font-semibold mb-2">Capital Stack Design</h3><p className="text-slate-300">Debt, equity, preferred, mezzanine, and structured capital planning.</p></div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl"><Network className="text-cyan-300 mb-4" size={28}/><h3 className="text-xl font-semibold mb-2">Investor Targeting</h3><p className="text-slate-300">Focused outreach to aligned family offices, lenders, funds, and strategics.</p></div>
        </div>
      </section>

      <section id="services" className="bg-white text-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14"><h2 className="text-4xl font-semibold mb-5">What we do</h2><p className="text-slate-600 text-lg leading-relaxed">We work alongside clients from early positioning through capital outreach, helping ensure opportunities are presented with the structure and clarity investors expect.</p></div>
          <div className="grid md:grid-cols-3 gap-6">{deals.map((item, idx) => <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:shadow-lg transition"><Layers className="text-slate-900 mb-4" size={26}/><h3 className="text-xl font-semibold">{item}</h3></div>)}</div>
        </div>
      </section>

      <section id="sectors" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12"><h2 className="text-4xl font-semibold max-w-xl">Sector focus shaped by private market opportunity.</h2><p className="text-slate-300 text-lg max-w-xl leading-relaxed">Our mandate is selective. We focus where there is a clear investment narrative, identifiable capital audience, and a structure that can support execution.</p></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{sectors.map((sector, idx) => <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6"><ShieldCheck className="text-cyan-300 mb-4" size={24}/><div className="text-lg font-medium">{sector}</div></div>)}</div>
      </section>

      <section className="bg-slate-900 border-y border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div><div className="text-4xl font-semibold mb-2">Debt</div><p className="text-slate-300">Senior, ABL, private credit, and structured lending.</p></div>
          <div><div className="text-4xl font-semibold mb-2">Equity</div><p className="text-slate-300">Family offices, institutional LPs, strategics, and growth investors.</p></div>
          <div><div className="text-4xl font-semibold mb-2">Hybrid</div><p className="text-slate-300">Preferred equity, convertible notes, GP capital, and structured solutions.</p></div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-3xl bg-white text-slate-950 p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
          <div><h2 className="text-4xl font-semibold mb-5">Let’s discuss your capital strategy.</h2><p className="text-slate-600 text-lg leading-relaxed">For sponsors, founders, and private companies evaluating financing options, transaction structure, or investor outreach.</p></div>
          <div className="space-y-5 text-lg"><div className="flex items-center gap-3"><Mail size={22}/> ryan@pythagoreangroup.com</div><div className="flex items-center gap-3"><Phone size={22}/> Contact upon request</div><a href="mailto:ryan@pythagoreangroup.com" className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 text-white px-6 py-4 font-medium hover:bg-slate-800 transition">Email Ryan <ArrowRight size={18}/></a></div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400 px-6">© {new Date().getFullYear()} Pythagorean Group. All rights reserved. Securities transactions, if applicable, are conducted through appropriately registered broker-dealer entities.</footer>
    </div>
  );
}
