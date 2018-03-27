/*to start a node JS project from scratch:
1- create a folder and name it as you like
2- create inside it an assests folder for CSS and static files such as 'images and videos'
3- create a file as a process file .js
4- in the terminal:
    A-start githube 'optional' using 'git init' command
    B-start package.json using '$ npm init' command
    C-install package express for routing using '$ npm install express -save' command and the -save it to save it in the package.jason
    D-install package parser for sending post from a form using '$ npm install body-parser -save' command
    E-install package ejs for using css, nav, photos, videos...etc '$ npm install ejs -save' command
*/


$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
