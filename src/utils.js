let __count__ = 0; // 设置唯一ID用
let __style__ = document.createElement('div').style;

const utils = {
    getAvaliableProperty (properties) {
        for (let property of properties) {
            if (typeof __style__[property] != 'undefined') {
                return true;
            }
        }

        return false;
    },

    noop: function () {},

    getUniqueID: function () {
        return new Date().getTime().toString(36).toUpperCase() + '' + (Math.random() * 10e16).toString(36).toUpperCase() + __count__++;
    },

    isString: function (target) {
        return _getType(target) === '[object String]';
    },

    isNumber: function (target) {
        return _getType(target) === '[object Number]';
    },

    isFunction: function (target) {
        return _getType(target) === '[object Function]';
    },

    isObject: function (target) {
        return _getType(target) === '[object Object]';
    },

    isArray: function (target) {
        return _getType(target) === '[object Array]';
    },

    isBoolean: function (target) {
        return _getType(target) === '[object Boolean]';
    },

    raf: function (cb) {
        utils.raf = (window.requestAnimationFrame
                    || function (cb) {
                        return setTimeout(cb, 1000 / 60);
                    }).bind(window);

        utils.raf.cancel = (window.cancelAnimationFrame
                            || function (id) {
                                return clearTimeout(id);
                            }).bind(window)

        return utils.raf(cb);
    },

    /*
        模板方法
        @method template
        @param {String} tmpl
        @param {Object} data
        @return {String}
    */
    template: function (tmpl, data) {
        return tmpl.replace(/\{%([a-zA-Z0-9]+)%\}/g, function (match, name) {
            return data[name];
        })
    },

    /*
        加载js文件
        @method loadScript
        @param {Object || String} opt 当是对象时则为配置对象，当是字符串时则为文件路径
        @param {String} opt.src 文件路径
        @param {String} optional opt.charset 编码格式
        @param {Function} optional opt.success 成功回调
        @return {Promise}
    */
    loadScript: function (opt) {
        return new Promise((resolve, reject) => {
            let script = document.createElement('script');
            if (script.readyState) { // IE
                script.onreadystatechange = function () {
                    if (script.readyState == 'loaded' || script.readyState == 'complete') { 
                        script.onreadystatechange = null; 
                        resolve();
                    } 
                };
            } else {    // Others
                script.onload = function () {  
                    resolve();
                }; 
            }

            script.type = 'text/javascript';
            script.src = (this.isString(opt) && opt) || (this.isObject(opt) && opt.src);

            this.isString(opt.charset) && (script.charset = opt.charset);
            
            document.getElementsByTagName('head')[0].appendChild(script);
        })
    },

    /*
        加载css文件
        @mehotd loadStyle
        @param {Object || String} opt 当是对象时则为配置对象，当是字符串时则为文件路径
        @param {String} opt.href
        @param {Function} opt.success
        @return {Promise}
    */
    loadStyle: function (opt) {
        return new Promise((resolve, reject) => {
            let link = document.createElement('link');
            link.onload = function () {
                resolve();
            };

            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = (this.isString(opt) && opt) || (this.isObject(opt) && opt.href);
            document.getElementsByTagName('head')[0].appendChild(link);
        })
    },
};

export default utils;

function _getType (target) {
    return Object.prototype.toString.call(target);
}
