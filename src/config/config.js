// default config
module.exports = {
  workers: 1,
  jwt: {
    secret: "123456789",
    cookie: "jwt-token",
    expire: 60 * 60 * 24 * 3 // 秒
  },
  wx: {
    appId: "wx2984c3354dfc51d6",
    appSecret: "97edbc9d20107e9ad1fc9fc466d1c4b8"
  },
  oneUrl: "http://wufazhuce.com/",
  SERVER_HOST: "http://localhost:8360",
  email: {
    host: "smtp.163.com",
    user: "raydom_app@163.com",
    pass: "Wang619281505",
    from: '"我想学摄影" <raydom_app@163.com>'
  }
};
