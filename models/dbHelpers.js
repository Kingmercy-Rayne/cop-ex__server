//  Queries go here

// const knex = require("knex");
// const config = require("../knexfile");
// const db = knex(config.development);

const db = require("../dbConfig");

module.exports = {
  add,
  find,
  //   findById,
  //   remove,
  //   update,
  //   addMessage,
  //   findLessonMessages,
  //   removeMessage,
};

// add, find, findById, remove

async function add(event) {
  console.log("initial error");
  const [id] = await db("event").insert(event);
  console.log("error later");
  return id;
}

function find() {
  return db("event");
}

// function findById(id) {
//   // return db("lessons").where({ id: id }).first();
//   return db("lessons").where({ id }).first();
// }

// function remove(id) {
//   return db("lessons").where({ id }).del();
// }

// function update(id, changes) {
//   // array of id is returned after update
//   return db("lessons")
//     .where({ id })
//     .update(changes)
//     .then(() => {
//       return findById(id);
//     });
// }
