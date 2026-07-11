import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="adsvitorcosta pagina inicial">
          <span className="brand-mark">A</span>
          <span className="brand-copy"><strong>adsvitorcosta</strong><small>IA aplicada</small></span>
        </Link>
        <nav className="primary-nav" aria-label="Navegacao principal">
          <Link href="/">Inicio</Link>
          <Link href="/#topicos">Topicos</Link>
          <Link href="/#metodo">Metodo</Link>
        </nav>
        <a className="instagram-link" href="https://instagram.com/adsvitorcosta" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
          <span>Seguir</span>
        </a>
      </div>
    </header>
  );
}
