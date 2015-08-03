// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .
// require twitter/bootstrap
$(document).ready(function() {
  $('.has-tooltip').tooltip();
});

$(function() {
  $('#menu th a').live('click', function () {
    $.getScript(this.href);
    return false;
  });
//   $('#dish_search input').keyup(function () {
//     $.get($('#dish_search').attr('action');
//       $('#dish_search').serialize(), null, 'script');
//   return false;
// });
  $("#dish_search input").keyup(function() {
    $.get($('#dish_search').attr('action'), $('#dish_search').serialize(), null, 'script');
    return false;
  });
  $("#dishe_search input").keyup(function() {
    $.get($("#dishe_search").attr("action"), $("#dishe_search").serialize(), null, "script");
    return false;
  });
});
