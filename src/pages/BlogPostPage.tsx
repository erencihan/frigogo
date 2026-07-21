import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";
import { getPostBySlug, blogPosts } from "../data/blogPosts";
import { siteConfig, whatsappUrl } from "../siteConfig";
import { usePageSeo } from "../hooks/usePageSeo";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";
import "./BlogPost.css";

export function BlogPostPage() {
  const { slug = "" } = useParams();
  const post = getPostBySlug(slug);

  const jsonLd = useMemo(() => {
    if (!post) return undefined;
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      author: {
        "@type": "Organization",
        name: siteConfig.brand,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.brand,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://frigogo.com/blog/${post.slug}`,
      },
      keywords: post.keywords,
      inLanguage: "tr-TR",
    };
  }, [post]);

  usePageSeo(
    post
      ? {
          title: `${post.title} | ${siteConfig.brand} Blog`,
          description: post.description,
          keywords: post.keywords,
          canonicalPath: `/blog/${post.slug}`,
          type: "article",
          jsonLd,
        }
      : {
          title: `Yazı bulunamadı | ${siteConfig.brand}`,
          description: "Aradığınız blog yazısı bulunamadı.",
          canonicalPath: "/blog",
        },
  );

  if (!post) {
    return (
      <>
        <Header variant="solid" />
        <main className="post-page">
          <div className="container post-missing">
            <h1>Yazı bulunamadı</h1>
            <p>Bu bağlantıya ait bir rehber yazısı yok.</p>
            <Link to="/#blog">Blog’a dön</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const others = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <Header variant="solid" />
      <main className="post-page">
        <article className="container post" itemScope itemType="https://schema.org/Article">
          <nav className="post__crumb" aria-label="Sayfa yolu">
            <Link to="/">Ana sayfa</Link>
            <span>/</span>
            <Link to="/#blog">Blog</Link>
            <span>/</span>
            <span>{post.title}</span>
          </nav>

          <header className="post__header">
            <p className="section-label">Rehber</p>
            <h1 itemProp="headline">{post.title}</h1>
            <p className="post__meta">
              <time itemProp="datePublished" dateTime={post.datePublished}>
                {new Date(post.datePublished).toLocaleDateString("tr-TR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{post.readingMinutes} dk okuma</span>
              <span>·</span>
              <span itemProp="author">{siteConfig.brand}</span>
            </p>
            <p className="post__excerpt" itemProp="description">
              {post.excerpt}
            </p>
          </header>

          <div className="post__body" itemProp="articleBody">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <aside className="post__cta">
            <h2>Donuk ürün nakliyesi mi planlıyorsunuz?</h2>
            <p>
              81 ile frigolu sevkiyat için hemen teklif alın. Panelvan’dan TIR’a yükünüze uygun
              araç.
            </p>
            <div className="post__cta-actions">
              <Link to="/#teklif" className="btn btn-primary">
                Teklif al
              </Link>
              <a
                className="btn btn-dark"
                href={whatsappUrl(`Merhaba FrigoGo, "${post.title}" yazısını okudum. Teklif istiyorum.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </aside>

          <section className="post__related" aria-label="Diğer yazılar">
            <h2>Diğer rehberler</h2>
            <ul>
              {others.map((p) => (
                <li key={p.slug}>
                  <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
