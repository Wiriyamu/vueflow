module.exports = function (plop) {
  plop.setGenerator("emoji-commits", {
    description:
      "Automate and standardize commit messages with husky, lint-staged and gitmoji",
    prompts: [
      {
        name: "srcAlias",
        type: "input",
        message:
          "Do you want automate and standardize commit messages with husky, lint-staged and gitmoji? Press Enter to confirm",
      },
    ],
    actions: [
      {
        type: "add",
        path: `../.huskyrc.json`,
        templateFile: "templates/commits/husky-gitmoji-template.hbs",
      },
      {
        type: "add",
        path: `../.lintstagedrc.json`,
        templateFile: "templates/commits/lint-staged-template.hbs",
      },
    ],
  });
};
