define("version", "9.0.u1254303");    //定义APP版本号
define("resolution", "1080*1920");     //定义分辨率 1080*1920
define("requireVersion", "3.4.0");

var device = Device.searchObject(sigmaConst.DevSelectOne);
var device = Device.getMain();    //获取当前主控设备对象

if ( ! device ) {   //判断当前设备是否在线
    print("No device found");
} else {
    var ret = device.getActivity();
    print("The activity running in the foreground is: " + ret);
}

function get_Activity() {
    for (var i = 0; i < 3; i++) {
        var ret = device.getActivity();
        delay(500);
        if (ret) {
            return ret
        }
    }
    print(device.name + '3次get_Activity都失败')
}


function restart_app_douyin() {
  for(var i = 0; i < 3; i++){
    try {
      var runAppName = "com.ss.android.ugc.aweme";   //存放App应用程序
      var runapp = device.runApp(runAppName);   //运行抖音App
      delay(3000);
      if(runapp == 0){
          ret = get_Activity();
          /*
              关闭广告处理
          */
          printf("启动APP执行成功:",+device.name);
          break;
      }else {
          printf("启动APP执行失败:"+device.name);
          delay(2000);
      }
    } catch (err) {
      printf("ERROR:"+device.name+"---"+err);
    }
  }
}


function clear_page(){
    //关闭个人信息弹窗
    device.sendAai({ query: "C:.TextView&&R:.dt8", action: "click" });
    delay(2000);
    //允许使用电话权限
    device.sendAai({ query: "C:.CheckBox&&R:.do_not_ask_checkbox", action: "click" });
    device.sendAai({ query: "C:.Button&&R:.permission_allow_button", action: "click" });
    delay(2000);
    //模拟上滑
    delay(5000);
    device.move(tcConst.movement.shiftDown);
    delay(2000);
    //升级关闭
    var level = device.sendAai({ query: "T:*以后再说*", action: "getBounds" });
    if(level){
      printf("默认不进行升级");
      device.sendAai({ query: "T:*以后再说*", action: "click" });
      delay(2000);
    }
    device.move(tcConst.movement.shiftDown);
    delay(2000)
    device.sendAai({ query: "C:.CheckBox&&R:.do_not_ask_checkbox", action: "click" });
    device.sendAai({ query: "C:.Button&&R:.permission_deny_button", action: "click" });
}


function CloseDouyin(){
  delay(5000);
  var closeapp = device.closeApp("com.ss.android.ugc.aweme");
  if (closeapp == 0){
  	print('成功关闭抖音');
  } else{
  	print('关闭抖音失败');
  }
}

for(i = 0 ;i < 3; i++){
  restart_app_douyin();
  clear_page();
  CloseDouyin()
}
