
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/4_Lilly/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/4_Lilly"
  },
  {
    "renderMode": 2,
    "route": "/4_Lilly/about"
  },
  {
    "renderMode": 2,
    "route": "/4_Lilly/contact"
  },
  {
    "renderMode": 2,
    "route": "/4_Lilly/schedule"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 769, hash: '137bdb242f0ba911594d69322299251194e1c3274e3f5a009824e03915fa57a5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1004, hash: '58573a83e2818512ed6277c96c7e0903ea7ca7044be97cd5d1e98b3c788d0b3b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 3130, hash: 'ab44aa14df1b85198e595f060f9e58ef4c239401e772467c11a889f0c261ba7a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 3202, hash: '04738ae2b7eb888b749f8767833b0525cf66d6a849e313b00d7bae8666e0e62a', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4614, hash: 'a2254ff5679bdc9dc7eb868610b8d3fce8cedcfb9c6536d689848573d099f9d5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'schedule/index.html': {size: 5029, hash: 'fc6507974d97f794c849cece09a3cca0a75ef04bab5f7122a06c173d0150bb7e', text: () => import('./assets-chunks/schedule_index_html.mjs').then(m => m.default)},
    'styles-4XTPWUTH.css': {size: 204, hash: 'tsbcAzHP7dM', text: () => import('./assets-chunks/styles-4XTPWUTH_css.mjs').then(m => m.default)}
  },
};
