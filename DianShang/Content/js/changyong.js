//时间格式化
function dateFormatter(dates) {

    //replace(参数1，参数2)替换内容参数1是字符串串里面包含的内容，参数二是要替换的内容
    var date = eval('new ' + (dates.replace(/\//g, '')))
    //var date = new Date();
    var y = date.getFullYear();//年
    var m = date.getMonth() + 1;//月
    if (m < 10) {
        m = "0" + m;
    }
    var d = date.getDate();//日
    if (d < 10) {
        d = "0" + d;
    }
    //var h = date.getHours();//时
    //var mm = date.getMinutes();//分
    //var s = date.getSeconds();//秒
    var aa = y + "-" + m + "-" + d/*+" "+h+":"+mm+":"+s*/;
    return aa;

}
//表单验证
function isUser(name, age, dh) {
    
    var bl = true;
    var testAge = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/;//年龄在1-120之间
    if (!testAge.test(age)) {
        alert("请输入年龄必须在1~120之间");
        bl = false;
        return bl;
    }
    //^ ([\u4e00 - \u9fa5]{ 1, 20 }| [a - zA - Z\.\s]{ 1, 20 }) $
    var testAge2 = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{ 1,20 })$/;//姓名在1-20之间
    if (!testAge2.test(name)) {
        alert("请输入姓名字符长度在1-20之间");
        bl = false;
        return bl;
    }
    var txtUserTel = /^((\(\d{2,3}\))|(\d{3}\-))?1[3,8,5]{1}\d{9}$/;//手机号码开头必须是1,而且必须要11位数
    if (!txtUserTel.test(dh)) {
        alert("手机号码开头必须是1,而且必须要11位数");
        bl = false;
        return bl;
    }
    return bl;
}
//获取角色下拉框
function jiaosheUser(url) {
    $.ajax({
        url: url,
        success: function (data) {
            var da = "<option value='0' selected=\"selected\">请选择角色</option>";
            for (var i = 0; i < data.length; i++) {
                da += "<option value=\"" + data[i].RoleID + "\">" + data[i].RoleName + "</option>";
            }
            $("#RoleID").html(da);
        }
    })
}
//获取员工状态下拉框url=请求路径
function ztUser(url) {
    $.ajax({
        url: url,
        success: function (data) {
            var de = "<option value='0' selected=\"selected\">请选择员工状态</option>";
            for (var i = 0; i < data.length; i++) {
                de += "<option value=\"" + data[i].CI_ID + "\">" + data[i].CI_Name + "</option>";
            }
            $("#UserStatr").html(de);
        }
    })
}
//节假日判断
function isDatejiejiari(staDate, endDate) {
    //声明变量判断日期包含节假日返回false
    var bl = true;
    //起始时间
    var sta = new Date(staDate);
    //获取起始时间星期
    var staDay = sta.getDate();
    //结束时间
    var end = new Date(endDate);
    //获取天数差的毫秒数
    var day = end - sta
    //获取天数差
    day = day / 1000 / 60 / 60 / 24;
    var arrDate = new Array();

    for (var i = 0; i <= day; i++) {
        if (staDay > 6) {
            staDay = 0;
        }
        arrDate.push(staDay)
        staDay += 1;
    }
    //如果其中包含周六或者周日返回fales
    if (arrDate.includes(6) || arrDate.includes(0)) {
        bl = fales;
        return bl;
    }
    //type=0工作日 , =1双休日 ，=2法定节假日
    
    








    ////获取星期周日是0
    //if (staDay == 0 || staDay.getDate() == 6) {
    //    bl = false;
    //    return bl;
    //} if (end.getDate() == 0 || end.getDate() == 6) {
    //    bl = false;
    //    return bl;
    //}
    //return bl;
}
    
