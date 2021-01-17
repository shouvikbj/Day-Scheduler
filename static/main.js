$(document).ready(function () {
  // loading main content
  $("#progress").hide();
  $("#progress2").hide();
  $("#content").load("/index");
  $("#date").click(function () {
    $("#progress").hide();
  });
  $("#title").click(function () {
    $("#progress2").hide();
  });
  $("#addDate").on("click", function () {
    if ($("#date").val() == "") {
      M.toast({ html: "Input shouldn't be empty!", classes: "rounded" });
    } else {
      $("#progress").show();
      $.ajax({
        method: "post",
        url: "/addDate",
        data: { date: $("#date").val() },
        success: function (res) {
          $("#date").val("");
          $("#progress").hide();
          M.toast({ html: `${res["message"]}`, classes: "rounded" });
          $("#content").load(`/date/${res["id"]}`);
          var elem = document.querySelectorAll("#modalAdd");
          var instance = M.Modal.init(elem, "close");
          instances.close();
        },
      });
    }
  });
});
