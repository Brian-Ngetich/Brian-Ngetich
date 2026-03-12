/*
   VELORIDE — Shared JavaScript
   main.js — linked by all pages */


//  PRODUCT DATA

const products = [
  {
     id:1, name:"Thunder X Pro",  category:"Mountain", price:1299, tag:"Best Seller", image:'images/4.jpeg', featured:true 
     },
  {
     id:2, name:"UrbanGlide 500", category:"City",     price:799,  tag:null,          image:'images/2.jpeg', featured:true 
     },
  { 
    id:3, name:"Apex Carbon",    category:"Road",     price:2499, tag:"New",         image:'images/1.jpeg', featured:true 
   },
  {
     id:4, name:"TrailBlazer 7",  category:"Mountain", price:1599, tag:null,          image:'images/3.jpeg', featured:false 
    },
  {
     id:5, name:"Velox Sprint",   category:"Road",     price:1850, tag:"New",         image:'images/5.jpeg', featured:false
     },
  {
     id:6, name:"Commuter Elite", category:"City",     price:649,  tag:null,          image:'images/6.jpeg', featured:false 
    },
  {
     id:7, name:"Dirt King 9",    category:"Mountain", price:1199, tag:"Sale",        image:'images/7.jpeg', featured:false
     },
   {
     id:8, name:"TrailBlazer 7",  category:"Mountain", price:1599, tag:null,          image:'images/27.jpeg', featured:false 
    },
  {
     id:9, name:"Velox Sprint",   category:"Road",     price:1850, tag:"New",         image:'images/28.jpeg', featured:false
     },
  {
     id:10, name:"Commuter Elite", category:"City",     price:649,  tag:null,          image:'images/29.jpeg', featured:false
     },
  {
     id:11, name:"Dirt King 9",    category:"Mountain", price:1199, tag:"Sale",        image:'images/30.jpeg', featured:false 
    },
   {
     id:12, name:"TrailBlazer 7",  category:"Mountain", price:1599, tag:null,          image:'images/31.jpeg', featured:false
     },
  { 
    id:13, name:"Velox Sprint",   category:"Road",     price:1850, tag:"New",         image:'images/32.jpeg', featured:false
   },
  { 
    id:14, name:"Commuter Elite", category:"City",     price:649,  tag:null,          image:'images/33.jpeg', featured:false
   },
  {
     id:15, name:"Dirt King 9",    category:"Mountain", price:1199, tag:"Sale",        image:'images/34.jpeg', featured:false 
    },
   { 
    id:16, name:"TrailBlazer 7",  category:"Mountain", price:1599, tag:null,          image:'images/35.jpeg', featured:false 
  },
  { 
    id:17, name:"Velox Sprint",   category:"Road",     price:1850, tag:"New",         image:'images/36.jpeg', featured:false 
  },
  {
     id:18, name:"Commuter Elite", category:"City",     price:649,  tag:null,          image:'images/37.jpeg', featured:false
     },
  { 
    id:19, name:"Dirt King 9",    category:"Mountain", price:1199, tag:"Sale",        image:'images/38.jpeg', featured:false
   },
   {
     id:20, name:"TrailBlazer 7",  category:"Mountain", price:1599, tag:null,          image:'images/39.jpeg', featured:false
     },
  {
     id:21, name:"Velox Sprint",   category:"Road",     price:1850, tag:"New",         image:'images/40.jpeg', featured:false 
    },
  {
     id:22, name:"Commuter Elite", category:"City",     price:649,  tag:null,          image:'images/41.jpeg', featured:false
     },
  { 
    id:23, name:"Dirt King 9",    category:"Mountain", price:1199, tag:"Sale",        image:'images/42.jpeg', featured:false
   },
   { 
    id:24, name:"Commuter Elite", category:"City",     price:649,  tag:null,          image:'images/8.jpeg', featured:false 
  },
  { 
    id:25, name:"Zephyr Light",   category:"Road",     price:3199, tag:"Premium",     image:'images/43.jpeg', featured:false 
  }
];


