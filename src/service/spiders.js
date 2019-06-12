const { request } = require("../Plugins");
const cheerio = require("cheerio");

module.exports = class extends think.Service {
  // 抓取one每日一句话
  async getOne() {
    let res = await request.req(think.config("oneUrl"), "GET");
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

  // 根据链接抓取公众号文章内容
  async getContent(url) {
    // 获取每日一句
    let res = await request.req(url, "GET");
    let $ = cheerio.load(res.text);
    let article = $("#img-content");
    let title = $(article[0])
      .find("#activity-name")
      .text()
      .replace(/(^\s*)|(\s*$)/g, "");
    let content = $(article[0])
      .find("#js_content")
      .html()
      .replace(/(^\s*)|(\s*$)/g, "")
      .replace(/data-src=/g, "src=")
      .toString();
    content = unescape(content.replace(/&#x/g, "%u").replace(/;/g, ""));
    $ = cheerio.load(content);
    let cover_img = $("img").attr("src");
    return { title, content, cover_img };
  }
};
