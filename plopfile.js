const component = require("./commands/components/component-generator");
const view = require("./commands/views/view-generator");
module.exports = function (plop) {
  component(plop);
  view(plop);
};
