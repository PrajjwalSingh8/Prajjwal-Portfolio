import { useMemo, useState } from 'react';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';

const products = [
  { id: 1, name: 'Everyday Backpack', category: 'Accessories', price: 1299, oldPrice: 1599, label: 'BESTSELLER', tone: 'lavender', symbol: '▱', description: 'A clean, lightweight bag for everyday essentials.' },
  { id: 2, name: 'Wireless Headphones', category: 'Tech', price: 2499, oldPrice: 2999, label: 'POPULAR', tone: 'blue', symbol: '◖', description: 'Comfort-first audio for focus, study, and travel.' },
  { id: 3, name: 'Minimal Desk Lamp', category: 'Workspace', price: 899, oldPrice: 1099, label: 'NEW', tone: 'mint', symbol: '◒', description: 'A warm, simple light for a more focused desk.' },
  { id: 4, name: 'Steel Water Bottle', category: 'Accessories', price: 599, oldPrice: 749, label: 'ECO PICK', tone: 'peach', symbol: '▯', description: 'A reusable bottle designed for daily carry.' },
];

const filters = ['All', 'Tech', 'Accessories', 'Workspace'];
const money = (amount) => `₹${amount.toLocaleString('en-IN')}`;

export default function Store() {
  const [category, setCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [notice, setNotice] = useState('');

  const visibleProducts = useMemo(
    () => category === 'All' ? products : products.filter((product) => product.category === category),
    [category],
  );

  function addToCart(product) {
    setCart((current) => [...current, product.id]);
    setNotice(`${product.name} added to your demo cart.`);
  }

  return (
    <main className="store-page">
      <section className="store-hero container">
        <div>
          <span className="eyebrow">PRACTICE PROJECT / E-COMMERCE UI</span>
          <h1>Good design.<br /><span>Everyday essentials.</span></h1>
          <p>A sample storefront built to practise product cards, category filtering, responsive layouts, and interactive cart state.</p>
          <a className="button" href="#shop-products">Explore collection <span>↓</span></a>
        </div>
        <div className="store-hero-art"><div className="hero-product-shape">✳</div><span className="store-sticker">CURATED<br />FOR YOU</span><span className="store-art-caption">SIMPLE THINGS.<br />BETTER DAYS.</span></div>
      </section>

      <section className="container store-products" id="shop-products">
        <div className="store-section-top"><div><span className="eyebrow">THE COLLECTION</span><h2>Find your everyday favourite.</h2></div><div className="cart-indicator">♧ <strong>{cart.length}</strong> items in cart</div></div>
        <div className="store-filter-list">{filters.map((filter) => <button key={filter} className={`category-button ${category === filter ? 'selected' : ''}`} onClick={() => setCategory(filter)}>{filter}</button>)}</div>
        <div className="store-grid">
          {visibleProducts.map((product) => (
            <Card className="store-card" key={product.id}>
              <div className={`store-product-art tone-${product.tone}`}><span className="product-label">{product.label}</span><span className="product-symbol">{product.symbol}</span></div>
              <div className="store-product-info"><span className="product-category">{product.category}</span><h3>{product.name}</h3><p>{product.description}</p><div className="product-buy-row"><div><strong>{money(product.price)}</strong><del>{money(product.oldPrice)}</del></div><Button variant="small" onClick={() => addToCart(product)}>Add to cart +</Button></div></div>
            </Card>
          ))}
        </div>
        {notice && <p className="store-notice" role="status">{notice} <button onClick={() => setNotice('')}>Dismiss</button></p>}
        <p className="store-disclaimer">Demo storefront for frontend practice only. Products, prices, and cart are sample data; no orders or payments are processed.</p>
      </section>
    </main>
  );
}
