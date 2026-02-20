
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
    "preload": [
      "chunk-WMBNRAW6.js"
    ],
    "route": "/4_Lilly/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLX3TGKR.js"
    ],
    "route": "/4_Lilly/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PWAJQLBA.js"
    ],
    "route": "/4_Lilly/schedule"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 922, hash: '5790c94a33defda2ae07ba7422f829ae5e21dace763a213700ff67f18a724423', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1157, hash: 'f1ed00196e0421b64804059d5b376452fd42ef010e73c8e264263f5e51ca5e5b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4969, hash: 'c0cb429e73844c318970e47c6f2667fae091d9da0bd632e60d5d450743c61505', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 3336, hash: '15a66c888a23b9a769eed61157ac99c43dfbbc2b16a5a1b1a4da68d19b7bf2ff', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 3399, hash: 'c1a0bdaf874bae6d9b8e5f2a94372386d7c547f9032690b0f5a6addf017887c5', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'schedule/index.html': {size: 5226, hash: 'fa29a573230619779041f94be98ca760154581b4bc1e757e254d08eb4d5f800b', text: () => import('./assets-chunks/schedule_index_html.mjs').then(m => m.default)},
    'styles-4XTPWUTH.css': {size: 204, hash: 'tsbcAzHP7dM', text: () => import('./assets-chunks/styles-4XTPWUTH_css.mjs').then(m => m.default)}
  },
};
