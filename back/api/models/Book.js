/**
 * Book.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    icbn : {
      type : 'number',
      unique : true, 
      required : true
    },
    name : {
      type : 'string'
    },
    pageNumber : {
      type : 'number',
      min : 1
    },
    edition : {
      type : 'number',
      min : 1
    },
    publicationDate : {
      type : 'string'
    },
    editorialName : {
      type : 'string'
    },
    author_FK : {
      model : 'Author'
    }

  },

};

