import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

export const Shop: React.FC = () => {
  const { products, addToCart } = useShop();
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('Recommended');

  // Constants for filters
  const CATEGORIES = ['Coats', 'Jackets', 'Blazers', 'Leather'];
  const COLORS = [
    { name: 'Black', hex: '#000000' },
    { name: 'Navy', hex: '#1e293b' },
    { name: 'Brown', hex: '#92400e' },
    { name: 'Beige', hex: '#d6d3d1' },
    { name: 'White', hex: '#f1f5f9' },
    { name: 'Grey', hex: '#9CA3AF' },
    { name: 'Green', hex: '#3f6212' },
  ];
  const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const toggleFilter = (item: string, currentList: string[], setter: React.Dispatch<React.SetStateAction<string[]>>) => {
      if (currentList.includes(item)) {
          setter(currentList.filter(i => i !== item));
      } else {
          setter([...currentList, item]);
      }
  };

  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by Category
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Filter by Price
    result = result.filter(p => p.price <= priceRange);

    // Filter by Color (check if product has ANY of the selected colors)
    // Note: Simple hex matching for now, in a real app might need normalization
    if (selectedColors.length > 0) {
        result = result.filter(p => p.colors.some(c => 
            selectedColors.some(selected => {
                // Mapping selected color names to rough hexes or logic
                // For simplicity, we assume the data uses hexes and UI uses hexes or mapping
                // Let's just check if the product color array includes the hex code
                const colorObj = COLORS.find(col => col.name === selected);
                return colorObj ? p.colors.includes(colorObj.hex) : false; 
                // Wait, logic above: selectedColors is array of HEXES from the UI click
                // Actually let's store names or hexes. UI uses hexes for buttons.
                // Let's simplify: selectedColors stores HEX codes.
                return p.colors.includes(selected);
            })
        ));
    }
    
    // Simplification for the color filter in this demo:
    // If selectedColors contains a hex that is in product.colors
    if (selectedColors.length > 0) {
        result = result.filter(p => p.colors.some(c => selectedColors.includes(c)));
    }

    // Filter by Size
    if (selectedSizes.length > 0) {
        result = result.filter(p => p.sizes && p.sizes.some(s => selectedSizes.includes(s)));
    }

    // Sort
    if (sortBy === 'Price: Low to High') {
        result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
        result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'Newest Arrivals') {
        result = [...result].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [products, selectedCategories, priceRange, selectedColors, selectedSizes, sortBy]);

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
            <p class="text-gray-500 dark:text-gray-400 text-sm">Showing {filteredProducts.length} products</p>
          </div>
          <div class="flex items-center gap-3">
            <label htmlFor="sort" class="sr-only">Sort by</label>
            <div class="relative min-w-[180px]">
              <select 
                id="sort" 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                class="w-full appearance-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white py-2.5 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm font-medium cursor-pointer"
              >
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
                {CATEGORIES.map((cat, i) => (
                  <label key={cat} class="flex items-center gap-3 cursor-pointer group">
                    <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleFilter(cat, selectedCategories, setSelectedCategories)}
                        class="rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary bg-transparent" 
                    />
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
                {COLORS.map((col) => (
                  <button 
                    key={col.name} 
                    aria-label={col.name}
                    onClick={() => toggleFilter(col.hex, selectedColors, setSelectedColors)}
                    class={`w-8 h-8 rounded-full border transition-all cursor-pointer relative ${selectedColors.includes(col.hex) ? 'ring-2 ring-primary ring-offset-2 dark:ring-offset-[#111621]' : 'border-gray-200 dark:border-gray-700 hover:ring-2 hover:ring-gray-200'}`}
                    style={{ backgroundColor: col.hex }}
                  >
                  </button>
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
                {SIZES.map((size) => (
                  <button 
                    key={size} 
                    onClick={() => toggleFilter(size, selectedSizes, setSelectedSizes)}
                    class={`h-10 rounded-lg border text-sm font-medium transition-colors ${selectedSizes.includes(size) ? 'border-primary bg-primary text-white' : 'border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-primary hover:text-primary'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Clear Filters */}
            <button 
                onClick={() => {
                    setSelectedCategories([]);
                    setPriceRange(1000);
                    setSelectedColors([]);
                    setSelectedSizes([]);
                }}
                class="w-full py-2 text-sm text-gray-500 hover:text-primary underline"
            >
                Clear All Filters
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div class="flex-1">
          {filteredProducts.length === 0 ? (
            <div class="flex flex-col items-center justify-center h-96 text-center">
                <span class="material-symbols-outlined text-6xl text-gray-300 mb-4">search_off</span>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">No products found</h3>
                <p class="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your filters.</p>
            </div>
          ) : (
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
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
                  
                  {/* Hover Quick Add - default to first color/size */}
                  <div class="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <button 
                        onClick={() => addToCart(product, 1, product.colors[0], product.sizes?.[0])}
                        class="w-full rounded-lg bg-white dark:bg-gray-900 py-3 text-sm font-bold text-gray-900 dark:text-white shadow-lg hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors flex items-center justify-center gap-2"
                    >
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
          )}
           {/* Load More (Visual only for now since we have limited data) */}
           {filteredProducts.length > 0 && (
            <div class="mt-16 flex justify-center">
                <button class="px-8 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-gray-900 dark:text-white font-bold rounded-lg transition-colors shadow-sm">
                    Load More Products
                </button>
            </div>
            )}
        </div>
      </div>
    </div>
  );
};