Share directly to Twitter on Android
-------------

With this native Android Titanium module you will be able to directly share to Twitter with no need to open a share dialog box.

##Get the latest compiled module :

[Distribution](https://github.com/joseandro/shareToTwitter/blob/master/android/dist/twitter.cc.nl-android-1.0.0.zip)


##Usage example:

~~~
var twitter = require('twitter.cc.nl');
var res = twitter.share('Sharing a new tweet!');
if ( res === false ){
	alert("Twitter not found on device!");
} else {
	alert("Twitter open intent activity successfully sent");
}
~~~
[Check App.js](https://raw.githubusercontent.com/joseandro/shareToTwitter/master/android/example/app.js)

##Methods:

####share( String text )
* text    - What you want to share