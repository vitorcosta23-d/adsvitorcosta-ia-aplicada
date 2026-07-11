import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div><strong>adsvitorcosta</strong><p>IA aplicada para quem vende online.</p></div>
        <Link href="/#topicos">Explorar tópicos</Link>
        <a href="https://instagram.com/adsvitorcosta" target="_blank" rel="noreferrer">@adsvitorcosta</a>
      </div>
    </footer>
  );
}
