var request = require('request');
var config = require('./config.json');

// Example scene for 2 devices.
// When activated it will call the designated action shown below.
// In this example, each device will call action":"setOff"
var scene_on = {
  "name": "Scene living room ON",
  "description": "scene to turn ON all lights in living room",
  "actions": [
	  {
	  	"ddid": config.device1_id,
	  	"action": "setOn",
	  	"parameters": {}
	  },
	  {
	  	"ddid": config.device2_id,
	  	"action": "setOn",
	  	"parameters": {}
	  }, 
	]
};

// Example scene for 2 devices.
// When activated it will call the designated action shown below.
// In this example, each device will call action":"setOn"
var scene_off = {
  "name": "Scene living room OFF",
  "description": "scene to turn OFF all lights in living room",
  "actions": [
	  {
	  	"ddid": config.device1_id,
	  	"action": "setOff",
	  	"parameters": {}
	  },
	  {
	  	"ddid": config.device2_id,
	  	"action": "setOff",
	  	"parameters": {}
	  }
	]
};

/**
* API call to `create` scene
* @params config.user_token - user token which has authenticated oauth2 application
* @params scene_data - new scene payload for making the API request
*/

function create_scene(scene_data) {
  var options = { 
    method:"POST",
    url:"https://api.artik.cloud/v1.1/scenes",
    headers:{
    	'Authorization': 'Bearer ' + config.user_token,
    	'Content-Type': 'application/json'
    },
    body: scene_data,
    json:true
  };

  request(options, function (error, response, body) {
  	handle_response(error, response, body)
  });

}

console.log("\nVisit https://my.artik.cloud/scenes after scenes are created") 

console.log("\n1. Creating Scene 1: ", scene_on.name)
console.log("\n2. Creating Scene 2: ", scene_off.name)
console.log("\nResponse data of API calls are shown below ... ")

create_scene(scene_on);
create_scene(scene_off);
