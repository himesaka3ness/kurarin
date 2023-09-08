// script.js
var userAgent = window.navigator.userAgent.toLowerCase();
var platform = window.navigator.platform.toLowerCase();

var browserInfo = '';
var osInfo = '';

if (userAgent.indexOf('chrome') > -1) {
    browserInfo = 'Chromeを使用しています。';
} else if (userAgent.indexOf('firefox') > -1) {
    browserInfo = 'Firefoxを使用しています。';
} else if (userAgent.indexOf('safari') > -1) {
    browserInfo = 'Safariを使用しています。';
} else if (userAgent.indexOf('edge') > -1) {
    browserInfo = 'Microsoft Edgeを使用しています。';
} else if (userAgent.indexOf('msie') > -1 || userAgent.indexOf('trident') > -1) {
    browserInfo = 'Internet Explorerを使用しています。';
} else {
    browserInfo = '他のブラウザを使用しています。';
}

if (platform.indexOf('win') > -1) {
    osInfo = 'Windowsを使用しています。';
} else if (platform.indexOf('mac') > -1) {
    osInfo = 'macOSを使用しています。';
} else if (platform.indexOf('linux') > -1) {
    osInfo = 'Linuxを使用しています。';
} else if (platform.indexOf('iphone') > -1) {
    osInfo = 'iPhoneを使用しています。';
} else if (platform.indexOf('android') > -1) {
    osInfo = 'Androidを使用しています。';
} else {
    osInfo = '他のOSを使用しています。';
}

document.getElementById('browser-info').textContent += browserInfo;
document.getElementById('os-info').textContent += osInfo;
