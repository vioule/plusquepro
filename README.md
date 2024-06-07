## First

First, create a .env file at the root of the project with this vars:

```bash
MONGO_ROOT_USERNAME=yourMongoRootUsername
MONGO_ROOT_PASSWORD=yourMongoRootPassword
MONGO_APP_USERNAME=yourMongoAppUsername
MONGO_APP_PASSWORD=yourMongoAppPassword
MONGO_DATABASE=yourMongoDatabaseName
JWT_SECRET=yourJWTSECRET
```

## Second

Launch docker from your root project:

```bash
docker compose up
```

## Third

Inside your app container,

run the development server:

```bash
npm run dev
```

run tests:

```bash
npm run test
# or
npm run test:watch
```

## Four

Access to the app :

```bash
http://localhost:3000/
```

To login into the app use this credentials :

email

```bash
test@test.fr
```

password

```bash
test1234
```
