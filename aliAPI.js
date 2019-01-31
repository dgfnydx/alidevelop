/*
* @Author: DGF
* @Date:   2017-10-24 10:50:35
* @Last Modified by:   dgfnydx
* @Last Modified time: 2019-01-23 14:32:46
*/
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
antHelper.countDown(cdConfig);
// example
antHelper.countDown({
    totalTime: 19,
    // 节点顺序从左到右 百 十 个
    nodeArr: ["Sphere001"],
    // 贴图路径第一部分
    pathPart1: "time/Countdown-",
    // 贴图路径第二部分
    pathPart2: ".png",
    // 倒计时结束回调
    timeOutCallBack: function(totalTime, countDownTimer) {
        if(totalTime <= 0) {
            AR.clearInterval(countDownTimer);
            AR.log("回调啦！")
        }
    }
})

/**
 * [scoreboard 计分板]
 * @param  {[object]} tpConfig [description]
 * @return {[type]}          [description]
 * 适用于得分两位数以上，得分位数由nodeArr这个数组控制；
 */
antHelper.scoreboard(tpConfig)
antHelper.scoreboard({
    total: 121,
    // 节点顺序从左到右 百 十 个
    nodeArr: ["Sphere001", "Sphere002", "Sphere003"],
    // 贴图路径第一部分
    pathPart1: "time/Countdown-",
    // 贴图路径第二部分
    pathPart2: ".png",
    maxVal: 9
})
// 浮点数显示
antHelper.floatVal({
    val: 0.9;
    intArr: ["Sphere001"];
    decArr: ["Sphere003"];
    path1: "time/Countdown-";
    path2: ".png";
})

/**
 * [textRender 文本渲染]
 * @type {Number}
 */
antHelper.textRender({
    fontSize: 20,
    fontColor: "#a0ff00",
    text: "今天是：2018年11月20日",
    node: "kaiqi"
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
 * [btnAnimation 静态按钮点击动画]
 * @param  {[type]} animId [动画片段名称]
 * @param  {[type]} nodeId [要设置动画的节点]
 * @param  {[type]} ratio  [按钮缩放系数]
 * @return {[type]}        [description]
 */
antHelper.btnAnimation(animId, nodeId, ratio);

/**
 * [playVideo 普通或镂空视频播放]
 * @param  {[type]} alphaVideo [视频类型，true:镂空，false：普通]
 * @param  {[type]} videoNode  [视频播放节点]
 * @param  {[type]} videoUrl   [视频地址]
 * @param  {[type]} repeatPlay [播放次数]
 * @return {[type]}            [description]
 */
antHelper.videoPlay(alphaVideo, videoNode, videoUrl, repeatPlay);

antHelper.audioPlay({
    audioPath: "audio/birthday.mp3",
    option: {
        repeatCount: 2
        // playEnd: "audio/loop.mp3"
    }
})

// 系统弹窗
antHelper.systemWin({
    titleIcon: "2ddemo.fbm/logo.png",
    titleText: "蚂蚁特工", 
    contentIcon: "2ddemo.fbm/content.png",
    contentText: "hello", 
    buttonText: "确定", 
    showPocket: true,
    callBack: function(result) {
        if(result) {
            
        }
    },
})

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
 * @param  {[string]} ticketTag [券标识]
 * @callBack {[function]} [成功回调]
 * @failcallBack {[function]} [失败回调]
 */
 antHelper.getTicket({
     ticketTag: "test",
     // 可选
     callBack: function(response) {
         var obj = JSON.parse(response.data)
         var ticketUrl = obj.data.url;
             AR.open_url(ticketUrl)
             AR.toast("success" + ticketUrl)
             if(ticketUrl != "" || ticketUrl != "undefined") {
                 AR.setTimeout(function() {
                     AR.set_texture("UI6_kaiqi", "BQCNY.fbm/btn_yikaiqi.png", 0);
                 }, 800);
             }
     },
     failCallBack: function(response) {
        // 失败回调，可选
     }
 });

// 发送得分
 antHelper.sendScore({
    totalPoints: 90,
    projectName: "weiquan",
    callBack: function(response) {
        // 可选
    },
    failCallBack: function(response) {
        // 可选
    }
 })

//收集
  antHelper.collect({
    // 收集的标签
    tag: "test",
    callBack: function(response) {
        // 可选
    },
    failCallBack: function(response) {
        // 可选
    }
 })

  //现金红包接口
  antHelper.redPacket({
    // 现金红包活动ID
    activityId: "960518850",
    callBack: function(response) {
        // 可选
    },
    failCallBack: function(response) {
        // 可选
    }
 })