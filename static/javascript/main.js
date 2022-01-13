$("#design-description").hide();
$("#development-description").hide();
$("#product-management-description").hide();

$("#design").click(() => {
  $("#design").replaceWith($("#design-description"));
  $("#design-description").show();
});

$("#development").click(() => {
  $("#development").replaceWith($("#development-description"));
  $("#development-description").show();
});

$("#product-management").click(() => {
  $("#product-management").replaceWith($("#product-management-description"));
  $("#product-management-description").show();
});
