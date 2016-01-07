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

  $("#location_name").html(location.name);
  $("#location_address").html(location.address);
  $("#location_phone").html(location.phone);
  $("#location_website").html(location.website);
  // location.image
  $("#location_hours").html(location.hours[0].closed);
  $("#location_hours").append(location.hours[0].closing);
  $("#location_hours").append(location.hours[0].days);
  $("#location_hours").append(location.hours[0].opening);


  var priceArr = [
    $("#location_price.zero_dollar"),
    $("#location_price.one_dollar"),
    $("#location_price.two_dollar"),
    $("#location_price.three_dollar"),
  ];

  for (var i = 0; i <= location.price; i++) {

    priceArr[i].css("color","black");

  };
  //
  // default search options...need to set on data/page load
  console.log(location);
  location.alcohol ? setToggleOn('#location_alcohol') : setToggleOff($('#location_alcohol'));
  location.byob ? setToggleOn('#location_byob') : setToggleOff('#location_byob');
  location.latenight ? setToggleOn('#location_latenight') : setToggleOff('#location_latenight');
  location.outdoor ? setToggleOn('#location_outdoor') : setToggleOff('#location_outdoor');

  location.foodtruck ? setYes("foodtruck") : setNo("foodtruck");
  location.challenges ? setYes("challenges") : setNo("challenges");
  location.allergies ? setYes("allergies") : setNo("allergies");
  location.sides
  location.burgers

};

function setToggleOn(button){
  $(button).removeClass("inactive");
  $(button).addClass("active");
}

function setToggleOff(button){
  $(button).removeClass("active");
  $(button).addClass("inactive");
}

function setYes(item){
  $("#location_" + item + ".yes").html("X");
};

function setNo(item){
  $("#location_" + item + ".no").html("X");
};
