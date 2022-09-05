const { Sequelize } = require("sequelize");

user = process.env.user;
password = process.env.password;
host = process.env.host;
database = process.env.database;

const sequelize = new Sequelize(database, user, "", {
  host: host,
  dialect: "mysql",
  logging: false,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("connected to the DB");
  } catch (e) {
    console.error(e);
  }
};

connectDB();

const Dinosaure = require("./dinosaure")(sequelize);

sequelize.sync({ alter: true });

const db = {
  sequelize,
  Dinosaure,
};

module.exports = db;
