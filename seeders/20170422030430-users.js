'use strict';

const uuidV4 = require('uuid/v4');

const createUsers = (n) => {
  let users = [];
  while (n-- > 0) users.push({
    id: uuidV4(),
    username: `liqiang${n}`,
    password: '123qwe',
    createdAt: new Date,
  });
  return users
};


const createProfilesForUser = user => {
  return ['age', 'gender', 'phoneNumber', 'email'].map(name => {
    return {
      id: uuidV4(),
      userId: user.id,
      name,
      value: `${name}-value`
    }
  });
};

const createProfiles = users => {
  return users.reduce((profiles, user) => profiles.concat(createProfilesForUser(user)), []);
};

module.exports = {
  up: function (queryInterface, Sequelize) {

    const users = createUsers(100);

    return queryInterface.bulkInsert('Users', users)
      .then(() => queryInterface.bulkInsert('UserProfiles', createProfiles(users)));
    /*
     Add altering commands here.
     Return a promise to correctly handle asynchronicity.

     Example:
     return queryInterface.bulkInsert('Person', [{
     name: 'John Doe',
     isBetaMember: false
     }], {});
     */
  },

  down: function (queryInterface, Sequelize) {
    /*
     Add reverting commands here.
     Return a promise to correctly handle asynchronicity.

     Example:
     return queryInterface.bulkDelete('Person', null, {});
     */
  }
};
