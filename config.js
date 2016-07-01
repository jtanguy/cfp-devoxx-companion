var env = require('common-env')();

module.exports = env.getOrElseAll({
    port: 8080,
    node_env: "development"
});
