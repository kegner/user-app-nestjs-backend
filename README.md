# User App NestJS

User App NestJS is an example backend NestJS webapp to track a list of users. It can be combined with a frontend application to display data.

### Tech Stack

- NodeJS with Typescript to run the app.
- NestJS as the framework.
- TypeORM and GraphQL for ORM and queries.
- PostgreSQL for storing data.

## Build Instructions

#### Set up the DB

- Install [PostgreSQL](https://www.postgresql.org/download/) on your system (or download [PgAdmin](https://www.postgresql.org/download/) for a database GUI tool).
- Create a new database.
- Running the app will create the schema (this should only be for development).

#### Set up the .env file

- Create a `.env` file from the `.env-template` file.
- Add values to all the DB values for your local Postgres instance.

#### Run the app for development

- Use `npm start` to start the app normally or use any of the other start options in the `package.json` file.

This will default to running the app on port 5000. You may edit this port in the `.env` file.

#### Build the NestJS backend

- `npm run build` will output the transpiled js files to `/dist`.
