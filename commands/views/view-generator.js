module.exports = function (plop) {
  plop.setGenerator("view", {
    description: "Create a new View into src/views",
    prompts: [
      {
        name: "nameView",
        type: "input",
        message: "What would you like to name your view?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/views/{{pascalCase nameView}}.vue",
        templateFile: "templates/views/view-template.hbs",
      },
    ],
  });
};
