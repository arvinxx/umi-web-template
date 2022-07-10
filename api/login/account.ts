import type { NowRequest, NowResponse } from '@vercel/node';

export default async (req: NowRequest, res: NowResponse) => {
  const { password, username, type } = req.body;

  if (password === 'ant.design' && username === 'admin') {
    res.send({
      status: 'ok',
      type,
      currentAuthority: 'admin',
    });
    return;
  }
  if (password === 'ant.design' && username === 'user') {
    res.send({
      status: 'ok',
      type,
      currentAuthority: 'user',
    });
    return;
  }
  if (type === 'mobile') {
    res.send({
      status: 'ok',
      type,
      currentAuthority: 'admin',
    });
    return;
  }

  res.send({
    status: 'error',
    type,
    currentAuthority: 'guest',
  });
};
