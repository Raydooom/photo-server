const nodemailer = require("nodemailer");

module.exports = class extends think.Service {
  async sendEmail(to, subject, msg) {
    let transporter = nodemailer.createTransport({
      host: think.config("email").host,
      port: 465, // SMTP 端口
      secureConnection: true, // 使用了 SSL
      auth: {
        user: think.config("email").user,
        // 设置的smtp授权码
        pass: think.config("email").pass
      }
    });

    let mailOptions = {
      from: think.config("email").from, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      // 发送text或者html格式
      // text: 'Hello world?', // plain text body
      html: msg // html body
    };

    let sendRes = await transporter.sendMail(mailOptions);
    think.logger.info("发送邮件结果", sendRes);
    return sendRes.messageId ? true : sendRes;
  }
};
