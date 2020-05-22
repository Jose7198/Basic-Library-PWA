/**
 * Bill.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : {
      type : 'string'
    },
    ruc : {
      type : 'string'
    },
    address : {
      type : 'string'
    },
    phoneNumber : {
      type : 'string'
    },
    email : {
      type : 'string',
      isEmail : true
    },
    cashier : {
      type : 'string'
    },
    total : {
      type : 'number'
    },
    detail : {
      type : 'string'
    }

  },

};

