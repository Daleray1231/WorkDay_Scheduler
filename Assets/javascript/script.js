$(function () {
  // Function to update time-block classes based on the current time.
  function updateTimeBlockClasses() {
    // Get the current hour using Day.js in 24-hour format.
    var currentHour = dayjs().hour();

    // Loop through each time-block.
    $(".time-block").each(function () {
      // Get the hour from the time-block's id (e.g., "hour-9" => 9).
      var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

      // Add 12 to the parsed hour for time-blocks from 1PM to 5PM.
      if (timeBlockHour >= 1 && timeBlockHour <= 5) {
        timeBlockHour += 12;
      }

      // Remove existing classes to reset the styling.
      $(this).removeClass("past present future");

      // Compare the time block's hour to the current hour and apply the appropriate class.
      if (timeBlockHour < currentHour) {
        $(this).addClass("past");
      } else if (timeBlockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  // Function to load saved user input from local storage.
  function loadSavedUserInput() {
    // Loop through each time-block.
    $(".time-block").each(function () {
      // Get the user input saved in local storage for this time block.
      var savedUserInput = localStorage.getItem($(this).attr("id"));

      // Set the value of the corresponding textarea.
      $(this).find(".description").val(savedUserInput);
    });
  }

  // Update time-block classes initially when the page loads.
  updateTimeBlockClasses();

  // Load saved user input initially.
  loadSavedUserInput();

  // Add a click event listener for the save buttons.
  $(".saveBtn").on("click", function () {
    // Get the id of the parent time-block.
    var timeBlockId = $(this).closest(".time-block").attr("id");

    // Get the user input from the corresponding textarea.
    var userInput = $(this).siblings(".description").val();

    // Save the user input in local storage with the time block id as the key.
    localStorage.setItem(timeBlockId, userInput);
  });

  // Display the current date in the header of the page.
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text("Today is " + currentDate);
});
