// $('document').ready(function(){
//
// });

function addBurgerDetails(data) {
  // object of burger specific data
  var burger = data[0];
  var keys = Object.keys(burger);
  // object of meat specific data
  var meat = burger.meat[0];
  var keys = Object.keys(meat);
  console.log(meat);
  // create underscore template for burger specific view
  var burger_view = $("#burger-template").html();
  var burger_template = _.template(burger_view);
  var compileTemplate = burger_template(burger);
  $("#location_burgers").append(compileTemplate);
  // create underscore template for types of meat
  var meat_view = $("#meat-template").html();
  var meat_template = _.template(meat_view);
  var compileMeatTemplate = meat_template(meat);
  $("#meat_list").append(compileMeatTemplate);

  showBurgerDetails();
};

function showBurgerDetails(){
  console.log('Burgers Belong Here');
  $("#burgerzzz").click(function() {
    // console.log('Clicks are fucking annoying');
    // var modal = $(".ui.modal");
    // console.log(modal);
    $(".ui.modal").modal("show");
  });
}
// console.log(location.burgers);
//
// for (var i = 0; i <= location.burgers; i++) {
//   console.log(location.burgers);
// };
