import { useState } from 'react';
import './ProductCard.css';
import MarketplaceBadgeRotator from './MarketplaceBadgeRotator';

const STAR_PATH = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";

function Stars({ rating = 0 }) {
  return (
    <span className="pc-stars" aria-label={`${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= Math.floor(rating);
        const half = !filled && i === Math.ceil(rating) && (rating % 1) >= 0.25;
        const clipId = `clip-${i}-${rating}`;
        return (
          <svg key={i} className="pc-star-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {half && (
              <defs>
                <clipPath id={clipId}>
                  <rect x="0" y="0" width="12" height="24" />
                </clipPath>
              </defs>
            )}
            <path d={STAR_PATH} fill="#e0e0e0" />
            {(filled || half) && (
              <path d={STAR_PATH} fill="#F5A900" clipPath={half ? `url(#${clipId})` : undefined} />
            )}
          </svg>
        );
      })}
    </span>
  );
}

const ProductCard = ({ product, onClick }) => {
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const { image, title, currentPrice, imageAlt, rating = 0, reviewCount = 0 } = product;

  const priceFormatted = currentPrice
    ? `Rs. ${Number(currentPrice).toLocaleString('en-IN')}.00`
    : 'Rs. 299.00';

  return (
    <div className="pc-card">
      <div className="pc-img-wrap" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
        <img
          src={image}
          alt={imageAlt || title}
          className="pc-img"
          loading="lazy"
        />
        <div className="pc-img-market-overlay">
          <MarketplaceBadgeRotator />
        </div>
      </div>

      <div className="pc-info">
        <h3 className="pc-title">{title}</h3>

        {rating > 0 && (
          <div className="pc-rating-row">
            <Stars rating={rating} />
            <span className="pc-review-count">({reviewCount})</span>
          </div>
        )}

        <p className="pc-price">{priceFormatted}</p>

        <div className="pc-actions">
          <div className="pc-qty">
            <button className="pc-qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
            <span className="pc-qty-val">{qty}</span>
            <button className="pc-qty-btn" onClick={() => setQty(q => q + 1)}>+</button>
          </div>

          <button className="pc-add-to-cart">
            Add to cart
            <span className="pc-cart-plus">+</span>
          </button>
        </div>

        <button className="pc-buy-now">Buy it now</button>
      </div>
    </div>
  );
};

export default ProductCard;
