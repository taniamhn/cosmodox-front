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
import { addIcon } from './my-icons.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/paper-button/paper-button.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class CosmodoxProfile extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <style>
        iron-image {
          width: 150px;
          height: 150px;
        }
      </style>
      <section>
        <h2>Perfil</h2>
        <iron-image src="/" placeholder="../images/profile-none.png" sizing="cover" preload fade></iron-image>
        <p>
          Mariana Oquendo <br>
          mariana@gmail.com <br>
          Estudiante bachillerato <br>
          La enseñanza
        </p>

        <h3>Areas de interes</h3>
        <ul>
          <li>Ciencias exactas</li>
          <li>Tecnologia</li>
        </ul>

        <h3>Grupos de investigación</h3>
        <ul>
          <li><a>Gaia</a></li>
          <li><a>Grupo 2</a></li>
        </ul>
      </section>
      <section>
        <h3>Proyectos</h3>
        <paper-button>${addIcon} nuevo</paper-button>
        <ul>
          <li>Proyecto 1</li>
          <li>Proyecto 2</li>
          <li>Proyecto 3</li>
        </ul>
      </section>
    `
  }
}

window.customElements.define('cosmodox-profile', CosmodoxProfile);
