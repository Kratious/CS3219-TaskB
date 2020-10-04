# CS3219-TaskB


# Backend Setup

To setup the backend locally, navigate to the folder `packages/back` and run: 

```
$ yarn install
$ yarn start
```

Access the backend endpoints at localhost:5000

## Heroku Monorepo Backend Configuration

Create remote for heroku app
`$ heroku create cs3219-backend --remote heroku-backend`

Add heroku-postbuild to `packages/back/package.json`:
```
{
    ...,
    "scripts: {
      ...
      "heroku-postbuild": "npm run build"
      ...
    }
    ...
}
```

Create backend Procfile at `packages/back/Procfile`:
```
web: node build/index.js
```

Configure heroku buildpacks
```
$ heroku buildpacks:add -a cs3219-backend heroku/nodejs
$ heroku buildpacks:add -a cs3219-backend -i 1 https://github.com/lstoll/heroku-buildpack-monorepo

# set base path for cs3219
$ heroku -a frontend config:set APP_BASE packages/back

# to deploy
$ git push heroku-backend master
```

## Deploy to Heroku

To push changes:
`$ git push heroku-backend master`

To establish seed:
`$ heroku run knex seed:run --knexfile build/knexfile.js`

To run migration:
`$ heroku run knex migrate:latest --knexfile build/knexfile.js`
