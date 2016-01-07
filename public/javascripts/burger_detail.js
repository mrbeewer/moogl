// $('document').ready(function(){
//
// });


function addBurgerDetails(data) {
  var burger_data = data;
  console.log(burger_data);
  burger_view = $("#burger-template").html();
  $("#location_burgers").append(_.template(burger_view, burger_data));
};
// 
// console.log(location.burgers);
//
// for (var i = 0; i <= location.burgers; i++) {
//   console.log(location.burgers);
// };
