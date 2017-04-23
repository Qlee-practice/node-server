'use strict';

const tableName = 'UserProfiles';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        unique: true
      },

      userId: {
        type: Sequelize.UUID,
        foreignKey: true
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      value: Sequelize.STRING,

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
    /*
     Add altering commands here.
     Return a promise to correctly handle asynchronicity.

     Example:
     return queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: function (queryInterface) {
    return queryInterface.dropTable(tableName);
    /*
     Add reverting commands here.
     Return a promise to correctly handle asynchronicity.

     Example:
     return queryInterface.dropTable('users');
     */
  }
};
