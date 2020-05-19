/*
* @Author: dgf
* @Date:   2017-05-06 10:48:15
* @Last Modified by:   dgf
* @Last Modified time: 2020-04-02 11:38:13
*/
// 110701011lzj
// slam根节点
defaultModelId = Wu_Mod_01

node group_lvp
{
    url = lvp/lvp.gpb#group_lvp
}
node lvp_a
{
}

renderState
{
   alphaBlendDst = ONE
   alphaBlendSrc = ONE
}

// 跳转支付宝卡包
AR.open_url("alipays://platformapi/startapp?appId=20000021&a=lb&b=c")
// h5跳转AR
// https://ur.alipay.com/5Oos
// https://ur.alipay.com/1BacB
// alipays://platformapi/startApp?appId=10000007&selectedTab=ar&showOthers=YES
// 
// 蚂蚁特工生活号
// https://qr.alipay.com/ppx03666wsdxfuflav3yt02
// 
// 跳转小程序
// alipays://platformapi/startapp?appId=2018082861155776
// 
// 
// 小程序跳转AR
// my.ARScan()
// 
/**
 * 打包
 */
{
    "camera.switch": "0"//前后置摄像机切换
    "track.face.beauty": "1"//开启美颜
    "ui.recording": "0",//0不显示拍照录像按钮，1显示录像拍照按钮
    "life.show-follow": "1"//显示生活号关注条
    "track.mode": "2",//0没有跟踪 1陀螺仪 2混合 3纯图像识别
    "track.attitude": "2"//跟踪丢失后的位置初始姿态 0手机竖向屏幕方向 1保持上一种模式姿态回到屏幕中间 2继续丢失目标前的姿态 3智能 4重力感应方向
    //0禁止旋转 1允许旋转
    "gesture.rotatable": "0",
    //0禁止拖拽 1允许拖拽
    "gesture.draggable": "0",
    //0禁止缩放 1允许缩放
    "gesture.scalable": "0",
    "track.attitude": "0"//0手机竖向屏幕方向 1保持上一种模式下的姿态，回到屏幕中间 2继续丢失目标前的姿态 3智能 4重力感应方向
}
// 开启美颜及设置美颜强度
AR.face.beauty(true);
AR.face.beautyLevel(0.8);

// 拍照录像按钮显示隐藏
AR.showRecordPanel(true, "PIC");

/**
 * 清除计时器
 */
AR.clearInterval(id)
AR.clearTimeout(id)
/**
 * 退出动画界面，返回扫描界面
 */
AR.exit()
/**
 * 动画播放停止
 */
// 播放
AR.play("Scene_Root8#default", 1)
// 停止
AR.pause("Scene_Root9#default2")

/**
 * [音频控制]
 */
// 播放
AR.audio.play(audioPath);
// 暂停
AR.audio.stop(audioPath);
// 停止所有音乐播放
AR.audio.stopAll();


/**
 * 视频节点
 */
//给节点设置视频源
AR.video.set("pCube1", "test.mp4", 0)
//节点视频播放
AR.video.play("pCube1")
// 暂停
AR.video.pause(nodeId)
// 停止
AR.video.stop(nodeId)

function playVideo(alphaVideo, videoNode, videoUrl, repeatPlay) {
    if(alphaVideo) {
        var options = {};
        options.transparent = true;
        AR.video.set(videoNode, videoUrl, repeatPlay, JSON.stringify(options))
        AR.video.play(videoNode)
    } else {
        AR.video.set(videoNode, videoUrl, repeatPlay)
        AR.video.play(videoNode)
    }

}
var videoUrl = "video/appear.mp4";
playVideo(true, "Video_CC", videoUrl, 0);

/**
 * 获取系统音量
 */
AR.getSystemVolume()

// 事件相关
AR.onevent = function (eventName, extra) {
    if (eventName == 'stateChanged' && extra == 'Disappear') {
        AR.exit();
    }
};

/**
 * [界面相关]
 */
AR.confirm(title_icon, title_text, content_icon, content_text, button_text, callback, [should_show_pocket])
AR.confirm("128.png", "test", "256.png", "这是一段测试内容", "喜欢我就点我吧", 
	function(result) {
		if(result) {
			AR.open_url("http://www.gxar.com")
		}
})
// 自定义弹窗，整个窗口必须是一张图片
AR.confirm(backImageName, callback)
AR.confirm("256.png", function(result) {
	if(result) {
		AR.open_url("http://www.gxar.com")
	}
})
/**
 * [提示语]
 */
// 参数选择duration_long/duration_short
AR.toast("我的出现，将让你知道这个世界有多疯狂！", "duration_long")
/**
 * [场景平移缩放旋转]
 */
//平移
AR.translate(0, 280, 0)
//缩放
AR.scale(0.8,0.8,0.8)
//旋转
var angle = 60 * Math.PI / 180 
AR.rotate(angle, 0, 0)

// 控制节点的显示隐藏
AR.set_visible("antRig_Maowang_antRig", true)

// 获取节点可见性
AR.is_visible('pCube1')

// 移动节点
function movingNode(nodeArr, x, y, z) {
    for(var i = 0, len = nodeArr.length; i < len; i++) {
        AR.translate(nodeArr[i], x, y, z);
    }
}


