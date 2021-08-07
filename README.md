# Tic-Tac-Toe Authentication Using Supertokens.

Add authentication in tic-tac-toe project using supertokens with snapshot and cypress testing.

## Usage with docker

- Copy .env.example to .env file in both client and server directory.

Run:

- `docker-compose up -d`

- Go to http://localhost:3000/

## Check data with phpMyAdmin

- Go to http://localhost:8080/

- Add username = root and password = root.

## Usage without Docker

- Copy .env.example to .env file in both client and server directory.

Go to client folder.

Run:

- `yarn`

- `yarn start`

Go to Server folder.

- `yarn`

- `node api-server.js`

- Go to http://localhost:3000/

## Cypress test

- Go to client directory.

Run:

- `yarn run cypress open`
