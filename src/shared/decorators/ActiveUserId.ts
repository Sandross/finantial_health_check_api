import { createParamDecorator } from '@nestjs/common';

export const ActiveUserId = createParamDecorator((data, req) => {
  return req.user.userId;
});
