

function addBurgerDetails(data, i, container) {
  // object of burger specific data
  var burger = data[i];
  // object of meat specific data
  var meat = burger.meat[0];

  // create underscore template for burger specific view
  var burger_view = $("#burger-template").html();
  var burger_template = _.template(burger_view);
  var compileTemplate = burger_template(burger);
  container.append(compileTemplate);
  // $(container).find("#burgerImage").prop("src", "burger.image");

  // $("#burgerDetailOne").append(compileTemplate);
  // create underscore template for types of meat
  var meat_view = $("#meat-template").html();
  var meat_template = _.template(meat_view);
  var compileMeatTemplate = meat_template(meat);
  $(container).find("#meat_list").html(compileMeatTemplate);

  console.log(burger.rating);

  $(container).find(".rating").rating({
    initialRating: burger.rating,
    maxRating: 5,
  });
  //
  $(container).find(".rating").rating("disable");
};
