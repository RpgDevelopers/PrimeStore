import React from 'react';
import { Link } from 'react-router-dom';

export const Cart: React.FC = () => {
  // Hardcoded cart data based on design
  const cartItems = [
    {
      id: 1,
      name: 'Ergonomic Office Chair',
      price: 250.00,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQXeNtqRDOiSf7980rc32h8aW1zbh9kJnTTLuG3RVn4AOOxKtrqHZLghbw27Pkm2efYufmckDKSRCWxgICPagNuoO3H1kY-42i0Ea87OlVyoDVst7R6zIgbWFpg-veo1BdOzxQPvwYZDpUC2lebAQc8mNOBZrBEAn1Rs6--wXn3gu-W4CN3mT20TkNZXcqurgI6UB1EHkkVKoQAgSiXPEWOZCiD_AtRPIwv4qHskvBswkRZY30hx9uYMgVMKzNiOR4cEWNYGvRUH61',
      options: ['Grey', 'Standard'],
      quantity: 1
    },
    {
      id: 2,
      name: 'Wireless Mechanical Keyboard',
      price: 120.00,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALJhfOOkUoJsr7E_SkoNjkdCRkkONfNPrL_yNgYQLmutkPgR_LWlrlti3wFPr9qMpaMil1ggZkuPKtevxwhn0OloC6EmpOninp9xN1Eefm_Aaxh-lHoDcVQFC5zhgjFUJ59Qn4hCmvIQetNddRrcZMDEl4VBODAJdnlcqS9L7MeUPrWH7hOfBh3lzKwYO_ic1fv1gQv_FJ3wKDOPEICiwd4xPcOqqsxzd534o8GL5ydPYI2BZjMdqsAzVH6kgs9sS_Zk3xzTBpqSR9',
      options: ['White', 'Brown Switch'],
      quantity: 1
    }
  ];

  const subtotal = 370.00;
  const tax = 29.60;
  const total = 399.60;

  return (
    <div class="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8 flex-1 w-full">
      <div class="mb-10">
        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Your Shopping Bag</h1>
        <p class="mt-2 text-slate-500 dark:text-slate-400">2 items in your cart ready for checkout.</p>
      </div>

      <div class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <section aria-labelledby="cart-heading" class="lg:col-span-7">
          <ul role="list" class="divide-y divide-gray-100 dark:divide-gray-800 border-t border-b border-gray-100 dark:border-gray-800">
            {cartItems.map((item) => (
              <li key={item.id} class="flex py-8 sm:py-10">
                <div class="shrink-0">
                  <div class="h-24 w-24 sm:h-32 sm:w-32 rounded-lg bg-gray-100 dark:bg-[#1e2532] overflow-hidden relative group">
                    <img src={item.image} alt={item.name} class="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
                <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div class="flex justify-between">
                        <h3 class="text-base font-bold text-slate-900 dark:text-white">
                          <a href="#" class="hover:text-primary transition-colors">{item.name}</a>
                        </h3>
                      </div>
                      <div class="mt-1 flex text-sm text-slate-500 dark:text-slate-400">
                         {item.options.map((opt, i) => (
                            <p key={i} class={i < item.options.length - 1 ? 'border-r border-gray-200 dark:border-gray-700 pr-2 mr-2' : ''}>{opt}</p>
                         ))}
                      </div>
                      <p class="mt-2 text-lg font-bold text-slate-900 dark:text-white">${item.price.toFixed(2)}</p>
                    </div>
                    <div class="mt-4 sm:mt-0 sm:pr-9">
                      <div class="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg w-max bg-white dark:bg-[#1a2231]">
                        <button class="p-2 text-slate-500 hover:text-primary transition-colors disabled:opacity-50">
                          <span class="material-symbols-outlined !text-[18px]">remove</span>
                        </button>
                        <input type="text" value={item.quantity} readOnly class="w-10 p-0 text-center text-sm font-medium border-0 focus:ring-0 bg-transparent text-slate-900 dark:text-white" />
                        <button class="p-2 text-slate-500 hover:text-primary transition-colors">
                          <span class="material-symbols-outlined !text-[18px]">add</span>
                        </button>
                      </div>
                      <div class="absolute right-0 top-0">
                        <button type="button" class="-m-2 inline-flex p-2 text-slate-400 hover:text-red-500 transition-colors">
                          <span class="sr-only">Remove</span>
                          <span class="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <p class="mt-4 flex space-x-2 text-sm text-slate-700 dark:text-slate-300">
                    <span class="material-symbols-outlined text-green-500 !text-[20px]">check_circle</span>
                    <span>In stock</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div class="mt-8">
            <Link to="/shop" class="group inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark">
              <span class="material-symbols-outlined mr-2 transition-transform group-hover:-translate-x-1">arrow_back</span>
              Continue Shopping
            </Link>
          </div>
        </section>

        {/* Order Summary */}
        <section aria-labelledby="summary-heading" class="mt-16 rounded-xl bg-gray-50 dark:bg-[#1a2231] px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 sticky top-24 shadow-sm border border-gray-100 dark:border-gray-800">
          <h2 id="summary-heading" class="text-lg font-bold text-slate-900 dark:text-white">Order summary</h2>
          <dl class="mt-6 space-y-4">
            <div class="flex items-center justify-between">
              <dt class="text-sm text-slate-600 dark:text-slate-400">Subtotal</dt>
              <dd class="text-sm font-medium text-slate-900 dark:text-white">${subtotal.toFixed(2)}</dd>
            </div>
            <div class="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
              <dt class="flex items-center text-sm text-slate-600 dark:text-slate-400">
                <span>Shipping estimate</span>
                <span class="ml-2 cursor-pointer text-slate-400 hover:text-slate-500">
                  <span class="material-symbols-outlined !text-[16px]">help</span>
                </span>
              </dt>
              <dd class="text-sm font-medium text-green-600 dark:text-green-400">Free</dd>
            </div>
            <div class="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
              <dt class="flex text-sm text-slate-600 dark:text-slate-400">
                <span>Tax estimate</span>
              </dt>
              <dd class="text-sm font-medium text-slate-900 dark:text-white">${tax.toFixed(2)}</dd>
            </div>
            <div class="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
              <dt class="text-base font-bold text-slate-900 dark:text-white">Order total</dt>
              <dd class="text-2xl font-extrabold text-slate-900 dark:text-white">${total.toFixed(2)}</dd>
            </div>
          </dl>

          <div class="mt-6">
            <label htmlFor="promo-code" class="block text-sm font-medium text-slate-700 dark:text-slate-300">Discount Code</label>
            <div class="mt-2 flex gap-2">
              <input type="text" id="promo-code" name="promo-code" placeholder="Enter code" class="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:text-white placeholder:text-slate-400" />
              <button type="button" class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark px-4 py-2 text-sm font-medium text-slate-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Apply</button>
            </div>
          </div>

          <div class="mt-8">
            <button type="submit" class="w-full rounded-lg border border-transparent bg-primary px-4 py-4 text-base font-bold text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all shadow-primary/30 hover:shadow-primary/50 flex items-center justify-center gap-2">
              <span class="material-symbols-outlined !text-[20px]">lock</span>
              Secure Checkout
            </button>
          </div>
          
           <div class="mt-6 flex justify-center gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                <div class="flex items-center gap-1 text-slate-500 text-xs font-semibold">
                    <span class="material-symbols-outlined !text-[24px]">credit_card</span>
                    <span>Visa</span>
                </div>
                <div class="h-4 w-px bg-slate-300"></div>
                <div class="flex items-center gap-1 text-slate-500 text-xs font-semibold">
                    <span class="material-symbols-outlined !text-[24px]">payments</span>
                    <span>Mastercard</span>
                </div>
                <div class="h-4 w-px bg-slate-300"></div>
                <div class="flex items-center gap-1 text-slate-500 text-xs font-semibold">
                    <span class="material-symbols-outlined !text-[24px]">account_balance_wallet</span>
                    <span>PayPal</span>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
};
