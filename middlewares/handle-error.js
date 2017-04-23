"use strict";

const SequelizeError = 'SequelizeDatabaseError';
const SequelizeValidationError = 'SequelizeValidationError';
const UniqueError = 'SequelizeUniqueConstraintError';

const errorToJson = e => {
  if (e.errors instanceof Array) return e.errors.map(errorToJson);
  return {message: e.message, type: e.type};
};

const statusMap = {
  [SequelizeError]: 403,
  [SequelizeValidationError]: 400,
  [UniqueError]: 400
};

export default async(ctx, next) => {
  try {
    await next();
  } catch (e) {
    ctx.status = statusMap[e.name] || 500;
    ctx.body = errorToJson(e);
  }
};