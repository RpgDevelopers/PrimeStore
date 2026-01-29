import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer class="bg-white dark:bg-[#111621] border-t border-gray-100 dark:border-gray-800 pt-16 pb-8">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="xl:grid xl:grid-cols-4 xl:gap-8">
          <div class="space-y-4 mb-8 xl:mb-0">
            <div class="flex items-center gap-2 mb-4">
              <img src="https://cdn.imgchest.com/files/478c865d2bfa.png" alt="PrimeStore" class="h-6 w-6 object-contain" />
              <span class="text-xl font-bold text-[#111318] dark:text-white">PrimeStore</span>
            </div>
            <p class="text-sm leading-6 text-gray-600 dark:text-gray-400">
              Hardcoded with precision and coffee by Jayson.
            </p>
            <div class="flex space-x-4 pt-2">
              <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                <span class="material-symbols-outlined text-[20px]">code</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                <span class="material-symbols-outlined text-[20px]">public</span>
              </a>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-8 xl:col-span-3 md:grid-cols-4">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-[#111318] dark:text-white">Shop</h3>
              <ul role="list" class="mt-4 space-y-3">
                <li><a href="#" class="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-primary">New Arrivals</a></li>
                <li><a href="#" class="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-primary">Bestsellers</a></li>
                <li><a href="#" class="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-primary">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-semibold leading-6 text-[#111318] dark:text-white">Support</h3>
              <ul role="list" class="mt-4 space-y-3">
                <li><a href="#" class="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-primary">Order Status</a></li>
                <li><a href="#" class="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-primary">Returns</a></li>
                <li><a href="#" class="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-primary">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-semibold leading-6 text-[#111318] dark:text-white">Company</h3>
              <ul role="list" class="mt-4 space-y-3">
                <li><a href="#" class="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-primary">About Jayson</a></li>
                <li><a href="#" class="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-primary">Sustainability</a></li>
                <li><a href="#" class="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-primary">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-semibold leading-6 text-[#111318] dark:text-white">Legal</h3>
              <ul role="list" class="mt-4 space-y-3">
                <li><a href="#" class="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-primary">MIT License</a></li>
                <li><a href="#" class="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-primary">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-16 border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-xs leading-5 text-gray-500 dark:text-gray-500">© 2024 Created by Jayson. Licensed under MIT.</p>
          <div class="flex gap-4">
            <div class="flex items-center gap-1 text-slate-400 text-xs font-semibold">
                <span class="material-symbols-outlined !text-[24px]">terminal</span>
                <span>Source</span>
            </div>
            <div class="flex items-center gap-1 text-slate-400 text-xs font-semibold">
                <span class="material-symbols-outlined !text-[24px]">lock</span>
                <span>Secure</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};