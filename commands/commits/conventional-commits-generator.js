module.exports = function (plop) {
  plop.setGenerator("conventional-commits", {
    description:
      "Automate and standardize commit messages with husky, lint-staged and commitlint",
    prompts: [
      {
        name: "srcAlias",
        type: "input",
        message:
          "Do you want automate and standardize commit messages with husky, lint-staged and commitlint? Press Enter to confirm",
      },
    ],
    actions: [
      {
        type: "add",
        path: `../.huskyrc.json`,
        templateFile: "templates/commits/husky-template.hbs",
      },
      {
        type: "add",
        path: `../.commitlintrc.json`,
        templateFile: "templates/commits/commitlint-template.hbs",
      },
      {
        type: "add",
        path: `../.lintstagedrc.json`,
        templateFile: "templates/commits/lint-staged-template.hbs",
      },
    ],
  });
};
