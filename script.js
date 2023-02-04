// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
//this is for the time
  var current = dayjs("");
var current = dayjs();
$('#currentDay').text(current.format('MMM D YYYY hh:mm a'));
//this is the eventlistener for the user to click
$('.saveBtn').on  ('click', function(){
 var text= $(this).siblings(".description").val();
var time=$(this).parent().attr("id");
localStorage.setItem(time, text);
})

//this is to change the time/color from present-future-past
function exactTime(){
  var currentTime= dayjs().hour();
  $(".time-block").each(function(){
    var blockTime = parseInt($(this).attr("id").split("hour-")[1]);
    if (blockTime < currentTime){
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
      }
       else if 
      (blockTime === currentTime){
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
       else{
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
      
  })
 
}
//this is to store all the data the user inputs
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
        
      exactTime();
})
  

