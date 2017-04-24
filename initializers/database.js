"use strict";

import {DatabaseConnectionError} from '../utils/errors';
import {sequelize} from '../models';

export default () => sequelize.authenticate().catch(e => {
  throw new DatabaseConnectionError(`Database authenticate error: ${e.message}\n`);
});


