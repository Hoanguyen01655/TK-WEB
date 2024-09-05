$(document).ready(function () {
  $("#gradeTable tbody tr").each(function () {
    var result = $(this).find("td:last-child").text().trim();
    if (result === "✗") {
      $(this).css("background-color", "#f8d7da");
    }
  });
});
