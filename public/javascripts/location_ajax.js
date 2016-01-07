function getLocation() {
  locationID = "568d5f825d5455088a340ff1";
  $.ajax({
    url: '/location/detail/data',
    type: 'GET',
    dataType:'json'
  })
  .done(function(data) {
    updateLocationDetail(data);
  })
  .fail(function() {
    // console.log("error");
  })
  .always(function() {
    // console.log("complete");
  });
};
