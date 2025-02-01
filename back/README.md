
## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

to add superhero you can either send a postman request or simply after running it use this curl command to send the request throught you terminal

```bash
curl --location 'http://localhost:3000/superhero' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Spiderman",
    "superpower": "Spider-Powers",
    "humilityScore": 10
}'
```

## If I had more time

Set up a real database like PostgreSQL or MongoDB, depending on whether we need a relational or non-relational database.
Also I could containerize the project using Docker for better scalability and deployment.

## Task expansion with a teammate
If working with a teammate, we could:

1. Introduce authentication & authorization using JWT.
2. Add pagination and filtering for retrieving superheroes efficiently.
3. Set up CI/CD pipelines for automated testing and deployment.
4. Improve error handling and logging for better debugging.

