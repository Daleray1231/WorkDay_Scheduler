$(function () {
  function updateTimeBlockClasses() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

      if (timeBlockHour >= 1 && timeBlockHour <= 5) {
        timeBlockHour += 12;
      }

      $(this).removeClass("past present future");

      if (timeBlockHour < currentHour) {
        $(this).addClass("past");
      } else if (timeBlockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }


  function loadSavedUserInput() {
    $(".time-block").each(function () {
      var savedUserInput = localStorage.getItem($(this).attr("id"));
      $(this).find(".description").val(savedUserInput);
    });
  }


  updateTimeBlockClasses();
  loadSavedUserInput();


  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).closest(".time-block").attr("id");
    var userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);
  });


  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text("Today is " + currentDate);
});


