module.exports = function (plop) {
  plop.setGenerator("vuex", {
    description: "Create a new file with config Vuex into src/store",
    prompts: [
      {
        name: "vuex",
        message:
          "Do you want to create a Vuex configuration file in src/router? Press Enter to confirm",
      },
    ],
    actions: [
      {
        type: "add",
        path: `../src/store/index.js`,
        templateFile: "templates/store/store-template.hbs",
      },
    ],
  });
};
