import { useEffect, useState } from 'react';

const GHOST_WORDS = ['BUILD', 'CREATE', 'IMAGINE', 'INNOVATE'];

// Cycles through the background hero word. Mirrors Endermonks' original
// Hero.jsx ghost-word effect, pulled out as a reusable hook.
export function useGhostWord(intervalMs = 3800) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % GHOST_WORDS.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [intervalMs]);

  return GHOST_WORDS[index];
}
