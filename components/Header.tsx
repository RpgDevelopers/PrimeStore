import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header class="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-[#111621]/90 backdrop-blur-md transition-colors">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" class="flex items-center gap-2 group">
            <img src="https://cdn.imgchest.com/files/478c865d2bfa.png" alt="PrimeStore" class="h-8 w-8 object-contain" />
            <span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors">
              PrimeStore
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav class="hidden md:flex items-center gap-8">
            <Link
              to="/shop"
              class={`text-sm font-semibold transition-colors ${
                isActive('/shop') ? 'text-primary' : 'text-slate-600 dark:text-gray-300 hover:text-primary'
              }`}
            >
              Shop
            </Link>
            <Link
              to="/shop" // Linking to shop for demo
              class="text-sm font-semibold text-slate-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/about"
              class={`text-sm font-semibold transition-colors ${
                isActive('/about') ? 'text-primary' : 'text-slate-600 dark:text-gray-300 hover:text-primary'
              }`}
            >
              About
            </Link>
          </nav>

          {/* Actions */}
          <div class="flex items-center gap-4">
            <div class="relative hidden sm:block">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <span class="material-symbols-outlined !text-[20px]">search</span>
              </span>
              <input
                className="h-10 w-64 rounded-full border-0 bg-gray-100 dark:bg-gray-800 py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary placeholder:text-slate-400 dark:text-white"
                placeholder="Search..."
                type="text"
              />
            </div>
            <button class="rounded-full p-2 text-slate-600 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-gray-800 transition-colors">
              <span class="material-symbols-outlined">person</span>
            </button>
            <Link
              to="/cart"
              class="relative rounded-full p-2 text-slate-600 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-gray-800 transition-colors"
            >
              <span class="material-symbols-outlined">shopping_bag</span>
              {cartCount > 0 && (
                <span class="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white ring-2 ring-white dark:ring-background-dark">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};