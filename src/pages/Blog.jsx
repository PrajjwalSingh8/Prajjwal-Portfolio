import { useMemo, useState } from 'react';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';
import posts from '../data/posts.json';

const categories = ['All', ...new Set(posts.map((post) => post.category))];

function formatDate(dateString) {
  return new Date(`${dateString}T00:00:00`).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric',
  });
}

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = !query || `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <main id="blog-top" className="blog-page">
      <section className="blog-hero container">
        <span className="eyebrow">THE LEARNING LOG</span>
        <h1>Notes from the <span>build process.</span></h1>
        <p>Thoughts on frontend development, coding practice, projects, and the lessons I pick up along the way.</p>
        <div className="blog-hero-bottom"><span><strong>{posts.length.toString().padStart(2, '0')}</strong> articles</span><span className="meta-divider" /><span>Ideas · Experiments · Progress</span></div>
      </section>

      <section className="container blog-content">
        <div className="blog-toolbar">
          <div className="search-box"><span aria-hidden="true">⌕</span><input type="search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search articles..." aria-label="Search blog articles" /></div>
          <span className="results-count">{filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found</span>
        </div>
        <div className="category-list" aria-label="Filter by category">
          {categories.map((category) => <button key={category} className={`category-button ${activeCategory === category ? 'selected' : ''}`} onClick={() => setActiveCategory(category)}>{category}</button>)}
        </div>

        {selectedPost ? (
          <article className="article-detail">
            <Button variant="secondary" onClick={() => setSelectedPost(null)}>← Back to all articles</Button>
            <div className="article-meta"><span>{selectedPost.category}</span><span>{formatDate(selectedPost.date)}</span><span>{selectedPost.readTime}</span></div>
            <h2>{selectedPost.title}</h2>
            <p className="article-lead">{selectedPost.excerpt}</p>
            <div className="article-body"><p>{selectedPost.content}</p><p>I'm sharing these notes as part of my learning journey. I'll keep experimenting, documenting what works, and improving with every project.</p></div>
            <p className="article-author">Written by {selectedPost.author}</p>
          </article>
        ) : filteredPosts.length > 0 ? (
          <div className="blog-grid">
            {filteredPosts.map((post, index) => (
              <Card className={`blog-card accent-${post.accent}`} key={post.id}>
                <div className="blog-card-visual"><span className="visual-index">ARTICLE / {String(index + 1).padStart(2, '0')}</span><span className="visual-symbol">{post.category === 'Coding' ? '</>' : post.category === 'Projects' ? '↗' : post.category === 'Frontend' ? '▦' : '✳'}</span><span className="visual-category">{post.category}</span></div>
                <div className="blog-card-body"><div className="post-meta"><span>{formatDate(post.date)}</span><span>{post.readTime}</span></div><h2>{post.title}</h2><p>{post.excerpt}</p><button className="read-link" onClick={() => setSelectedPost(post)}>Read article <span>↗</span></button></div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="empty-state"><span>⌕</span><h2>No articles found</h2><p>Try another search term or choose a different category.</p><Button variant="secondary" onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}>Clear filters</Button></div>
        )}
      </section>
    </main>
  );
}
