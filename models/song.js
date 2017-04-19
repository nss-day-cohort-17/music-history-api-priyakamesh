'use strict'

const { bookshelf } = require('../db/database');
// <Define a model using bookshelf that describes a song object, as well as
// static methods for getting one or all songs from the db>
const Song = bookshelf.Model.extend({
  tableName: 'Song'},
  {
    getAll : function () {
      console.log("get all songs from song table")
      return this.forge()
      .fetchAll()
      .then ( (rows)=>{
        return rows
      })
      .catch ( (error)=>{
        return error
      })

    },

    getSong: function (SongId){
      console.log("get one song")
      return this.forge({SongId})
      .fetch()
      .then( (row)=>{
        return row
      })
      .catch( (error)=>{
        return error;
      })

    },
  deleteSong: function(SongId) {
    return this.where({SongId})
    .destroy()
    .then( () => {
      console.log("im in destroy")
      return {"msg": "Song deleted succesfully"}
    })
    .catch ( (error)=> {return error})
  }
}
)
// When adding the 'table' property use your old friend DB Browser for SQLite to
// open up the musichistory db and inspect the tables. Add the appropriate table name for
// interfacing with the songs collection
module.exports = bookshelf.model('Song',Song);
