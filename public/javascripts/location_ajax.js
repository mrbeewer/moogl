function getLocation() {
  locationID = "568d42205d39631279404a88";
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
