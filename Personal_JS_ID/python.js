var obj = JSON.parse($response.body);
 obj= {
  "success": 1,
  "body": {
   "member": {
    "mid": "126486",
    "nickname": "8r57pb",
    "recommendcode": "AD5D0F7E15B7",
    "point": "0",
    "continusday": null,
    "time": true,
    "vid": true
   },
   "sys": {
    "reviewVersion": null,
    "admobBanner320": "ca-app-pub-0278055400058495/7140163544",
    "admobBanner300": "ca-app-pub-0278055400058495/8585482823",
    "admobBanner728": "ca-app-pub-0278055400058495/6397803808",
    "admobBannerScreenWidth": "ca-app-pub-0278055400058495/3009346842",
    "admobInterstitial": "ca-app-pub-0278055400058495/3691873129"
   }
  }
 };
$done({body: JSON.stringify(obj)});
//

/**
 * @supported 7EE45021521D
 */