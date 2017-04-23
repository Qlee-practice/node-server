"use strict";

import {Users, UserProfiles} from '../models';

export const method = 'GET';

export const path = '/';

export const action = async(ctx) => {
  const users = await Users.findAll({
    include: [{model: UserProfiles, as: 'profiles'}]
  });

  ctx.body = {users};
};
