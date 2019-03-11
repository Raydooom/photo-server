const superagent = require("./../utils/superagent");
const cheerio = require("cheerio");

module.exports = class extends think.Service {
  async getOne() {
    // 获取每日一句
    let res = await superagent.req(think.config("oneUrl"), "GET");
    let $ = cheerio.load(res.text);
    let todayOneList = $("#carousel-one .carousel-inner .item");
    let text = $(todayOneList[0])
      .find(".fp-one-cita")
      .text()
      .replace(/(^\s*)|(\s*$)/g, "");
    let imgUrl = $(todayOneList[0])
      .find(".fp-one-imagen")
      .attr("src");

    let tag = $(todayOneList[0])
      .find(".fp-one-imagen-footer")
      .text()
      .replace(/(^\s*)|(\s*$)/g, "");
    return { content: text, img_url: imgUrl, from: tag };
  }
};
