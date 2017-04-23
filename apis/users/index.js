"use strict";

import {Users, UserProfiles} from '../../models';

export const method = 'GET';

export const path = '/users';

export const action = async(ctx) => {

  const users = await Users.findAll();

  ctx.body = {users};
};
