'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.createTable('payment',{
    payment_id :{
    primaryKey:true,
    autoIncrement:true,
    type:Sequelize.INTEGER,
    allowNull:false,
    },

    payment_amount:{
    type:Sequelize.INTEGER,
    allowNull:false
    },

    payment_date:{
    type:Sequelize.DATE,
    allowNull:false
    },

    createdAt:{
    type:Sequelize.DATE,
    allowNull:false
    },

    updatedAt:{
    type:Sequelize.DATE,
    allowNull:false}
    }

  )


  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return queryInterface.dropTable('payment');

  }
};
