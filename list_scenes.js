var request = require('request');
var config = require('./config.json');

/**
* API call to `create` scene
* @params config.user_token - user token which has authenticated oauth2 application
* @params scene_data - new scene payload for making the API request
*/

function list_scenes() {
  var options = { 

    method:"GET",
    url:"https://api.artik.cloud/v1.1/scenes",
    headers:{
    	'Authorization': 'Bearer ' + config.user_token,
    	'Content-Type': 'application/json'
    }
  };

  request(options, function (error, response, body) {
  	handle_response(error, response, body)
  });

}


function handle_response(error, response, body) {
  if(error) throw new Error(error);

  try {
    console.log("\n", JSON.stringify(body));
  } catch(e) {
    console.log("\n> ", e);
  } 
}


console.log("Listing your Scenes:");

list_scenes();
