import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { QuickGuide } from "../../../components/QuickGuide";
import { ArticleMotion } from "../../../components/ArticleMotion";

export const metadata = {
  title: "GPT-5.6: guia visual | adsvitorcosta",
  description: "Sol, Terra e Luna explicados por capacidade, preco, disponibilidade e aplicacao no e-commerce.",
};

const modelCards = [
  { name: "Sol", role: "Potencia", copy: "Use quando profundidade e qualidade importam mais que custo.", uses: "Estrategia · codigo · pesquisa · decisoes criticas" },
  { name: "Terra", role: "Equilibrio", copy: "Use para produzir bem todos os dias com menor custo.", uses: "Paginas · atendimento · automacoes · relatorios" },
  { name: "Luna", role: "Escala", copy: "Use para repetir, classificar e processar volume.", uses: "Triagem · resumos · variacoes · organizacao" },
];

const prices = [
  { model: "Sol", input: "US$ 5,00", output: "US$ 30,00", size: "100%" },
  { model: "Terra", input: "US$ 2,50", output: "US$ 15,00", size: "50%" },
  { model: "Luna", input: "US$ 1,00", output: "US$ 6,00", size: "20%" },
];

const flow = [
  { model: "Luna", action: "Filtrar", copy: "Analise muitos produtos, reviews e sinais de mercado." },
  { model: "Sol", action: "Decidir", copy: "Compare concorrentes e construa a estrategia da oferta." },
  { model: "Terra", action: "Produzir", copy: "Crie pagina, descricao, FAQ, emails e atendimento." },
  { model: "Luna", action: "Escalar", copy: "Gere variacoes de anuncios e classifique resultados." },
];

