// 数据统计
module.exports = class extends think.Controller {
  async appViewCountAction() {
    let model = await this.model("visitTimes");
    let day = think.datetime(new Date(), "YYYY-MM-DD");
    console.log(day);
    let ips = (await this.session("ips")) || [];
    if (!ips.includes(this.ip)) {
      ips.push(this.ip);
      this.session("ips", ips);
      let updateRes = model
        .where(day, day)
        .update({
          users_count: ["exp", "users_count + 1"],
          times: ["exp", "times + 1"]
        });
    } else {
      let updateRes = model
        .where(day, day)
        .update({ times: ["exp", "times + 1"] });
    }
  }
};
