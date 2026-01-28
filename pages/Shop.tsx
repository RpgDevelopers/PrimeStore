import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The Classic Wool Overcoat',
    price: 450,
    category: 'Coats',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-OFMQagd2qUMsIDmKPzlWteozvkVTCevPJM69PNS9gBpPrm9uGr5B-FHI862zI6wsudhYJkGCpD1abCOrtkhC3ArtJsv5Qb7J3B3xqBqAYn4aJ4Hu2dwZrUqVWDy8PW7yto4Vl1vC1eC3gkma41Y4D4KvST3vquVUUTjuYz56g8OQLPA194tC3ylm10DXDkN9xSIzyyytAO1L_8Y3eSvjwfxwZach6coT__tCDyBQ-w9h1XfxNGF-L3xklEFEviVTKjOdKU4_xIxw',
    colors: ['#000000', '#9CA3AF']
  },
  {
    id: '2',
    name: 'Heritage Trench Coat',
    price: 325,
    category: 'Coats',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaLx3PHYWsXX-yZ_86OsOdd0gD96EEBch0_1DCQwRSyLl2Nb3YkVgfMu2P4B-hGNnBxJLWI0kvOTwfnjp4yy52m2JbhJ9TOHcX2sqKxtZfAk6rY7fVF9YYKih9v5jnLzWyBpYwlXG_NNWC8zgS2GFw_BCm6yrJtVqTp9QAFyiwbC9bxrSp4qepxFZ85ztp2-3XS6P1IJXgMEelyY64qTk1WpN4bdsrFgRBXn0JkEYTbQdqgJ0-Z8rv9QOc3pQTl5HjQ-M849C4Aa4a',
    colors: ['#d6d3d1', '#1e293b'],
    isNew: true
  },
  {
    id: '3',
    name: 'Modern Biker Jacket',
    price: 550,
    category: 'Jackets',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClB7XptQy1Hr8keBur7-3Gmes4cs9l2HBk0JsJ6qI7jUm7M4tM7qG4CSPACaHZmKbrTA-gVhi9YdYDVw5aDIgqW7hBYDKoMH6UjjtZFsK7Q-redp4rwcRFb7O9XHEtwxZnYr24XxVPrRKz189L4gIcjXMJQQRE709on2Bg8PW2XOXAPeMBXD-BYaJ23VC7VXYiRHcpZnbqyUlZ44Q0YA0swbVLRMK5rWzQZsi-WlLx_tE0L_34malWpaj7RPYQwhLHnOjIgddAu2GG',
    colors: ['#000000']
  },
  {
    id: '4',
    name: 'Textured Knit Blazer',
    price: 295,
    category: 'Blazers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4foSWj2PwFZCIqegQJVILSNQj6pNjAuofh26iyx5QnHupR3HqazSYQRZb8eGcNAAj3MhqxhDkFKhhzm5l83OLALB6vzS_AJ_7xxe-_mAbdfgyiWQo1ylHkl--PA7PCoreV0pVh_W1ViakKWRa1IMlFLj4LmglbbJ8qagoAmWHsFmsUb4KLTCHvnlv60jT-JIMVy9V7kjhhqYMNoRuZI6M6uEbXFXtmjmspcxXGmkLH1rNuZdSLovanFGeiyt6-CfRTZHDMpaOi9r5',
    colors: ['#6b7280', '#1e293b']
  },
  {
    id: '5',
    name: 'Alpine Down Jacket',
    price: 380,
    category: 'Jackets',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8Ic1vXE4x0WLABRaeTpxi96-WgUp7x8P8EUuBNq--QfGc1kyZWIKQBDdkeuaRbk90M3odRe7JpNP6ALv9fbukUfXcAseZ_Udp_6dQilRq4kpgw7rBoBHBEAHRxquWpH787ExbOFsyBIvfNcSUuyvB9CtHs3klEqTSmjJLwYvqUCbFqnLHOW4i-XKpyYPyOoIaktm_ITqv_zWIzjRR3aaUv-oZTcYg2B_9ijBpCyfQrPR1bWBQ6QxowMnLIIO3wcYmtAU8LrU3Gxuu',
    colors: ['#92400e', '#000000'],
    isBestSeller: true
  },
  {
    id: '6',
    name: 'Technical Bomber',
    price: 220,
    category: 'Jackets',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD38BK7vCcrAyvWwRYHKmV5VhBePZIpoI06jZ9ntTeJoUzyeaUD5S6dIuKHP3YdUgSDRd5V5_A6m7NN5njj0P6FFw79VGC133Eg9osugrEZYjYPfgnaDvspPcpE68LCz_J5M2vIGQjU1Uz2BmFJ9DYhbj3xgiOUiAnNXXfSeeX1bdUzvblx4aLo1ew40qiQjBf7OhBWGODOqTpfgJCeT4wdTH9JBkzzk4Oe14nY-rhnuGNUcmoTOrYvxS1dCtjqSG1DK_1NFcGBBKca',
    colors: ['#1e293b', '#3f6212']
  }
];

