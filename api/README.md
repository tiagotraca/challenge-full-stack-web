# Challenge full stack web ui

- This is an Api buid using Express and Sequelize to the challenge.

## Project setup

### You will need

- Yarn

- Node.Js

- Docker

- [Docker-compose](https://docs.docker.com/compose/install/)

### Running

```
docker-compose up
```

## Base dependencies

- [express](https://axios-http.com/) framework to buid api.
- [sequelize](https://vuejs.org/) Sequelize is a promise-based Node.js ORM.
- [cors](https://router.vuejs.org/) package for providing a Connect/Express middleware that can be used to enable CORS .
- [nodemon](https://vuetifyjs.com/) automatically restarts the application when a file changes.

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
   |-- node_modules/             # project dependencies
   |-- src/                      # Contains application source code
   |    |
   |    |-- controllers/         # handles the HTTP Request
   |    |
   |    |-- db/             # db connection
   |    |
   |    |-- models/         # is the database interface
   |    |
   |    |-- routes/         # defines routes
   |    |
   |    |-- tests/          # app tests
   |    |
   |    |-- index.js        # entry point
   |    |


   |-- ************************************************************************
```
