const component = require("./commands/components/component-generator");
const view = require("./commands/views/view-generator");
const routes = require("./commands/router/router-generate");
module.exports = function (plop) {
  component(plop);
  view(plop);
  routes(plop);
};
