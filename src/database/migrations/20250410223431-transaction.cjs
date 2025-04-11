"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("transaction", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      account_id: {
        type: Sequelize.INTEGER,
        references: { model: "account", key: "id" },
      },
      value: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      type: {
        type: Sequelize.CHAR,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.TIME,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("transaction");
  },
};
