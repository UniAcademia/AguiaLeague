# Rodando o projeto:

- Instale o node.js (https://nodejs.org/pt-br/download/)
- Instale o yarn digitando `npm install --global yarn` no terminal
- Rode o yarn dentro da pasta do projeto: `yarn`
- Instale as seguintes extensões no VS Code: ESLint e Prettier
- Adicione as seguintes instruções no seu `settings.json`:

```
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
},
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode"
```

- Rode o projeto digitando `yarn dev` no terminal
