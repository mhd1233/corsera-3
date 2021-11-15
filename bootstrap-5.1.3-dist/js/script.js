(function(global){

var homeHtmlUrl="snippet/home-sinpping.html";



var insertHtml = function (selector, html1) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html1;
  };



  var showLoading = function (selector) {
    var html1 = "<div class='text-center'>";
    html1 += "<img src='img/loading.gif'></div>";
    insertHtml(selector, html1);
  };
  
  document.addEventListener("DOMContentLoaded", function (event) {

    showLoading("#main-content");
    $("#main-content").load(homeHtmlUrl);

  }

     
     ); 
    })(window);