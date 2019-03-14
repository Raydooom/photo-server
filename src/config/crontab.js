// 定时任务
module.exports = [
  // 每天新增
  {
    enable: true, // 是否开启
    cron: "0 0 0 ? * *", // 间隔时间字符串或毫秒数
    immediate: false, // 定时任务是否立即执行一次。
    handle: "crontab/index/addDailyVisitor",
    type: "all"
  },
  // 每天one数据更新
  {
    enable: true, // 是否开启
    cron: "0 0 7 ? * *", // 间隔时间字符串或毫秒数
    immediate: false, // 定时任务是否立即执行一次。
    handle: "crontab/index/getOneWeb",
    type: "all"
  }
];
