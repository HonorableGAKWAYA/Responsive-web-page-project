var toggleButton = document.getElementsByClassName("toggle-button")[0];
var navLogs = document.getElementsByClassName("nav-logs")[0];
var closeButton = document.getElementsByClassName("close-button")[0];

function openToggleMenu (){
      if ($(window).width() < 500) {
            navLogs.style.visibility= 'visible';
            toggleButton.style. display = "none";
            closeButton.style. display = "flex";
      }
      else {
            navLogs.style.visibility= 'visible';
            toggleButton.style. display = "none";
            closeButton.style. display = "none";
      }
      
      
};

function closeToggleMenu (){
      if ($(window).width() < 500) {
            navLogs.style.visibility= 'hidden';
            toggleButton.style. display = "flex";
            closeButton.style. display = "none";
      }
      else {
            navLogs.style.visibility= 'visible';
            toggleButton.style. display = "none";
            closeButton.style. display = "none";
      }
      
      
}; 