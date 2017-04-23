"use strict";

import {Users, UserProfiles} from '../../models';

export const method = 'GET';

export const path = '/users/:id';

export const action = async(ctx) => {

  const users = await Users.findAll({
    where: {id: ctx.params.id},
    include: [{model: UserProfiles, as: 'profiles'}]
  });

  ctx.body = {users};

};
