📦 React Modele
===============

Bienvenue dans ce modèle/template de projet React !

- Première utilisation
- Comment démarrer un projet ?
- Build du projet
- Utilitaires
- Dépendances
- Scripts

Première utilisation
--------------------

Récupérez une copie du modèle :

```sh
git clone git@github.com:O-clock-Y/React-modele.git

cd React-modele

# installe les dépendances du projet
yarn 

# lance le serveur de developpement
yarn start 

# rdv sur http://ec2-3-95-187-31.compute-1.amazonaws.com/
```

Voilà, le modèle tourne, mais en fait ça ne sert pas à grand chose. L'idée est de se _baser sur_ le modèle, mais de le faire tourner dans un autre projet.

---

Comment démarrer un projet avec ce modèle ?
-------------------------------------------

On peut se baser sur React-modele pour démarrer un *nouveau* projet, ou bien pour travailler sur un challenge avec une base de code déjà existante.

Dans les deux cas, il s'agit essentiellement de copier/coller les parties intéressantes du modèle dans le dossier du projet/challenge, sans écraser d'éventuels fichiers spécifiques. 

Pour ce faire :

``` sh
# Exemple : après avoir cloné un challenge dans le dossier mon-challenge/

# direction le dossier du challenge
cd mon-challenge

# copie des fichiers cachés et non-cachés présents à la racine du modèle
# note : des alertes sont affichées à propos de dossiers ignorés, c'est normal
cp -n ../React-modele/{.*,*} .

# copie (récursive) des dossiers src/, config/ et public/
# note : des alertes sont affichées à propos de dossiers ignorés, c'est normal
cp -rn ../React-modele/{src,config,public} .

# installation des dépendances listées dans le package.json
yarn

# lancement du serveur de dev
yarn start
```

---

Build du projet
---------------

Le mode d'utilisation par défaut consiste à lancer un serveur de dev avec `yarn start`, mais alors tout est géré en mémoire : on ne voit jamais le résultat concret du travail de Webpack.

Webpack peut toutefois produire une version concrète du projet dans un dossier `dist/` avec la commande `yarn build`.

`build` permet de construire le projet pour la **production** (version prête pour hébergement).
- Assemblage des fichiers
- Copie de fichiers
- Nettoyage du code
- Minification du code
- ...

```sh
# dans le dossier du projet
cd mon-projet

# build de production : les fichiers sont rassemblés *et optimisés*
yarn build
```

---

Utilitaires
-----------

### Extensions VScode

**EditorConfig**

Permet d'adapter l'indentation de l'éditeur grace à un fichier `.editorconfig`

`ext install EditorConfig.EditorConfig`

**ESLint**

Linter pour le JavaScript

`ext install dbaeumer.vscode-eslint`

**Babel JavaScript**

Coloration syntaxique améliorée pour ES6+

`ext install mgmcdermott.vscode-language-babel`

**VScode Duplicate**

Permet de dupliquer un fichier / dossier

`ext install mrmlnc.vscode-duplicate`


### Extension Navigateur React Dev Tools
  
