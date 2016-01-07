$('document').ready(function(){

  getLocation();

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

  location.foodtruck ? setYes("foodtruck") : setNo("foodtruck");
  location.alcohol ? setYes("alcohol") : setNo("alcohol");
  location.byob ? setYes("byob") : setNo("byob");
  location.latenight ? setYes("latenight") : setNo("latenight");
  location.outdoor ? setYes("outdoor") : setNo("outdoor");
  location.challenges ? setYes("challenges") : setNo("challenges");
  location.allergies ? setYes("allergies") : setNo("allergies");
  location.sides
  location.burgers


  // var arr = [];
  // var arr = Object.keys(location);
  //
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] != "_id") {
  //     //
  //     var container = "#location_" + arr[i];
  //     var item = location[arr[i]];
  //     console.log(item);
  //     //
  //     displayDetailItem({
  //       container: container,
  //       item: item
  //     });
  //   };
  // };
//
// };
//
// var displayDetailItem = function(object) {
//
//   $(object.container).append(object.item);
//
  addBurgerDetails(location.burgers);
}

function setYes(item){
  $("#location_" + item + ".yes").html("X");
};

function setNo(item){
  $("#location_" + item + ".no").html("X");
};
