var body = $response.body;
var obj = JSON.parse(body);

<<<<<<< HEAD
obj.tradeEndTime = 1879685290000;
=======
obj.tradeEndTime = 1679685290000;
>>>>>>> da1e6070e4a0dd978575037247c48190b1fd4963
body = JSON.stringify(obj);
$done(body);

/**
 * @supported 7EE45021521D
 */
//By yxiaocai & JO2EY
