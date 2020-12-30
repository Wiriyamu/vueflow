const component = require("./commands/components/component-generator");
const view = require("./commands/views/view-generator");
const routes = require("./commands/router/router-generate");
const store = require("./commands/store/store-generate");
const prettier = require("./commands/linter/prettier-generator");
const editorConfig = require("./commands/editor-config/editor-config-generator");
const vscodeSrcAlias = require("./commands/vscode-src-alias/vscode-src-alias-generator");
const conventionalCommits = require("./commands/commits/conventional-commits-generator");
const emojiCommits = require("./commands/commits/emoji-commits-generator");

module.exports = function (plop) {
  component(plop);
  view(plop);
  routes(plop);
  store(plop);
  prettier(plop);
  editorConfig(plop);
  vscodeSrcAlias(plop);
  conventionalCommits(plop);
  emojiCommits(plop);
};
