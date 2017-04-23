"use strict";

const TableName = 'UserProfiles';

export default (sequelize, DataType) => {

  let UserProfiles = sequelize.define(TableName, {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
      primaryKey: true
    },
    userId: {
      type: DataType.UUID,
      foreignKey: true
    },
    name: DataType.STRING,
    value: DataType.STRING
  });

  UserProfiles.associate = ({Users}) => {
    UserProfiles.belongsTo(Users, {
      as: 'user'
    });
  };

  return UserProfiles;
};