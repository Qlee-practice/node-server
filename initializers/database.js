"use strict";

import {sequelize} from '../models';
import {DatabaseConnectionError} from '../utils/errors';

export default () => sequelize.authenticate().catch(e => {
  throw new DatabaseConnectionError(`Database authenticate error: ${e.message}\n`);
});


