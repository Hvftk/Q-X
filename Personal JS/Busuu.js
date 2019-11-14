var obj = JSON.parse($response.body);
obj.data.is_premium= true;
$done({body: JSON.stringify(obj)});

/**
 * @supported 7EE45021521D
 */