/**
 * 设置节点始终朝向相机
 */
AR.set_billboard("pSphere1", true)

/**
 * 设置节点固定于屏幕（旋转缩放动画皆失效）
 */
AR.set_static("pSphere2", true)

/**
 * [粒子发射消失]
 */
AR.particle_emit("par", false)

/**
 * 包围盒
 */
oneBoundMin = -0.01, 0.01, -0.01
oneBoundMax = 0.01, 0.01, 0.01
tags{noclick}
/**
 * 优先渲染
 */
renderState
{
    depthFunc = ALWAYS
}
 
/**
 * 贴图
 */
AR.set_texture("pPlane1", filePath, 0);

/**
 * 获取指定节点的世界坐标（返回的是对象含xyz)
 */
aa = AR.get_position("pCube1")
AR.log(aa.x)

AR.get_rotation('__CAMERA__');
/**
 * 本地存储
 */
AR.putKV("key", 22)
aa = AR.getKV("key");

/**
 * 读取环境变量
 */
AR.getEnvProp("alipayVersion")
alipayVersion//钱包版本号
alipayCompatibleVersion//资源包兼容版本号
alipayBundleVersion //资源版本号
trackMode//当前跟踪模式  0 无跟踪 1陀螺仪模式 2 图像跟踪  等价于AR.getTrackMode()
arUserAgent// 客户端信息 返回字符串，获取信息要进行字符串操作
rpc_factorName //识别图标签
systemVolume//系统音量   等价于AR.getSystemVolume()
slamSupport//是否支持slam
faceTrackSupport//是否支持人脸跟踪

/**
 * 获取引擎版本
 */
AR.version 


// 2D帧序动画
function FrameAnimation(config) {
    this.idx = 1;
    this.startNum = config.startNum || 0;
    this.seriesLength = config.seriesLength;
    this.imagesCount = config.imagesCount;
    this.frameRate = config.frameRate || 30;
    this.imagePath = config.imagePath;
    this.needTextureNode = config.needTextureNode;
    this.filler = config.filler || '0';
    this.callBack = config.callBack || null;
    this.repeat = config.repeat || 0;
    this.frameAnimation();
}
FrameAnimation.prototype = {
    seriesNum: function() {
        var changeStr = this.startNum + '';
        var numStr = new Array(this.seriesLength - changeStr.length + 1).join(this.filler) + changeStr;
        return changeStr.length >= this.seriesLength ? changeStr : numStr;
    },
    getTexturePath: function() {
        return this.imagePath + this.seriesNum() + ".png";
    },
    frameAnimation: function() {
        var _this = this;
        var startNum = this.startNum;//缓存初始数值
        for (var i = 0; i < this.imagesCount; i++) {
            AR.setTimeout(function () {
                var filePath = _this.getTexturePath();
                AR.set_texture(_this.needTextureNode, filePath, 0);
                if (__version != "0.0.2") { // 0.0.3版本开始支持清理缓存
                    AR.remove_tex_cache(_this.getTexturePath());
                }
                _this.startNum++;
                if(_this.startNum - startNum >= _this.imagesCount) {
                    _this.idx++;
                    if(_this.repeat >= _this.idx) {
                        _this.startNum = startNum;
                        _this.frameAnimation();
                    } else if(_this.repeat == 0) {
                        _this.startNum = startNum;
                        _this.frameAnimation();
                    }
                    if(typeof _this.callBack === "function") {
                        _this.callBack()
                    }
                }
            }, i * this.frameRate);
        }
    }
}

function playFrame() {
    new FrameAnimation({
        // 帧序图起始数字，默认为0
        startNum: 1,
        // 数字长度，如0001
        seriesLength: 4,
        // 帧序图总数
        imagesCount: 6,
        // 播放速率，默认30
        frameRate: 42,
        // 帧序图路径
        imagePath: "frame2/lieping",
        // 播放帧序图的面片
        needTextureNode: "Sphere001",
        // 序号前缀，默认"0", 0001
        filler: null,
        // 重复次数，默认循环
        repeat: 5,
        // 帧动画播放完回调函数
        callBack: function() {
            AR.log("这里写你需要执行的程序！")
        }
    });
}


