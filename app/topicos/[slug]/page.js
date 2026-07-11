import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { getArticlesByTopic, getTopic, topics } from "../../../lib/content";

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const topic = getTopic(slug);
  return topic ? { title: `${topic.title} | adsvitorcosta`, description: topic.description } : {};
}

export default async function TopicPage({ params }) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();
  const articles = getArticlesByTopic(slug);

  return (
    <>
      <Header />
      <main className="topic-page">
        <section className="topic-hero container">
          <Link className="back-link" href="/#topicos"><FontAwesomeIcon icon={faArrowLeft} /> Todos os tópicos</Link>
          <div className="topic-hero-grid">
            <span>{topic.number}</span>
            <div>
              <p>{topic.label} / IA aplicada</p>
              <h1 className={topic.title.includes("IA") ? "ai-title" : ""}>{topic.title}</h1>
              <p className="topic-description">{topic.description}</p>
            </div>
          </div>
        </section>

        <section className="topic-content container">
          <div className="content-heading">
            <span>Conteúdos</span>
            <h2>{articles.length ? "Publicado agora" : "Primeiras pautas em produção"}</h2>
          </div>

          {articles.length > 0 && (
            <div className="published-grid">
              {articles.map((article) => (
                <Link className="article-card" href={article.href} key={article.slug}>
                  <div className="article-card-image"><Image src={article.image} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
                  <div className="article-card-content">
                    <div><span>{article.date}</span><span>{article.read}</span></div>
                    <h3 className="ai-title">{article.title}</h3>
                    <p>{article.description}</p>
                    <strong>Ler artigo <FontAwesomeIcon icon={faArrowRight} /></strong>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="planned-list">
            <div className="planned-label"><span>Na fila editorial</span><p>Os próximos materiais deste tópico.</p></div>
            <div>
              {topic.planned.filter((title) => !articles.some((article) => article.title === title)).map((title, index) => (
                <div className="planned-row" key={title}><span>0{index + 1}</span><h3>{title}</h3><small>Em produção</small></div>
              ))}
            </div>
          </div>
        </section>

        <nav className="other-topics container" aria-label="Outros tópicos">
          <span>Explorar também</span>
          <div>{topics.filter((item) => item.slug !== slug).map((item) => <Link href={`/topicos/${item.slug}`} key={item.slug}>{item.label}</Link>)}</div>
        </nav>
      </main>
      <Footer />
    </>
  );
}
