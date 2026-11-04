import { useEffect, useMemo, useState } from 'react';

const AMAZON_LOGO = 'https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg';
const FLIPKART_LOGO = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxggIt5CPQqUxKi3eW4QhNIKv5eH5LdhRwMA&s';

const StarRow = () => (
  <div className="flex items-center gap-0.5">
    {[1,2,3,4,5].map((i) => (
      <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#F5A900">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const LeafIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#16a34a" aria-hidden>
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2" />
  </svg>
);

function RatingBadge({ value }) {
  return (
    <div className="flex items-center gap-1 px-2 py-0.5 rounded-md shrink-0" style={{ backgroundColor: '#F5A900' }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="#fff" aria-hidden>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <span className="font-bold text-white" style={{ fontSize: '11px' }}>{value}</span>
    </div>
  );
}

export default function InstagramTrustCarousel({
  instagramUrl = 'https://www.instagram.com/miabytanishq/',
  followersLabel = '1M',
  shopUrl = 'https://www.miabytanishq.com/',
  amazonUrl = 'https://www.amazon.in/',
  flipkartUrl = 'https://www.flipkart.com/',
}) {
  const trustSlides = useMemo(() => [
    {
      key: 'trusted',
      href: shopUrl,
      ariaLabel: 'Trusted by millions — Mia by Tanishq',
      icon: <StarRow />,
      text: 'A TATA Product · Trusted by Millions',
      badge: null,
    },
    {
      key: 'instagram',
      href: instagramUrl,
      ariaLabel: 'Mia by Tanishq on Instagram',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4.5" /><circle cx="17.5" cy="6.5" r="1" fill="#E1306C" stroke="none" />
        </svg>
      ),
      text: `${followersLabel}+ followers · @miabytanishq`,
      badge: null,
    },
    {
      key: 'amazon',
      href: amazonUrl,
      ariaLabel: 'Mia by Tanishq on Amazon India',
      icon: <img src={AMAZON_LOGO} alt="" className="h-4 w-auto object-contain" style={{ maxHeight: '16px' }} />,
      text: '480+ ratings · Amazon India',
      badge: '4.5',
    },
    {
      key: 'flipkart',
      href: flipkartUrl,
      ariaLabel: 'Mia by Tanishq on Flipkart',
      icon: <img src={FLIPKART_LOGO} alt="" className="h-4 w-auto object-contain" style={{ maxHeight: '16px' }} />,
      text: '320+ reviews · Flipkart',
      badge: '4.4',
    },
    {
      key: 'organic',
      href: shopUrl,
      ariaLabel: 'BIS hallmarked gold & certified diamonds — Mia by Tanishq',
      icon: <LeafIcon />,
      text: 'BIS Hallmarked · Certified Diamonds',
      badge: null,
    },
  ], [followersLabel, instagramUrl, shopUrl, amazonUrl, flipkartUrl]);

  const [trustIdx, setTrustIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const n = trustSlides.length;
    const t = setInterval(() => {
      setTrustIdx((i) => (i + 1) % n);
      setAnimKey((k) => k + 1);
    }, 2500);
    return () => clearInterval(t);
  }, [trustSlides.length]);

  const slide = trustSlides[trustIdx];

  return (
    <>
      <style>{`
        @keyframes mammasTrustSlideIn {
          0%   { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0);     opacity: 1; }
        }
        .mammas-trust-slide {
          animation: mammasTrustSlideIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
      <div
        className="fixed right-0 rounded-none px-4 py-2.5 shadow-lg z-30 overflow-hidden border border-gray-200/80 bg-white"
        style={{
          top: '226px',
          transform: 'rotate(270deg)',
          transformOrigin: 'right center',
          minWidth: '230px',
          height: '36px',
        }}
        role="region"
        aria-label="Trust highlights carousel"
      >
        <a
          key={animKey}
          href={slide.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mammas-trust-slide flex items-center gap-2 whitespace-nowrap h-full text-inherit no-underline focus:outline-none"
          aria-label={slide.ariaLabel}
        >
          <span className="shrink-0 flex items-center">{slide.icon}</span>
          <span className="text-xs font-semibold text-gray-900">{slide.text}</span>
          {slide.badge ? <RatingBadge value={slide.badge} /> : null}
        </a>
      </div>
    </>
  );
}
