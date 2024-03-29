'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Accounts',{
      id: {
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
         type:Sequelize.INTEGER,
         unique: true,
      },
      user_id:{
         allowNull: false,
         type:Sequelize.INTEGER,
      },
      balance: {
         allowNull: true,
         type:Sequelize.INTEGER,
         defaultValue : 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
 })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Accounts')
  }
};