export default function Article() {
  return (
    <>
      <Header />
      <ArticleMotion />
      <main className="article-page">
        <header className="article-header container">
          <Link className="back-link" href="/topicos/modelos"><FontAwesomeIcon icon={faArrowLeft} /> Voltar para Modelos</Link>
          <p className="article-kicker">Modelos / Guia visual / Atualizado em 11.07.2026</p>
          <h1 className="ai-title">GPT-5.6: qual modelo usar para vender melhor com IA?</h1>
          <p className="article-deck">Sol, Terra e Luna nao sao apenas tres nomes. Eles representam tres decisoes de operacao: profundidade, equilibrio e volume.</p>
          <div className="article-byline"><span>Por adsvitorcosta</span><span>12 min de leitura</span><span>Fontes oficiais verificadas</span></div>
        </header>

        <figure className="article-cover container">
          <Image src="/images/hero-operational-ai.png" alt="Profissional analisando codigo, pesquisa e infraestrutura de inteligencia artificial" fill priority sizes="100vw" />
          <figcaption>IA deixa de ser apenas conversa e passa a ocupar etapas diferentes do trabalho.</figcaption>
        </figure>

        <div className="article-layout container">
          <aside className="article-sidebar"><QuickGuide /></aside>
          <article className="article-body">
            <p className="article-lead">Desde 9 de julho de 2026, a OpenAI esta liberando a familia GPT-5.6 no ChatGPT, Codex e API. Sol e o modelo principal para trabalhos complexos, Terra equilibra capacidade e custo, e Luna prioriza velocidade e escala.</p>

            <div className="update-note" data-reveal>
              <span>Atualizacao importante</span>
              <p>O artigo anterior falava em previa limitada. Isso mudou: GPT-5.6 entrou em disponibilidade geral, embora a liberacao possa variar conforme produto, plano e conta.</p>
            </div>

            <div className="spec-strip" data-reveal>
              <div><strong>1,05M</strong><span>janela de contexto</span></div>
              <div><strong>128K</strong><span>saida maxima</span></div>
              <div><strong>3</strong><span>modelos na familia</span></div>
              <div><strong>09.07</strong><span>disponibilidade geral</span></div>
            </div>

            <section className="article-section" id="resumo" data-reveal>
              <div className="section-label"><span>01</span><p>GPT-5.6 em 30 segundos</p></div>
              <h2 className="ai-title">Tres modelos. Tres papeis.</h2>
              <div className="model-cards">
                {modelCards.map((model) => (
                  <div className="model-card" key={model.name}>
                    <span>{model.role}</span>
                    <h3 className="ai-title">{model.name}</h3>
                    <p>{model.copy}</p>
                    <small>{model.uses}</small>
                  </div>
                ))}
              </div>
              <p className="visual-conclusion">Sol decide. Terra opera. Luna escala.</p>
            </section>

            <section className="article-section" id="flagship" data-reveal>
              <div className="section-label"><span>02</span><p>O que significa flagship?</p></div>
              <h2>Topo de linha nao significa usar em tudo.</h2>
              <p>Flagship significa modelo principal ou carro-chefe. O Sol ocupa esse lugar porque foi feito para trabalho complexo, raciocinio profundo e tarefas em que uma resposta ruim custa mais. Ainda assim, usar Sol para toda atividade pode aumentar custo sem melhorar o resultado proporcionalmente.</p>
              <blockquote>O melhor modelo nao e sempre o mais forte. E o que resolve a tarefa com qualidade, tempo e custo adequados.</blockquote>
            </section>

            <section className="article-section price-section" id="precos" data-reveal>
              <div className="section-label"><span>03</span><p>Preco da API</p></div>
              <h2>Quanto custa cada modelo?</h2>
              <p className="section-support">Valores por 1 milhao de tokens. Entrada em branco; saida em bege.</p>
              <div className="price-chart" role="img" aria-label="Comparacao de precos de entrada e saida entre GPT-5.6 Sol, Terra e Luna">
                <div className="chart-legend"><span><i className="input-key" />Entrada</span><span><i className="output-key" />Saida</span></div>
                {prices.map((item) => (
                  <div className="price-row" key={item.model}>
                    <strong>{item.model}</strong>
                    <div className="bars">
                      <div className="bar input-bar" style={{ "--bar-size": item.size }}><span>{item.input}</span></div>
                      <div className="bar output-bar" style={{ "--bar-size": item.size }}><span>{item.output}</span></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="chart-insight"><strong>Leitura rapida</strong><p>Terra custa 50% do Sol. Luna custa 20% do Sol, tanto na entrada quanto na saida.</p></div>
              <p className="data-note">Precos da API verificados em 11/07/2026. O custo real depende de tokens, ferramentas, cache e configuracao.</p>
            </section>

            <section className="article-section" id="disponibilidade" data-reveal>
              <div className="section-label"><span>04</span><p>Disponibilidade</p></div>
              <h2>Onde usar hoje?</h2>
              <div className="availability-list">
                <div><strong>ChatGPT</strong><p>Sol em planos pagos elegiveis. Terra e Luna nao sao selecionaveis em conversas comuns.</p></div>
                <div><strong>ChatGPT Work</strong><p>Sol, Terra e Luna para Plus, Pro, Business e Enterprise.</p></div>
                <div><strong>Codex</strong><p>Terra para Free e Go; os tres modelos para Plus, Pro, Business e Enterprise.</p></div>
                <div><strong>API</strong><p>Sol, Terra e Luna disponiveis para desenvolvedores.</p></div>
              </div>
              <p className="data-note">Disponibilidade verificada em 11/07/2026. A liberacao pode variar por plano, produto e conta.</p>
            </section>

            <section className="article-section" id="tokens" data-reveal>
              <div className="section-label"><span>05</span><p>Tokens sem complicacao</p></div>
              <h2>O caminho da informacao.</h2>
              <div className="token-diagram">
                <div><span>01</span><strong>Entrada</strong><p>Briefing, dados, imagens e instrucoes que voce envia.</p></div>
                <i>→</i>
                <div><span>02</span><strong>Contexto</strong><p>O material que o modelo consegue considerar durante o trabalho.</p></div>
                <i>→</i>
                <div><span>03</span><strong>Saida</strong><p>A resposta, o codigo, a analise ou a acao produzida.</p></div>
              </div>
            </section>

            <section className="article-section" id="fluxo" data-reveal>
              <div className="section-label"><span>06</span><p>Sugestao adsvitorcosta</p></div>
              <h2>Um fluxo real de e-commerce.</h2>
              <figure className="inline-visual">
                <Image src="/images/workflow-ecommerce-ai.png" alt="Fluxo visual de pesquisa de produtos, estrategia, criacao de pagina e variacoes de anuncios" fill sizes="(max-width: 760px) 100vw, 720px" />
              </figure>
              <div className="operation-flow">
                {flow.map((step, index) => (
                  <div className="flow-step" key={`${step.model}-${step.action}`}>
                    <span>0{index + 1}</span>
                    <strong className="ai-title">{step.model}</strong>
                    <h3>{step.action}</h3>
                    <p>{step.copy}</p>
                  </div>
                ))}
              </div>
              <p className="visual-conclusion">O modelo mais caro entra onde uma decisao ruim custa mais.</p>
              <p className="data-note">Este fluxo e uma sugestao editorial, nao recomendacao oficial da OpenAI. Decisoes comerciais precisam de revisao humana.</p>
            </section>

            <section className="article-section decision-section" id="decisao" data-reveal>
              <div className="section-label"><span>07</span><p>Escolha rapida</p></div>
              <h2>Comece pela tarefa.</h2>
              <div className="decision-matrix">
                <div><span>Se voce precisa...</span><strong>Use primeiro</strong></div>
                <div><span>Estrategia, codigo grande ou decisao critica</span><strong className="ai-title">Sol</strong></div>
                <div><span>Paginas, emails, atendimento ou rotina</span><strong className="ai-title">Terra</strong></div>
                <div><span>Triagem, classificacao ou muitas variacoes</span><strong className="ai-title">Luna</strong></div>
              </div>
            </section>

            <section className="field-scorecard" id="teste" data-reveal>
              <span>Teste de campo</span>
              <h2>Qual modelo funciona melhor na sua operacao?</h2>
              <p>Rode o mesmo briefing com dados e configuracoes equivalentes. Compare antes de escolher.</p>
              <div className="test-prompt"><strong>Prompt para testar</strong><p>Crie o bloco principal de uma pagina de produto usando: [produto], [publico], [dor], [beneficio] e [prova]. Entregue headline, subtitulo, tres beneficios, FAQ e CTA.</p></div>
              <div className="score-table">
                <div><strong>Modelo</strong><span>Qualidade</span><span>Tempo</span><span>Custo</span><span>Retrabalho</span></div>
                {["Sol", "Terra", "Luna"].map((model) => <div key={model}><strong className="ai-title">{model}</strong><span>__/5</span><span>__ min</span><span>US$ __</span><span>__/5</span></div>)}
              </div>
              <small>Um teste isolado nao e benchmark. Prompt, esforco de raciocinio, ferramentas e tarefa alteram o resultado.</small>
            </section>

            <section className="source-box" data-reveal>
              <span>Fontes oficiais</span>
              <a href="https://openai.com/index/gpt-5-6/" target="_blank" rel="noreferrer">Lancamento e precos do GPT-5.6 <FontAwesomeIcon icon={faArrowRight} /></a>
              <a href="https://help.openai.com/en/articles/20001354-gpt-56-in-chatgpt" target="_blank" rel="noreferrer">Disponibilidade no ChatGPT <FontAwesomeIcon icon={faArrowRight} /></a>
              <a href="https://developers.openai.com/api/docs/models" target="_blank" rel="noreferrer">Catalogo atual de modelos <FontAwesomeIcon icon={faArrowRight} /></a>
            </section>

            <section className="feedback-cta" data-reveal>
              <span>Agora e com voce</span>
              <h2>Qual modelo venceu na sua operacao?</h2>
              <p>Publique o resultado, marque @adsvitorcosta e conte onde cada modelo foi melhor ou pior.</p>
              <a href="https://instagram.com/adsvitorcosta" target="_blank" rel="noreferrer">Deixar meu feedback <FontAwesomeIcon icon={faArrowRight} /></a>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