export const Shop: React.FC = () => {
  const [priceRange, setPriceRange] = useState(450);

  return (
    <div class="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs & Header */}
      <div class="flex flex-col gap-4 mb-8">
        <nav class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Link to="/" class="hover:text-primary transition-colors">Home</Link>
          <span class="material-symbols-outlined text-[16px]">chevron_right</span>
          <Link to="/shop" class="hover:text-primary transition-colors">Men</Link>
          <span class="material-symbols-outlined text-[16px]">chevron_right</span>
          <span class="text-gray-900 dark:text-white font-medium">Outerwear</span>
        </nav>
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 class="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-2">Men's Outerwear</h2>
            <p class="text-gray-500 dark:text-gray-400 text-sm">Showing {MOCK_PRODUCTS.length} products</p>
          </div>
          <div class="flex items-center gap-3">
            <label htmlFor="sort" class="sr-only">Sort by</label>
            <div class="relative min-w-[180px]">
              <select id="sort" class="w-full appearance-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white py-2.5 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm font-medium cursor-pointer">
                <option>Recommended</option>
                <option>Newest Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <span class="material-symbols-outlined text-[20px]">expand_more</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Sidebar Filters */}
        <aside class="w-full lg:w-64 flex-shrink-0 hidden lg:block sticky top-24 h-fit">
          <div class="space-y-8">
            {/* Category */}
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-between">
                Category
                <span class="material-symbols-outlined text-[20px] text-gray-400">remove</span>
              </h3>
              <div class="space-y-3">
                {['Jackets & Coats', 'Blazers', 'Trench Coats', 'Leather'].map((cat, i) => (
                  <label key={cat} class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" defaultChecked={i === 0} class="rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary bg-transparent" />
                    <span class="text-sm text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>
            <div class="w-full h-px bg-gray-200 dark:bg-gray-800"></div>
            
            {/* Price */}
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-between">
                Price
                <span class="material-symbols-outlined text-[20px] text-gray-400">remove</span>
              </h3>
              <div class="px-1">
                <input 
                  type="range" 
                  min="0" 
                  max="1000" 
                  value={priceRange} 
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  class="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary" 
                />
              </div>
              <div class="flex items-center justify-between mt-4">
                <div class="border border-gray-200 dark:border-gray-700 rounded-md px-3 py-2 w-20">
                  <span class="text-xs text-gray-400 block">Min</span>
                  <span class="text-sm font-medium text-gray-900 dark:text-white">$0</span>
                </div>
                <span class="text-gray-400">-</span>
                <div class="border border-gray-200 dark:border-gray-700 rounded-md px-3 py-2 w-20">
                  <span class="text-xs text-gray-400 block">Max</span>
                  <span class="text-sm font-medium text-gray-900 dark:text-white">${priceRange}+</span>
                </div>
              </div>
            </div>
            <div class="w-full h-px bg-gray-200 dark:bg-gray-800"></div>

            {/* Colors */}
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-between">
                Color
                <span class="material-symbols-outlined text-[20px] text-gray-400">remove</span>
              </h3>
              <div class="grid grid-cols-5 gap-3">
                {[
                  { name: 'Black', bg: 'bg-black' },
                  { name: 'Navy', bg: 'bg-[#1e293b]' },
                  { name: 'Brown', bg: 'bg-[#92400e]' },
                  { name: 'Beige', bg: 'bg-[#d6d3d1]' },
                  { name: 'White', bg: 'bg-[#f1f5f9]' }
                ].map((col) => (
                  <button key={col.name} aria-label={col.name} class={`w-8 h-8 rounded-full ${col.bg} border border-gray-200 dark:border-gray-700 hover:ring-2 ring-gray-200 ring-offset-2 ring-offset-white dark:ring-offset-[#111621] transition-all cursor-pointer`}></button>
                ))}
              </div>
            </div>
            <div class="w-full h-px bg-gray-200 dark:bg-gray-800"></div>

            {/* Sizes */}
            <div>
               <h3 class="font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-between">
                Size
                <span class="material-symbols-outlined text-[20px] text-gray-400">remove</span>
              </h3>
              <div class="grid grid-cols-3 gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button 
                    key={size} 
                    disabled={size === 'XXL'}
                    class={`h-10 rounded-lg border text-sm font-medium transition-colors ${size === 'S' ? 'border-primary bg-primary/5 text-primary' : 'border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-primary hover:text-primary'} ${size === 'XXL' ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div class="flex-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
            {MOCK_PRODUCTS.map((product) => (
              <div key={product.id} class="group flex flex-col gap-3">
                <div class="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                  {product.isNew && (
                     <div class="absolute top-3 left-3 z-10">
                      <span class="bg-primary text-white text-xs font-bold px-2 py-1 rounded">New</span>
                    </div>
                  )}
                  {product.isBestSeller && (
                     <div class="absolute top-3 left-3 z-10">
                      <span class="bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded">Best Seller</span>
                    </div>
                  )}
                  
                  <Link to={`/product/${product.id}`}>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      class="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                  
                  {/* Hover Quick Add */}
                  <div class="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <button class="w-full rounded-lg bg-white dark:bg-gray-900 py-3 text-sm font-bold text-gray-900 dark:text-white shadow-lg hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors flex items-center justify-center gap-2">
                      <span class="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                      Quick Add
                    </button>
                  </div>
                  <div class="absolute top-3 right-3">
                    <button class="p-2 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-sm text-gray-900 dark:text-white hover:text-red-500 transition-colors">
                      <span class="material-symbols-outlined text-[20px]">favorite</span>
                    </button>
                  </div>
                </div>
                <div class="space-y-1">
                  <h3 class="font-serif text-lg font-medium text-gray-900 dark:text-white">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  <p class="font-display font-medium text-gray-500 dark:text-gray-400">${product.price.toFixed(2)}</p>
                  <div class="flex gap-1 pt-1">
                    {product.colors.map(c => (
                        <span key={c} class="block h-3 w-3 rounded-full ring-1 ring-gray-200 dark:ring-gray-700" style={{backgroundColor: c}}></span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
           {/* Load More */}
            <div class="mt-16 flex justify-center">
                <button class="px-8 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-gray-900 dark:text-white font-bold rounded-lg transition-colors shadow-sm">
                    Load More Products
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};
