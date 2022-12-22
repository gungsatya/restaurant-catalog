import CacheHelper from './utils/cache-helper'

const version = '1.0.0'
const CACHE_NAME = `resto-catalog-${version}`
const assetsToCache = [
  './',
  './icons/apple-touch-icon.png',
  './icons/favicon.ico',
  './icons/icon-192-maskable.png',
  './icons/icon-192.png',
  './icons/icon-512-maskable.png',
  './icons/icon-512.png',
  './images/heros/hero-image_2.jpg',
  './index.html',
  './app.webmanifest',
  './app.bundle.js',
  './app.bundle.js.map',
  './sw.bundle.js',
  './sw.bundle.js.map'
]

self.addEventListener('install', (event) => {
  self.skipWaiting()
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache())
})

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request))
})

export { CACHE_NAME }
