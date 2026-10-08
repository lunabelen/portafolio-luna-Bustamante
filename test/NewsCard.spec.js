import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import NewsCard from '../src/components/molecules/NewsCard';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

// Datos simulados para probar el componente
const noticiaMock = {
  title: 'Nueva tecnología',
  date: '07-10-2026',
  content: 'Noticia relacionada con desarrollo y tecnología.',
  image: '/images/noticia.png'
};

describe('NewsCard', () => {
  let container;
  let root;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);

    act(() => {
      root.render(
        <NewsCard
          title={noticiaMock.title}
          date={noticiaMock.date}
          content={noticiaMock.content}
          image={noticiaMock.image}
        />
      );
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });

    container.remove();
  });

  it('debe mostrar el título de la noticia', () => {
    expect(container.textContent).toContain(noticiaMock.title);
  });

  it('debe mostrar la fecha y el contenido de la noticia', () => {
    expect(container.textContent).toContain(noticiaMock.date);
    expect(container.textContent).toContain(noticiaMock.content);
  });

  it('debe mostrar una imagen cuando se entrega una imagen', () => {
    const imagen = container.querySelector('img');

    expect(imagen).not.toBeNull();
    expect(imagen.getAttribute('src')).toBe(noticiaMock.image);
  });
});