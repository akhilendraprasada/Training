$(document).ready(function(){
    $("#a").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#b tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });