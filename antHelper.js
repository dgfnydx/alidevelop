;(function(global) {
    var hexcase=0;var b64pad="";var chrsz=8;function hex_md5(a){return binl2hex(core_md5(str2binl(a),a.length*chrsz))}function b64_md5(a){return binl2b64(core_md5(str2binl(a),a.length*chrsz))}function str_md5(a){return binl2str(core_md5(str2binl(a),a.length*chrsz))}function hex_hmac_md5(a,b){return binl2hex(core_hmac_md5(a,b))}function b64_hmac_md5(a,b){return binl2b64(core_hmac_md5(a,b))}function str_hmac_md5(a,b){return binl2str(core_hmac_md5(a,b))}function md5_vm_test(){return hex_md5("abc")=="900150983cd24fb0d6963f7d28e17f72"}var appId="300000000";var appKey="D88DB9077BE481F747CD4BA24BAD8B23";function core_md5(o,k){o[k>>5]|=128<<((k)%32);o[(((k+64)>>>9)<<4)+14]=k;var p=1732584193;var n=-271733879;var m=-1732584194;var l=271733878;for(var g=0;g<o.length;g+=16){var j=p;var h=n;var f=m;var e=l;p=md5_ff(p,n,m,l,o[g+0],7,-680876936);l=md5_ff(l,p,n,m,o[g+1],12,-389564586);m=md5_ff(m,l,p,n,o[g+2],17,606105819);n=md5_ff(n,m,l,p,o[g+3],22,-1044525330);p=md5_ff(p,n,m,l,o[g+4],7,-176418897);l=md5_ff(l,p,n,m,o[g+5],12,1200080426);m=md5_ff(m,l,p,n,o[g+6],17,-1473231341);n=md5_ff(n,m,l,p,o[g+7],22,-45705983);p=md5_ff(p,n,m,l,o[g+8],7,1770035416);l=md5_ff(l,p,n,m,o[g+9],12,-1958414417);m=md5_ff(m,l,p,n,o[g+10],17,-42063);n=md5_ff(n,m,l,p,o[g+11],22,-1990404162);p=md5_ff(p,n,m,l,o[g+12],7,1804603682);l=md5_ff(l,p,n,m,o[g+13],12,-40341101);m=md5_ff(m,l,p,n,o[g+14],17,-1502002290);n=md5_ff(n,m,l,p,o[g+15],22,1236535329);p=md5_gg(p,n,m,l,o[g+1],5,-165796510);l=md5_gg(l,p,n,m,o[g+6],9,-1069501632);m=md5_gg(m,l,p,n,o[g+11],14,643717713);n=md5_gg(n,m,l,p,o[g+0],20,-373897302);p=md5_gg(p,n,m,l,o[g+5],5,-701558691);l=md5_gg(l,p,n,m,o[g+10],9,38016083);m=md5_gg(m,l,p,n,o[g+15],14,-660478335);n=md5_gg(n,m,l,p,o[g+4],20,-405537848);p=md5_gg(p,n,m,l,o[g+9],5,568446438);l=md5_gg(l,p,n,m,o[g+14],9,-1019803690);m=md5_gg(m,l,p,n,o[g+3],14,-187363961);n=md5_gg(n,m,l,p,o[g+8],20,1163531501);p=md5_gg(p,n,m,l,o[g+13],5,-1444681467);l=md5_gg(l,p,n,m,o[g+2],9,-51403784);m=md5_gg(m,l,p,n,o[g+7],14,1735328473);n=md5_gg(n,m,l,p,o[g+12],20,-1926607734);p=md5_hh(p,n,m,l,o[g+5],4,-378558);l=md5_hh(l,p,n,m,o[g+8],11,-2022574463);m=md5_hh(m,l,p,n,o[g+11],16,1839030562);n=md5_hh(n,m,l,p,o[g+14],23,-35309556);p=md5_hh(p,n,m,l,o[g+1],4,-1530992060);l=md5_hh(l,p,n,m,o[g+4],11,1272893353);m=md5_hh(m,l,p,n,o[g+7],16,-155497632);n=md5_hh(n,m,l,p,o[g+10],23,-1094730640);p=md5_hh(p,n,m,l,o[g+13],4,681279174);l=md5_hh(l,p,n,m,o[g+0],11,-358537222);m=md5_hh(m,l,p,n,o[g+3],16,-722521979);n=md5_hh(n,m,l,p,o[g+6],23,76029189);p=md5_hh(p,n,m,l,o[g+9],4,-640364487);l=md5_hh(l,p,n,m,o[g+12],11,-421815835);m=md5_hh(m,l,p,n,o[g+15],16,530742520);n=md5_hh(n,m,l,p,o[g+2],23,-995338651);p=md5_ii(p,n,m,l,o[g+0],6,-198630844);l=md5_ii(l,p,n,m,o[g+7],10,1126891415);m=md5_ii(m,l,p,n,o[g+14],15,-1416354905);n=md5_ii(n,m,l,p,o[g+5],21,-57434055);p=md5_ii(p,n,m,l,o[g+12],6,1700485571);l=md5_ii(l,p,n,m,o[g+3],10,-1894986606);m=md5_ii(m,l,p,n,o[g+10],15,-1051523);n=md5_ii(n,m,l,p,o[g+1],21,-2054922799);p=md5_ii(p,n,m,l,o[g+8],6,1873313359);l=md5_ii(l,p,n,m,o[g+15],10,-30611744);m=md5_ii(m,l,p,n,o[g+6],15,-1560198380);n=md5_ii(n,m,l,p,o[g+13],21,1309151649);p=md5_ii(p,n,m,l,o[g+4],6,-145523070);l=md5_ii(l,p,n,m,o[g+11],10,-1120210379);m=md5_ii(m,l,p,n,o[g+2],15,718787259);n=md5_ii(n,m,l,p,o[g+9],21,-343485551);p=safe_add(p,j);n=safe_add(n,h);m=safe_add(m,f);l=safe_add(l,e)}return Array(p,n,m,l)}function md5_cmn(h,e,d,c,g,f){return safe_add(bit_rol(safe_add(safe_add(e,h),safe_add(c,f)),g),d)}function md5_ff(g,f,k,j,e,i,h){return md5_cmn((f&k)|((~f)&j),g,f,e,i,h)}function md5_gg(g,f,k,j,e,i,h){return md5_cmn((f&j)|(k&(~j)),g,f,e,i,h)}function md5_hh(g,f,k,j,e,i,h){return md5_cmn(f^k^j,g,f,e,i,h)}function md5_ii(g,f,k,j,e,i,h){return md5_cmn(k^(f|(~j)),g,f,e,i,h)}function core_hmac_md5(c,f){var e=str2binl(c);if(e.length>16){e=core_md5(e,c.length*chrsz)}var a=Array(16),d=Array(16);for(var b=0;b<16;b++){a[b]=e[b]^909522486;d[b]=e[b]^1549556828}var g=core_md5(a.concat(str2binl(f)),512+f.length*chrsz);return core_md5(d.concat(g),512+128)}function safe_add(a,d){var c=(a&65535)+(d&65535);var b=(a>>16)+(d>>16)+(c>>16);return(b<<16)|(c&65535)}function bit_rol(a,b){return(a<<b)|(a>>>(32-b))}function str2binl(d){var c=Array();var a=(1<<chrsz)-1;for(var b=0;b<d.length*chrsz;b+=chrsz){c[b>>5]|=(d.charCodeAt(b/chrsz)&a)<<(b%32)}return c}function binl2str(c){var d="";var a=(1<<chrsz)-1;for(var b=0;b<c.length*32;b+=chrsz){d+=String.fromCharCode((c[b>>5]>>>(b%32))&a)}return d}function binl2hex(c){var b=hexcase?"0123456789ABCDEF":"0123456789abcdef";var d="";for(var a=0;a<c.length*4;a++){d+=b.charAt((c[a>>2]>>((a%4)*8+4))&15)+b.charAt((c[a>>2]>>((a%4)*8))&15)}return d}function binl2b64(d){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var f="";for(var b=0;b<d.length*4;b+=3){var e=(((d[b>>2]>>8*(b%4))&255)<<16)|(((d[b+1>>2]>>8*((b+1)%4))&255)<<8)|((d[b+2>>2]>>8*((b+2)%4))&255);for(var a=0;a<4;a++){if(b*8+a*6>d.length*32){f+=b64pad}else{f+=c.charAt((e>>6*(3-a))&63)}}}return f}function Base64(){_keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";this.encode=function(c){var b="";var j,g,e,k,h,f,d;var a=0;c=_utf8_encode(c);while(a<c.length){j=c.charCodeAt(a++);g=c.charCodeAt(a++);e=c.charCodeAt(a++);k=j>>2;h=((j&3)<<4)|(g>>4);f=((g&15)<<2)|(e>>6);d=e&63;if(isNaN(g)){f=d=64}else{if(isNaN(e)){d=64}}b=b+_keyStr.charAt(k)+_keyStr.charAt(h)+_keyStr.charAt(f)+_keyStr.charAt(d)}return b};this.decode=function(c){var b="";var j,g,e;var k,h,f,d;var a=0;c=c.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(a<c.length){k=_keyStr.indexOf(c.charAt(a++));h=_keyStr.indexOf(c.charAt(a++));f=_keyStr.indexOf(c.charAt(a++));d=_keyStr.indexOf(c.charAt(a++));j=(k<<2)|(h>>4);g=((h&15)<<4)|(f>>2);e=((f&3)<<6)|d;b=b+String.fromCharCode(j);if(f!=64){b=b+String.fromCharCode(g)}if(d!=64){b=b+String.fromCharCode(e)}}b=_utf8_decode(b);return b};_utf8_encode=function(a){a=a.replace(/\r\n/g,"\n");var b="";for(var e=0;e<a.length;e++){var d=a.charCodeAt(e);if(d<128){b+=String.fromCharCode(d)}else{if((d>127)&&(d<2048)){b+=String.fromCharCode((d>>6)|192);b+=String.fromCharCode((d&63)|128)}else{b+=String.fromCharCode((d>>12)|224);b+=String.fromCharCode(((d>>6)&63)|128);b+=String.fromCharCode((d&63)|128)}}}return b};_utf8_decode=function(d){var b="";var a=0;var e=c1=c2=0;while(a<d.length){e=d.charCodeAt(a);if(e<128){b+=String.fromCharCode(e);a++}else{if((e>191)&&(e<224)){c2=d.charCodeAt(a+1);b+=String.fromCharCode(((e&31)<<6)|(c2&63));a+=2}else{c2=d.charCodeAt(a+1);c3=d.charCodeAt(a+2);b+=String.fromCharCode(((e&15)<<12)|((c2&63)<<6)|(c3&63));a+=3}}}return b}};
    var AntHelper = function(antConfig) {
        this.project_id = antConfig.projectId;
        // this.tag = antConfig.tag;
        this.userId = null;
        this.nickName = null;
        this.avatar = null;
        this.gender = null;
        this.userAuth();//实例化AntHelper后自动授权
    };
    AntHelper.prototype = {
        /**
         * [antHelper.extend 对象合并、扩展]
         * @param  {[object]} firstObj  [第一个对象]
         * @param  {[object]} secondObj [第二个对象]
         * @return {[object]}           [合并后对象]
         */
        extend: function(firstObj, secondObj){  
            for(var k in secondObj) {  
                firstObj[k] = secondObj[k];  
            };
            return firstObj;  
        },
        /**
         * [series 序列数生成，如：0001]
         * @param  {[type]} seriesNum    [数字，如：2]
         * @param  {[type]} seriesLength [序列数长度，如：4]
         * @param  {[type]} filler       [填充字符，如：0]
         * @return {[type]}              [0002]
         */
        series: function(seriesNum, seriesLength, filler) {
            var filler = filler || '0';
            var seriesNum = seriesNum + '';
            var numStr = new Array(seriesLength - seriesNum.length + 1).join(filler) + seriesNum;
                return seriesNum.length >= seriesLength ? seriesNum : numStr;
        },
        /**
         * [toRadian 角度转弧度]
         * @param  {[type]} degree [角度]
         * @return {[type]}        [弧度]
         */
        toRadian: function(degree) {
            return degree * Math.PI / 180;
        },
        /**
         * [toDegree 弧度转角度]
         * @param  {[type]} radian [弧度]
         * @return {[type]}        [角度]
         */
        toDegree: function(radian) {
            return radian / Math.PI * 180;
        },
        /**
         * [randomNum 生成规定范围内不重复的随机数]
         * @param  {[Numeber]} len   [个数]
         * @param  {[Numeber]} start [起始数字]
         * @param  {[Numeber]} end   [结束]
         * @return {[array]}       [description]
         * @example:获取1-10中3个不重复的随机数字
         * antHelper.randomNum(3, 1, 10) 
         */
        randomNum: function(len, start, end) {
            var arr = [];
            var num;
            for(var i = 0; i < len; i++){
                num = Math.floor(Math.random() * (end - start + 1) + start);
                for(var j = 0; j < arr.length; j++) {
                    if(num == arr[j]){
                        num = Math.floor(Math.random()* (end - start + 1) + start);
                        j = -1;
                    }
                }
                arr.push(num);
            }
            return arr;
        },
        /**
         * [getArrayItems 从一个给定的数组arr中,随机返回num个不重复项]
         * @param  {[array]} arr [给定数组]
         * @param  {[number]} num [个数]
         * @return {[array]}     [description]
         * @example:
         * var ArrList=[a,2,3,b,5,c,7,d]; var reaust = getArrayItems(ArrList,2)
         * AR.log(reaust);
         */
        getArrayItems: function(arr, num) {
            //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
            var temp_array = [];
            for (var index in arr) {
                temp_array.push(arr[index]);
            }
            //取出的数值项,保存在此数组
            var return_array = [];
            for (var i = 0; i < num; i++) {
                //判断如果数组还有可以取出的元素,以防下标越界
                if (temp_array.length > 0) {
                    //在数组中产生一个随机索引
                    var arrIndex = Math.floor(Math.random() * temp_array.length);
                    //将此随机索引的对应的数组元素值复制出来
                    return_array[i] = temp_array[arrIndex];
                    //然后删掉此索引的数组元素,这时候temp_array变为新的数组
                    temp_array.splice(arrIndex, 1);
                } else {
                    //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
                    break;
                }
            }
            return return_array;
        },
        /**
         * [quaternionFromEuler 欧拉角转四元数]
         * @param  {[type]} x [x轴弧度]
         * @param  {[type]} y [y轴弧度]
         * @param  {[type]} z [z轴弧度]
         * @return {[type]}   [四元数]
         */
        quaternionFromEuler: function(x, y, z) {
            var c1 = Math.cos(x / 2);
            var c2 = Math.cos(y / 2);
            var c3 = Math.cos(z / 2);
            var s1 = Math.sin(x / 2);
            var s2 = Math.sin(y / 2);
            var s3 = Math.sin(z / 2);

            var xx = s1 * c2 * c3 + c1 * s2 * s3;
            var yy = c1 * s2 * c3 - s1 * c2 * s3;
            var zz = c1 * c2 * s3 + s1 * s2 * c3;
            var ww = c1 * c2 * c3 - s1 * s2 * s3;

            return [xx, yy, zz, ww];
        },
        /**
         * [getDeviceInfo 获取硬件信息]
         * @param  {[String]} infoType [信息类型："platform","divice","screen"]
         * @return {[String]}           ["platform": ios or andriod
         *                               "device": iphone9,1
         *                               "screen": 750x1334
         *                               "screenWidth": 750
         *                               "screenHeight": 1334
         *                               ]
         * @example: AR.log(antHelper.getDeviceInfo("platform"))
         */
        getDeviceInfo: function(infoType) {
            var userAgent = AR.getEnvProp("arUserAgent");
            if(!userAgent) {
                return false;
            }
            switch(infoType) {
                case "platform":
                    var info = userAgent.split(";")[0].split(" ")[1];
                break;
                case "device":
                    var info = userAgent.split(";")[1].split(" ")[1];
                break;
                case "screen":
                    var info = userAgent.split(";")[3].split(" ")[1];
                break;
                case "screenWidth":
                    var info = AR.getEnvProp("screenWidth");
                break;
                case "screenHeight":
                    var info = AR.getEnvProp("screenHeight");
                break;
            }
            return info;
        },
        /**
         * [createAnimation 创建属性动画，并自动创建id为 'Default' 的动画片段[0 - duration]]
         * @param  {[type]} createOptions.animaId [要创建的动画id (如有重复会创建失败)]
         * @param  {[type]} createOptions.nodeId [动画对应的节点id]
         * @param  {[type]} createOptions.propertyId [动画类型(参考API常量定义)]
         * @param  {[type]} createOptions.keyCount [总帧数]
         * @param  {[type]} createOptions.keyTimes [帧时间点数组]
         * @param  {[type]} createOptions.keyValues [帧属性值数组(每帧需要的value个数参考API常量定义中的data部分)]
         * @param  {[type]} createOptions.type [插值类型(参考API常量定义)]
         * @return {[type]}               [description]
         */
        createAnimation: function(createOptions) {
            AR.create_animation(createOptions.animId, createOptions.nodeId, createOptions.propertyId, createOptions.keyCount, createOptions.keyTimes, createOptions.keyValues, createOptions.type)
        },
        /**
         * [frameAnimation 逐帧动画]
         * @param  {[object]} antOptions [帧动画参数]
         * @return {[type]}            [description]
         */
        frameAnimation: function(antOptions) {
            var _this = this;
            var index = 1;
            var defaultOptions = {
                startNum: 0,
                seriesLength: 3,
                // imagesCount: 6,
                frameRate: 42,
                // imagePath: "images/",
                // needTextureNode: "pCube1",
                // filler: "0",
                repeat: 0,
                frameAnimateCallBack: null
            };
            var getFrameOptions = this.extend(defaultOptions, antOptions);

            function seriesNum() {
                var changeStr = getFrameOptions.startNum + '';
                return _this.series(changeStr, getFrameOptions.seriesLength, getFrameOptions.filler);
            }
            function getTexturePath() {
                return getFrameOptions.imagePath + seriesNum() + ".png";
            }
            function frameAnimate() {
                var startNum = getFrameOptions.startNum;//缓存初始数值
                for (var i = 0; i < getFrameOptions.imagesCount; i++) {
                    frameTimer = AR.setTimeout(function () {
                        var filePath = getTexturePath();
                        AR.set_texture(getFrameOptions.needTextureNode, filePath, 0);
                        if (__version != "0.0.2") { // 0.0.3版本开始支持清理缓存
                            AR.remove_tex_cache(getTexturePath());
                        }
                        getFrameOptions.startNum++;
                        if(getFrameOptions.startNum - startNum >= getFrameOptions.imagesCount) {
                            index++;
                            if(getFrameOptions.repeat >= index) {
                                getFrameOptions.startNum = startNum;
                                frameAnimate();
                            } else if(getFrameOptions.repeat == 0) {
                                getFrameOptions.startNum = startNum;
                                frameAnimate();
                            }
                            if(typeof getFrameOptions.callBack === "function") {
                                getFrameOptions.callBack()
                            }
                        }
                    }, i * getFrameOptions.frameRate);
                }
            }
            frameAnimate();
        },
        /**
         * [countDown 两位数倒计时]
         * @param  {[object]} cdconfig [description]
         * @return {[type]}          [description]
         */
        countDown: function(cdConfig) {
            var len = cdConfig.nodeArr.length;
            var totalTime = cdConfig.totalTime;
            countMain();
            var countDownTimer = AR.setInterval(function() {
                totalTime -= 1;
                countMain();
                cdConfig.timeOutCallBack(totalTime, countDownTimer);
                // if(totalTime <= 0) {
                //     AR.clearInterval(countDownTimer);
                //     cdConfig.timeOutCallBack();
                // }
            }, 1000);
            function countMain() {
                var totalStr = totalTime + "";
                var totalArr = totalStr.split("");
                var tlen = totalArr.length;
                if(tlen < len) {
                    for(var j = 0; j < len - tlen; j++) {
                        totalArr.unshift("0");
                    }
                } else if(tlen > len) {
                    AR.log("数值溢出");
                    AR.clearInterval(countDownTimer);
                    return false;
                }
                for(var i = 0; i < len; i++) {
                    AR.set_texture(cdConfig.nodeArr[i], cdConfig.pathPart1 + totalArr[i] + cdConfig.pathPart2)
                }
            }
        },
        /**
         * [scoreboard 计分板]
         * @param  {[object]} tpConfig [description]
         * @return {[type]}          [description]
         */
        scoreboard: function(tpConfig) {
            // 计分板位数
            var len = tpConfig.nodeArr.length;
            // 计分板最大值
            var max = new Array(len + 1).join(tpConfig.maxVal + "") - 0;
            // 得分
            var totalPoint = tpConfig.total;
            if(totalPoint <= max) {
                var totalStr = totalPoint + "";
                var totalArr = totalStr.split("");
                var tlen = totalArr.length;
                // 如果实际分数位数小于计分板位数，左边补零
                if(tlen < len) {
                    for(var j = 0; j < len - tlen; j++) {
                        totalArr.unshift("0");
                    }
                }
                for(var i = 0; i < len; i++) {
                    AR.set_texture(tpConfig.nodeArr[i], tpConfig.pathPart1 + totalArr[i] + tpConfig.pathPart2)
                }
            } else {
                for(var i = 0; i < len; i++) {
                    AR.set_texture(tpConfig.nodeArr[i], tpConfig.pathPart1 + tpConfig.maxVal + tpConfig.pathPart2)
                }
            }
        },
        /**
         * [setVisible 控制节点显隐]
         * @param {[type]} node [single node or array]
         * @param {[type]} bool [true or false]
         */
        setVisible: function(node, bool) {
            if(typeof node === "string") {
                AR.set_visible(node, bool);
            } else if(typeof node === "object") {
                for(var i = 0, len = node.length; i < len; i++) {
                    AR.set_visible(node[i], bool);
                }
            }
        },
        /**
         * [playAnimation 播放骨骼动画]
         * @param  {[string or array]} clip          [动画片段]
         * @param  {[type]} animationName [动画片段名称]
         * @param  {[type]} repeat        [重复次数]
         * @return {[type]}               [description]
         */
        playAnimation: function(clip, animationName, repeat) {
            if(typeof clip === "string") {
                AR.play(clip + "#" + animationName, repeat);
            } else if(typeof clip === "object") {
                for(var i = 0; i < clip.length; i++) {
                    AR.play(clip[i] + "#" + animationName[i], repeat[i]);
                }
            }
        },
        /**
         * [playVideo 普通或镂空视频播放]
         * @param  {[type]} alphaVideo [视频类型，true:镂空，false：普通]
         * @param  {[type]} videoNode  [视频播放节点]
         * @param  {[type]} videoUrl   [视频地址]
         * @param  {[type]} repeatPlay [播放次数]
         * @return {[type]}            [description]
         */
        playVideo: function(alphaVideo, videoNode, videoUrl, repeatPlay) {
            if(alphaVideo) {
                var options = {};
                options.transparent = true;
                AR.set_video(videoNode, videoUrl, repeatPlay, JSON.stringify(options))
                AR.play_video(videoNode)
            } else {
                AR.set_video(videoNode, videoUrl, repeatPlay)
                AR.play_video(videoNode)
            }
        },
        /**
         * [userAuth 用户授权，获取基本信息nickName，avatar， gender，userId]
         * @return {[type]}             [description]
         */
        userAuth: function(authOptions) {
            var _this = this;
            var defaultOptions = {
                appId: "2016071501621644",
                scopeNicks: ["auth_base"],//["auth_base", "auth_user"],
                extInfo: null,
                isvAppId: null,
                authCallback: function(success, data) {
                    if (success) {
                        getUserInfo();
                        // AR.toast("auth_base success " + data.authcode);
                    } else {
                        AR.log("auth_base failed " + data.error);
                    }
                }
            }
            var getAuthOptions = this.extend(defaultOptions, authOptions);
            AR.auth(getAuthOptions.appId, getAuthOptions.scopeNicks, getAuthOptions.extInfo, getAuthOptions.authCallback, getAuthOptions.isvAppId)
            function getUserInfo() {
                AR.getAuthUserInfo({
                    appId: getAuthOptions.appId,
                    callback: function(success, data) {
                        if (success) {
                                _this.nickName = data.userInfo.nickName;
                                _this.avatar = data.userInfo.avatar;
                                _this.gender = data.userInfo.gender;
                                _this.userId =  data.userInfo.userId;
                                if(_this.nickName == null || _this.nickName == "") {
                                    _this.nickName = "default";
                                }
                                _this.getUserInfos();
                                // AR.toast("res" + _this.userId + _this.avatar + _this.gender + _this.nickName);
                        } else {
                            AR.log("getAuthUserInfo failed, " + data.error);
                        } 
                    }
                });
            }
        },
        requestInfo: function(config) {
            var timestamp = Math.round(new Date().getTime() / 1000) + '';
            var gataway = 'https://api.gxar.com/rest.php';
            var envPropsStr = JSON.stringify(config.envProps);
            var md5String = appKey + '&action=' + config.action + '&appid=' + appId + '&nonce=' + timestamp + '&params=' + envPropsStr + '&timestamp=' + timestamp;
            var hash = hex_md5(md5String).toUpperCase();
                AR.request({
                    url: gataway,
                    data: {
                        data : envPropsStr
                    },
                    header: {
                        'content-type': 'application/json',
                        'appid': appId,
                        'action': config.action,
                        'nonce': timestamp,
                        'timestamp': timestamp,
                        'sign': hash,
                        'program': 'AR'
                    },
                    method: config.methodType || 'POST',
                    success: config.callBack || null,
                    fail: config.failCallBack || null
                });
        },
        getUserInfos: function() {
            var action = 'com.gxar.project.user.logs.record';
            var base = new Base64();
            var envProps = {};
                envProps.project_id = this.project_id;
                envProps.pid = this.userId;
                envProps.nickname = base.encode(this.nickName);
                envProps.avatar = this.avatar;
                envProps.gender = this.gender;
                envProps.alipay_version = AR.getEnvProp('alipayVersion');
                envProps.system_volume = AR.getEnvProp('systemVolume'); 
                envProps.resource_version = AR.getEnvProp('alipayBundleVersion');
                envProps.resource_compatible_version = AR.getEnvProp('alipayCompatibleVersion');
                envProps.tracking_mode = AR.getEnvProp('trackMode');
                envProps.runtime_environment = AR.getEnvProp('arUserAgent');
                envProps.source = 1;
                envProps.source_remark = AR.getEnvProp('rpc_factorName');
                // this.requestInfo(envProps, action, getInfoCallBack, getInfoFailCallBack);
                this.requestInfo({
                    envProps: envProps,
                    action: action
                })
        },
        /**
         * [getTicket 获取券链接]
         * @param  {[type]} ticketTag [券标识]
         * @return {[type]}           [description]
         */
        getTicket: function(config) {
            var action = 'com.gxar.dev.ticket.get.voucher';
            var envProps = {};
                envProps.project_id = this.project_id;
                envProps.pid = this.userId;
                envProps.extras = {};
                envProps.extras.pid = this.userId;
                envProps.extras.avatar = this.avatar;
                envProps.extras.gender = this.gender;
                // envProps.extras.nickname = base.encode(this.nickName);
                // envProps.extras.nickname = this.nickName;
                envProps.tag = config.ticketTag;
                // this.requestInfo(envProps, action, getTicketCallBack, getTicketFailCallBack)
                this.requestInfo({
                    envProps: envProps,
                    action: action,
                    callBack: config.callBack || null,
                    failCallBack: config.failCallBack || null
                })
        },
        sendScore: function(config) {
            var action = "com.gxar.games.add";
            var extras = [];
            var envProps = {};
                envProps.pid = this.userId;
                envProps.score = config.totalPoints;
                envProps.tag = config.projectName;
                envProps.extras = extras;
                // this.requestInfo(envProps, action, sendScoreCallBack, sendScoreFailCallBack)
                this.requestInfo({
                    envProps: envProps,
                    action: action,
                    callBack: config.callBack || null,
                    failCallBack: config.failCallBack || null
                })
        },
        collect: function(tag) {
            var action = 'com.gxar.project.user.collect.add';
            var envProps = {};
            	envProps.project_id = this.project_id;
            	envProps.pid = this.userId;
                envProps.data = {};
        		envProps.data[tag] = '1';
                this.requestInfo(envProps, action, collectCallBack, collectFailCallBack)

        }
    }

    var collectCallBack = function(response) {
        AR.log("success" + response.data)
    }
    var collectFailCallBack = function(response) {
        AR.log("fail" + response.data)
    }
    // global.AntHelper = AntHelper;
    // 兼容commonJs规范
    if(typeof module !== "undefined" && module.exports) {
        module.exports = AntHelper;
    // 兼容AMD/CMD规范
    } else if(typeof define === "function" && define.amd) {
        define(function() {
            return AntHelper;
        })
    } else {
        // 注册全局变量，兼容script标签引入
        global.AntHelper = AntHelper;
    }
})(this);

var antHelper = new AntHelper({
    projectId: "583076965"
});