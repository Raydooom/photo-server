module.exports = class extends think.Controller {
  // 每天添加一条每日访客记录
  async addDailyVisitorAction() {
    if (!this.isCli) return this.fail(1000, "拒绝访问");
    let day = think.datetime(new Date(), "YYYY-MM-DD HH:mm:ss");
    let times = parseInt(Math.random() * 10);
    let users = parseInt(Math.random() * 8);
    let cliRes = await this.model("visitTimes").add({
      day: day,
      times: times,
      users_count: users
    });
  }
};
