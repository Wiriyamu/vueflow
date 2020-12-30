const component = require("./commands/components/component-generator");
const view = require("./commands/views/view-generator");
const routes = require("./commands/router/router-generate");
const store = require("./commands/store/store-generate");
const prettier = require("./commands/linter/prettier-generator");
const editorConfig = require("./commands/editor-config/editor-config-generator");

module.exports = function (plop) {
  component(plop);
  view(plop);
  routes(plop);
  store(plop);
  prettier(plop);
  editorConfig(plop);
};
