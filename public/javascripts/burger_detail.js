// $('document').ready(function(){
//
// });


function addBurgerDetails(data) {
  var burger = data[0];
  var keys = Object.keys(burger);
  console.log(burger)
  console.log(burger.description);

  var burger_view = $("#burger-template").html();
  var burger_template = _.template(burger_view);
  var compileTemplate = burger_template(burger);
  $("#location_burgers").append(compileTemplate);
};
//
// console.log(location.burgers);
//
// for (var i = 0; i <= location.burgers; i++) {
//   console.log(location.burgers);
// };
