"use strict";

const TableName = 'Users';

export default (sequelize, DataType) => {

  let Users = sequelize.define(TableName, {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
      primaryKey: true
    },
    username: {
      type: DataType.STRING,
      defaultValue: '',
      unique: {
        args: true,
        msg: 'Username is existed'
      },
      validate: {
        notEmpty: {msg: 'The username is required'}
      }
    },
    password: {
      type: DataType.STRING,
      defaultValue: '',
      validate: {
        notEmpty: {msg: 'The password is required'}
      }
    }
  });

  Users.associate = ({UserProfiles}) => {

    Users.hasMany(UserProfiles, {
      as: 'profiles',
      foreignKey: 'userId'
    });

  };

  return Users;
};