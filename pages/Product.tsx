import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

export const ProductPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart } = useShop();
  
  const product = products.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState<string>('');

  // Initialize state when product loads
  useEffect(() => {
    if (product) {
      setMainImage(product.image);
      if (product.sizes && product.sizes.length > 0) setSelectedSize(product.sizes[2] || product.sizes[0]); // Default to M or first
      if (product.colors && product.colors.length > 0) setSelectedColor(product.colors[0]);
    }
  }, [product]);

  if (!product) {
    return (
        <div class="min-h-[50vh] flex flex-col items-center justify-center">
            <h2 class="text-2xl font-bold mb-4 dark:text-white">Product not found</h2>
            <Link to="/shop" class="text-primary hover:underline">Back to Shop</Link>
        </div>
    );
  }
  
  // Use products images array if available, otherwise just duplicate the main image for the gallery effect
  const galleryImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image, product.image, product.image, product.image];

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    // Optional: Show success feedback or open cart drawer
    // For now, let's navigate to cart
    navigate('/cart');
  };

  return (
    <div class="w-full flex justify-center py-8 bg-background-light dark:bg-background-dark">
      <div class="w-full max-w-[1280px] px-4 md:px-10 flex flex-col">
        {/* Breadcrumbs */}
        <div class="flex flex-wrap gap-2 pb-6 text-sm">
          <Link to="/" class="text-[#636f88] dark:text-gray-400 font-medium hover:text-primary transition-colors">Home</Link>
          <span class="text-[#636f88] dark:text-gray-600">/</span>
          <Link to="/shop" class="text-[#636f88] dark:text-gray-400 font-medium hover:text-primary transition-colors">Men</Link>
          <span class="text-[#636f88] dark:text-gray-600">/</span>
          <span class="text-[#111318] dark:text-white font-medium">{product.category}</span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Imagery */}
          <div class="lg:col-span-7 flex flex-col gap-4">
            <div class="w-full aspect-[4/5] md:aspect-[16/11] lg:aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 dark:bg-[#1e2532] relative group">
              <div 
                class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${mainImage}')` }}
              ></div>
              {product.isNew && (
                  <div class="absolute top-4 left-4">
                    <span class="bg-white dark:bg-[#111621] text-[#111318] dark:text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">New Arrival</span>
                  </div>
              )}
            </div>
            
            <div class="grid grid-cols-4 gap-3 md:gap-4">
              {galleryImages.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setMainImage(img)}
                  class={`aspect-square rounded-lg overflow-hidden border-2 cursor-pointer relative ${mainImage === img ? 'border-primary' : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'}`}
                >
                  <div class="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${img}')` }}></div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Details */}
          <div class="lg:col-span-5 flex flex-col h-full">
            <div class="sticky top-24">
              <div class="border-b border-[#f0f2f4] dark:border-[#222831] pb-6 mb-6">
                 <h1 class="text-3xl md:text-4xl font-bold text-[#111318] dark:text-white leading-tight mb-2">{product.name}</h1>
                 <div class="flex items-center gap-4 mb-4">
                    <h2 class="text-2xl font-bold text-[#111318] dark:text-white">${product.price.toFixed(2)}</h2>
                    <div class="flex items-center gap-1">
                        <div class="flex text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                             <span key={i} class="material-symbols-outlined text-[20px] fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                          ))}
                        </div>
                        <a href="#reviews" class="text-sm text-[#636f88] dark:text-gray-400 hover:text-primary ml-1 underline underline-offset-2">({product.reviews || 0} Reviews)</a>
                    </div>
                 </div>
                 <p class="text-[#636f88] dark:text-gray-400 text-base leading-relaxed">{product.description}</p>
              </div>

              {/* Selectors */}
              <div class="flex flex-col gap-6 mb-8">
                {/* Color */}
                <div>
                   <span class="block text-sm font-bold text-[#111318] dark:text-white mb-3">Color</span>
                   <div class="flex gap-3">
                      {product.colors.map(color => (
                          <button 
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            class={`w-10 h-10 rounded-full ring-offset-2 ring-offset-white dark:ring-offset-[#111621] transition-all ${selectedColor === color ? 'ring-2 ring-primary' : 'hover:ring-2 hover:ring-gray-300'}`}
                            style={{ backgroundColor: color }}
                          ></button>
                      ))}
                   </div>
                </div>
                {/* Size */}
                <div>
                   <div class="flex justify-between items-center mb-3">
                      <span class="block text-sm font-bold text-[#111318] dark:text-white">Size</span>
                      <button class="text-sm font-medium text-primary hover:text-blue-700 underline">Size Guide</button>
                   </div>
                   <div class="grid grid-cols-5 gap-2">
                      {product.sizes?.map(size => (
                        <button 
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          class={`h-10 rounded-lg border text-sm font-medium transition-colors ${selectedSize === size ? 'bg-primary text-white border-primary font-bold shadow-sm' : 'border-[#e5e7eb] dark:border-[#2a3140] text-[#111318] dark:text-gray-300 hover:border-primary hover:text-primary'}`}
                        >
                          {size}
                        </button>
                      ))}
                   </div>
                </div>
              </div>

              {/* Actions */}
              <div class="flex gap-3 mb-8">
                <div class="flex items-center h-12 rounded-lg border border-[#e5e7eb] dark:border-[#2a3140] bg-white dark:bg-[#1e2532] px-3">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} class="w-8 h-8 flex items-center justify-center text-[#636f88] hover:text-[#111318] dark:hover:text-white">
                        <span class="material-symbols-outlined text-[20px]">remove</span>
                    </button>
                    <input type="text" value={quantity} readOnly class="w-10 text-center border-none bg-transparent p-0 text-[#111318] dark:text-white font-bold focus:ring-0" />
                    <button onClick={() => setQuantity(quantity + 1)} class="w-8 h-8 flex items-center justify-center text-[#636f88] hover:text-[#111318] dark:hover:text-white">
                         <span class="material-symbols-outlined text-[20px]">add</span>
                    </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  class="flex-1 h-12 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
                >
                    <span>Add to Cart</span>
                    <span class="material-symbols-outlined text-[20px]">shopping_bag</span>
                </button>
                <button class="h-12 w-12 flex items-center justify-center rounded-lg border border-[#e5e7eb] dark:border-[#2a3140] text-[#111318] dark:text-white hover:bg-gray-50 dark:hover:bg-[#2a3140] transition-colors">
                     <span class="material-symbols-outlined text-[24px]">favorite_border</span>
                </button>
              </div>

               {/* Details Accordions */}
               <div class="flex flex-col border-t border-[#f0f2f4] dark:border-[#222831]">
                  <details class="group py-4 border-b border-[#f0f2f4] dark:border-[#222831] cursor-pointer" open>
                     <summary class="flex justify-between items-center font-bold text-[#111318] dark:text-white list-none">
                        <span>Product Specifications</span>
                        <span class="transition group-open:rotate-180">
                           <span class="material-symbols-outlined">expand_more</span>
                        </span>
                     </summary>
                     <div class="text-[#636f88] dark:text-gray-400 mt-3 text-sm leading-relaxed">
                        <ul class="list-disc pl-4 space-y-1">
                           <li>Material: 80% Wool, 20% Polyamide</li>
                           <li>Lining: 100% Viscose</li>
                           <li>Fit: Regular fit, true to size</li>
                           <li>Origin: Made in Portugal</li>
                           <li>Care: Dry clean only</li>
                        </ul>
                     </div>
                  </details>
                  <details class="group py-4 border-b border-[#f0f2f4] dark:border-[#222831] cursor-pointer">
                     <summary class="flex justify-between items-center font-bold text-[#111318] dark:text-white list-none">
                        <span>Shipping & Returns</span>
                        <span class="transition group-open:rotate-180">
                           <span class="material-symbols-outlined">expand_more</span>
                        </span>
                     </summary>
                     <div class="text-[#636f88] dark:text-gray-400 mt-3 text-sm leading-relaxed">
                        <p class="mb-2">Free standard shipping on all orders over $150. Orders are processed within 1-2 business days.</p>
                        <p>We accept returns within 30 days of delivery. Items must be unworn and in original condition.</p>
                     </div>
                  </details>
               </div>
            </div>
          </div>
        </div>

        {/* Complete the Look (Mocked for now as logic is complex) */}
        <div class="mt-24 mb-16 border-t border-[#f0f2f4] dark:border-[#222831] pt-16">
           <div class="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
              <div>
                 <h3 class="text-2xl font-bold text-[#111318] dark:text-white mb-2">Complete the Look</h3>
                 <p class="text-[#636f88] dark:text-gray-400">Curated essentials that pair perfectly.</p>
              </div>
              <Link to="/shop" class="text-primary font-bold hover:underline flex items-center gap-1">
                 View All
                 <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
           </div>
           <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Merino Turtleneck', price: 89, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgUO6HNPa4lXF-e0rBAvHGzfMA5KYKBLsiFjqW5w2HcQGaavw0EQ14Z---5YVD1k4bLswIHzSDfmhyj8XKbtgcXEX0ePlCGIQ6vPWbjOgTiI003PAsPenLO6igPjfSdZn2xoqGaxkIJBdlbDps2GqOQ87DeFsj2zsLEpbbO--hbmTkHG1lXeaJyn1My_iBg8nWdwY7qZnS1_o65RjTpDEa1DTpyiXVPiUZnz5qtbbXGsdcHAnXrjrXu0mfRlHY2mkAGwMOxna6eMj-' },
                { name: 'Tailored Wool Trousers', price: 120, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBom18lKFQRhN9HuNwL0h0KMqHLUKIusn5Nn4cCKysBfe2dnKhGiYG2tU7FMPaf7HK27adhfKd05IPNtAkLk2cpHvkso4Nd739XGCQCjU7zKSN9M_h2vK5IcKkedrka4N_qMP2Ct5ccLS4L4uNCDtrmFOdn2Pv8qYE7xo0jsrMXphMeDaKAvPmu09cpCNva2jb_UHAN07KtbATw_jEfYTQyBpk59gDI8nDmhEfroErloiYh4ObPcQFYhpnqB_TtonfopSL-8IDsLLYO' },
                { name: 'Chelsea Boots', price: 185, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXso-HXzRfrIAJVVMJMGNOiXbCgC2bLBSpyJtPb9MAN8zDlVllyKpU9hnl0B3WUQLcOlE99VVNgCUH6yebsw8vQMmFYAy7wm-jqIA3hDFrUBq7rOwUFVODvbbGkHVqKJYc16trLZzSsp6DrQh2FqqWrfEbbNRbH6USg58obNJCE7eeZ37scqT0eTUFiy3h8ha2TuJv4NZjxOrWtEsFw7vgbcPTzVLkI9jiV2J4IE3kgfj91Yb6bTBCe7kDraZPZHcMQbjG_UZr1S3H' },
                { name: 'Cashmere Scarf', price: 55, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPOsDlucACfmX8BQZXl00HzJPkEd59-ABJcJU2czNYyiNXthL1SHfsw2dIMKj52046r7mmQmG-EKc4BwtnOKLcARDNVLlVjA6CaegX9foCQAQhNg8Djr5X6GXoLPov12nR7TRNa_o6c8cv6DYfLWlVFR0eX_6d06FWVlXZOAzfnxJu2lJUz_gmMzfxnSaC6i8ZtYlo78vtMV6BawUCtkmDMuA2k_87ZCeB7ArGHvMU6nM3zy0S227j2iYRjYqIKci7G-X9pfWvTBYN' }
              ].map((item, i) => (
                <div key={i} class="group cursor-pointer">
                    <div class="w-full aspect-[3/4] bg-gray-100 dark:bg-[#1e2532] rounded-lg mb-3 overflow-hidden relative">
                        <div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${item.img}')` }}></div>
                        <button class="absolute bottom-3 right-3 w-8 h-8 bg-white dark:bg-[#111621] rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                             <span class="material-symbols-outlined text-[18px]">add</span>
                        </button>
                    </div>
                    <h4 class="font-bold text-[#111318] dark:text-white text-sm">{item.name}</h4>
                    <p class="text-[#636f88] dark:text-gray-400 text-sm">${item.price.toFixed(2)}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};