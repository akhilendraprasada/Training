$(function () {
    $("#pwd").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
       var type = $(this).hasClass("fa-eye-slash") ? "text" : "password";
        $("#p").attr("type", type);
    });
});