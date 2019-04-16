const fs = require("fs");
const ExifReader = require("exifreader");

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
  getExifInfo: getExifInfo
};
