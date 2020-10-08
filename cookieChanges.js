// checker régulièrement le changement de valorisation d'un cookie 1
var checkCookie = function() {

    var lastCookie = document.cookie; // 'static' memory between function calls

    return function() {

        var currentCookie = document.cookie;

        if (currentCookie != lastCookie) {

            // something useful like parse cookie, run a callback fn, etc.

            lastCookie = currentCookie; // store latest cookie

        }
    };
}();

window.setInterval(checkCookie, 100); // run every 100 ms

// checker régulièrement le changement de valorisation d'un cookie 2
const cookieEvent = new CustomEvent("cookieChanged", {
    bubbles: true,
    detail: {
      cookieValue: document.cookie,
      checkChange: () => {
        if (cookieEvent.detail.cookieValue != document.cookie) {
          cookieEvent.detail.cookieValue = document.cookie;
          return 1;
        } else {
          return 0;
        }
      },
      listenCheckChange: () => {
        setInterval(function () {
          if (cookieEvent.detail.checkChange() == 1) {
            cookieEvent.detail.changed = true;
            //fire the event
            cookieEvent.target.dispatchEvent(cookieEvent);
          } else {
            cookieEvent.detail.changed = false;
          }
        }, 1000);
      },
      changed: false
    }
  });
  
  /*FIRE cookieEvent EVENT WHEN THE PAGE IS LOADED TO
   CHECK IF USER CHANGED THE COOKIE VALUE */
  
  document.addEventListener("DOMContentLoaded", function (e) {
    e.target.dispatchEvent(cookieEvent);
  });
  
  document.addEventListener("cookieChanged", function (e) {
    e.detail.listenCheckChange();
    if(e.detail.changed === true ){
      /*YOUR CODE HERE FOR DO SOMETHING 
        WHEN USER CHANGED THE COOKIE VALUE */
    }
  });




// The onChanged event from the cookies API
browser.cookies.onChanged.addListener(listener)
browser.cookies.onChanged.removeListener(listener)
browser.cookies.onChanged.hasListener(listener)




