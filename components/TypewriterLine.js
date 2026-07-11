"use client";

import { useEffect, useState } from "react";

const phrases = [
  "O que mudou?",
  "Onde aplicar na operacao?",
  "O que testar agora?",
];

export function TypewriterLine() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visible, setVisible] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (visible !== phrases[0]) setVisible(phrases[0]);
      return;
    }

    const phrase = phrases[phraseIndex];
    const complete = visible === phrase;
    const empty = visible.length === 0;
    const delay = complete ? 1250 : empty && deleting ? 240 : deleting ? 38 : 72;

    const timer = window.setTimeout(() => {
      if (complete && !deleting) {
        setDeleting(true);
        return;
      }
      if (empty && deleting) {
        setDeleting(false);
        setPhraseIndex((current) => (current + 1) % phrases.length);
        return;
      }
      setVisible(deleting ? phrase.slice(0, visible.length - 1) : phrase.slice(0, visible.length + 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, phraseIndex, visible]);

  return (
    <div className="typewriter" aria-label="O que mudou? Onde aplicar na operacao? O que testar agora?">
      <span aria-hidden="true">{visible}</span><i aria-hidden="true" />
    </div>
  );
}
