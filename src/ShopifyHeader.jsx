import headerLap from './assets/header_lap.png';
import headerPhone from './assets/header_phone.png';
import HeaderReels from './HeaderReels';

const ShopifyHeader = ({ onProductClick }) => {
  return (
    <header className="w-full">
      <img
        src={headerLap}
        alt="Header"
        className="hidden md:block w-full h-auto"
      />
      <img
        src={headerPhone}
        alt="Header"
        className="block md:hidden w-full h-auto"
      />
      <HeaderReels onViewProduct={onProductClick} />
    </header>
  );
};

export default ShopifyHeader;
