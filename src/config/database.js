import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgres://postgres:039435@localhost:5432/minibancocentral"
);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
