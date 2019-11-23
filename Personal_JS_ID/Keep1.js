
/*
#Keep

Surge4.0:
http-response https:\/\/api\.gotokeep\.com\/(klass\/v2\/k\/\d+\/subject|training\/v2\/exercises\/.+\/dynamic) requires-body=1,max-size=0,debug=1,Keep.js

QX1.0.0:
https:\/\/api\.gotokeep\.com\/(klass\/v2\/k\/\d+\/subject|training\/v2\/exercises\/.+\/dynamic) url script-response-body Keep.js

#MIMT=api.gotokeep.com
*/


let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

const path1 = 'exercises';
const path2 = '/klass/v2/k/';

if (url.indexOf(path1) != -1) {
   obj.data.permission.isMembership = true;
   obj.data.permission.membership = true;
   obj.data.permission.inSuit = true;
}
if (url.indexOf(path2) != -1) {
   for (var i = 0; i < obj.data.subjectInfos.length; i++) {
         obj.data.subjectInfos[i].needPay = false;
   }
}
body = JSON.stringify(obj);
$done({body});

/**
 * @supported 7EE45021521D
 */