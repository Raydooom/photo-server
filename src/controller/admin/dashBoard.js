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
  // 基本数据
  async getDashBoardAction() {
    let articleCount = await this.model("article_list").count("id");
    let userCount = await this.model("user").count("id");
    let commentCount = await this.model("article_comment").count("id");
    let dailyCount = await this.model("daily").count("id");
    let data = {
      articleCount: articleCount,
      userCount: userCount,
      commentCount: commentCount,
      dailyCount: dailyCount
    };
    this.success(data, "获取成功");
  }

  // 每日访客
  async getDailyVisitorAction() {
    let dailyVisitor = await this.model("visitTimes")
      .order("id DESC")
      .select();
    let data = {
      dailyVisitor: dailyVisitor
    };
    this.success(data, "获取成功");
  }
};
