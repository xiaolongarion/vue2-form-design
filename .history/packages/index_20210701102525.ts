import { VueConstructor } from "vue";

const components = [];

function install(Vue: VueConstructor) {
  components.forEach(function(component) {
    Vue.component(component.name, component);
  });
}

export default {
  install
};
