import "core-js/es6/promise";
import "core-js/es6/string";
import "core-js/es7/array";
// import cssVars from 'css-vars-ponyfill'
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App";
import router from "./router";
import moment from 'moment';
import PictureInput from 'vue-picture-input';

// TENTANDO REGISTRAR O COMPONENTE GLOBALMENTE COM MÉTODOS ALTERNATIVOS

import SequentialEntrance from 'vue-sequential-entrance';
import 'vue-sequential-entrance/vue-sequential-entrance.css';

import PhotoGrid from 'vue-photo-grid';


Vue.use(PhotoGrid);

Vue.use(SequentialEntrance);

Vue.use(PictureInput);


Vue.prototype.moment = moment

Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: {
    App,
  }
});
