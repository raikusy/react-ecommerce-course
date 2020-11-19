## Step 1:

- Configure Eslint + Prettier

Install

```bash
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

.eslintrc

```json
{
  "extends": ["react-app", "react-app/jest", "plugin:prettier/recommended", "prettier", "prettier/react"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

.prettierrc

```json
{
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 120
}
```

Vscode

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.packageManager": "yarn",
  "eslint.lintTask.enable": true,
  "eslint.format.enable": true,
  "eslint.codeActionsOnSave.mode": "all",
  "eslint.alwaysShowStatus": true,
  "prettier.packageManager": "yarn",
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
}
```
