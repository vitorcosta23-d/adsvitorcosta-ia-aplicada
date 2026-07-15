import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { TypewriterLine } from "../components/TypewriterLine";
import { topics } from "../lib/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="central-hero container">
          <p className="hero-eyebrow">adsvitorcosta · IA no campo de batalha</p>
          <h1>Central de <span className="ai-title">IA aplicada</span></h1>
          <p className="central-subtitle">
            Novidades, ferramentas e tutoriais organizados para quem vende online.
            Escolha um tópico e encontre somente o que precisa.
          </p>
          <TypewriterLine />
          <a className="scroll-cue" href="#topicos">Escolher um tópico <FontAwesomeIcon icon={faArrowRight} /></a>
        </section>

        <section className="topic-directory container" id="topicos">
          <div className="directory-heading">
            <span>01 / Biblioteca</span>
            <h2>Por onde você quer começar?</h2>
            <p>Cada assunto vive em seu próprio espaço. Nada misturado, nenhum clique sem destino.</p>
          </div>
          <div className="topic-grid">
            {topics.map((topic, index) => (
              <Link
                className={`topic-card topic-${topic.accent}`}
                href={`/topicos/${topic.slug}`}
                key={topic.slug}
                style={{ "--topic-delay": `${index * 70}ms` }}
              >
                <div className="topic-card-top"><span>{topic.number}</span><small>{topic.status}</small></div>
                <div className="topic-card-copy">
                  <p>{topic.label}</p>
                  <h3 className={topic.title.includes("IA") ? "ai-title" : ""}>{topic.title}</h3>
                  <span>{topic.description}</span>
                </div>
                <div className="topic-card-action">Abrir tópico <FontAwesomeIcon icon={faArrowRight} /></div>
              </Link>
            ))}
          </div>
        </section>

        <section className="method-section" id="metodo">
          <div className="container method-grid">
            <div className="method-intro">
              <span>02 / Método editorial</span>
              <h2>Informação só vale quando vira teste.</h2>
            </div>
            <div className="method-steps">
              <div><strong>01</strong><h3>Entenda</h3><p>O que mudou, sem linguagem complicada.</p></div>
              <div><strong>02</strong><h3>Aplique</h3><p>Onde a novidade entra no e-commerce.</p></div>
              <div><strong>03</strong><h3>Teste</h3><p>Uma ação concreta para rodar na operação.</p></div>
              <div><strong>04</strong><h3>Compartilhe</h3><p>Conte o resultado e melhore o próximo teste.</p></div>
            </div>
          </div>
        </section>

        <section className="home-cta container">
          <p>O laboratório continua no Instagram.</p>
          <h2>Teste, aplique e me conte o que aconteceu.</h2>
          <a href="https://instagram.com/adsvitorcosta" target="_blank" rel="noreferrer">
            Seguir @adsvitorcosta <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
