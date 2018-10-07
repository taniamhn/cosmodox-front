/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class CosmodoxHome extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <h2>Algo no se sabe que es</h2>
        <p>The page you're looking for doesn't seem to exist. Head back
           <a href="/">home</a> and try again?
        </p>
      </section>
      <section>
        <div>
          <paper-input label="Email" type="email" required></paper-input>
          <paper-input label="Contraseña" type="password" required></paper-input>
          <paper-button>Iniciar sesión</paper-button>
          <p>¿No tienes cuenta? <a href="/register">Registrate</a></p>
        </div>
      </section>
    `
  }
}

window.customElements.define('cosmodox-home', CosmodoxHome);
