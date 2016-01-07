## Chicago Lat/Lng Ranges
North-East: 41.931036, -87.641551
North-West: 42.931036, -87.738031
South-West: 41.826887, -87.738031
South-East: 41.828300, -87.614190

Range:
LAT   41.826887 <->  42.931036
LNG  -87.614190 <-> -87.738031


## Zip Code Range
Zip codes:
60018, 60068, 60176, 60601, 60602, 60603, 60604, 60605, 60606, 60607, 60608, 60609, 60610, 60611, 60612, 60613, 60614, 60615, 60616, 60617, 60618, 60619, 60620, 60621, 60622, 60623, 60624, 60625, 60626, 60628, 60630, 60631, 60632, 60634, 60636, 60637, 60639, 60640, 60641, 60642, 60643, 60644, 60645, 60646, 60647, 60649, 60651, 60652, 60653, 60654, 60655, 60656, 60657, 60659, 60660, 60661, 60706, 60707, 60714

Source: http://www.city-data.com/zipmaps/Chicago-Illinois.html#ixzz3wQaCVXpa

## images

jsfiddle code
```javascript
$(document).ready(function() {

  $.ajax({
  url: 'https://pixabay.com/api/?key=1737332-5558eecf939aa201f8d69e29b&q=burger&image_type=photo&pretty=true',
  type: 'GET',
  dataType: 'json'
  })
  .done(function(data) {
    console.log("success");
        var data = data;
        var counter = 0;
        console.table(data);
        $('body').append("<div id='dvImages'>");
        // $('p').append(data.name);
        $.each( data.hits, function( i, item ) {
          counter += 1;
          //console.log(item.previewHeight);
          $('p').append(item.previewURL);
          // this method doesn't allow specific size selection! boo
          // A work around is to call a lot of images
          // and only append those that fit the size requirement.
          // But you don't know if you will get enough images...
          if (item.previewHeight >= 90 && item.previewHeight <= 100) {
          console.log(item.previewURL);
          var img = $("<img />");
          img.attr("src", item.previewURL).appendTo("#dvImages");
          if (counter == 20) return false;
          }
        });
  });

});
```










Using http://www.json-generator.com/

