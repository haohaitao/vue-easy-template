/*
 * @Description  : 工具类
 * @Author       : pacino
 * @Date         : 2021-09-03 17:06:12
 * @LastEditTime : 2021-09-03 17:07:35
 * @LastEditors  : pacino
 */
// 数组去重
export const unique = function(arr) {
  return [...new Set(arr)];
};

// 日期转为时间格式
export const timestampToTime = function(timestamp) {
  // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let dateTime =
    timestamp.toString().length > 10 ? timestamp : timestamp * 1000;
  let date = new Date(dateTime);
  let Y = date.getFullYear() + "-";
  let M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  let D =
    (date.getDate() + 1 < 10 ? "0" + date.getDate() : date.getDate()) + " ";
  let h =
    (date.getHours() + 1 < 10 ? "0" + date.getHours() : date.getHours()) + ":";
  let m =
    (date.getMinutes() + 1 < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    ":";
  let s =
    date.getSeconds() + 1 < 10 ? "0" + date.getSeconds() : date.getSeconds();
  return Y + M + D + h + m + s;
};

//   let onTime = new Date().valueOf();
//   timestampToTime(onTime) // "2021-09-03 17:08:35"