function frameAnimation(options) {
    var index = 1;
    var config = {};
    config.startNum = options.startNum || 0;
    config.seriesLength = options.seriesLength || 5;
    config.imagesCount = options.imagesCount;
    config.frameRate = options.frameRate || 80;
    config.imagePath = options.imagePath;
    config.needTextureNode = options.needTextureNode;
    config.filler = options.filler || '0';
    config.callBack = options.callBack || null;
    config.repeat = options.repeat || 0;

    function seriesNum() {
        var changeStr = config.startNum + '';
        var numStr = new Array(config.seriesLength - changeStr.length + 1).join(config.filler) + changeStr;
        return changeStr.length >= config.seriesLength ? changeStr : numStr;
    }
    function getTexturePath() {
        return config.imagePath + seriesNum() + ".png";
    }
    function frameAnimate() {
        var startNum = config.startNum;//缓存初始数值
        for (var i = 0; i < config.imagesCount; i++) {
            frameTimer = AR.setTimeout(function () {
                var filePath = getTexturePath();
                AR.set_texture(config.needTextureNode, filePath, 0);
                if (__version != "0.0.2") { // 0.0.3版本开始支持清理缓存
                    AR.remove_tex_cache(getTexturePath());
                }
                config.startNum++;
                if(config.startNum - startNum >= config.imagesCount) {
                    index++;
                    if(config.repeat >= index) {
                        config.startNum = startNum;
                        frameAnimate();
                    } else if(config.repeat == 0) {
                        config.startNum = startNum;
                        frameAnimate();
                    }
                    if(typeof config.callBack === "function") {
                        config.callBack()
                    }
                }
            }, i * config.frameRate);
        }
    }
    frameAnimate();
}
// 调用及参数配置
frameAnimation({
    // 帧序图起始数字，默认为0，可选
    startNum: 1,
    // 数字长度，如00001，默认5，可选
    seriesLength: 4,
    // 帧序图总数，必填
    imagesCount: 13,
    // 播放速率，默认80，可选
    frameRate: 42,
    // 帧序图路径，必填
    imagePath: "image/add5/five",
    // 播放帧序图的面片，必填
    needTextureNode: "pPlane1",
    // 序号前缀，默认"0", 0001，可选
    filler: null,
    // 重复次数，默认循环0，1播放1次
    repeat: 1,
    // 帧动画播放完回调函数，默认不回调，可选
    callBack: function() {
        AR.set_visible("H_jiafen_00" + num, false);
    }
});

// 关注生活号
AR.addLifeFollow(function (result) {
    AR.log('addLifeFollow result:' + (result ? 'success' : 'fail'));
});


function randomNums(len, x, y) {
    var arr = [];
    var num;
    for(var i = 0; i < len; i++){
        num = Math.floor(Math.random()* (y - x + 1) + x);
        for(var j = 0; j < arr.length; j++) {
            if(num == arr[j]){
                num = Math.floor(Math.random()* (y - x + 1) + x);
                j = -1;
            }
        }
        arr.push(num);
    }
    return arr;
}
// alpha截断
defines = ;TEXTURE_DISCARD_ALPHA;DISCARD_ALPHA 0.5


/**
 * [createAnimation 创建属性动画]
 * @param  {[String]} animId     [要创建的动画ID]
 * @param  {[String]} nodeId     [动画对应的节点ID]
 * @param  {[Number]} propertyId [动画类型]
 * @param  {[Number]} keyCount   [总帧数]
 * @param  {[Array]} keyTimes   [帧时间点数组]
 * @param  {[Array]} keyValues  [帧属性值数组]
 * @param  {[Number]} type       [插值类型]
 * @return {[type]}            [description]
 */
function createAnimation(animId, nodeId, propertyId, keyCount, keyTimes, keyValues, type) {
    AR.create_animation(animId, nodeId, propertyId, keyCount, keyTimes, keyValues, type)
}


