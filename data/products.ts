import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The Classic Wool Overcoat',
    price: 450,
    category: 'Coats',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-OFMQagd2qUMsIDmKPzlWteozvkVTCevPJM69PNS9gBpPrm9uGr5B-FHI862zI6wsudhYJkGCpD1abCOrtkhC3ArtJsv5Qb7J3B3xqBqAYn4aJ4Hu2dwZrUqVWDy8PW7yto4Vl1vC1eC3gkma41Y4D4KvST3vquVUUTjuYz56g8OQLPA194tC3ylm10DXDkN9xSIzyyytAO1L_8Y3eSvjwfxwZach6coT__tCDyBQ-w9h1XfxNGF-L3xklEFEviVTKjOdKU4_xIxw',
    colors: ['#000000', '#9CA3AF'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: "Expertly crafted from premium Italian wool blend. This overcoat features a structured silhouette, notched lapels, and a hidden button placket for a clean, modern aesthetic. Perfect for layering over suits or casual wear.",
    rating: 4.9,
    reviews: 124,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB-OFMQagd2qUMsIDmKPzlWteozvkVTCevPJM69PNS9gBpPrm9uGr5B-FHI862zI6wsudhYJkGCpD1abCOrtkhC3ArtJsv5Qb7J3B3xqBqAYn4aJ4Hu2dwZrUqVWDy8PW7yto4Vl1vC1eC3gkma41Y4D4KvST3vquVUUTjuYz56g8OQLPA194tC3ylm10DXDkN9xSIzyyytAO1L_8Y3eSvjwfxwZach6coT__tCDyBQ-w9h1XfxNGF-L3xklEFEviVTKjOdKU4_xIxw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ8XKWPpZFEWii7OTtbmiMiotcO0Hwwr0yKW9HtdCkCljHC5i9M-88CYoa58Y41azkEfaIZ-xg6DHFBvDlndOoiDygAPyrIV1sKlFrlaXQF8hoKL7UhPZSxSO_tFqQApZ3AVxvlUUEBB8JsDQKw4Wdzqy18ryvkUqgdHZ1lGefHGLrtKk9dBm_QPfsnqpEhJsN3VSy843AdSP6e20fSoyDOQ2kBUgxhZ3RRjluYJikvGOET-oh5VDUI4klsGGLyWDhrNjYsEm9nLj5'
    ]
  },
  {
    id: '2',
    name: 'Heritage Trench Coat',
    price: 325,
    category: 'Coats',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaLx3PHYWsXX-yZ_86OsOdd0gD96EEBch0_1DCQwRSyLl2Nb3YkVgfMu2P4B-hGNnBxJLWI0kvOTwfnjp4yy52m2JbhJ9TOHcX2sqKxtZfAk6rY7fVF9YYKih9v5jnLzWyBpYwlXG_NNWC8zgS2GFw_BCm6yrJtVqTp9QAFyiwbC9bxrSp4qepxFZ85ztp2-3XS6P1IJXgMEelyY64qTk1WpN4bdsrFgRBXn0JkEYTbQdqgJ0-Z8rv9QOc3pQTl5HjQ-M849C4Aa4a',
    colors: ['#d6d3d1', '#1e293b'],
    sizes: ['XS', 'S', 'M', 'L'],
    isNew: true,
    description: "A timeless icon, reinvented. The Heritage Trench features a water-resistant cotton gabardine shell, vintage-check lining, and double-breasted closure.",
    rating: 4.7,
    reviews: 89,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDaLx3PHYWsXX-yZ_86OsOdd0gD96EEBch0_1DCQwRSyLl2Nb3YkVgfMu2P4B-hGNnBxJLWI0kvOTwfnjp4yy52m2JbhJ9TOHcX2sqKxtZfAk6rY7fVF9YYKih9v5jnLzWyBpYwlXG_NNWC8zgS2GFw_BCm6yrJtVqTp9QAFyiwbC9bxrSp4qepxFZ85ztp2-3XS6P1IJXgMEelyY64qTk1WpN4bdsrFgRBXn0JkEYTbQdqgJ0-Z8rv9QOc3pQTl5HjQ-M849C4Aa4a',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4brx2mcjzgMdxZNVdE5AjiafHbOnz-T_VeCldRTQXkxvd_2KL11cqfQ3y1zyXmDrVby2RQKSYyj1C0nOb372-TGtTDdvJZBPe3M2wEOOZ-OeSxwxmiOaWdLijsEBJSt19UAUk1BKGesFUloZQmxXXQiZsx_YPQ_5dN1kZfZKaQ8qgAW6bColodcd1GlGHtJsHHi5VOq6mp08c4rtp8wANjpv1L1xBD4NVOsnD0F-IpPeM9oJ6YaLhFT6TMiE-S3Fbu9WTqnNM9gEk'
    ]
  },
  {
    id: '3',
    name: 'Modern Biker Jacket',
    price: 550,
    category: 'Leather',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClB7XptQy1Hr8keBur7-3Gmes4cs9l2HBk0JsJ6qI7jUm7M4tM7qG4CSPACaHZmKbrTA-gVhi9YdYDVw5aDIgqW7hBYDKoMH6UjjtZFsK7Q-redp4rwcRFb7O9XHEtwxZnYr24XxVPrRKz189L4gIcjXMJQQRE709on2Bg8PW2XOXAPeMBXD-BYaJ23VC7VXYiRHcpZnbqyUlZ44Q0YA0swbVLRMK5rWzQZsi-WlLx_tE0L_34malWpaj7RPYQwhLHnOjIgddAu2GG',
    colors: ['#000000'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: "Full-grain leather with heavy-duty hardware. This biker jacket is designed to age beautifully, developing a unique patina over time.",
    rating: 4.8,
    reviews: 56,
    images: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuClB7XptQy1Hr8keBur7-3Gmes4cs9l2HBk0JsJ6qI7jUm7M4tM7qG4CSPACaHZmKbrTA-gVhi9YdYDVw5aDIgqW7hBYDKoMH6UjjtZFsK7Q-redp4rwcRFb7O9XHEtwxZnYr24XxVPrRKz189L4gIcjXMJQQRE709on2Bg8PW2XOXAPeMBXD-BYaJ23VC7VXYiRHcpZnbqyUlZ44Q0YA0swbVLRMK5rWzQZsi-WlLx_tE0L_34malWpaj7RPYQwhLHnOjIgddAu2GG',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD6fmTEa-2YC6Df5vKB5zYg5fSey6EALLrQn-58ZcWH65kWWhRh7K7YUFudGaBBjTHHLcYgFMgoNYdwrbNJX87u7g0GuR1lSf4pB6PaenZJLeWYVlCLbr5lrva9eDjTyJh8q_fE8mCuPOL0I2kJYi-iE1OWg5eYqu1o8WltrtItR4ubYMJEF_3BrzXqoEpgvBqjEMhuXVzAys4-qBo2chn3xXf9YImry60TyPHsbtBXaG11Io-89XEibtuIv7A1K4UXEPnmPuhDycNH'
    ]
  },
  {
    id: '4',
    name: 'Textured Knit Blazer',
    price: 295,
    category: 'Blazers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4foSWj2PwFZCIqegQJVILSNQj6pNjAuofh26iyx5QnHupR3HqazSYQRZb8eGcNAAj3MhqxhDkFKhhzm5l83OLALB6vzS_AJ_7xxe-_mAbdfgyiWQo1ylHkl--PA7PCoreV0pVh_W1ViakKWRa1IMlFLj4LmglbbJ8qagoAmWHsFmsUb4KLTCHvnlv60jT-JIMVy9V7kjhhqYMNoRuZI6M6uEbXFXtmjmspcxXGmkLH1rNuZdSLovanFGeiyt6-CfRTZHDMpaOi9r5',
    colors: ['#6b7280', '#1e293b'],
    sizes: ['S', 'M', 'L'],
    description: "The comfort of a cardigan meets the polish of a blazer. Unstructured and unlined for a relaxed yet refined look.",
    rating: 4.5,
    reviews: 42,
    images: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD4foSWj2PwFZCIqegQJVILSNQj6pNjAuofh26iyx5QnHupR3HqazSYQRZb8eGcNAAj3MhqxhDkFKhhzm5l83OLALB6vzS_AJ_7xxe-_mAbdfgyiWQo1ylHkl--PA7PCoreV0pVh_W1ViakKWRa1IMlFLj4LmglbbJ8qagoAmWHsFmsUb4KLTCHvnlv60jT-JIMVy9V7kjhhqYMNoRuZI6M6uEbXFXtmjmspcxXGmkLH1rNuZdSLovanFGeiyt6-CfRTZHDMpaOi9r5',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCLFvOO-ZTJWyaaEfH43BwstrsmJTGh7OYMKCE4TZXyvaLc2dofCkKyUfCHO_sb2mZjDO1PseAk8vOEEtMs_yFAJtp5DpbEMxCK1NFN0xl7u27OhHLyFalECMStHUE9Sfdijw2URrjWJ7hzSrDVMcbMrvJIHveAZIYbEybE2B4kezUGsW6sc3sYov3qFjszec_zu1RXVScWbLokAie9bo6MwuBkiS9bkyaeOZsgBKotBPGE-_TOdHOLwmjUiCUSWT72yeltiVUb7Tfk'
    ]
  },
  {
    id: '5',
    name: 'Alpine Down Jacket',
    price: 380,
    category: 'Jackets',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8Ic1vXE4x0WLABRaeTpxi96-WgUp7x8P8EUuBNq--QfGc1kyZWIKQBDdkeuaRbk90M3odRe7JpNP6ALv9fbukUfXcAseZ_Udp_6dQilRq4kpgw7rBoBHBEAHRxquWpH787ExbOFsyBIvfNcSUuyvB9CtHs3klEqTSmjJLwYvqUCbFqnLHOW4i-XKpyYPyOoIaktm_ITqv_zWIzjRR3aaUv-oZTcYg2B_9ijBpCyfQrPR1bWBQ6QxowMnLIIO3wcYmtAU8LrU3Gxuu',
    colors: ['#92400e', '#000000'],
    sizes: ['M', 'L', 'XL'],
    isBestSeller: true,
    description: "Filled with ethically sourced 800-fill power down. This jacket provides exceptional warmth without the bulk. Features a removable hood.",
    rating: 4.9,
    reviews: 215,
    images: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA8Ic1vXE4x0WLABRaeTpxi96-WgUp7x8P8EUuBNq--QfGc1kyZWIKQBDdkeuaRbk90M3odRe7JpNP6ALv9fbukUfXcAseZ_Udp_6dQilRq4kpgw7rBoBHBEAHRxquWpH787ExbOFsyBIvfNcSUuyvB9CtHs3klEqTSmjJLwYvqUCbFqnLHOW4i-XKpyYPyOoIaktm_ITqv_zWIzjRR3aaUv-oZTcYg2B_9ijBpCyfQrPR1bWBQ6QxowMnLIIO3wcYmtAU8LrU3Gxuu',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDjdasTxAb3DO_GdmsOwKJIXXRdCLa7Gqc6of2S7eXlHu63j_Hn-WwvKDGr6QgjmMTbHQU11GpRrxb2WmvoSc-9XB5xfZQIVrn65nvIU1mt5jHpnlbMnzQLqOrvlOuXOzXZZkmAOejGJ8_eTzo6FQ7G0YgvchmB2O3DCILNexTS7b4PHaBQ7RaDV_NHbFOoOhf64C_QKjcwJXKR7BxQke_bI97lyy0ALyTBcy3mDobq9GKGrQ1D1euIV8uuz7DDD2HRudKFZ1xXTpTC'
    ]
  },
  {
    id: '6',
    name: 'Technical Bomber',
    price: 220,
    category: 'Jackets',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD38BK7vCcrAyvWwRYHKmV5VhBePZIpoI06jZ9ntTeJoUzyeaUD5S6dIuKHP3YdUgSDRd5V5_A6m7NN5njj0P6FFw79VGC133Eg9osugrEZYjYPfgnaDvspPcpE68LCz_J5M2vIGQjU1Uz2BmFJ9DYhbj3xgiOUiAnNXXfSeeX1bdUzvblx4aLo1ew40qiQjBf7OhBWGODOqTpfgJCeT4wdTH9JBkzzk4Oe14nY-rhnuGNUcmoTOrYvxS1dCtjqSG1DK_1NFcGBBKca',
    colors: ['#1e293b', '#3f6212'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: "Water-repellent and windproof. A modern take on the classic MA-1 bomber, featuring recycled nylon fabric and streamlined pockets.",
    rating: 4.6,
    reviews: 78,
    images: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD38BK7vCcrAyvWwRYHKmV5VhBePZIpoI06jZ9ntTeJoUzyeaUD5S6dIuKHP3YdUgSDRd5V5_A6m7NN5njj0P6FFw79VGC133Eg9osugrEZYjYPfgnaDvspPcpE68LCz_J5M2vIGQjU1Uz2BmFJ9DYhbj3xgiOUiAnNXXfSeeX1bdUzvblx4aLo1ew40qiQjBf7OhBWGODOqTpfgJCeT4wdTH9JBkzzk4Oe14nY-rhnuGNUcmoTOrYvxS1dCtjqSG1DK_1NFcGBBKca',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCkWQVuux_cInWz9g4OqKEXStajvEWsst6Wo_P7tms1y7GG8Lq6LV4NToiWegykbe1OnHeo3HbDwG0KkrxtA4e3np4JxppMTsf6aNW5XESSDMFjfbllHfjhq6eHgYFTxOgKBZFIVFrggAmkyIXdjW2v67vzv42zTc9_qgIFweC3qjwzu13qsRfuJRkbK7-ZyBrlxj0SIoq9l2jzz1HpsW89m7nWA5SnHjJC6RKtiFifwDZszeRzZIxeYQLOaQQDuJZQY005evydvOXI'
    ]
  }
];