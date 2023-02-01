*******************************

脚本名称:问真八字
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️

*******************************
[rewrite_local]
^http[s]?:\/\/bzpp2.iwzbz.com\/api\/v1.1\/user\/getpwnewios_v.+$ url script-response-body https://github.com/Kongyveho/tux/edit/main/Bz.js
[mitm] 
hostname = *.iwzbz.*
*******************************
Surge

[Script]
^http[s]?:\/\/bzpp2.iwzbz.com\/api\/v1.1\/user\/getpwnewios_v.+$ requires-body=1,max-size=0,script-path=iwzbz.js

[MITM]
hostname = *.iwzbz.*

*******************************/
var body=$response.body;
body = body.replace(/vipLevel\": \d/g,'vipLevel": 3');
body = body.replace(/expires\": "1970/g,'expires": "2025');
body = body.replace(/vipTipsType\": -1/g,'vipTipsType": 0');
$done(body);
