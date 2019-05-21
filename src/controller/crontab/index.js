module.exports = class extends think.Controller {
  __before() {
    if (!this.isCli) return this.fail(1000, "拒绝访问");
  }
  // 每天添加一条每日访客记录
  async addDailyVisitorAction() {
    // 设置session储存当天进入用户的ip
    this.session("ips",[])
    let day = think.datetime(new Date(), "YYYY-MM-DD");
    let cliRes = await this.model("visitTimes").add({
      day: day,
      times: 0,
      users_count: 0
    });
  }
  // 获取one内容
  async getOneWebAction() {
    let res = await think.service("spiders").getOne();
    let currentTime = new Date();
    let { content, from, img_url, date } = res;
    let day = date ? new Date(date) : new Date();
    let sort = new Date(date).getTime() / 10000; // 排序
    let data = {
      content,
      from,
      img_url,
      day: day.getDate(),
      month: day.getMonth() + 1,
      year: day.getFullYear(),
      create_date: think.datetime(currentTime),
      update_date: think.datetime(currentTime),
      sort: sort
    };
    const result = await this.model("one_list").add(data);
    think.logger.info(
      "从one获取数据成功插入数据库，插入时间",
      think.datetime(currentTime)
    );
    this.success(result, "添加精选成功");
  }
};
