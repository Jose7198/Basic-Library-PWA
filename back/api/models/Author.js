/**
 * Author.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    names: {
      type : 'string'
    },
    lastNames : {
      type : 'string'
    },
    birthDate : {
      type : 'string'
    },
    numberBooks : {
      type : 'number',
      min: 1
    },
    ecuatorian : {
      type: 'boolean'
    },
    books: {
      collection : 'Book',
      via : 'author_FK'
    }

  },

};

