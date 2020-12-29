module.exports = function (plop) {
  plop.setGenerator('prettier', {
    description: 'Create a new prettier config file into root',
    prompts: [
      {
        name: 'prettier',
        type: 'input',
        message:
          'Do you want to create a prettier configuration file into root? Press Enter to confirm'
      }
    ],
    actions: [
      {
        type: 'add',
        path: `../.prettierrc.json`,
        templateFile: 'templates/linter/prettier-template.hbs'
      }
    ]
  })
}
