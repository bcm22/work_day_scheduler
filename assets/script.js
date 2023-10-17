// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var currentHour = Number(dayjs().format('H'));

  $('.time-block').each(function() {
    var hourValue = Number($(this).attr("id"));

    if (currentHour > hourValue) {
      $(this).removeClass("present future").addClass("past");
    } else if (currentHour < hourValue) {
      $(this).removeClass("past present").addClass("future");
    } else {
      $(this).removeClass("past future").addClass("present");
    }
  });

  var currentTime = dayjs().format('dddd, MMM D');
  $('#display-4').text(currentTime);

  $(".saveBtn").on("click", saveToLocalStorage);

  function saveToLocalStorage() {
    var blockId = $(this).parent().attr("id");
    var blockDescription = $(this).siblings(".description").val();
    localStorage.setItem(blockId, blockDescription);
  }

  for (var i = 9; i <= 16; i++) {
    $(`#${i} .descritption`).var(localStorage.getItem(`${i}`))
  }
     });