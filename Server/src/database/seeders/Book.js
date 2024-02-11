'use strict'



/**@type {import('sequelize-cli').Migration}*/

module.exports = {
    up:(queryInterface,Sequelize)=>queryInterface.bulkInsert(
        'Books',
        [{
            title : "Heroes",
            writer: "Ruta Axcel",
            image: "hello",
            price: 50,
            tags: ['fiction'],
            createdAt: new Date(),
            updatedAt: new Date(), 
        }],
        {}
    ),
    down:(queryInterface, Sequelize) =>queryInterface.bulkDelete("Book",null, {})
}