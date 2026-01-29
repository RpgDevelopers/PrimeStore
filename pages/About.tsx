import React from 'react';

export const About: React.FC = () => {
  return (
    <div class="relative w-full">
      {/* Hero */}
      <div class="flex flex-col items-center justify-center">
        <div class="w-full max-w-[1280px] p-4 md:p-6 lg:p-10">
          <div 
            class="relative flex min-h-[500px] md:min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 overflow-hidden group"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDz1a7504_YoOcutr5chH-Vir2U4i632cyPryPTu6h9vOTqrRyVFNnzIemP7MCLgVymq9ufVxs-BmNMU9VefllklD800njeiSsYCV6BY6nLxioClfsdzZg9W_L90ifI9uDjfiY4EFB0ja0iDvm0A6MGAQFCz0Hc46lh81P_yV6icC8-LYnIPBnyJfduRvNEkt-uqGZ4rRutbsWrazm8SrMqBdWETUzT2oqSvlIZGpNYvI_PPRu6snts6bRuUshM0SoAhpoiNcRIhQv7')" }}
          >
            <div class="flex flex-col gap-4 text-center z-10 max-w-2xl animate-fade-in-up">
              <span class="text-white/80 text-sm font-semibold tracking-widest uppercase">Founded by Jayson</span>
              <h1 class="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-[-0.033em]">
                  Hardcoded Perfection
              </h1>
              <h2 class="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-lg mx-auto mt-2">
                  A digital experience meticulously crafted by Jayson, connecting code to commerce.
              </h2>
            </div>
            <button class="mt-6 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-white text-primary hover:bg-gray-100 transition-colors text-base font-bold leading-normal tracking-[0.015em] z-10 shadow-lg">
               Read Jayson's Story
            </button>
          </div>
        </div>
      </div>

      {/* The Origin */}
      <div class="relative w-full bg-white dark:bg-[#111621] py-12 md:py-24">
         <div class="flex justify-center">
            <div class="flex flex-col w-full max-w-[1280px] px-4 md:px-10">
               <div class="flex flex-col gap-10 md:gap-16 lg:flex-row items-center">
                  <div class="w-full lg:w-1/2 bg-center bg-no-repeat aspect-[4/5] md:aspect-video lg:aspect-[4/5] bg-cover rounded-xl shadow-md" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzcHvIlSDAFYdN4GX8LOyu9FunCSsyMilLNVBSzD4X6UB4e63bpdA5KpxvZv7dMIZtykLZinPQX3jPQHGmfvxf_PCjIOTHpHyF8D0Hk6_VQfbxhDuIhJ1frUQgqjjNotzB6i0AmlbA8ybwNyI2Qy7IO539JT1xouiLloQRrcswsjrxvtFv6Rlz6vf_WbNfezbGoDU0Hvmeh8ibhbeHdMfV73EuZgsgiJTWLkBEHgQv8C3Oyj-fNdBSqNIxnYYWBCScs2pESUl7Iil5')" }}></div>
                  <div class="flex flex-col gap-8 lg:w-1/2 lg:pl-10">
                     <div class="flex flex-col gap-4 text-left">
                        <div class="flex items-center gap-2 mb-2">
                           <span class="h-px w-8 bg-primary"></span>
                           <span class="text-primary font-bold uppercase tracking-wider text-sm">The Origin</span>
                        </div>
                        <h2 class="text-[#111318] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.02em]">Born from Jayson's Code.</h2>
                        <p class="text-[#111318]/70 dark:text-gray-300 text-lg font-normal leading-relaxed">
                           Founded on the principles of clean architecture, Jayson began in a small studio with a single goal: to build an app that looks hardcoded and lasts a lifetime. In a world of dynamic chaos, we chose static elegance.
                        </p>
                        <p class="text-[#111318]/70 dark:text-gray-300 text-lg font-normal leading-relaxed">
                           Every component is a testament to the belief that luxury lies in the source code you can't see immediately, but feel eternally in the performance.
                        </p>
                     </div>
                     <div class="pt-4">
                        <button class="group flex items-center gap-2 text-[#111318] dark:text-white text-base font-bold leading-normal hover:text-primary transition-colors">
                           <span>View Timeline</span>
                           <span class="material-symbols-outlined transition-transform group-hover:translate-x-1 text-[20px]">arrow_forward</span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Quote */}
      <div class="relative w-full bg-background-light dark:bg-[#161b26] py-20 md:py-32">
         <div class="flex justify-center">
            <div class="flex flex-col w-full max-w-[960px] px-4 md:px-10 text-center">
               <div class="mb-6 flex justify-center">
                  <span class="material-symbols-outlined text-primary text-5xl">format_quote</span>
               </div>
               <h1 class="text-[#111318] dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-tight mb-6">"Code over complexity. Always."</h1>
               <p class="text-[#111318]/80 dark:text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
                  Our mission is to redefine e-commerce through uncompromising development standards. We believe in writing fewer, better lines of code that age gracefully.
               </p>
               <div class="mt-10 flex justify-center">
                  <button class="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">Jayson's Philosophy</button>
               </div>
            </div>
         </div>
      </div>

      {/* Process */}
      <div class="relative w-full bg-white dark:bg-[#111621] py-20">
         <div class="flex justify-center">
            <div class="flex flex-col w-full max-w-[1280px] px-4 md:px-10">
               <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                  <div>
                     <span class="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Behind the Screens</span>
                     <h2 class="text-[#111318] dark:text-white text-3xl md:text-4xl font-bold leading-tight">The Development</h2>
                  </div>
                  <p class="text-[#111318]/60 dark:text-gray-400 max-w-md text-sm md:text-base">From the first variable to the final build, transparency is at the heart of Jayson's process.</p>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                     { num: '01', title: 'Ethical Coding', text: 'We prioritize clean syntax and maintainable structures, ensuring every feature starts with integrity.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIJNmtOyb9h6_nYN30Tv0ny3Er189ISZnFJmA8io10y-bKACM-2bQ_OivwahJ3RSboyI5Kp0kwUwrQo5Ula-tXYyA92ZTvYAO3ZaK54T1lwnOFA4kSHXvOHijyRoq1xSDUzdJBybqCqVxN2uVcx2aCD4RdH7_6vgRevCTBpI0-5e4o7LiEgK_gxrVPBgxjUe3EYwtYo0Aod9_KeJqA4S8xO6exoumaqYJtXMFUug8cY0jJJrfNNAUE9CrAOIOCtShix2J73bkbfDUc' },
                     { num: '02', title: 'Timeless UX', text: 'Anti-trend by nature. Jayson focuses on interfaces that transcend browser versions, engineered for longevity.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBvbD6axk6VcOd38n-zAWeXJ7_lUufP0Nyi3w1KwSF4FIMpVueXPW5DjdBRb6kj7ytmHm2F0UEWscsU-NJbZ3YvsRIWUxV5tZKAz0FhBVdJRUwMU1-COpSbp8K0xVnbGBXzIKNUnjYq7w08HVXibIUUMnbE8PJS-NZmXKwDaCn4GNf0EyBj3BXhDokiCmll6TvIRYC0i71YVZ2FbmoUzEA3tpESazgBM6qRdmHeYZAGzija2n7w99tsYWpCUnJkHCT3gMLxSO44J9X', mt: true },
                     { num: '03', title: 'Master Build', text: 'Hand-finished in the IDE. Every component, hook, and context is inspected to meet Jayson\'s rigorous standards.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF3nK7bWcbazgAhg57FHEXL4ivIlu5d4R7CXvivrxBkHfbN1JR9s366ZJuKCQS7P-eimzQoWjv2x3LyDqT4vTx6-ydpREBPOgKB2ctQm4fCfdB0h2lvpGl_gDPBfcGXdWTbsL0xJtz5LckafRR7k94D80OWUEn2lnKLw3CpXnXtTV7z2IktgLMwdCnLKdDuQ4n7gVBpY1A973fWj-LSUNR9XqstOZIzu6vs9Cr5W_VQmhypEIkzP9qqzx3EekSIGEBNJ8iV0WsJo_C' }
                  ].map((item, i) => (
                     <div key={i} class={`flex flex-col gap-4 group ${item.mt ? 'md:mt-12' : ''}`}>
                        <div class="aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-100">
                           <div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${item.img}')` }}></div>
                        </div>
                        <div class="flex flex-col gap-1">
                           <span class="text-primary font-bold text-xs uppercase tracking-widest">{item.num}</span>
                           <h3 class="text-[#111318] dark:text-white text-xl font-bold">{item.title}</h3>
                           <p class="text-[#111318]/70 dark:text-gray-400 text-sm leading-relaxed mt-1">{item.text}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* Commitments */}
      <div class="relative w-full bg-background-light dark:bg-[#161b26] py-20 border-t border-gray-100 dark:border-gray-800">
         <div class="flex justify-center">
            <div class="flex flex-col w-full max-w-[1280px] px-4 md:px-10">
               <div class="text-center mb-16">
                  <h2 class="text-[#111318] dark:text-white text-3xl md:text-4xl font-bold mb-4">Jayson's Commitments</h2>
                  <p class="text-[#111318]/60 dark:text-gray-400 max-w-2xl mx-auto">Building an app for the future means taking responsibility for every line of code.</p>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                     { icon: 'bug_report', title: '0% Critical Bugs', text: "We've eliminated major bugs from our entire stack. Everything arrives in stable condition." },
                     { icon: 'verified_user', title: 'Lifetime Support', text: "Jayson stands behind this quality. If a component fails or a prop is missing, we will fix it for free, forever." },
                     { icon: 'code', title: '100% Hardcoded', text: "We dedicate 100% of our effort to making sure the files look exactly as intended." }
                  ].map((item, i) => (
                     <div key={i} class="bg-white dark:bg-[#1e2330] p-8 rounded-xl border border-gray-100 dark:border-gray-700 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                        <div class="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                           <span class="material-symbols-outlined text-2xl">{item.icon}</span>
                        </div>
                        <h3 class="text-[#111318] dark:text-white text-xl font-bold">{item.title}</h3>
                        <p class="text-[#111318]/70 dark:text-gray-300 text-sm leading-relaxed">{item.text}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* Pre-Footer CTA */}
      <div class="relative w-full bg-white dark:bg-[#111621] py-24">
         <div class="flex justify-center">
            <div class="w-full max-w-[1280px] px-4 md:px-10">
               <div class="relative overflow-hidden rounded-2xl bg-[#111318] text-white py-16 px-8 md:px-20 text-center">
                  <div class="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
                  <div class="relative z-10 flex flex-col items-center gap-6">
                     <h2 class="text-3xl md:text-4xl font-black tracking-tight">Ready to see the code?</h2>
                     <p class="text-gray-300 max-w-lg text-lg">Discover the collection that embodies Jayson's philosophy.</p>
                     <div class="flex gap-4 mt-4">
                        <button class="h-12 px-8 bg-white text-[#111318] font-bold rounded-lg hover:bg-gray-100 transition-colors">Shop Collection</button>
                        <button class="h-12 px-8 bg-transparent border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">Read Documentation</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};