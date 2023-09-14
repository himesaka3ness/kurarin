var weeks = new Array('日','月','火','水','木','金','土');

var now = new Date();

var year = now.getYear(); // 年
var month = now.getMonth() + 1; // 月
var day = now.getDate(); // 日
var week = weeks[ now.getDay() ]; // 曜日
var hour = now.getHours(); // 時
var min = now.getMinutes(); // 分
var sec = now.getSeconds(); // 秒

if(year < 2000) { year += 1900; }

// 数値が1桁の場合、頭に0を付けて2桁で表示する指定
if(month < 10) { month = "0" + month; }
if(day < 10) { day = "0" + day; }
if(hour < 10) { hour = "0" + hour; }
if(min < 10) { min = "0" + min; }
if(sec < 10) { sec = "0" + sec; }

// 表示開始
document.write('現在：<b>' + year + '年' + month + '月' + day + '日（' + week + '）');
document.write(hour + '時' + min + '分' + sec + '秒</b>');
// 表示終了