- [pour Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [pour Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

### Extension Navigateur Redux Dev Tools

> https://github.com/reduxjs/redux-devtools

- [pour Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- [pour Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)

---

Principaux Outils
-----------------

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [PostCSS](https://postcss.org/)
- [ESLint](https://eslint.org/)
- [React](https://reactjs.org/)


### Webpack

*Task Runner*, *Builder* ou *Bundler* ie. automatisation de tâches : transpilation JS par Babel, conversion Sass -> CSS, optimisation du build, etc.

- [`webpack`](https://github.com/webpack/webpack) - Packageur de modules et ressources.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Interface en ligne de commande pour Webpack.
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Serveur de développement pour Webpack.
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Outil de fusion de fichiers de configuration.
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration.
- Loaders :
  - [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile les fichiers avec Babel depuis Webpack.
  - [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Charge et transforme le SCSS en CSS.
    - [`sass`](https://github.com/sass/dart-sass) - Préprocesseur Sass (implémentation avec Dart).
  - [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Transforme le CSS avec PostCSS.
    - [`cssnano`](https://github.com/cssnano/cssnano) - Optimise et compresse PostCSS.
    - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Comportements pour PostCSS.
  - [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Résout et importe le CSS dans le JS.
  - [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Injecte le CSS dans le DOM.
  - [`eslint-loader`](https://webpack.js.org/loaders/eslint-loader/) - Utilisation de ESLint avec Webpack.
  - [`file-loader`](https://webpack.js.org/loaders/file-loader/) - Copie de fichiers utilisés dans le JS.
- Plugins :
  - [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Supprime/nettoie le dossier de build.
  - [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copie des fichiers vers le dossier de build.
  - [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Génère un fichier HTML à partir d'un template.
  - [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extrait le CSS dans des fichiers séparés.
  - [`optimize-css-assets-webpack-plugin`](https://github.com/NMFR/optimize-css-assets-webpack-plugin) - Optimise and minimise les ressources CSS.
  - [`terser-webpack-plugin`](https://github.com/webpack-contrib/terser-webpack-plugin) - Minimise le Javascript.
  - [`bundle-stats`](https://github.com/relative-ci/bundle-stats) - Analyse du build.

### Babel

Transpilation ES6/JSX -> ES5.

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ vers une version JavaScript compatible partout.
- Presets :
  - [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - "Vocabulaire" ou règles de syntaxe pour Babel et l'ES6+.
  - [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react) - "Vocabulaire" ou règles de syntaxe pour Babel et le JSX (React).
- Plugins :
  - [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Rend possible les propriétés de classe.
  - [`@babel/plugin-proposal-object-rest-spread`](https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread) - Rend possible le déversement d'objets.

### ESLint

- [`eslint`](https://github.com/eslint/eslint) - ESLint, linter / analyseur de code JS.
- [`babel-eslint`](https://github.com/babel/babel-eslint) - Analyse le code Babel.
- [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Configuration Airbnb pour ESLint.
- Plugins : 
  - [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import) - Analyse les imports de fichiers.
    - [`eslint-import-resolver-alias`](https://github.com/johvin/eslint-import-resolver-alias) - Permet de définir des alias pour les dossiers.
  - [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) - Analyse le code React.
  - [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) - Analyse les hooks de React.
  - [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Analyse l'accessibilité du JSX.

### React

- [`react`](https://github.com/facebook/react) - React.
  - [`react-dom`](https://github.com/facebook/react/tree/master/packages/react-dom) - Permet d'injecter des composants React dans le DOM.
- [`prop-types`](https://github.com/facebook/prop-types) - Validation de props au sein du JSX.

---

Scripts
-------

```sh
# Avec yarn
yarn {script}

# Avec npm
npm run {script}
```

- `start`: Lance le serveur de développement.
- `build`: Lance la construction de la version de production.
- `lint`: Affiche les erreurs dans le code.
- `lint:fix`: Tente de corriger certaines des erreurs dans le code.
- `clean`: Supprime le dossier `dist/`.
- `clean:all`: Supprime `dist/`, `node_modules/` et les fichiers `lock`.

---

          axios
            .post(`${process.env.URL_API}/api/user/`, {
              token: response.data.token,
            })
            .then((response) => {
              console.log('Je charge les userDatas dans sessionStorage: ', JSON.stringify(response.data));
              sessionStorage.setItem('userData', JSON.stringify(response.data));
              console.log('sauve les userData dans le state.auth');
              store.dispatch(
                saveUserData(
                  response.data.shoppingList,
                  response.data.id,
                  response.data.firstname,
                  response.data.lastname,
                  response.data.email,
                  true,
                  true,
                ),
              );
              // console.log('sauve les userData dans le state.grocery');
              store.dispatch(loadShoppingList(response.data.shoppingList));
            })
            .catch((error) => {
              console.error(error);
              window.location.href = '/error';
            });
