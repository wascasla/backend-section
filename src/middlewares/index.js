const { models } = require("mongoose");

module.exports = {
    NotFoundMiddleware: require('./not-found.middleware'),
    ErrorMiddleware: require("./error.middleware")
}