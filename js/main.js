$(document).ready(function () {
  //sliders

  $(".hero-slider").slick({
    infinite: true,
    autoplay: true,
    time: 5000,
    speed: 500,
    fade: true,
    cssEase: "linear",
    prevArrow: ".hero-control--prev",
    nextArrow: ".hero-control--next",
  });

  //selects

  $("select").niceSelect();

  //range

  $("#filters-range .range-slider").slider({
    range: true,
    min: 0,
    max: 20000,
    values: [5000, 15000],
    slide: function (event, ui) {
      $("#filters-range [data-from]").text(ui.values[0]);
      $("#filters-range [data-to]").text(ui.values[1]);
      $('#filters-range [name="filters-from]').text(ui.values[0]);
      $('#filters-range [name="filters-to]').text(ui.values[1]);
    },
  });
});
