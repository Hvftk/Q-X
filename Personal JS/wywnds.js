var body = $response.body;
var obj = JSON.parse(body);

obj.tradeEndTime = 7779685290000;
body = JSON.stringify(obj);
$done(body);

/**
 * @supported 7EE45021521D
 */
//By yxiaocai & JO2EY
