'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Orders',{
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
          unique: true,
      },
      user_id: {
         allowNull : false,
         type: Sequelize.INTEGER,            
      },
      book_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
      },
      status: {
          allowNull: false,
          type: Sequelize.STRING,
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
    await queryInterface.dropTable('Orders')
  }
};

