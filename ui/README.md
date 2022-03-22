# Challenge full stack web ui

- This is an UI buid using VUE to the challenge.

## Project setup

### You will need

- Yarn

- Node.Js

### Running

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

## Base dependencies

- [vue](https://vuejs.org/) JavaScript framework for building user interfaces.
- [axios](https://axios-http.com/) Promise based HTTP client for the browser and node.js.
- [vue-router](https://router.vuejs.org/) is the official router for Vue.js.
- [vuetify](https://vuetifyjs.com/) is a Vue UI Library with beautifully handcrafted Material Components.
- [vuex](https://vuex.vuejs.org/) Vuex is a state management pattern + library for Vue.js applications.

## Commits Convention

Prefix:

```
[
  'build',
  'ci',
  'chore',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test'
];
```

Example:

```sh
"fix: some message"
"fix(scope): some message"
```

# Folder structure

## Code-base structure

The project is coded using a simple and intuitive structure presented bellow:

```bash
< PROJECT ROOT >
   |
   |-- Public/                  # folder to specific configs to android devices. this one has the configs to signature releases in it.
   |-- node_modules/             # project dependencies
   |-- src/                      # Contains application source code
   |    |
   |    |-- assets/                 # images, sounds, videos
   |    |
   |    |-- components/             # App custom components
   |    |
   |    |-- plugins/                # plugins addeds to the app
   |    |
   |    |-- router/                  # store the app rotes
   |    |
   |    |-- services/                # logic to make requests to the api
   |    |
   |    |-- store/                  # used to manage the states
   |    |
   |    |-- view/                  # used to store routed components
   |    |
   |    |-- App.vue                  # vue instance
   |    |-- main.js                  # entry point for the application
   |    |


   |-- ************************************************************************
```
