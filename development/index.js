import './index.less';

import utils from '../src';

let $container = document.getElementById('container');

$container.innerHTML = `
    <p class="heading">浏览器相关</p>
    <p>browser: ${utils.browser.browser}</p>
    <p>version: ${utils.browser.version}</p>
    <p>msie: ${utils.browser.msie}</p>
    <p>weixin: ${utils.browser.weixin}</p>
    <p>ios: ${utils.browser.ios}</p>
    <p>android: ${utils.browser.android}</p>
    <p class="heading">属性支持</p>
    <p>transition: ${utils.support.transition}</p>
    <p>animation: ${utils.support.animation}</p>
    <p>transform: ${utils.support.transform}</p>
    <p>media: ${utils.support.media}</p>

    <p>canvas: ${utils.support.canvas}</p>
    <p>webgl: ${utils.support.webgl}</p>
`;
