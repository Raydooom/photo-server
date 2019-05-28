module.exports = class extends think.Logic {
  getEmailIdentifyCodeAction() {
    let rules = {
      to: {
        required: true, // 字段必填
        trim: true, // 字段需要trim处理
        method: "POST" // 指定获取数据的方式
      },
      subject: {
        required: true, // 字段必填
        trim: true, // 字段需要trim处理
        method: "POST" // 指定获取数据的方式
      },
      msg: {
        required: true, // 字段必填
        trim: true, // 字段需要trim处理
        method: "POST" // 指定获取数据的方式
      }
    };
    let flag = this.validate(rules);
  }
};
