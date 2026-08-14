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

function SidebarAccordion() {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => enforceSingleOpen('route'), 150);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const toggle = (e.target as HTMLElement).closest<HTMLElement>(
        '.menu__list-item-collapsible > .menu__link'
      );
      if (!toggle) return;
      setTimeout(() => enforceSingleOpen('click', toggle), 0);
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

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

function topLevelItem(elm: HTMLElement): HTMLLIElement | null {
  const li = elm.closest<HTMLLIElement>('nav.menu > ul.menu__list > li');
  return li;
}

function collapseItem(li: HTMLLIElement): void {
  const toggle = li.querySelector<HTMLElement>(':scope > .menu__list-item-collapsible > .menu__link');
  if (toggle && toggle.getAttribute('aria-expanded') === 'true') {
    (toggle as HTMLButtonElement).click();
  }
}

function enforceSingleOpen(mode: 'route' | 'click', source?: HTMLElement): void {
  if (mode === 'click' && source) {
    const keep = topLevelItem(source);
    if (!keep) return;
    document.querySelectorAll('nav.menu > ul.menu__list').forEach((rootList) => {
      Array.from(rootList.children as HTMLCollectionOf<HTMLLIElement>)
        .filter((li) => li !== keep)
        .forEach(collapseItem);
    });
    return;
  }

  document.querySelectorAll('nav.menu > ul.menu__list').forEach((rootList) => {
    Array.from(rootList.children as HTMLCollectionOf<HTMLLIElement>).forEach((li) => {
      const hasActive = !!li.querySelector(':scope .menu__link--active');
      if (!hasActive) collapseItem(li);
    });
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

export default function Root({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <>
      <QAWidget />
      <SidebarAccordion />
      {children}
    </>
  );
}
