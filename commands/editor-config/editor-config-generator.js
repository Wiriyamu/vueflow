module.exports = function (plop) {
  plop.setGenerator("editor-config", {
    description: "Create a new editorconfig file into root",
    prompts: [
      {
        name: "editorConfig",
        type: "input",
        message:
          "Do you want to create a editorconfig file into root? Press Enter to confirm",
      },
    ],
    actions: [
      {
        type: "add",
        path: `../.editorconfig`,
        templateFile: "templates/editor-config/editor-config-template.hbs",
      },
    ],
  });
};
