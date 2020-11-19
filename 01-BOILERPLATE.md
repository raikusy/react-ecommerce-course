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

Package Requirements:

- Tailwind CSS (For styling)
- React Router Dom
- Loadable Component
- React Query
- Axios

## Step 2 - Configure Tailwind

Instal package:

```bash
yarn add tailwindcss postcss autoprefixer
yarn add -D chokidar-cli npm-run-all
```

Init Tailwind:

```bash
npx tailwindcss init
```

Package.json

```bash
{
...
  "scripts": {
    "build:tailwind": "npx tailwindcss build src/tailwind.css -o src/tailwind.output.css",
    "watch:tailwind": "chokidar 'src/**/*.css' --ignore src/tailwind.output.css -c 'npm run build:tailwind'",
    "start": "npm-run-all build:tailwind --parallel watch:tailwind start:react",
    "start:react": "react-scripts start",
    "prebuild": "run-s build:tailwind",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
...
}
```

## Routes

- Homepage `/`
  - Category Filter `?category=shirts`
  - Search `?search=hello`
- Product Page `/product/:id`
- My Account `/me`
- My Orders `/me/orders`
