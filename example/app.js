var twitter = require('twitter.cc.nl');
var res = twitter.share('Sharing a new tweet!');

if ( res === false ){
	alert('Twitter not found on device!');
} else {
	alert('Twitter open intent activity successfully sent');
}