$(document).ready(function () {
  $(".delete-btn").on("click", function () {
    $(this).closest("tr").remove();
  });
});
