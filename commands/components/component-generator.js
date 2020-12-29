module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a new Vue component into src/components",
    prompts: [
      {
        name: "nameComponent",
        type: "input",
        message: "What would you like to name your component?",
      },
      {
        name: "languages",
        type: "list",
        message: "What language are you using in your project?",
        choices: [
          {
            name: "JavaScript",
            value: "JS",
          },
          {
            name: "TypeScript",
            value: "TS",
          },
        ],
      },
    ],
    actions: ({ languages }) => {
      if (languages === "JS") {
        let actions = [];

        actions.push({
          type: "add",
          path: `../src/components/{{pascalCase nameComponent}}.vue`,
          templateFile: "templates/components/component-js-template.hbs",
        });

        return actions;
      } else if (languages === "TS") {
        let actions = [];

        actions.push({
          type: "add",
          path: `../src/components/{{pascalCase nameComponent}}.vue`,
          templateFile: "templates/components/component-3-ts-template.hbs",
        });

        return actions;
      }
    },
  });
};
