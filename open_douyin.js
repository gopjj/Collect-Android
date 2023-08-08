define("version", "9.0.u1254303");
define("resolution", "1080*1920");
define("requireVersion", "3.4.0");

var device = Device.searchObject(sigmaConst.DevSelectOne);
// 创建手机对象
var device = Device.getMain();
//判断设备是否存在
if ( ! device ) {
    print("No device found");
} else {
    var ret = device.getActivity();
    print("The activity running in the foreground is: " + ret);
}
var caij_end = []
const dic = {}

var runAppName = "com.ss.android.ugc.aweme";
var runapp = device.runApp(runAppName);
delay(5000);