import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import ContactSection from '../src/components/organisms/ContactSection';

describe('ContactSection', () => {
  let container;
  let root;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    root = createRoot(container);

    act(() => {
      root.render(<ContactSection />);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });

    container.remove();
  });

  it('debe mostrar la sección de contacto', () => {
    expect(container.textContent).toContain('Contacto');
  });

  it('debe mostrar los campos del formulario', () => {
    expect(container.querySelector('#nombre')).not.toBeNull();
    expect(container.querySelector('#email')).not.toBeNull();
    expect(container.querySelector('#mensaje')).not.toBeNull();
  });

  it('debe mostrar un mensaje cuando se envía el formulario', () => {
    const formulario = container.querySelector('form');

    act(() => {
      formulario.dispatchEvent(
        new Event('submit', {
          bubbles: true,
          cancelable: true
        })
      );
    });

    expect(container.textContent).toContain(
      '¡Gracias! Tu mensaje fue registrado.'
    );
  });
});