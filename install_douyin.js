define("version", "9.0.u1254303");
define("resolution", "1080*1920");
define("requireVersion", "3.4.0");
var device = Device.searchObject(sigmaConst.DevSelectOne);
//var ret = device.adb("install C:\\Users\\jayde\\Desktop\\xhs.apk")
var ret = device.adb("install C:\\Users\\Administrator\\Desktop\\douyin.apk");
printf("ret"+ret);
if (ret != 0) {
    print(device.name + "Download successful!");
} else {
    print(device.name + "安装失败"+ lastError())
}
