$('document').ready(function(){

  getLocation();

});

function updateLocationDetail(data){

  var location = data[0];
  var keys = Object.keys(location);

  $("#location_" + location.name).html(location.name);
  $("#location_" + location.address).html(location.address);
  // $("#location_" + location.phone).html(location.phone);
  $("#location_" + location.website).html(location.website);
  // location.image
  // $("#location_" + location.hours).html(location.hours);

  for (var i = 0; i <= location.price; i++) {
    $("#location_price." + i + "_dollar").css("color","green");
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
}

function setYes(item){
  $("#location_" + item + ".yes").html("X");
};

function setNo(item){
  $("#location_" + item + ".no").html("X");
};
