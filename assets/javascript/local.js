
// console.log("this file works")


// $(() => {

// });

// (function($){
  // $(function(){

    // $('.slider').slider();
    // $('.sidenav').sidenav();
    // $('.sidenav').sidenav();
    // $('.sidenav-trigger').sidenav()

  // }); // end of document ready
// })(jQuery); // end of jQuery name space

// $(document).ready(function(){
  
// });

// (function($){
  // $(function(){

    // $('.sidenav').sidenav();

  // }); // end of document ready
// })(jQuery); 

// $(document).ready(function(){
//   M.AutoInit();
// });

// M.AutoInit();

// 
// $(".button-collapse").sideNav();


  
// (function($){
//   $(function(){

//     $('.sidenav').sidenav();

//   }); // end of document ready
// })(jQuery); // end of jQuery name space

$( document ).ready(function(){
  $('.collapsible').collapsible();
  $('.slider').slider();
  $('.modal').modal();
  $('.button-collapse').sideNav({
        closeOnClick: true
      }
    );
  });