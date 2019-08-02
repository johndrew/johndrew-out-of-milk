const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const { ApolloServer, gql } = require('apollo-server-express');
const log = require('./logger');
const db = require('./data/models');

function createServer() {
  log.info('Creating GraphQL server');
  const typeDefs = gql`
    type Query {
      hello: String
      items: [Item]
    }

    type Mutation {
      addItem(name: String!): Item
    }

    type Item {
      id: Int
      name: String
    }
  `;
  
  // Provide resolver functions for your schema fields
  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      items: () => db.Item.findAll(),
    },
    Mutation: {
      addItem: (name) => db.Item.create({ name }),
    }
  };
  const server = new ApolloServer({ typeDefs, resolvers });
  const app = express();

  log.info('Attaching middleware');
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(bodyParser.json({ type: 'application/*+json' }));
  server.applyMiddleware({ app });

  // add client routes
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  })

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    log.error(err);
    res.status(err.status || 500);
    res.send(`An unexpected error occurred: ${err.message}`);
  });

  return app;
}

module.exports = createServer;
