$('document').ready(function(){

  getLocation();

  // TURN ON OR OFF TOGGLE ABILITY OF BUTTON
  // var $toggle  = $('.ui.toggle.button');
  // $toggle
  //   .state({
  //     text: {
  //       inactive : 'BYOB',
  //       active   : 'BYOB'
  //     }
  //   })
  // ;

});


function updateLocationDetail(data){

  var location = data[0];
  var keys = Object.keys(location);

  $("#location_name").html(location.name + "  ");
  $("#location_address").html(location.address);
  $("#location_phone").html(location.phone);
  $("#location_website").html(location.website);

  $("#location_hours").append(location.hours[0].days + " " + location.hours[0].opening + " to " + location.hours[0].closing);

  $(".locationHeader").css("background-image", "url(" + location.image + ")");

  var priceArr = [
    $(".zero_dollar"),
    $(".one_dollar"),
    $(".two_dollar"),
    $(".three_dollar")
  ];

  for (var i = 0; i < location.price; i++) {

    priceArr[i].css("color","gold");

  };
  //
  //
  var burgersNumArr = Object.keys(location.burgers);
  //
  var burgerListItemHTML = $("#burgerListItemOne-template").html();
  var burgerListItemTemplate = _.template(burgerListItemHTML);
  var compiled_burgerList = burgerListItemTemplate(location.burgers[0]);
  $("#burger_list").append(compiled_burgerList);
  $("#burgerItemOne").click(function() {
    $("#burgerDetailOne.ui.modal.small").modal("show");
  });
  addBurgerDetails(location.burgers, 0, $("#burgerDetailOne"));

  //
  if (burgersNumArr.length > 0) {
    var burgerListItemHTML = $("#burgerListItemTwo-template").html();
    var burgerListItemTemplate = _.template(burgerListItemHTML);
    var compiled_burgerList = burgerListItemTemplate(location.burgers[1]);
    $("#burger_list").append(compiled_burgerList);
    $("#burgerItemTwo").click(function() {
      $("#burgerDetailTwo.ui.modal").modal("show");
    });
    addBurgerDetails(location.burgers, 1, $("#burgerDetailTwo"));
  }
  //
  if (burgersNumArr.length > 1) {
    var burgerListItemHTML = $("#burgerListItemThree-template").html();
    var burgerListItemTemplate = _.template(burgerListItemHTML);
    var compiled_burgerList = burgerListItemTemplate(location.burgers[2]);
    $("#burger_list").append(compiled_burgerList);
    $("#burgerItemThree").click(function() {
      $("#burgerDetailThree.ui.modal").modal("show");
    });
    addBurgerDetails(location.burgers, 2, $("#burgerDetailThree"));
  }
  //

  //
  // default search options...need to set on data/page load
  location.alcohol ? setToggleOn('#location_alcohol') : setToggleOff($('#location_alcohol'));
  location.byob ? setToggleOn('#location_byob') : setToggleOff('#location_byob');
  location.latenight ? setToggleOn('#location_latenight') : setToggleOff('#location_latenight');
  location.outdoor ? setToggleOn('#location_outdoor') : setToggleOff('#location_outdoor');

  location.foodtruck ? setYes("foodtruck") : setNo("foodtruck");
  location.challenges ? setYes("challenges") : setNo("challenges");
  location.allergies ? setYes("allergies") : setNo("allergies");



};

function setToggleOn(button){
  $(button).removeClass("inactive");
  $(button).addClass("active");
};

function setToggleOff(button){
  $(button).removeClass("active");
  $(button).addClass("inactive");
};

function setYes(item){
  $("#location_" + item + ".yes").html("X");
};

function setNo(item){
  $("#location_" + item + ".no").html("X");
};
