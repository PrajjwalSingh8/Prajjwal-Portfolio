export default function Card({ children, className = '' }) {
  return <article className={`surface-card ${className}`.trim()}>{children}</article>;
}
