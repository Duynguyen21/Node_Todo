var config = require("./config");
module.exports = {
    getDbConnectionString: function() {
        return `mongodb://${config.username}:${config.password}@${config.host}:${config.port}/${config.db_name}`;
    }
}