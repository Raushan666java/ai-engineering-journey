import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function QAWidget() {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(initQAWidget, 50);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

function initQAWidget() {
  document.querySelectorAll<HTMLDetailsElement>('.tp-qa-card').forEach((card) => {
    const qid = card.dataset.qid;
    if (!qid) return;

    const saved = loadState(qid);
    if (saved.reviewed) card.classList.add('tp-reviewed');
    if (saved.bookmarked) card.classList.add('tp-bookmarked');

    const markBtn = card.querySelector<HTMLButtonElement>('.tp-qa-mark-btn');
    if (markBtn) {
      markBtn.onclick = (e) => {
        e.preventDefault();
        card.classList.toggle('tp-reviewed');
        saveState(qid, { reviewed: card.classList.contains('tp-reviewed') });
      };
    }

    const bookmarkBtn = card.querySelector<HTMLButtonElement>('.tp-qa-bookmark-btn');
    if (bookmarkBtn) {
      bookmarkBtn.onclick = (e) => {
        e.preventDefault();
        card.classList.toggle('tp-bookmarked');
        saveState(qid, { bookmarked: card.classList.contains('tp-bookmarked') });
      };
    }
  });
}

interface QASaveState {
  reviewed?: boolean;
  bookmarked?: boolean;
}

function loadState(qid: string): QASaveState {
  try {
    const data = localStorage.getItem(`tp-qa-${qid}`);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

function saveState(qid: string, state: QASaveState) {
  try {
    const current = loadState(qid);
    localStorage.setItem(`tp-qa-${qid}`, JSON.stringify({ ...current, ...state }));
  } catch {
  }
}

export default function Root({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <QAWidget />
      {children}
    </>
  );
}