```
[
  '{{repeat(5, 7)}}',
  {
    name: '{{random("Bob\'s", "Sue\'s", "Tom\'s", "Gourmet", "Gluten-Free", "Organic", "Bacon")}} {{random("Burgers", "Sandwiches", "Fusion", "Buffet", "Chophouse", "Bar", "Lounge", "Pub", "Flesh & Turkey", "Café", "Tavern", "BBQ", "Bistro", "Between the Bunz" )}}',
    address: '{{integer(100, 999)}} {{street()}}, Chicago, IL, {{random(60018, 60068, 60176, 60601, 60602, 60603, 60604, 60605, 60606, 60607, 60608, 60609, 60610, 60611, 60612, 60613, 60614, 60615, 60616, 60617, 60618, 60619, 60620, 60621, 60622, 60623, 60624, 60625, 60626, 60628, 60630, 60631, 60632, 60634, 60636, 60637, 60639, 60640, 60641, 60642, 60643, 60644, 60645, 60646, 60647, 60649, 60651, 60652, 60653, 60654, 60655, 60656, 60657, 60659, 60660, 60661, 60706, 60707, 60714)}}',
    coords: [
      '{{floating(-87.738031, -87.614190, 6)}}',
      '{{floating(41.826887, 42.931036, 6)}}'
      ],
    phone: '+1 {{phone()}}',
    company: 'www.{{company().toLowerCase()}}.com',
    price: '{{integer(0,4)}}',
    foodtruck: '{{bool()}}',
    byob: '{{bool()}}',
    alcohol: '{{bool()}}',
    latenight: '{{bool()}}',
    outdoor: '{{bool()}}',
    image: '{{random("https://pixabay.com/static/uploads/photo/2014/10/23/18/05/burger-500054_150.jpg", "https://pixabay.com/static/uploads/photo/2015/07/01/07/06/burger-827309_150.jpg", "https://pixabay.com/static/uploads/photo/2015/07/01/07/06/burger-827310_150.jpg", "https://pixabay.com/static/uploads/photo/2015/07/01/07/06/burger-827308_150.jpg", "https://pixabay.com/static/uploads/photo/2015/10/14/13/55/burgers-987644_150.jpg", "https://pixabay.com/static/uploads/photo/2015/10/19/14/05/burger-996037_150.jpg", "https://pixabay.com/static/uploads/photo/2015/09/20/15/02/pizza-burger-948403_150.jpg", "https://pixabay.com/static/uploads/photo/2015/09/20/02/31/pizza-pocket-947899_150.jpg", "https://pixabay.com/static/uploads/photo/2015/09/22/15/42/burger-951896_150.jpg", "https://pixabay.com/static/uploads/photo/2015/07/30/18/23/burger-868145_150.jpg", "https://pixabay.com/static/uploads/photo/2015/09/18/10/11/burger-945321_150.jpg", "https://pixabay.com/static/uploads/photo/2015/10/31/12/19/burger-1015438_150.jpg", "https://pixabay.com/static/uploads/photo/2015/04/20/13/25/burger-731298_150.jpg", "https://pixabay.com/static/uploads/photo/2015/08/04/10/48/burger-874531_150.jpg", "https://pixabay.com/static/uploads/photo/2015/07/19/18/47/burger-851847_150.jpg", "https://pixabay.com/static/uploads/photo/2015/06/08/15/13/hamburger-801942_150.jpg", "https://pixabay.com/static/uploads/photo/2015/10/31/12/20/burger-1015440_150.jpg", "https://pixabay.com/static/uploads/photo/2015/09/01/03/42/food-916397_150.jpg", "https://pixabay.com/static/uploads/photo/2015/10/13/21/09/sandwich-986799_150.jpg", "https://pixabay.com/static/uploads/photo/2015/09/18/10/12/burger-945322_150.jpg")}}',

    burgers: [
      '{{repeat(1,3)}}',
      {
      name: 'The {{random("Enticing", "Heavenly", "Yummy", "Delectable", "Delicious", "Meaty", "Filling", "Thick")}} {{random("Greasy", "Double", "Cheesy", "Triple", "Quadruple", "Filling", "Smeared", "Lubricated")}} {{random("Burger", "Sandwich")}}',
      description: '{{lorem(1, "sentence")}}',
      rating: '{{integer(0,4)}}',
      veggie: '{{bool()}}',
      image: '{{random("https://pixabay.com/static/uploads/photo/2014/10/23/18/05/burger-500054_150.jpg", "https://pixabay.com/static/uploads/photo/2015/07/01/07/06/burger-827309_150.jpg", "https://pixabay.com/static/uploads/photo/2015/07/01/07/06/burger-827310_150.jpg", "https://pixabay.com/static/uploads/photo/2015/07/01/07/06/burger-827308_150.jpg", "https://pixabay.com/static/uploads/photo/2015/10/14/13/55/burgers-987644_150.jpg", "https://pixabay.com/static/uploads/photo/2015/10/19/14/05/burger-996037_150.jpg", "https://pixabay.com/static/uploads/photo/2015/09/20/15/02/pizza-burger-948403_150.jpg", "https://pixabay.com/static/uploads/photo/2015/09/20/02/31/pizza-pocket-947899_150.jpg", "https://pixabay.com/static/uploads/photo/2015/09/22/15/42/burger-951896_150.jpg", "https://pixabay.com/static/uploads/photo/2015/07/30/18/23/burger-868145_150.jpg", "https://pixabay.com/static/uploads/photo/2015/09/18/10/11/burger-945321_150.jpg", "https://pixabay.com/static/uploads/photo/2015/10/31/12/19/burger-1015438_150.jpg", "https://pixabay.com/static/uploads/photo/2015/04/20/13/25/burger-731298_150.jpg", "https://pixabay.com/static/uploads/photo/2015/08/04/10/48/burger-874531_150.jpg", "https://pixabay.com/static/uploads/photo/2015/07/19/18/47/burger-851847_150.jpg", "https://pixabay.com/static/uploads/photo/2015/06/08/15/13/hamburger-801942_150.jpg", "https://pixabay.com/static/uploads/photo/2015/10/31/12/20/burger-1015440_150.jpg", "https://pixabay.com/static/uploads/photo/2015/09/01/03/42/food-916397_150.jpg", "https://pixabay.com/static/uploads/photo/2015/10/13/21/09/sandwich-986799_150.jpg", "https://pixabay.com/static/uploads/photo/2015/09/18/10/12/burger-945322_150.jpg")}}',

    meat: {
        grassfed: '{{bool()}}',
        kobe: '{{bool()}}',
        bison: '{{bool()}}',
        angus: '{{bool()}}',
        turkey: '{{bool()}}',
        lamb: '{{bool()}}',
        elk: '{{bool()}}'
      }
    }
    ],

    sides: {
		duckFries: '{{bool()}}',
        tots: '{{bool()}}',
		macAndCheese: '{{bool()}}'
    },

    allergies: {
		accommodates: '{{bool()}}',
        glutenFree: '{{bool()}}'
    },

    challenges: {
		exists: '{{bool()}}',
        name: 'The {{random("Enticing", "Heavenly", "Yummy", "Delectable", "Delicious", "Meaty")}} {{random("Eat", "Chew", "Graze", "Devour")}}',
        description: '{{lorem(1, "sentence")}}'
    },

    hours: {
      days: 'Monday - Sunday',
      opening: '{{integer(8, 12)}}:00AM',
      closing: '{{integer(5, 12)}}:00PM',
      closed: 'false'
    }
  }
]
```
