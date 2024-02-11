'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Books',{
      id:{
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER,
       unique: true,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      writer: {
       allowNull: false,
        type: Sequelize.STRING
      },
      image: {
       allowNull: false,
       type: Sequelize.STRING
      },
      price: {
       allowNull: false,
        type: Sequelize.INTEGER
      },
      tags: {
       allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING)
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
    await queryInterface.dropTable('Books')
  }
};

