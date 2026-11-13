export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Prajjwal Singh. Built with React.</p>
        <a href="https://github.com/PrajjwalSingh8" target="_blank" rel="noreferrer">GitHub profile ↗</a>
      </div>
    </footer>
  );
}
