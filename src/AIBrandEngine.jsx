import { useId, useState } from 'react';
import './AIBrandEngine.css';

const SHOP_URL = 'https://www.miabytanishq.com/';
const INSTAGRAM_URL = 'https://www.instagram.com/miabytanishq/';

function PremiumAIIcon({ gradientId, className, style, size = 40 }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" />
          <stop offset="0.45" stopColor="#F5A900" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <path
        d="M24 12C25.6 18.3 29.7 22.4 36 24C29.7 25.6 25.6 29.7 24 36C22.4 29.7 18.3 25.6 12 24C18.3 22.4 22.4 18.3 24 12Z"
        fill={`url(#${gradientId})`}
      />
      <path
        d="M16.3 28.7C16.8 30.5 18 31.7 19.8 32.2C18 32.7 16.8 33.9 16.3 35.7C15.8 33.9 14.6 32.7 12.8 32.2C14.6 31.7 15.8 30.5 16.3 28.7Z"
        fill="#FFFFFF"
        opacity="0.9"
      />
    </svg>
  );
}

function AIBrandEngine({ showExtras = true, compact = false }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('metrics');
  const [activeMetric, setActiveMetric] = useState('satisfaction');
  const baseId = useId().replace(/:/g, '');

  if (!showExtras) return null;

  const getIcon = (type) => {
    const icons = {
      ingredients: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      stages: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      gifting: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M20 12V20H4V12M2 7H22V12H2V7ZM12 7V20M12 7H7.5C6.12 7 5 5.88 5 4.5C5 3.12 6.12 2 7.5 2C10.5 2 12 7 12 7ZM12 7H16.5C17.88 7 19 5.88 19 4.5C19 3.12 17.88 2 16.5 2C13.5 2 12 7 12 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      preparation: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 3L4 7V11C4 16.55 7.16 21.74 12 23C16.84 21.74 20 16.55 20 11V7L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      shipping: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M1 3H17L22 8L17 13H1V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2" />
          <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      brand: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M8 12L10.5 14.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      metrics: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 16L12 11L16 15L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    };
    return icons[type] || icons.metrics;
  };

  const brandInfo = {
    ingredients: {
      title: 'Metal & diamonds',
      iconType: 'ingredients',
      content: [
        {
          label: 'Gold purity',
          value: '9KT · 14KT · 18KT',
          description: 'Lightweight, durable gold alloys that hold diamonds securely and are made for everyday wear.',
        },
        {
          label: 'Diamonds',
          value: 'Certified natural',
          description: 'Every diamond is quality-checked for cut, colour and clarity and comes with a certificate.',
        },
        {
          label: 'Hallmark',
          value: 'BIS hallmarked',
          description: 'All gold jewellery is BIS hallmarked, so you always know exactly what you are buying.',
        },
      ],
      highlights: [
        'Backed by the trust of Tanishq — a TATA product.',
        'Yellow, rose and white gold options across most designs.',
        'Fine finishing designed to sit comfortably all day.',
      ],
    },
    stages: {
      title: 'Collections',
      iconType: 'stages',
      content: [
        {
          label: 'Starburst',
          value: 'Celestial sparkle',
          description: 'Star and moon motifs with diamonds that catch the light from every angle.',
        },
        {
          label: 'Aurum',
          value: 'Modern gold',
          description: 'Bold yet light gold silhouettes that move from desk to dinner.',
        },
        {
          label: 'Aspire',
          value: 'Everyday minimal',
          description: 'Delicate rings, studs and pendants for a polished daily look.',
        },
      ],
      highlights: [
        'New collections drop through the year — Zen, Modern Polki, Sunkissed and more.',
        'Mix and match pieces across collections to build your own stack.',
        'Designs for every budget, starting from gifting-friendly price points.',
      ],
    },
    gifting: {
      title: 'Gifting',
      iconType: 'gifting',
      content: [
        {
          label: 'Who it\'s for',
          value: 'Her, him & you',
          description: 'Rings, studs, bracelets and pendants that make a meaningful gift for anyone you love.',
        },
        {
          label: 'Occasions',
          value: 'Festive & milestones',
          description: 'Diwali, Dhanteras, birthdays, anniversaries and Raksha Bandhan — Mia is always welcome.',
        },
        {
          label: 'Presentation',
          value: 'Gift-ready box',
          description: 'Arrives in signature Mia packaging with a certificate — ready to gift. Gift cards also available.',
        },
      ],
      highlights: [
        'A curated Gifting Range across price points.',
        'Lifetime exchange means the gift keeps its value.',
        'Gift cards let them choose their own sparkle.',
      ],
    },
    preparation: {
      title: 'Care & exchange',
      iconType: 'preparation',
      content: [
        {
          label: 'Daily care',
          value: 'Gentle wipe',
          description: 'Wipe with a soft cloth after wearing; avoid perfumes, lotions and harsh chemicals.',
        },
        {
          label: 'Storage',
          value: 'Separate pouch',
          description: 'Store each piece separately in its box or pouch to prevent scratches.',
        },
        {
          label: 'Exchange',
          value: 'Lifetime exchange',
          description: 'Exchange your Mia jewellery at any time, as per the Mia lifetime exchange policy.',
        },
      ],
      highlights: [
        'Gold Exchange Program lets you upgrade old gold to new Mia designs.',
        'Jewellery Purchase Plan helps you save towards your next piece.',
        'Find a Mia store near you for cleaning and servicing.',
      ],
    },
    shipping: {
      title: 'Delivery & returns',
      iconType: 'shipping',
      content: [
        {
          label: 'Pan-India delivery',
          value: 'Insured & tracked',
          description: 'Every order ships fully insured with real-time tracking — check delivery dates for your PIN at checkout.',
        },
        {
          label: 'International',
          value: 'Ships abroad',
          description: 'International shipping is available to select countries.',
        },
        {
          label: 'Returns',
          value: 'Easy returns',
          description: 'Not happy? Raise a return within the return window. See the returns policy for details.',
        },
      ],
      highlights: [
        'Tamper-proof, discreet packaging for every order.',
        'Track your order anytime from your account.',
        'Customer care at 1800-266-0123, plus Write to Us and chat support.',
      ],
    },
    brand: {
      title: 'Mia by Tanishq',
      iconType: 'brand',
      content: [
        {
          label: 'Brand promise',
          value: 'A TATA product',
          description: 'Mia by Tanishq makes fine gold and diamond jewellery for the modern woman — light, wearable and stylish.',
        },
        {
          label: 'Products',
          value: 'Gold & diamond',
          description: 'Rings, earrings, necklaces, pendants, bracelets, bangles, mangalsutra and more.',
        },
        {
          label: 'Community',
          value: '@miabytanishq',
          description: 'Styling tips, new collection drops and festive offers on Instagram.',
        },
      ],
      highlights: [
        'Trusted by millions of women across India.',
        'BIS hallmarked gold and certified diamonds.',
        'Shop online or at Mia stores across the country.',
      ],
    },
  };

  const graphData = {
    satisfaction: {
      label: 'Customer satisfaction',
      data: [82, 85, 87, 89, 90, 92, 94],
      color: '#F5A900',
    },
    nutrition: {
      label: 'Quality trust',
      data: [78, 81, 84, 86, 88, 90, 93],
      color: '#FBBF24',
    },
    repeat: {
      label: 'Repeat purchases',
      data: [65, 68, 72, 75, 78, 81, 85],
      color: '#D97706',
    },
    delivery: {
      label: 'Delivery experience',
      data: [85, 87, 89, 90, 91, 93, 95],
      color: '#F59E0B',
    },
    rating: {
      label: 'Avg. rating',
      data: [4.4, 4.5, 4.6, 4.6, 4.7, 4.8, 4.8],
      color: '#F5A900',
    },
    support: {
      label: 'Post-purchase support',
      data: [80, 83, 85, 87, 89, 91, 93],
      color: '#D97706',
    },
  };

  const metrics = [
    { id: 'satisfaction', label: 'Happy' },
    { id: 'nutrition', label: 'Quality' },
    { id: 'repeat', label: 'Repeat' },
    { id: 'delivery', label: 'Ship' },
    { id: 'rating', label: 'Stars' },
    { id: 'support', label: 'Support' },
  ];

  const currentMetric = graphData[activeMetric];
  const currentValue = currentMetric.data[currentMetric.data.length - 1];
  const percentage = typeof currentValue === 'number' ? currentValue.toFixed(1) : currentValue;
  const displayValue =
    activeMetric === 'rating' && typeof currentValue === 'number' && currentValue < 10
      ? `${currentValue.toFixed(1)}/5`
      : `${percentage}%`;

  const renderChart = () => {
    const data = currentMetric.data;
    const maxValue = Math.max(...data) * 1.1;
    const minValue = Math.min(...data) * 0.9;
    const range = maxValue - minValue || 1;
    const width = 340;
    const height = 160;
    const padding = { top: 15, right: 15, bottom: 35, left: 45 };
    const gradId = `${baseId}-chart-${activeMetric}`;

    const points = data.map((value, index) => {
      const x = padding.left + (index / (data.length - 1)) * (width - padding.left - padding.right);
      const y =
        padding.top +
        (height - padding.top - padding.bottom) -
        ((value - minValue) / range) * (height - padding.top - padding.bottom);
      return { x, y, value };
    });

    const linePath = points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');
    const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - padding.bottom} L ${points[0].x} ${height - padding.bottom} Z`;

    return (
      <div className="chart-container">
        <div className="chart-header">
          <h5 className="chart-title">Mia customer trust snapshot</h5>
          <div className="chart-value">{displayValue}</div>
        </div>
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="chart-svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={currentMetric.color} stopOpacity="0.45" />
              <stop offset="100%" stopColor={currentMetric.color} stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill={`url(#${gradId})`} opacity="0.35" />
          {[0, 1, 2, 3, 4].map((i) => {
            const y = padding.top + (i / 4) * (height - padding.top - padding.bottom);
            return (
              <line key={i} x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke="#e8eaed" strokeWidth="1" strokeDasharray="2,2" />
            );
          })}
          <path d={linePath} fill="none" stroke={currentMetric.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {points.map((point, index) => (
            <circle key={index} cx={point.x} cy={point.y} r="4" fill={currentMetric.color} stroke="white" strokeWidth="2" />
          ))}
          {points.map((point, index) => (
            <text key={`lbl-${index}`} x={point.x} y={height - padding.bottom + 20} textAnchor="middle" fill="#666" fontSize="10" fontWeight="500">
              W{index + 1}
            </text>
          ))}
        </svg>
        <div className="metric-filters">
          {metrics.map((metric) => (
            <button
              key={metric.id}
              type="button"
              className={`metric-filter-btn ${activeMetric === metric.id ? 'active' : ''}`}
              onClick={() => setActiveMetric(metric.id)}
            >
              {metric.label}
            </button>
          ))}
        </div>
        <p className="chart-footnote">
          Illustrative trend only — not live data. Themes: quality trust, customer satisfaction, and repeat purchases.
        </p>
      </div>
    );
  };

  const tabs = [
    { id: 'metrics', label: 'Signals', iconType: 'metrics' },
    { id: 'ingredients', label: 'Metal', iconType: 'ingredients' },
    { id: 'stages', label: 'Collections', iconType: 'stages' },
    { id: 'gifting', label: 'Gifts', iconType: 'gifting' },
    { id: 'preparation', label: 'Care', iconType: 'preparation' },
    { id: 'shipping', label: 'Ship', iconType: 'shipping' },
    { id: 'brand', label: 'Brand', iconType: 'brand' },
  ];

  const currentInfo = brandInfo[activeTab];
  const sparkleGrad = `${baseId}-sparkle`;

  return (
    <div className={`ai-brand-engine ${isExpanded ? 'expanded' : ''}`}>
      {!isExpanded ? (
        <div className="ai-brand-engine-trigger-wrap">
          <button
            type="button"
            className={`ai-brand-engine-trigger${compact ? ' abe-compact' : ''}`}
            onClick={() => setIsExpanded(true)}
            aria-label="Open jewellery insights for Mia by Tanishq"
          >
            <div className="trigger-icon">
              <span className="ai-gemini-rotator" aria-hidden="true">
                <PremiumAIIcon gradientId={sparkleGrad} className="ai-gemini-icon" size={36} />
              </span>
            </div>
            {!compact && (
              <div className="trigger-text">
                <span className="trigger-label">Jewellery insights</span>
                <span className="trigger-sublabel">Mia by Tanishq</span>
              </div>
            )}
            <span className="trigger-badge">AI</span>
          </button>
          {!compact && (
            <div className="ai-brand-engine-tooltip" role="note">
              Ingredients, feeding stages & brand insights — tap to explore
              <span className="ai-brand-engine-tooltip__arrow" aria-hidden />
            </div>
          )}
        </div>
      ) : (
        <div className="ai-brand-engine-panel" role="dialog" aria-label="Mia by Tanishq jewellery insights">
          <div className="panel-header">
            <div className="header-left">
              <div className="header-icon">
                <PremiumAIIcon gradientId={`${baseId}-head`} style={{ width: 36, height: 36 }} size={36} />
              </div>
              <div>
                <h3 className="panel-title">AI Brand Engine</h3>
                <p className="panel-subtitle">Mia by Tanishq · a TATA product</p>
              </div>
            </div>
            <button type="button" className="panel-close-btn" onClick={() => setIsExpanded(false)} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="panel-tabs" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{getIcon(tab.iconType)}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="panel-content">
            {activeTab === 'metrics' ? (
              renderChart()
            ) : currentInfo ? (
              <>
                <div className="content-header">
                  <div className="content-icon">{getIcon(currentInfo.iconType)}</div>
                  <h4 className="content-title">{currentInfo.title}</h4>
                </div>
                <div className="stats-grid">
                  {currentInfo.content.map((item) => (
                    <div key={item.label} className="stat-card">
                      <div className="stat-value">{item.value}</div>
                      <div className="stat-label">{item.label}</div>
                      <div className="stat-description">{item.description}</div>
                    </div>
                  ))}
                </div>
                <div className="highlights-section">
                  <h5 className="highlights-title">Why it matters</h5>
                  <ul className="highlights-list">
                    {currentInfo.highlights.map((highlight) => (
                      <li key={highlight} className="highlight-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="highlight-icon">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="panel-content-cta">
                  <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="abe-cta abe-cta--primary">
                    Shop Mia
                  </a>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="abe-cta abe-cta--ghost">
                    Instagram
                  </a>
                </div>
              </>
            ) : null}
          </div>

          <div className="panel-footer">
            <div className="footer-badge">
              <span className="footer-badge-icon" aria-hidden>
                <PremiumAIIcon gradientId={`${baseId}-foot`} size={18} />
              </span>
              <span>Curated for gold & diamond jewellery</span>
            </div>
            <p className="footer-note">
              Summaries are for information only. Check product pages and policies on miabytanishq.com before you buy.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AIBrandEngine;