// MD5 and base64
var hexcase=0;var b64pad="";var chrsz=8;function hex_md5(a){return binl2hex(core_md5(str2binl(a),a.length*chrsz))}function b64_md5(a){return binl2b64(core_md5(str2binl(a),a.length*chrsz))}function str_md5(a){return binl2str(core_md5(str2binl(a),a.length*chrsz))}function hex_hmac_md5(a,b){return binl2hex(core_hmac_md5(a,b))}function b64_hmac_md5(a,b){return binl2b64(core_hmac_md5(a,b))}function str_hmac_md5(a,b){return binl2str(core_hmac_md5(a,b))}function md5_vm_test(){return hex_md5("abc")=="900150983cd24fb0d6963f7d28e17f72"}var appId="300000000";var appKey="D88DB9077BE481F747CD4BA24BAD8B23";function core_md5(o,k){o[k>>5]|=128<<((k)%32);o[(((k+64)>>>9)<<4)+14]=k;var p=1732584193;var n=-271733879;var m=-1732584194;var l=271733878;for(var g=0;g<o.length;g+=16){var j=p;var h=n;var f=m;var e=l;p=md5_ff(p,n,m,l,o[g+0],7,-680876936);l=md5_ff(l,p,n,m,o[g+1],12,-389564586);m=md5_ff(m,l,p,n,o[g+2],17,606105819);n=md5_ff(n,m,l,p,o[g+3],22,-1044525330);p=md5_ff(p,n,m,l,o[g+4],7,-176418897);l=md5_ff(l,p,n,m,o[g+5],12,1200080426);m=md5_ff(m,l,p,n,o[g+6],17,-1473231341);n=md5_ff(n,m,l,p,o[g+7],22,-45705983);p=md5_ff(p,n,m,l,o[g+8],7,1770035416);l=md5_ff(l,p,n,m,o[g+9],12,-1958414417);m=md5_ff(m,l,p,n,o[g+10],17,-42063);n=md5_ff(n,m,l,p,o[g+11],22,-1990404162);p=md5_ff(p,n,m,l,o[g+12],7,1804603682);l=md5_ff(l,p,n,m,o[g+13],12,-40341101);m=md5_ff(m,l,p,n,o[g+14],17,-1502002290);n=md5_ff(n,m,l,p,o[g+15],22,1236535329);p=md5_gg(p,n,m,l,o[g+1],5,-165796510);l=md5_gg(l,p,n,m,o[g+6],9,-1069501632);m=md5_gg(m,l,p,n,o[g+11],14,643717713);n=md5_gg(n,m,l,p,o[g+0],20,-373897302);p=md5_gg(p,n,m,l,o[g+5],5,-701558691);l=md5_gg(l,p,n,m,o[g+10],9,38016083);m=md5_gg(m,l,p,n,o[g+15],14,-660478335);n=md5_gg(n,m,l,p,o[g+4],20,-405537848);p=md5_gg(p,n,m,l,o[g+9],5,568446438);l=md5_gg(l,p,n,m,o[g+14],9,-1019803690);m=md5_gg(m,l,p,n,o[g+3],14,-187363961);n=md5_gg(n,m,l,p,o[g+8],20,1163531501);p=md5_gg(p,n,m,l,o[g+13],5,-1444681467);l=md5_gg(l,p,n,m,o[g+2],9,-51403784);m=md5_gg(m,l,p,n,o[g+7],14,1735328473);n=md5_gg(n,m,l,p,o[g+12],20,-1926607734);p=md5_hh(p,n,m,l,o[g+5],4,-378558);l=md5_hh(l,p,n,m,o[g+8],11,-2022574463);m=md5_hh(m,l,p,n,o[g+11],16,1839030562);n=md5_hh(n,m,l,p,o[g+14],23,-35309556);p=md5_hh(p,n,m,l,o[g+1],4,-1530992060);l=md5_hh(l,p,n,m,o[g+4],11,1272893353);m=md5_hh(m,l,p,n,o[g+7],16,-155497632);n=md5_hh(n,m,l,p,o[g+10],23,-1094730640);p=md5_hh(p,n,m,l,o[g+13],4,681279174);l=md5_hh(l,p,n,m,o[g+0],11,-358537222);m=md5_hh(m,l,p,n,o[g+3],16,-722521979);n=md5_hh(n,m,l,p,o[g+6],23,76029189);p=md5_hh(p,n,m,l,o[g+9],4,-640364487);l=md5_hh(l,p,n,m,o[g+12],11,-421815835);m=md5_hh(m,l,p,n,o[g+15],16,530742520);n=md5_hh(n,m,l,p,o[g+2],23,-995338651);p=md5_ii(p,n,m,l,o[g+0],6,-198630844);l=md5_ii(l,p,n,m,o[g+7],10,1126891415);m=md5_ii(m,l,p,n,o[g+14],15,-1416354905);n=md5_ii(n,m,l,p,o[g+5],21,-57434055);p=md5_ii(p,n,m,l,o[g+12],6,1700485571);l=md5_ii(l,p,n,m,o[g+3],10,-1894986606);m=md5_ii(m,l,p,n,o[g+10],15,-1051523);n=md5_ii(n,m,l,p,o[g+1],21,-2054922799);p=md5_ii(p,n,m,l,o[g+8],6,1873313359);l=md5_ii(l,p,n,m,o[g+15],10,-30611744);m=md5_ii(m,l,p,n,o[g+6],15,-1560198380);n=md5_ii(n,m,l,p,o[g+13],21,1309151649);p=md5_ii(p,n,m,l,o[g+4],6,-145523070);l=md5_ii(l,p,n,m,o[g+11],10,-1120210379);m=md5_ii(m,l,p,n,o[g+2],15,718787259);n=md5_ii(n,m,l,p,o[g+9],21,-343485551);p=safe_add(p,j);n=safe_add(n,h);m=safe_add(m,f);l=safe_add(l,e)}return Array(p,n,m,l)}function md5_cmn(h,e,d,c,g,f){return safe_add(bit_rol(safe_add(safe_add(e,h),safe_add(c,f)),g),d)}function md5_ff(g,f,k,j,e,i,h){return md5_cmn((f&k)|((~f)&j),g,f,e,i,h)}function md5_gg(g,f,k,j,e,i,h){return md5_cmn((f&j)|(k&(~j)),g,f,e,i,h)}function md5_hh(g,f,k,j,e,i,h){return md5_cmn(f^k^j,g,f,e,i,h)}function md5_ii(g,f,k,j,e,i,h){return md5_cmn(k^(f|(~j)),g,f,e,i,h)}function core_hmac_md5(c,f){var e=str2binl(c);if(e.length>16){e=core_md5(e,c.length*chrsz)}var a=Array(16),d=Array(16);for(var b=0;b<16;b++){a[b]=e[b]^909522486;d[b]=e[b]^1549556828}var g=core_md5(a.concat(str2binl(f)),512+f.length*chrsz);return core_md5(d.concat(g),512+128)}function safe_add(a,d){var c=(a&65535)+(d&65535);var b=(a>>16)+(d>>16)+(c>>16);return(b<<16)|(c&65535)}function bit_rol(a,b){return(a<<b)|(a>>>(32-b))}function str2binl(d){var c=Array();var a=(1<<chrsz)-1;for(var b=0;b<d.length*chrsz;b+=chrsz){c[b>>5]|=(d.charCodeAt(b/chrsz)&a)<<(b%32)}return c}function binl2str(c){var d="";var a=(1<<chrsz)-1;for(var b=0;b<c.length*32;b+=chrsz){d+=String.fromCharCode((c[b>>5]>>>(b%32))&a)}return d}function binl2hex(c){var b=hexcase?"0123456789ABCDEF":"0123456789abcdef";var d="";for(var a=0;a<c.length*4;a++){d+=b.charAt((c[a>>2]>>((a%4)*8+4))&15)+b.charAt((c[a>>2]>>((a%4)*8))&15)}return d}function binl2b64(d){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var f="";for(var b=0;b<d.length*4;b+=3){var e=(((d[b>>2]>>8*(b%4))&255)<<16)|(((d[b+1>>2]>>8*((b+1)%4))&255)<<8)|((d[b+2>>2]>>8*((b+2)%4))&255);for(var a=0;a<4;a++){if(b*8+a*6>d.length*32){f+=b64pad}else{f+=c.charAt((e>>6*(3-a))&63)}}}return f}function Base64(){_keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";this.encode=function(c){var b="";var j,g,e,k,h,f,d;var a=0;c=_utf8_encode(c);while(a<c.length){j=c.charCodeAt(a++);g=c.charCodeAt(a++);e=c.charCodeAt(a++);k=j>>2;h=((j&3)<<4)|(g>>4);f=((g&15)<<2)|(e>>6);d=e&63;if(isNaN(g)){f=d=64}else{if(isNaN(e)){d=64}}b=b+_keyStr.charAt(k)+_keyStr.charAt(h)+_keyStr.charAt(f)+_keyStr.charAt(d)}return b};this.decode=function(c){var b="";var j,g,e;var k,h,f,d;var a=0;c=c.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(a<c.length){k=_keyStr.indexOf(c.charAt(a++));h=_keyStr.indexOf(c.charAt(a++));f=_keyStr.indexOf(c.charAt(a++));d=_keyStr.indexOf(c.charAt(a++));j=(k<<2)|(h>>4);g=((h&15)<<4)|(f>>2);e=((f&3)<<6)|d;b=b+String.fromCharCode(j);if(f!=64){b=b+String.fromCharCode(g)}if(d!=64){b=b+String.fromCharCode(e)}}b=_utf8_decode(b);return b};_utf8_encode=function(a){a=a.replace(/\r\n/g,"\n");var b="";for(var e=0;e<a.length;e++){var d=a.charCodeAt(e);if(d<128){b+=String.fromCharCode(d)}else{if((d>127)&&(d<2048)){b+=String.fromCharCode((d>>6)|192);b+=String.fromCharCode((d&63)|128)}else{b+=String.fromCharCode((d>>12)|224);b+=String.fromCharCode(((d>>6)&63)|128);b+=String.fromCharCode((d&63)|128)}}}return b};_utf8_decode=function(d){var b="";var a=0;var e=c1=c2=0;while(a<d.length){e=d.charCodeAt(a);if(e<128){b+=String.fromCharCode(e);a++}else{if((e>191)&&(e<224)){c2=d.charCodeAt(a+1);b+=String.fromCharCode(((e&31)<<6)|(c2&63));a+=2}else{c2=d.charCodeAt(a+1);c3=d.charCodeAt(a+2);b+=String.fromCharCode(((e&15)<<12)|((c2&63)<<6)|(c3&63));a+=3}}}return b}};AR.addLifeFollow();
var userId;
/**
 * [userAuth 授权]
 * @return {[type]} [description]
 */
function userAuth() {
    AR.auth(
        "2016071501621644",
        ["auth_base"],//authSuccessScopes授权范围为["auth_base", "auth_user"]
        null,
        function (success, data) {
            if (success) {
                getUserInfo()
            } else {
                AR.log("auth_base failed " + data.error);
            }
        }
    );
}
/**
 * [getUserInfo 获取用户信息]
 * @return {[type]} [description]
 */
function getUserInfo() {
    AR.getAuthUserInfo({
        appId: "2016071501621644",
        callback: function(success, data) {
            if (success) {
                var nickName = data.userInfo.nickName;
                var avatar = data.userInfo.avatar;
                var gender = data.userInfo.gender;
                    userId =  data.userInfo.userId;
                    if(nickName == null || nickName == "") {
                        nickName = "default";
                    }
                getUserInfos(userId, nickName, avatar, gender)
            } else {
                AR.log("getAuthUserInfo failed, " + data.error);
            } 
        }
    });
}
/**
 * [getUserInfos get user information]
 * @param  {[type]} userId   [description]
 * @param  {[type]} nickName [description]
 * @param  {[type]} avatar   [description]
 * @param  {[type]} gender   [description]
 * @return {[type]}          [description]
 */
function getUserInfos(userId, nickName, avatar, gender) {
    var action = 'com.gxar.project.user.logs.record';
    var base = new Base64();
    var envProps = {};
        envProps.project_id = 53125;
        envProps.pid = userId;
        envProps.nickname = base.encode(nickName);;
        envProps.avatar = avatar;
        envProps.gender = gender;
        envProps.alipay_version = AR.getEnvProp('alipayVersion');
        envProps.system_volume = AR.getEnvProp('systemVolume'); 
        envProps.resource_version = AR.getEnvProp('alipayBundleVersion');
        envProps.resource_compatible_version = AR.getEnvProp('alipayCompatibleVersion');
        envProps.tracking_mode = AR.getEnvProp('trackMode');
        envProps.runtime_environment = AR.getEnvProp('arUserAgent');
        envProps.source = 1;
        envProps.source_remark = AR.getEnvProp('rpc_factorName');
        requestInfo(envProps, action, getInfoCallBack, getInfoFailCallBack);
}

function getTicket() {
    var action = 'com.gxar.ticket.random';
    var envProps = {};
        envProps.project_id = 53125;
        envProps.pid = userId;
        envProps.tag = 'test';
        requestInfo(envProps, action, getTicketCallBack, getTicketFailCallBack)
}

function requestInfo(envProps, action, callBack, failCallBack) {
    var timestamp = Math.round(new Date().getTime() / 1000);
    var gataway = 'https://api.gxar.com/rest.php?t=' + timestamp;
    var envPropsStr = JSON.stringify(envProps);
    var md5String = appKey + '&action=' + action + '&appid=' + appId + '&nonce=123456&params=' + envPropsStr + '&timestamp=1000000000';
    var hash = hex_md5(md5String).toUpperCase();
        AR.request({
            url: gataway,
            data: {
                data : envPropsStr
            },
            header: {
                'content-type': 'application/json',
                'appid': appId,
                'action': action,
                'nonce': '123456',
                'timestamp': '1000000000',
                'sign': hash,
                'program': 'AR'
            },
            method: 'POST',
            success: function(response) {
                callBack(response);
            },
            fail: function(response) {
                failCallBack(response);
            }
        });
}

var getInfoCallBack = function(response) {
    AR.log(response.data)
}
var getInfoFailCallBack = function(response) {
    AR.log('faile' + response.statusCode);
}
var getTicketCallBack = function(response) {
    var obj = JSON.parse(response.data)
    var ticketUrl = obj.data.url;
        AR.open_url(ticketUrl)
}
var getTicketFailCallBack = function(response) {
    AR.log('faile' + response.statusCode);
}


// 黑边适配iPhoneX
function iPXHack() {
    var userAgent = AR.getEnvProp('arUserAgent');
    platform = userAgent.split(';')[0].split(' ')[1];
    if(userAgent != null && userAgent.split(';')[3].split(' ')[1] == "1125x2436"){
        AR.set_visible("heibian1", true);
        AR.set_visible("heibian2", true);
        // AR.translate(0, 25, 0)
    }
}

// 常量
AR.device.CAMERA_REAR = 0; // 后置摄像头
AR.device.CAMERA_FRONT = 1; // 前置摄像头

// 设备是否支持前置摄像头
var isFrontSupport = AR.getEnvProp('frontCamera');

// 获取当前摄像头
var cam = AR.currentDeviceCamera();

// 切换摄像头
AR.switchDeviceCamera(AR.device.CAMERA_FRONT, function(isSuccess) {
 if (isSuccess) {
  AR.log("切换相机成功");
 }
});

// 切换事件
AR.onevent = function(eventName, extra) {
 if (eventName == "onSwitchCamera") { // 切换相机
  // var extra = JSON.parse(extra);
   // extra.currentCamera
 }
};

// <<<<<<<<<<<<<<<<<<<<<<< alipay API >>>>>>>>>>>>>>>>>>>>>>>>>>>
// 实例化
var antHelper = new AntHelper(antConfig);

var antHelper = new AntHelper({
    // 项目ID，必填
    projectId: "583076965"
});
/**
 * [antHelper.extend 对象合并、扩展]
 * @param  {[object]} firstObj  [第一个对象]
 * @param  {[object]} secondObj [第二个对象]
 * @return {[object]}           [合并后对象]
 * @example: 
 * var obj1 = {name: "dgf",age: "29"}; obj2 = {company: "mytg", school: "HD"};
 * AR.log(antHelper.extend(obj1, obj2))
 */
antHelper.extend(frameConfig, config);

/**
 * [antHelper.series 序列数生成，如：0001]
 * @param  {[number]} seriesNum    [数字，如：2]
 * @param  {[number]} seriesLength [序列数长度，如：4]
 * @param  {[string]} filler       [填充字符，如：0]
 * @return {[string]}              [0002]
 * @example: AR.log(antHelper.series(1, 4, "0"))
 */
antHelper.series(seriesNum, seriesLength, filler);

/**
 * [antHelper.toRadian 角度转弧度]
 * @param  {[number]} degree [角度]
 * @return {[number]}        [弧度]
 * @example:
 * AR.log(antHelper.toRadian(30))
 */
antHelper.toRadian(degree);

/**
 * [antHelper.toDegree 弧度转角度]
 * @param  {[number]} radian [弧度]
 * @return {[number]}        [角度]
 * @example:
 * AR.log(antHelper.toDegree(0.51))
 */
antHelper.toDegree(radian);

/**
 * [randomNum 生成规定范围内不重复的随机数]
 * @param  {[Numeber]} len   [个数]
 * @param  {[Numeber]} start [起始数字]
 * @param  {[Numeber]} end   [结束]
 * @return {[array]}       [description]
 * @example:获取1-10中3个不重复的随机数字
 * antHelper.randomNum(3, 1, 10) 
 */
antHelper.randomNum(len, start, end);

/**
 * [getArrayItems 从一个给定的数组arr中,随机返回num个不重复项]
 * @param  {[array]} arr [给定数组]
 * @param  {[number]} num [个数]
 * @return {[array]}     [description]
 * @example:
 * var ArrList=[a,2,3,b,5,c,7,d]; var reaust = getArrayItems(ArrList,2)
 * AR.log(reaust);
 */
antHelper.getArrayItems(arr, num);
/**
 * [antHelper.quaternionFromEuler 欧拉角转四元数]
 * @param  {[type]} x [x轴弧度]
 * @param  {[type]} y [y轴弧度]
 * @param  {[type]} z [z轴弧度]
 * @return {[type]}   [四元数]
 */
antHelper.quaternionFromEuler(x, y, z);

/**
 * [getDeviceInfo 获取硬件信息]
 * @param  {[String]} infoType [信息类型："platform","divice","screen","screenWidth","screenHeight"]
 * @return {[String]}           ["platform": ios or andriod
 *                               "device": iphone9,1
 *                               "screen": 750x1334
 *                               "screenWidth": 750
 *                               "screenHeight": 1334
 *                               ]
 * @example: AR.log(antHelper.getDeviceInfo("platform"))
 */
antHelper.getDeviceInfo(infoType);

/**
 * [createAnimation 创建属性动画，并自动创建id为 'Default' 的动画片段[0 - duration]]
 * @param  {[type]} createOptions.animaId [要创建的动画id (如有重复会创建失败)]
 * @param  {[type]} createOptions.nodeId [动画对应的节点id]
 * @param  {[type]} createOptions.propertyId [动画类型(参考API常量定义)]
 * @param  {[type]} createOptions.keyCount [总帧数]
 * @param  {[type]} createOptions.keyTimes [帧时间点数组]
 * @param  {[type]} createOptions.keyValues [帧属性值数组(每帧需要的value个数参考API常量定义中的data部分)]
 * @param  {[type]} createOptions.type [插值类型(参考API常量定义)]
 * @example:
 *  var r1 = antHelper.quaternionFromEuler(0, antHelper.toRadian(90), 0);
    var r2 = antHelper.quaternionFromEuler(0, antHelper.toRadian(180), 0);
    var r3 = antHelper.quaternionFromEuler(0, antHelper.toRadian(270), 0);
    var r4 = antHelper.quaternionFromEuler(0, antHelper.toRadian(360), 0);

    antHelper.createAnimation({
        animId: "rotation", 
        nodeId: "rotate_02", 
        propertyId: AR.animation.ANIMATE_ROTATE, 
        keyCount: 5, 
        keyTimes: [0, 10, 20, 30, 40], 
        keyValues: [
            r1[0], r1[1], r1[2], r1[3],
            r2[0], r2[1], r2[2], r2[3],
            r3[0], r3[1], r3[2], r3[3],
            r4[0], r4[1], r4[2], r4[3],
            r1[0], r1[1], r1[2], r1[3]
        ], 
        type: AR.animation.CURVE_LINEAR
    });
 */
antHelper.createAnimation(createOptions);

/**
 * [frameAnimation 逐帧动画]
 * @param  {[object]} antOptions [帧动画参数]
 * @return {[type]}            [description]
 */
antHelper.frameAnimation(antOptions)
// example
antHelper.frameAnimation({
    // 帧序图起始数字，默认为0，可选
    startNum: 1,
    // 数字长度，如00001，默认5，可选
    seriesLength: 4,
    // 帧序图总数，必填
    imagesCount: 6,
    // 播放速率，默认80，可选
    frameRate: 42,
    // 帧序图路径，必填
    imagePath: "frame2/lieping",
    // 播放帧序图的面片，必填
    needTextureNode: "pPlane1",
    // 序号前缀，默认"0", 0001，可选
    // filler: 1,
    // 重复次数，默认循环0，1播放1次
    repeat: 2,
    // 帧动画播放完回调函数，默认不回调，可选
    callBack: function() {
        AR.log("回调啦")
        // AR.set_visible("H_jiafen_00" + num, false);
    }
});

/**
 * [countDown 两位数倒计时]
 * @param  {[object]} cdconfig [description]
 * @return {[type]}          [description]
 */
antHelper.countDown(cdconfig);
// example
antHelper.countDown({
    // 总时间
    totalTime: 20,
    // 个位数节点
    firstNode: "Sphere003",
    // 十位数节点
    secondNode: "Sphere002",
    // 贴图路径第一部分
    pathPart1: "time/Countdown-",
    // 贴图路径第二部分
    pathPart2: ".png",
    // 倒计时结束回调
    timeOutCallBack: function() {
        AR.log("回调啦！")
    }
})

/**
 * [setVisible 控制节点显隐]
 * @param {[type]} node [single node or array]
 * @param {[type]} bool [true or false]
 * example: antHelper.setVisible("box", false)
 * example: antHelper.setVisible(["box", "sphere"], false); 
 */
antHelper.setVisible(node, bool);

/**
 * [playAnimation 播放骨骼动画]
 * @param  {[string or array]} clip          [动画片段]
 * @param  {[type]} animationName [动画片段名称]
 * @param  {[type]} repeat        [重复次数]
 * @example: antHelper.playAnimation("box", "appear", 1);
 * @example: antHelper.playAnimation(["box", "sphere"], "appear", 1);
 */
antHelper.playAnimation(clip, animationName, repeat);

/**
 * [playVideo 普通或镂空视频播放]
 * @param  {[type]} alphaVideo [视频类型，true:镂空，false：普通]
 * @param  {[type]} videoNode  [视频播放节点]
 * @param  {[type]} videoUrl   [视频地址]
 * @param  {[type]} repeatPlay [播放次数]
 * @return {[type]}            [description]
 */
antHelper.playVideo(alphaVideo, videoNode, videoUrl, repeatPlay);

/**
 * [userAuth 用户授权，获取基本信息nickName，avatar， gender，userId]
 * @param  {[object]} authOptions  [可选]
 * @return {[type]}             [description]
 */
antHelper.userAuth(authOptions);
antHelper.userAuth({
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
});

/**
 * [getTicket 获取券链接]
 * @param  {[type]} ticketTag [券标识]
 * @return {[type]}           [description]
 */
antHelper.getTicket(ticketTag)

// test part
// 倒计时动画

function CountDown_Animation(){
    var nodeId = l_cd_nodeId;
    var nodeAnimationName = nodeId + 'countDownScale';
    AR.animation.create(
                        nodeAnimationName,
                        nodeId,
                        AR.animation.ANIMATE_SCALE,
                        6,
                        [0,30,60,100,400,550],
                        [4,1,4.3,  4*1.02,1,4.3*1.02,  4*1.03,1,4.3*1.03,  4*1.04,1,4.3*1.04,  4*1.1,1,4.3*1.1,  0,1,0],
                        AR.animation.CURVE_LINEAR
                        );
    AR.animation.play(nodeAnimationName + '#Default', 1);

}

// 摇一摇功能
var SHAKE_THRESHOLD = 6000;
var last_update = 0;
var x = y = z = last_x = last_y = last_z = 0;

function deviceMotionHandler() {
    var pose = AR.getDevicePose();
    var curTime = new Date().getTime();
    if ((curTime - last_update) > 100) {
        var diffTime = curTime - last_update;
        last_update = curTime;
        x = pose.pitch;
        y = pose.yaw;
        z = pose.roll;
        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
        // AR.toast("x:"+x +",Y:" +y +",z:"+z)
        if (speed > SHAKE_THRESHOLD) {
            AR.toast("摇动了" + speed);
        }
        last_x = x;
        last_y = y;
        last_z = z;
    }
}

AR.onframe = function (t) {
    deviceMotionHandler()
};



var discardFrameAfterReset = 1;
AR.onframe = function (t) {
    if (!isiOS) return;
    if (!needsAdjustCamera) return;
    if (busy) return;
    // 点击之后第一帧忽略
    if (discardFrameAfterReset > 0) {
        discardFrameAfterReset = 0;
        return;
    }

    var scale = AR.getScale('root').x;
    //AR.log('current scale ' + scale);
    if (isNodeReset) {
        AR.set_visible('root', true);
        isNodeReset = false;
        needsAdjustCamera = true;
        previousPosition = AR.getPosition('root');
        previousOffset = new Vec3(0, 0, 0);
        if (scale == 1.0 && rootScale != 1.0) { // 后面判断表示这次点击之后没有设置过
            needsAdjustCamera = false;
            rootScale = 1.0;
            previousOffset = new Vec3(0, 0, 0);
            AR.log('do not need to adjust');
        } else {
            rootScale *= scale;
            // 还原模型，只需要处理一次
            if (scale != 0.0 && scale != 1.0) {
                scale = 1.0 / scale;
                AR.scale('root', scale, scale, scale);
                AR.log('need to adjust ' + scale);
            }
        }
    }

    adjustNode();
};

adjustNode = function () {
    if (rootScale != 0.0 && rootScale != 1.0) {
        var scale = 1.0 / rootScale;
        // 调整模型
        var posCamera = AR.getPosition('__CAMERA__');
        //AR.log('camera (' + posCamera.x + ', ' + posCamera.y + ', ' + posCamera.z + ')');
        var posNode = previousPosition;
        var cameraToNode = new Vec3(posNode.x - posCamera.x, posNode.y - posCamera.y, posNode.z - posCamera.z);
        //AR.log('length ' + cameraToNode.length());
        //posNode = AR.getPosition('root');
        //AR.log('node (' + posNode.x + ', ' + posNode.y + ', ' + posNode.z + ')');
        cameraToNode.scale((scale - 1.0));
        AR.translate('root', cameraToNode.x - previousOffset.x, cameraToNode.y - previousOffset.y, cameraToNode.z - previousOffset.z);
        previousOffset = cameraToNode;
        //AR.log('adjusting (' + cameraToNode.x + ', ' + cameraToNode.y + ', ' + cameraToNode.x + ')');
    }
}

// 屏幕分辨率
// 屏幕       支付宝
1520 * 720  1440 * 720

// 获取相机角度
var obj = AR.get_rotation('__CAMERA__');
antHelper.toDegree(obj.x)
AR.toast("x:" + antHelper.toDegree(obj.x) + "y:" + antHelper.toDegree(obj.y) + "z:" + antHelper.toDegree(obj.z));

