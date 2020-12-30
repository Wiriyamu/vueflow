module.exports = function (plop) {
  plop.setGenerator("vscode-src-alias", {
    description: "Superpowers for alias @",
    prompts: [
      {
        name: "srcAlias",
        type: "input",
        message:
          "Do you want to create a jsconfig file configuring an alias for src into root? Press Enter to confirm",
      },
    ],
    actions: [
      {
        type: "add",
        path: `../jsconfig.json`,
        templateFile:
          "templates/vscode-src-alias/vscode-src-alias-template.hbs",
      },
    ],
  });
};
