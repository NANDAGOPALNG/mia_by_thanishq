import React, { useState, useEffect } from 'react';
import ShopifyHeader from './ShopifyHeader';
import ShopifyFooter from './ShopifyFooter';
import ProductCard from './ProductCard';
import AIBrandEngine from './AIBrandEngine';
import LiveUserCounter from './LiveUserCounter';
import ActivityBanner from './ActivityBanner';
import { bestSellerProducts } from './scrapshalaBestSellers';
import InstagramTrustCarousel from './InstagramTrustCarousel';
import PhotoGallery from './PhotoGallery';
import { INSTAGRAM_POST_URLS } from './instagramPosts';
import './HomePage.css';


const BRAND_NAME = 'Mia by Tanishq';
const MIA_INSTAGRAM_URL = 'https://www.instagram.com/miabytanishq/';




const HomePage = ({ onProductClick }) => {

  const [isScrolled, setIsScrolled] = useState(false);
  

  
  // Instagram Section - Fresh Implementation
  const [showInstagramModal, setShowInstagramModal] = useState(false);
  const [instagramLoading, setInstagramLoading] = useState(true);
  
  const instagramPosts = INSTAGRAM_POST_URLS;

  // Load Instagram embed script
  useEffect(() => {
    const scriptId = 'instagram-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Process embeds when modal opens and for carousel
  useEffect(() => {
    const processEmbeds = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    };

    let modalTimers = [];
    let fallbackTimer = null;

    if (showInstagramModal) {
      setTimeout(() => setInstagramLoading(true), 0);
      
      // Process embeds with delays to ensure DOM is ready
      modalTimers = [
        setTimeout(processEmbeds, 500),
        setTimeout(processEmbeds, 1500),
        setTimeout(processEmbeds, 2500)
      ];

      // Hide loading after embeds are processed
      setTimeout(() => {
        setInstagramLoading(false);
      }, 2000);

      // Fallback: hide loading after max wait time
      fallbackTimer = setTimeout(() => {
        setInstagramLoading(false);
      }, 5000);
    } else {
      setTimeout(() => setInstagramLoading(true), 0);
    }

    // Process embeds for carousel on mount and when Instagram script loads
    const carouselTimers = [
      setTimeout(processEmbeds, 1000),
      setTimeout(processEmbeds, 2000),
      setTimeout(processEmbeds, 3000),
    ];

    return () => {
      modalTimers.forEach(timer => clearTimeout(timer));
      if (fallbackTimer) clearTimeout(fallbackTimer);
      carouselTimers.forEach(timer => clearTimeout(timer));
    };
  }, [showInstagramModal]);


  // Scroll detection for live counter
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ShopifyHeader />
      
      {/* Live User Counter */}
      <LiveUserCounter className={`fixed left-4 z-50 transition-all duration-300 ${isScrolled ? 'top-4' : 'top-[46px]'}`} />
      <InstagramTrustCarousel instagramUrl={MIA_INSTAGRAM_URL} followersLabel="1M" />

      {/* Big Deals Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="w-full px-4">
          <div className="flex items-center justify-between mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Big Deals</h2>
            <button className="text-base md:text-lg font-bold text-gray-900 hover:opacity-70 transition-opacity">View All</button>
          </div>
          <div className="overflow-x-auto -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-6 md:gap-8 min-w-max pb-2">
              {bestSellerProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 cursor-pointer"
                  style={{ width: '300px' }}
                  onClick={() => onProductClick && onProductClick(product)}
                >
                  <ProductCard
                    product={product}
                    onClick={() => onProductClick && onProductClick(product)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mia photo gallery (replaces video sections) */}
      <PhotoGallery title="Shop the Look" subtitle="Lightweight gold & diamond jewellery for every day — and every festive moment." />


      {/* Instagram Modal */}
      {showInstagramModal && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-[10000] p-4 overflow-y-auto"
          onClick={() => setShowInstagramModal(false)}
        >
          <div 
            className="relative w-full md:w-2/5 max-w-4xl h-full md:h-[90vh] bg-gray-50 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 bg-black bg-opacity-60 border-none rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-200 z-[10001] hover:bg-opacity-80"
              onClick={() => setShowInstagramModal(false)}
              aria-label="Close Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="h-full flex flex-col overflow-hidden">
              <div className="text-center border-b border-gray-200 flex-shrink-0 py-4 px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-2 m-0">Our Instagram</h2>
                <p className="text-base text-gray-600 m-0">Check out our latest posts and reels</p>
              </div>
              <div className="flex-1 overflow-y-auto py-4 px-4">
                <div className="max-w-xs mx-auto w-full">
                  {/* Loading Skeleton */}
                  {instagramLoading && (
                    <div className="space-y-6">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={`skeleton-${i}`}
                          className="w-full bg-gray-200 rounded-lg overflow-hidden animate-pulse"
                          style={{ height: '380px' }}
                        >
                          <div className="h-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200"></div>
                        </div>
                      ))}
                      <div className="flex items-center justify-center py-4">
                        <div className="flex items-center gap-2 text-gray-500">
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Loading Instagram posts...</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Instagram Posts */}
                  <div style={{ display: instagramLoading ? 'none' : 'block' }}>
                    {instagramPosts.map((url) => (
                      <div
                        key={url}
                        className="w-full flex justify-center mb-4 last:mb-0"
                      >
                        <blockquote 
                          className="instagram-media" 
                          data-instgrm-permalink={url}
                          data-instgrm-version="14"
                          style={{ maxWidth: '260px', width: '100%' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <ShopifyFooter brandName={BRAND_NAME} />
      <AIBrandEngine compact />
      <ActivityBanner />
    </div>
  );
};

export default HomePage;

