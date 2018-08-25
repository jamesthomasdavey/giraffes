import accordion from "./modules/accordion/accordion.js";

const app = (() => {
  const init = () => {
    accordion.init();
  };
  return {
    init
  };
})();

app.init();
