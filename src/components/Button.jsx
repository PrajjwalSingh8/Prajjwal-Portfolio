export default function Button({ children, variant = 'primary', type = 'button', onClick, href, className = '' }) {
  const classes = `button button-${variant} ${className}`.trim();

  if (href) {
    return (
      <a className={classes} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
