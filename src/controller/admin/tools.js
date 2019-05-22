module.exports = class extends think.Controller {
  // 统一登录校验
  __before() {
    if (this.ctx.state.user && this.ctx.state.user.name) {
      // this.success(this.ctx.state.user)
    } else {
      this.fail("未登录");
      return false;
    }
  }
  // 从公众号同步文章
  async asyncWechatArticleAction(){
    const { url, kind, coverUrl, homeShow, description} = this.post();
    let res = await think.service("spiders").getContent(url);
    let currentTime = new Date();
    let { title, cover_img, content } = res;
    let data = {
      article_title: title,
      cover_img: coverUrl || cover_img,
      kind_id: kind || 1,
      home_show: homeShow || 1,
      description: description || "",
      content: content,
      create_date: think.datetime(currentTime),
      update_date: think.datetime(currentTime)
    };
    const result = await this.model('admin/index').addArticle(data);
    this.success(result, "添加文章成功")
  }
}