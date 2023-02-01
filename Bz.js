*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
问真八字
脚本名称:问真八字
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/bzpp2.iwzbz.com\/api\/v1.1\/user\/getpwnewios_v.+$ url script-response-body iwzbz.js
[mitm] 
hostname = *.iwzbz.*
*******************************
Surge

[Script]
^http[s]?:\/\/bzpp2.iwzbz.com\/api\/v1.1\/user\/getpwnewios_v.+$ requires-body=1,max-size=0,script-path=iwzbz.js

[MITM]
hostname = *.iwzbz.*

*******************************/
var obj = JSON.parse($response.body);
    obj.vipLevel=  3;
obj.expires=  "2025;
obj.vipTipsType=  0;
    $done({body: JSON.stringify(obj)});
