$(document).ready(() => {
  // $("body").css("background-color", "#1e88e5");
  $("#loginBtn").hide();
  $("#content").load("/login");
  $("#signupBtn").click(() => {
    $("#signupBtn").hide();
    $("#loginBtn").show();
    $("#content").load("/signup");
  });
  $("#loginBtn").click(() => {
    $("#loginBtn").hide();
    $("#signupBtn").show();
    $("#content").load("/login");
  });
});
