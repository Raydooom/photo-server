const fs = require("fs");
const ExifReader = require("exifreader");
const superagent = require("superagent");

/**
 *
 * @param {*} url 请求url
 * @param {*} method  请求方式
 * @param {*} params params参数
 * @param {*} data body参数
 * @param {*} cookies
 */
const request = (url, method, params, data, cookies) => {
  return new Promise(function(resolve, reject) {
    superagent(method, url)
      .query(params)
      .send(data)
      .set("Content-Type", "application/x-www-form-urlencoded")
      .end(function(err, response) {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
  });
};

/**
 * 获取图片Exif信息
 * @param {String} path
 */
const getExifInfo = path => {
  let datas = fs.readFileSync(path);
  let imageExif = ExifReader.load(datas, { expanded: true });
  return imageExif;
};

module.exports = {
  getExifInfo,
  request
};
