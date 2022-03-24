$(document).ready(function(){
    
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

function hourUpdate(){
    var currentTime = moment().hours();

    $('.time-block').each(function(){

        var timeBlockHour = parseInt($(this).attr("id").split("hour")[1]);

        if(timeBlockHour < currentTime){
            $(this).addClass("past");
        } else if (timeBlockHour === currentTime){
            $(this).removeClass("past");
            $(this).addClass("present")
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future")
        }

    })

}

// $("<div class='past'>")

hourUpdate()

$(".saveBtn").on("click", function(){

    var textAreaValue = $(this).siblings(".description").val();
    var parentId = $(this).parent().attr('id');

    console.log(parentId, textAreaValue);

   localStorage.setItem(parentId, textAreaValue);

    
})

//$("#hour8 .description").val(localStorage.getItem("hour8"))

for(var i= 8; i < 17; i++){
   // $("#hour"+[i], ".description").val(localStorage.getItem("hour"+[i]))

    $(`#hour${i} .description`).val(localStorage.getItem(`hour${i}`))
}

})
