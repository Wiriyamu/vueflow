module.exports = function (plop) {
  plop.setGenerator("routes", {
    description: "Create a new file with config routes into src/route",
    prompts: [
      {
        name: "router",
        message:
          "Do you want to create a routes configuration file in src/router? Press Enter to confirm",
      },
    ],
    actions: [
      {
        type: "add",
        path: `../src/router/index.js`,
        templateFile: "templates/router/router-template.hbs",
      },
    ],
  });
};