//  DYNAMIC BACKGROUND IMAGE CYCLING (changes every 20 seconds)
/*const bgImages = {
  home : [
    'images/4.jpeg',
    'images/44.jpeg',
    'images/3.jpeg',
  ],
  gallery: [
    'images/4.jpeg',
    'images/44.jpeg',
    'images/3.jpeg',
  ],
  about: [
    'images/4.jpeg',
    'images/44.jpeg',
    'images/3.jpeg',
  ],
  contact: [
    'images/1.jpeg',
    'images/2.jpeg',
    'images/3.jpeg',
  ],
};
*/
function initBgCycle() {
  // Detect which page we're on from the body data-page attribute
  const page = document.body.dataset.page;
  if (typeof bgImages === 'undefined') return; // no background set
  const images = bgImages[page];
  if (!images || images.length <= 1) return;

  const bgEl = document.getElementById('pageBg');
  if (!bgEl) return;

  let index = 0;

  // Create two layers for crossfade effect
  bgEl.innerHTML = `
    <div class="bg-layer bg-layer-a active" style="background-image:url('${images[0]}')"></div>
    <div class="bg-layer bg-layer-b"        style="background-image:url('${images[1]}')"></div>
  `;

  setInterval(() => {
    const layerA = bgEl.querySelector('.bg-layer-a');
    const layerB = bgEl.querySelector('.bg-layer-b');

    index = (index + 1) % images.length;
    const nextIndex = (index + 1) % images.length;

    // The inactive layer loads the next image, then fades in
    if (layerA.classList.contains('active')) {
      layerB.style.backgroundImage = `url('${images[index]}')`;
      layerA.classList.remove('active');
      layerB.classList.add('active');
      // Preload next
      layerA.style.backgroundImage = `url('${images[nextIndex]}')`;
    } else {
      layerA.style.backgroundImage = `url('${images[index]}')`;
      layerB.classList.remove('active');
      layerA.classList.add('active');
      layerB.style.backgroundImage = `url('${images[nextIndex]}')`;
    }
  }, 5000); // ← change this number to adjust interval (ms)
}


function bikeSVG(size = 48) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="currentColor">
    <circle cx="20" cy="44" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
    <circle cx="44" cy="44" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
    <path d="M20 44 L28 20 L36 28 L44 20 L44 44" fill="none" stroke="currentColor" stroke-width="2"/>
  </svg>`;
}

const whatsappNumber = '+254715830311'; // WhatsApp number (can include +, spaces, dashes)

function productCardHTML(p) {
  const imgContent = p.image
    ? `<img src="${p.image}" alt="${p.name}">`
    : `<div class="pcard-placeholder">
        ${bikeSVG()}
        <span>${p.name}</span>
        <small>Set image: "1.jpeg" in main.js</small>
      </div>`;

  return `
  <div class="product-card" data-cat="${p.category}">
    <div class="product-img-wrap">
      ${imgContent}
      ${p.tag ? `<div class="product-tag">${p.tag}</div>` : ''}
    </div>
    <div class="product-info">
      <div class="product-cat">${p.category}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-price">$${p.price.toLocaleString()}</div>
      <button class="order-btn" onclick="orderViaWhatsApp(${p.id})">Order via WhatsApp</button>
    </div>
  </div>`;
}

function orderViaWhatsApp(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const message = `Hi! I would like to order the following item:\n` +
    `• ${product.name}\n` +
    `• Category: ${product.category}\n` +
    `• Price: $${product.price.toLocaleString()}\n\n` +
    `Please let me know the next steps.`;

  const phone = whatsappNumber.replace(/\D/g, ''); // strip +, spaces, dashes
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}


//  RENDER FUNCTIONS

/* Home page — featured products only */
function renderFeatured() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  grid.innerHTML = products.filter(p => p.featured).map(productCardHTML).join('');
}

/** Gallery page — all products */
function renderAll() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  grid.innerHTML = products.map(productCardHTML).join('');
}

/** Gallery filter by category */
function filterProducts(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.product-card').forEach(card => {
    card.classList.toggle('hidden', cat !== 'all' && card.dataset.cat !== cat);
  });
}

