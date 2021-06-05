$(document).ready(function () {
    let $btns = $("#work .button-group button");

    $btns.click(function (e) {
      $("#work .button-group button").removeClass("active");
      e.target.classList.add("active");

      let selector = $(e.target).attr("data-filter");
      $("#work .grid").isotope({
        filter: selector,
      });
      return false;
    });

    $("#work .button-group #btn1").trigger("click");

    $("#work .grid .test-popup-link").magnificPopup({
      type: "image",
      gallery: { enabled: true },
      // other options
    });
  });