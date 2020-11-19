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
