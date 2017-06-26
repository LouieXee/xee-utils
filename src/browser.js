let userAgent = navigator.userAgent.toLowerCase();

let webkit = /(webkit)[ \/]([\w.]+)/;
let opera = /(opera)(?:.*version)?[ \/]([\w.]+)/;
let msie = /(msie) ([\w.]+)/;
let mozilla = /(mozilla)(?:.*? rv:([\w.]+))?/;

let result = webkit.exec(userAgent) || opera.exec(userAgent) || msie.exec(userAgent) || userAgent.indexOf('compatible') && mozilla.exec(t) || [];

export default {
    browser: result[1] || '',
    version: result[2] || '0',
    msie: 'msie' == result[1],
    weixin: !!/micromessenger/.exec(userAgent),
    ios: !!/iphone/.exec(userAgent) || !!/ipad/.exec(userAgent) || !!/ipod/.exec(userAgent),
    android: !!/android/.exec(userAgent)
};