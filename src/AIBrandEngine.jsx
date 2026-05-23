import { useId, useState } from 'react';
import './AIBrandEngine.css';

const SHOP_URL = 'https://mammamills.com/';
const INSTAGRAM_URL = 'https://www.instagram.com/mammamills/';

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
      title: 'Clean ingredients',
      iconType: 'ingredients',
      content: [
        {
          label: 'Sprouted grains',
          value: '100% organic',
          description: 'Sprouting breaks down phytic acid, improving nutrient absorption and making digestion easier for babies.',
        },
        {
          label: 'Dairy-free & vegan',
          value: 'No hidden allergens',
          description: 'Formulated without milk solids, making it suitable for babies with dairy sensitivity.',
        },
        {
          label: 'No additives',
          value: 'Zero preservatives',
          description: 'No added sugar, no artificial flavours, no preservatives — just real food for real little ones.',
        },
      ],
      highlights: [
        'Every batch is made with traceable, organic ingredients.',
        'Sprouting increases iron, calcium, and fibre bioavailability naturally.',
        'Approved by paediatricians for babies from 6 months onwards.',
      ],
    },
    stages: {
      title: 'Feeding stages',
      iconType: 'stages',
      content: [
        {
          label: '6–8 months',
          value: 'First solids',
          description: 'Smooth porridge consistency — ideal for babies just starting their weaning journey.',
        },
        {
          label: '9–12 months',
          value: 'Growing appetite',
          description: 'Thicker texture supports developing chewing skills and growing nutritional needs.',
        },
        {
          label: '12–24 months',
          value: 'Toddler staple',
          description: 'High protein and iron content supports active toddlers through the day.',
        },
      ],
      highlights: [
        'One product that works across the full 6–24 month weaning window.',
        'Texture can be adjusted by adding more or less water to suit your baby\'s stage.',
        'Consistent nutrition that grows with your baby\'s changing needs.',
      ],
    },
    gifting: {
      title: 'Gift for new mums',
      iconType: 'gifting',
      content: [
        {
          label: 'Who it\'s for',
          value: 'New & expecting mums',
          description: 'A thoughtful, practical gift for any mum starting or continuing the weaning journey.',
        },
        {
          label: 'Occasions',
          value: 'Baby shower & more',
          description: 'Baby showers, naming ceremonies, or just a caring gesture — Mamma Mills is always welcome.',
        },
        {
          label: 'Presentation',
          value: 'Clean packaging',
          description: 'Arrives securely sealed and neatly packaged — ready to gift without extra wrapping.',
        },
      ],
      highlights: [
        'Mums love receiving something that is actually useful and healthy.',
        'Paediatrician-friendly ingredient list — no guilt, no guessing.',
        'A brand trusted by thousands of Indian families.',
      ],
    },
    preparation: {
      title: 'How to prepare',
      iconType: 'preparation',
      content: [
        {
          label: 'Cook time',
          value: 'Under 2 minutes',
          description: 'Add 2–3 tablespoons of powder to warm water or breast milk, stir well, and serve.',
        },
        {
          label: 'Consistency',
          value: 'Adjustable',
          description: 'Add more liquid for a thinner porridge (early stages) or less for a thicker feed (older babies).',
        },
        {
          label: 'Storage',
          value: 'Cool & dry place',
          description: 'Once opened, store in an airtight container away from moisture. Use within 30 days of opening.',
        },
      ],
      highlights: [
        'No cooking on the stove needed — just warm water and stir.',
        'Can be mixed with breast milk or formula for added nutrition.',
        'Ideal for travel — lightweight, compact, and easy to prepare anywhere.',
      ],
    },
    shipping: {
      title: 'Delivery & returns',
      iconType: 'shipping',
      content: [
        {
          label: 'Pan-India delivery',
          value: 'Trackable',
          description: 'Every order ships with real-time tracking — check estimated delivery at checkout for your PIN.',
        },
        {
          label: 'COD available',
          value: 'Pay on delivery',
          description: 'Cash on delivery available at checkout for eligible pincodes across India.',
        },
        {
          label: '7-day returns',
          value: 'Easy returns',
          description: 'Not satisfied? Raise a return within 7 days of delivery. Check policy page for full details.',
        },
      ],
      highlights: [
        'Orders are sealed and packed to preserve freshness during transit.',
        'Free shipping available on orders above a minimum value — check cart for current offer.',
        'Dispatch within 1–2 business days of order confirmation.',
      ],
    },
    brand: {
      title: 'Mamma Mills',
      iconType: 'brand',
      content: [
        {
          label: 'Brand promise',
          value: 'Not just food, it is nutrition',
          description: 'Mamma Mills exists to make every baby\'s first food honest, organic, and truly nourishing.',
        },
        {
          label: 'Products',
          value: 'Sprouted baby foods',
          description: 'Channa & Dalia, Ragi Idli Mix, and more — all crafted for babies aged 6 to 24 months.',
        },
        {
          label: 'Community',
          value: '@mammamills',
          description: 'Weaning tips, real mum stories, and new product drops on Instagram.',
        },
      ],
      highlights: [
        'Trusted by thousands of Indian families for clean, sprouted baby nutrition.',
        'FSSAI certified and paediatrician recommended.',
        'A brand built by mums, for mums — food with a soul, crafted with purpose.',
      ],
    },
  };

  const graphData = {
    satisfaction: {
      label: 'Parent satisfaction',
      data: [82, 85, 87, 89, 90, 92, 94],
      color: '#F5A900',
    },
    nutrition: {
      label: 'Nutritional trust',
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
    { id: 'nutrition', label: 'Nutrition' },
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
          <h5 className="chart-title">Mamma Mills customer trust snapshot</h5>
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
          Illustrative trend only — not live data. Themes: nutrition trust, parent satisfaction, and repeat purchases.
        </p>
      </div>
    );
  };

  const tabs = [
    { id: 'metrics', label: 'Signals', iconType: 'metrics' },
    { id: 'ingredients', label: 'Ingredients', iconType: 'ingredients' },
    { id: 'stages', label: 'Stages', iconType: 'stages' },
    { id: 'gifting', label: 'Gifts', iconType: 'gifting' },
    { id: 'preparation', label: 'Prep', iconType: 'preparation' },
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
            aria-label="Open nutrition insights for Mamma Mills"
          >
            <div className="trigger-icon">
              <span className="ai-gemini-rotator" aria-hidden="true">
                <PremiumAIIcon gradientId={sparkleGrad} className="ai-gemini-icon" size={36} />
              </span>
            </div>
            {!compact && (
              <div className="trigger-text">
                <span className="trigger-label">Nutrition insights</span>
                <span className="trigger-sublabel">Mamma Mills</span>
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
        <div className="ai-brand-engine-panel" role="dialog" aria-label="Mamma Mills nutrition insights">
          <div className="panel-header">
            <div className="header-left">
              <div className="header-icon">
                <PremiumAIIcon gradientId={`${baseId}-head`} style={{ width: 36, height: 36 }} size={36} />
              </div>
              <div>
                <h3 className="panel-title">AI Brand Engine</h3>
                <p className="panel-subtitle">Mamma Mills · not just food, it is nutrition</p>
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
                    Shop Mamma Mills
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
              <span>Curated for baby nutrition & weaning</span>
            </div>
            <p className="footer-note">
              For nutrition guidance — always consult your paediatrician. Summaries are for information only. Check product pages and policies on mammamills.com before you buy.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AIBrandEngine;
