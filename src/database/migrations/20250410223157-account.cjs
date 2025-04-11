"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("account", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: "user", key: "id" },
      },
      institution_id: {
        type: Sequelize.INTEGER,
        references: { model: "institution", key: "id" },
      },
      balance: {
        type: Sequelize.DECIMAL,
        defaultValue: 0.0,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("account");
  },
};
