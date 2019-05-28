const { randomString } = require("../commonUtils");
module.exports = class extends think.Controller {
  /**
   * 获取邮件验证码
   * @param {String} email 邮箱
   */
  async getEmailCodeAction() {
    let { email } = this.post();
    let code = randomString(4);
    let title = "验证码-我想学摄影";
    let sendHtml = `验证码：<span style="font-weight:bold;color:#222">${code}</span>`;
    let res = await think
      .service("sendEmail")
      .sendEmail(email, title, sendHtml);
    if (res === true) {
      // 将验证码存入session
      await this.session(email, code);
      // 3分钟后清除session
      setTimeout(() => {
        this.session(email, null);
      }, 3 * 60 * 1000);
      think.logger.info(sendHtml);
      this.success(res, "发送成功");
    } else {
      this.fail("发送失败，请稍后再试");
    }
  }
  /**
   * 校验邮箱验证码
   * @param {String} email 邮箱
   * @param {String} code 验证码
   */
  async verifyEmailCodeAction() {
    let { email, code } = this.post();
    if ((await this.session(email)) == code) {
      this.success(true, "邮箱校验成功！");
    } else {
      this.fail("邮箱校验失败！");
    }
  }
};
