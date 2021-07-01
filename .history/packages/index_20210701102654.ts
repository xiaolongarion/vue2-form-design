import { VueConstructor, Component } from "vue";

const components = [];

function install(Vue: VueConstructor) {
  components.forEach(function(component) {
    Vue.component(component.name, component);
  });
}

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
