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
import '@polymer/paper-checkbox/paper-checkbox.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class CosmodoxRegister extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <h2>Nuevo Usuario</h2>
        <paper-input label="Nombres *" required></paper-input>
        <paper-input label="Apellidos *" required></paper-input>
        <paper-input label="Email *" type="email" required></paper-input>
        <label>Areas de interes</label>
        <paper-checkbox>Artes</paper-checkbox>
        <paper-checkbox>Ciencias exactas</paper-checkbox>
        <paper-input label="Contraseña *" type="password" required></paper-input>
        <paper-input label="Confirmar contraseña *" type="password" required></paper-input>
        <paper-button>Entrar</paper-button>
      </section>
    `
  }
}

window.customElements.define('cosmodox-register', CosmodoxRegister);
