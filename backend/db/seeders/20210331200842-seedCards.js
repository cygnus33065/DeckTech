'use strict';
const {createCardObjects} = require("../../utils/seedCards")


// const printSeeds = () => {
  //   seeds.then((data) => {
    //     console.log(data)
    //   })
    // }

    // printSeeds()
    module.exports = {
    up: async (queryInterface, Sequelize) => {
    const seeds = await createCardObjects()
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      */

      Example:
      return queryInterface.bulkInsert('Cards', seeds, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      */

      Example:
      return queryInterface.bulkDelete('Cards', null, {});
  }
};
