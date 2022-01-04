# Cypress Testing Commands
---

### Client
- To load with correct Node version: ```nvm use```
- To start client server: ```npm start```

### API
- To start test database server: ```rails s -e test```
- To manually reset test database: ```bundle exec rake db:reset RAILS_ENV=test```

### Cypress
- To open Cypress IDE window: ```npx cypress open```
- To run tests directly in CLI: ```cypress run```
- Link to resetting Rails db with Cypress: https://gist.github.com/ondrejbartas/446ddfdad497f94384b647b96bd6a32fw