export function QuickGuide() {
  return (
    <aside className="quick-guide" aria-label="Resumo essencial">
      <div className="quick-guide-head">
        <span>Em 30 segundos</span>
        <span>Atualizado 11.07.2026</span>
      </div>
      <div className="quick-model"><strong>Sol</strong><p>Potencia para trabalho complexo e decisoes importantes.</p></div>
      <div className="quick-model"><strong>Terra</strong><p>Equilibrio para produzir bem todos os dias.</p></div>
      <div className="quick-model"><strong>Luna</strong><p>Velocidade e custo para processar volume.</p></div>
      <p className="quick-rule">Sol decide. Terra opera. Luna escala.</p>
      <nav className="article-index" aria-label="Indice do artigo">
        <span>Navegue pelo guia</span>
        <a href="#resumo">Modelos em 30 segundos</a>
        <a href="#precos">Precos da API</a>
        <a href="#disponibilidade">Onde usar</a>
        <a href="#tokens">Tokens</a>
        <a href="#fluxo">Fluxo de e-commerce</a>
        <a href="#teste">Teste de campo</a>
      </nav>
    </aside>
  );
}
