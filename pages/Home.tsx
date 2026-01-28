import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section class="relative flex w-full flex-col">
        <div class="w-full px-0">
          <div class="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-900">
            {/* Background Image */}
            <div 
              class="absolute inset-0 z-0 h-full w-full bg-cover bg-center" 
              style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCd3YbgCoO40AnofIUve4Qv0LwR4wuYrXAVXPfP55Z76lNOkRWRAboAlZRZAvh2qC1wW-IWCB7OmWI4LfcwVyWqzkKODsZqR6pvBL9LNNnbgbhWECKETmiv8OFhL0F1MMFrZ7lqNNnWD1iAVszbuycSRlR61txpHRgf_LhmtBFPCZEUC7F5hBQQysbLJtv9mgRx5aJ81Lr2oG6VwtnRM5UwZkyuz6DFRojKLc-DF4p3kMDLukJxM1wnnCHVmvYvxeJO3nmu3Be0p6-r')" }}
            ></div>
            {/* Content */}
            <div class="relative z-10 flex max-w-[800px] flex-col items-center gap-8 text-center px-4">
              <div class="flex flex-col gap-4 animate-fade-in-up">
                <span class="text-white text-sm font-bold tracking-[0.2em] uppercase">New Season 2024</span>
                <h1 class="text-white text-5xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-sm">
                  Redefining Modern Essentials
                </h1>
                <p class="text-gray-100 text-lg md:text-xl font-medium max-w-[600px] mx-auto leading-relaxed">
                  Discover a curated selection of timeless pieces designed to elevate your everyday living.
                </p>
              </div>
              <Link to="/shop" class="group flex min-w-[180px] items-center justify-center rounded-md h-14 px-8 bg-white hover:bg-gray-100 text-[#111318] text-base font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                <span>Shop New Arrivals</span>
                <span class="material-symbols-outlined ml-2 text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section class="w-full bg-white dark:bg-[#111621] py-24 border-b border-gray-100 dark:border-gray-800">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold tracking-tight text-[#111318] dark:text-white sm:text-4xl">Our Brand Values</h2>
            <p class="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">We believe in creating products that stand the test of time.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: 'eco', title: 'Sustainability', text: 'Ethically sourced materials that respect the planet, ensuring a greener future for everyone.' },
              { icon: 'verified_user', title: 'Quality', text: 'Built to last a lifetime with premium components and rigorous testing standards.' },
              { icon: 'handyman', title: 'Craftsmanship', text: 'Hand-finished details by expert artisans who pour passion into every stitch and seam.' }
            ].map((item, i) => (
              <div key={i} class="flex flex-col items-center text-center gap-4 p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300">
                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">
                  <span class="material-symbols-outlined text-[32px]">{item.icon}</span>
                </div>
                <h3 class="text-xl font-bold text-[#111318] dark:text-white">{item.title}</h3>
                <p class="text-gray-500 dark:text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section class="w-full bg-background-light dark:bg-background-dark py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 class="text-3xl font-bold tracking-tight text-[#111318] dark:text-white sm:text-4xl">Featured Collections</h2>
              <p class="mt-2 text-lg text-gray-600 dark:text-gray-400">Explore our curated edits for the season.</p>
            </div>
            <Link to="/shop" class="group flex items-center text-primary font-bold hover:underline">
              View all collections
              <span class="material-symbols-outlined ml-1 text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Large item */}
            <Link to="/shop" class="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-lg cursor-pointer block">
              <div 
                class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAoQCCf_mbJauStRgRk5KbgK46r8IjsEZzwwdM8knGrcAAs29eeLJht66vVz7FQ-SGRuH2TPjcHzQlCiQZPUWT-26jloDosl4uzKxg162AY4XpWcAecBdVzbNtGKOISDgw8hH7W5z5z3lWc8y1USh5SSjR6ufh230n1UNu2ikX2kP24qPu2POCMBRlx5x1DE9EFU3qDaYcSN0FlFgnoXI_t7vxo7B0LVMa-Hzy0ysXkej2dMMO6UdBJ2c53iaEQxLoIhcIry2c-H-NX')" }}
              ></div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div class="absolute bottom-0 left-0 p-8 w-full">
                <span class="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-white uppercase bg-primary rounded-sm">Trending</span>
                <h3 class="text-2xl font-bold text-white mb-2">The Winter Edit</h3>
                <p class="text-gray-200 text-sm line-clamp-2 w-4/5 mb-4">Cozy layers and premium fabrics for the cold season ahead.</p>
                <span class="text-white text-sm font-bold border-b border-white pb-1 hover:text-primary hover:border-primary transition-colors">Shop Now</span>
              </div>
            </Link>

            {/* Medium item */}
            <div class="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-lg cursor-pointer">
              <div 
                class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkWQVuux_cInWz9g4OqKEXStajvEWsst6Wo_P7tms1y7GG8Lq6LV4NToiWegykbe1OnHeo3HbDwG0KkrxtA4e3np4JxppMTsf6aNW5XESSDMFjfbllHfjhq6eHgYFTxOgKBZFIVFrggAmkyIXdjW2v67vzv42zTc9_qgIFweC3qjwzu13qsRfuJRkbK7-ZyBrlxj0SIoq9l2jzz1HpsW89m7nWA5SnHjJC6RKtiFifwDZszeRzZIxeYQLOaQQDuJZQY005evydvOXI')" }}
              ></div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div class="absolute bottom-0 left-0 p-6 w-full">
                <h3 class="text-xl font-bold text-white mb-1">Home & Living</h3>
                <p class="text-gray-300 text-xs mb-3">Minimalist decor.</p>
                <button class="text-white text-sm font-bold border-b border-white pb-1 hover:text-primary hover:border-primary transition-colors">Explore</button>
              </div>
            </div>

            {/* Small item 1 */}
            <div class="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-lg cursor-pointer min-h-[200px]">
              <div 
                class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuChvvEl-RR6HMP7fK66xts-UJq6lFHFmY5UqgMV5ustkL7JojdTJdzJRUFRK_DsUjn18FF49fRAbMPRoyxNSLcBxYHTmTPbNQckmxFLlGuMB6u10yQrdMrCtY1p0Y0uEFMpSTuZobknWAC4oDmD8j7oTLVi3MhuhNoRwSx_FmzZxQ80TTQxrYfj0y20PNgxrD-0Azg5bRpfev3_jDF7jKn2UBGZ5CyQWOof6v0A02GOlKmrtkM3of7Y13QujTlUP-BaTDi42wMDxmuq')" }}
              ></div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div class="absolute bottom-0 left-0 p-6 w-full">
                <h3 class="text-lg font-bold text-white">Accessories</h3>
              </div>
            </div>

            {/* Small item 2 */}
            <div class="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-lg cursor-pointer min-h-[200px]">
              <div 
                class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9f8Ipqazq1KYSVB8y_U_acYoDvYF5XpjYhDkbWsx-qZlyEEaDQmfvpLAbBZAcXDjAiJZqaK2nlN7xqdWXSHMtooDflCjChi4Pzae4WfyUiqAtw75w13X4_VZGUvbUsQ0LqpC3nj7Wp4Bs9j3H-vS7EuHC3NMyU23gNsOiEru4jatt1VslhT1OBm5WvvBR91Ky2LF_DIkE0fsUb-OK8Qah3Yw9VXma0Gz70oSCJ-bpGSk___UFgzxUiq6-OXmfvZ9vBFlXt8DP3DnX')" }}
              ></div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div class="absolute bottom-0 left-0 p-6 w-full">
                <h3 class="text-lg font-bold text-white">Footwear</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section class="bg-primary py-20">
        <div class="mx-auto max-w-3xl px-6 text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Join the Inner Circle</h2>
          <p class="text-primary-100 text-lg mb-8 text-white/80">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form class="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              class="flex-1 min-w-0 rounded-md border-0 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 backdrop-blur-sm outline-none"
            />
            <button type="submit" class="flex-none rounded-md bg-white px-6 py-3 text-sm font-bold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Subscribe
            </button>
          </form>
          <p class="mt-4 text-xs text-white/60">By subscribing you agree to our <a href="#" class="underline hover:text-white">Privacy Policy</a>.</p>
        </div>
      </section>
    </div>
  );
};
