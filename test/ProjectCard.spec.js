import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import ProjectCard from '../src/components/molecules/ProjectCard';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

describe('ProjectCard', () => {
  let container;
  let root;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);

    act(() => {
      root.render(
        <ProjectCard
          image="/images/techstore.png"
          title="Tech Store"
          description="Tienda online de productos tecnológicos."
          technologies={['HTML', 'CSS', 'JavaScript']}
          link="https://github.com/"
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

  it('debe mostrar el título y la descripción del proyecto', () => {
    expect(container.textContent).toContain('Tech Store');
    expect(container.textContent).toContain(
      'Tienda online de productos tecnológicos.'
    );
  });

  it('debe mostrar las tecnologías utilizadas', () => {
    expect(container.textContent).toContain('HTML');
    expect(container.textContent).toContain('CSS');
    expect(container.textContent).toContain('JavaScript');
  });

  it('debe mostrar la imagen con texto alternativo', () => {
    const imagen = container.querySelector('img');

    expect(imagen).not.toBeNull();
    expect(imagen.getAttribute('alt')).toBe('Vista del proyecto Tech Store');
  });

  it('debe mostrar el enlace para ver el proyecto', () => {
    const enlace = container.querySelector('a');

    expect(enlace).not.toBeNull();
    expect(enlace.getAttribute('href')).toBe('https://github.com/');
  });
});