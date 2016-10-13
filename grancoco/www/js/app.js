// Ionic Starter App

var pushNotification;

    // CONFIG PUSH
    function initializePushNotifications() {

          try {
          pushNotification = window.plugins.pushNotification;
          if (device.platform == 'android' || device.platform == 'Android' ||
            device.platform == 'amazon-fireos') {
            pushNotification.register(successHandler, errorHandler, {"senderID": "847272789591", "ecb": "onNotification"}); // required!
          } else {
            pushNotification.register(tokenHandler, errorHandler, {
              "badge": true,
              "sound": true,
              "alert": true,
              "ecb": "onNotificationAPN"
            }); // required!
          }

        }
        catch (err) {
          var txt = "Ocorreu um erro ao registrar seu dispositivo para receber notificações.";
          alert(txt);
        }  
      
      

    }

    /* region Android GCM Notifications */
// handle GCM notifications for Android
function onNotification(e) {

  
  switch (e.event) {
    case 'registered':
      //alert("REGISTERED FOR PUSH ANDROID:" + e.regid);
      if (e.regid.length > 0) {
        window.pushToken = e.regid;
        //alert(window.pushToken);

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            //alert(this.responseText);
          }
        };
        xhttp.open("GET", "http://www.appclube.com.br/registra_token.php?platform=android&token=" + window.pushToken, true);
        xhttp.send();

      }
      break;

    case 'message':
          // this is the actual push notification. its format depends on the data model from the push server

          //navigator.notification.beep();
          alert(e.message);
          break;

        case 'error':
          //alert('GCM error = ' + e.msg);
          break;

    default:
      break;
  }
}
/* endregion */

/* region iOS PushNotificatinos */

// handle APNS notifications for iOS
function onNotificationAPN(e) {
  if (e.alert) {
    // showing an alert also requires the org.apache.cordova.dialogs plugin
    alert(e.alert);
  }

  if (e.sound) {
    // playing a sound also requires the org.apache.cordova.media plugin
    //var snd = new Media(e.sound);
    //snd.play();
    var mp3URL = getMediaURL("sounds/bell.mp3");
    var media = new Media(mp3URL, null, mediaError);
    media.play();
  }

  if (e.badge) {
    pushNotification.setApplicationIconBadgeNumber(successHandler, e.badge);
  }
}

function getMediaURL(s) {
  if(device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
  return s;
}

function mediaError(e) {
  alert('Media Error');
  alert(JSON.stringify(e));
}

function tokenHandler(result) {
  //alert("REGISTERED FOR PUSH iOS:" + result);
  window.pushToken = result;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //alert(this.responseText);
    }
  };
  xhttp.open("GET", "http://www.appclube.com.br/registra_token.php?platform=ios&token=" + window.pushToken, true);
  xhttp.send();
}

function successHandler(result) {
 // alert("successHandler: " + result);
}

function errorHandler(error) {
  //alert("errorHandler: " + error);
}

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('Grancoco', ['ionic', 'Grancoco.controllers', 'Grancoco.services'])



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

initializePushNotifications();



    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})



.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {


  $ionicConfigProvider.tabs.position('bottom');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.historia', {
    url: '/historia',
    views: {
      'tab-historia': {
        templateUrl: 'templates/historia.html'
      }
    }
  })

  .state('tab.contato', {
    url: '/contato',
    views: {
      'tab-contato': {
        templateUrl: 'templates/contato.html',
        controller: 'ContatoCtrl'
      }
    }
  })

  .state('tab.elenco', {
      url: '/elenco',
      views: {
        'tab-elenco': {
          templateUrl: 'templates/elenco.html',
          controller: 'ElencoCtrl'
        }
      }
    })
    .state('tab.atleta', {
      url: '/elenco/:elencoId',
      views: {
        'tab-elenco': {
          templateUrl: 'templates/atleta.html',
          controller: 'AtletaDetailCtrl'
        }
      }
    })

  .state('tab.jogos', {
    url: '/jogos',
    views: {
      'tab-jogos': {
        templateUrl: 'templates/jogos.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/contato');

});
