import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { useReveal } from "../hooks/useReveal";
import "./Blog.css";

export function Blog() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="blog" className="section blog reveal" ref={ref}>
      <div className="container">
        <div className="blog__head">
          <span className="section-label">Blog & rehber</span>
          <h2 className="section-title">Soğuk zincir bilgisi.</h2>
          <p className="section-lead">
            Donuk ürün nakliyesi, derece riski ve frigorifik araç seçimi hakkında SEO uyumlu
            rehber yazıları.
          </p>
        </div>

        <ul className="blog__list">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <article>
                <time dateTime={post.datePublished}>
                  {new Date(post.datePublished).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  {" · "}
                  {post.readingMinutes} dk okuma
                </time>
                <h3>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
                <Link className="blog__more" to={`/blog/${post.slug}`}>
                  Yazıyı oku →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
