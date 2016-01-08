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
LOCATIONS
```
[
  '{{repeat(100, 100)}}',
  {
    name: '{{random("Bob\'s", "Sue\'s", "Tom\'s", "Gourmet", "Gluten-Free", "Organic", "Bacon", "Turbo", "Skywalker\'s", "Old Ben\'s", "Super Mario\'s", "Bowser\s")}} {{random("Burgers", "Sandwiches", "Fusion", "Buffet", "Chophouse", "Bar", "Lounge", "Pub", "Flesh & Turkey", "Café", "Tavern", "BBQ", "Bistro", "Between the Bunz", "Cantina" )}}',
    address: '{{integer(100, 999)}} {{street()}}, Chicago, IL, {{random(60018, 60068, 60176, 60601, 60602, 60603, 60604, 60605, 60606, 60607, 60608, 60609, 60610, 60611, 60612, 60613, 60614, 60615, 60616, 60617, 60618, 60619, 60620, 60621, 60622, 60623, 60624, 60625, 60626, 60628, 60630, 60631, 60632, 60634, 60636, 60637, 60639, 60640, 60641, 60642, 60643, 60644, 60645, 60646, 60647, 60649, 60651, 60652, 60653, 60654, 60655, 60656, 60657, 60659, 60660, 60661, 60706, 60707, 60714)}}',
    coords: [
      '{{floating(-87.738031, -87.633900, 6)}}',
      '{{floating(41.826887, 41.931036, 6)}}'
      ],
    phone: '+1 {{phone()}}',
    website: 'www.{{company().toLowerCase()}}.com',
    price: '{{integer(0,4)}}',
    foodtruck: '{{bool()}}',
    veggie: '{{bool()}}',
    byob: '{{bool()}}',
    alcohol: '{{bool()}}',
    latenight: '{{bool()}}',
    outdoor: '{{bool()}}',
    image: '{{random("https://pixabay.com/static/uploads/photo/2014/10/23/18/05/burger-500054_150.jpg", "https://pixabay.com/static/uploads/photo/2015/07/01/07/06/burger-827309_150.jpg", "https://pixabay.com/static/uploads/photo/2015/07/01/07/06/burger-827310_150.jpg", "https://pixabay.com/static/uploads/photo/2015/07/01/07/06/burger-827308_150.jpg", "https://pixabay.com/static/uploads/photo/2015/10/14/13/55/burgers-987644_150.jpg", "https://pixabay.com/static/uploads/photo/2015/10/19/14/05/burger-996037_150.jpg", "https://pixabay.com/static/uploads/photo/2015/09/20/15/02/pizza-burger-948403_150.jpg", "https://pixabay.com/static/uploads/photo/2015/09/20/02/31/pizza-pocket-947899_150.jpg", "https://pixabay.com/static/uploads/photo/2015/09/22/15/42/burger-951896_150.jpg", "https://pixabay.com/static/uploads/photo/2015/07/30/18/23/burger-868145_150.jpg", "https://pixabay.com/static/uploads/photo/2015/09/18/10/11/burger-945321_150.jpg", "https://pixabay.com/static/uploads/photo/2015/10/31/12/19/burger-1015438_150.jpg", "https://pixabay.com/static/uploads/photo/2015/04/20/13/25/burger-731298_150.jpg", "https://pixabay.com/static/uploads/photo/2015/08/04/10/48/burger-874531_150.jpg", "https://pixabay.com/static/uploads/photo/2015/07/19/18/47/burger-851847_150.jpg", "https://pixabay.com/static/uploads/photo/2015/06/08/15/13/hamburger-801942_150.jpg", "https://pixabay.com/static/uploads/photo/2015/10/31/12/20/burger-1015440_150.jpg", "https://pixabay.com/static/uploads/photo/2015/09/01/03/42/food-916397_150.jpg", "https://pixabay.com/static/uploads/photo/2015/10/13/21/09/sandwich-986799_150.jpg", "https://pixabay.com/static/uploads/photo/2015/09/18/10/12/burger-945322_150.jpg")}}',

    burgers: [
      '{{repeat(1,3)}}',
      {
      name: 'The {{random("Enticing", "Heavenly", "Yummy", "Delectable", "Delicious", "Meaty", "Filling", "Thick", "Turbo", "King Kong", "Jedi Master", "Scrumtrulesant", "Scrum-dilly-omcious", "Delightful", "Sensational", "Grilled")}} {{random("Greasy", "Double", "Cheesy", "Triple", "Quadruple", "Smeared")}} {{random("Burger", "Sandwich")}}',
      description: '{{lorem(1, "sentence")}}',
      rating: '{{integer(0,4)}}',
      veggie: '{{bool()}}',
      image: '{{random( "https://pixabay.com/get/ec35b10f2df01c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e137b60c28fd1c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e137b60c29f41c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e137b60c28fc1c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e03db6092cf01c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e03cb70f2bf31c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e031b90b28f71c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e031b60721fd1c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e133b90e2cf11c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e030b00721f21c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e031b40c2af51c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e835b00a2cf7093ed95c4518b74d4195e474e1d704b0154497f2c17ba4efb0_640.jpg", "https://pixabay.com/get/ee36b00d21fc1c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e132b50a2bf51c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e130b0072cf31c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e135b0062cf61c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e03db70821fd1c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e034b70c21f31c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e835b00a2cf0013ed95c4518b74d4195e474e1d704b0154497f2c17ba4efb0_640.jpg", "https://pixabay.com/get/e031b40c2af61c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e13db8062bf41c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e132b50828f71c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ee33b1072ff71c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e134b20b28f31c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ef3db90d2bf11c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e132b50828f51c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ee3db20a2cfd1c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ec34b40c20fd1c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ef36b30b2cf31c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ee3db20a2df51c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ee30b60a2bfc1c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ee33b1072ff11c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e134b20b28f11c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ec3db80f28f01c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e137b2082af51c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ed36b90d2af71c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ed31b00a2ff31c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e031b5082af31c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ec37b60c21f71c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e13cb5082af01c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e131b4082df41c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ea30b40c2cf61c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e835b7062cf2023ed95c4518b74d4195e474e1d704b0154497f2c17ba4efb0_640.jpg", "https://pixabay.com/get/ea30b70e2ff41c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ec3cb50b2efc1c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ef35b3072cf51c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e13cb7072cf41c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ea30b00a2cf71c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ed35b30c2bf51c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ee31b60b20e90825d0471404e14f4195e075ffd41db4134395f2c27ba2_640.jpg", "https://pixabay.com/get/ea36b20e2cf41c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ec33b10b2df31c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ed36b5092dfc1c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/eb34b50e2df71c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/eb35b60d21f11c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/eb31b70729fd1c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ea30b10f21f51c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e834b1062dfc063ed95c4518b74d4195e474e1d704b0154497f2c17ba4efb0_640.jpg", "https://pixabay.com/get/e835b90e2ff4063ed95c4518b74d4195e474e1d704b0154497f2c17ba4efb0_640.jpg", "https://pixabay.com/get/e03db60d2df21c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e13cb6092af01c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ef32b7092bf11c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e030b60d2af31c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ec36b5092df21c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e835b5072ef0073ed95c4518b74d4195e474e1d704b0154497f2c17ba4efb0_640.jpg", "https://pixabay.com/get/ee37b9072df11c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ec32b50c2cf01c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ee34b20b29f41c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e03db60d2df11c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ef32b60f2df71c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ec31b90929f11c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ef37b30728fd1c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ec31b10d2bf11c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e13db2072df21c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e032b40920fc1c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ef36b2092ffc1c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e834b00e29f3033ed95c4518b74d4195e474e1d704b0154497f2c17ba4efb0_640.jpg", "https://pixabay.com/get/e13cb7072cf21c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ed32b70629f21c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e037b60828f31c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e834b00821f01c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e13cb7072bfd1c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ea30b50f2efd1c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/eb31b7072af61c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ec37b30b2ef01c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ed33b3072bf51c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ed31b40a20f51c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e132b30b2cfd1c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ee35b3062bf11c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e13cb30c20fd1c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ed31b40f29f01c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ef33b80d2df61c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ee37b10f2cfd1c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ea33b30f2cf61c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/eb30b60b2af61c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ef3db80f2bf21c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ea36b20b2af31c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/ee34b90c21fd1c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e132b50e2cf71c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg", "https://pixabay.com/get/e13cb7072cf61c2ad65a5854e74b4591e074e0c818b5144397f0c37aa5e8_640.jpg")}}',

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

    meats: {
        grassfed: '{{bool()}}',
        kobe: '{{bool()}}',
        bison: '{{bool()}}',
        angus: '{{bool()}}',
        turkey: '{{bool()}}',
        lamb: '{{bool()}}',
        elk: '{{bool()}}'
    },

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

SEARCHES
```
{
  challenges: {
    icon: '/images/dummy.png',
    imageURL: '/images/dummy.png',
    name: 'Challenges',
    description: 'Eating challenges sponsored by the restaurant.',
    defaultCriteria: {
      outdoor: '{{bool()}}',
      latenight: '{{bool()}}',
      byob: '{{bool()}}',
      alcohol: '{{bool()}}'
    }
  },
  foodtruck: {
    icon: '/images/dummy.png',
    imageURL: '/images/dummy.png',
    name: 'Foodtruck',
    description: 'Foodtrucks are mobile; bringing the food to you. They tend to frequent specific locations throughout the city.',
    defaultCriteria: {
      outdoor: '{{bool()}}',
      latenight: '{{bool()}}',
      byob: '{{bool()}}',
      alcohol: '{{bool()}}'
    }
  },
  veggie: {
    icon: '/images/dummy.png',
    imageURL: '/images/dummy.png',
    name: 'Veggie',
    description: 'Restaurants with vegetarian friendly meals.',
    defaultCriteria: {
      outdoor: '{{bool()}}',
      latenight: '{{bool()}}',
      byob: '{{bool()}}',
      alcohol: '{{bool()}}'
    }
  },
  allergies: {
    icon: '/images/dummy.png',
    imageURL: '/images/dummy.png',
    name: 'Allergies',
    description: 'Restaurants that accommodate customers that have food allergies.',
    accommodates: '{{bool()}}',
    glutenFree: '{{bool()}}',
    defaultCriteria: {
      outdoor: '{{bool()}}',
      latenight: '{{bool()}}',
      byob: '{{bool()}}',
      alcohol: '{{bool()}}'
    }
  },
  meats: {
    icon: '/images/dummy.png',
    imageURL: '/images/dummy.png',
    name: 'Meats',
    description: 'Narrow the locations based on the types of meat they offer.',
    grassfed: '{{bool()}}',
    kobe: '{{bool()}}',
    bison: '{{bool()}}',
    angus: '{{bool()}}',
    turkey: '{{bool()}}',
    lamb: '{{bool()}}',
    elk: '{{bool()}}',
    defaultCriteria: {
      outdoor: '{{bool()}}',
      latenight: '{{bool()}}',
      byob: '{{bool()}}',
      alcohol: '{{bool()}}'
    }
  },
  top: {
    icon: '/images/dummy.png',
    imageURL: '/images/dummy.png',
    name: 'Top',
    description: 'The most popular places.',
    rating: '{{integer(0,4)}}',
    defaultCriteria: {
      outdoor: '{{bool()}}',
      latenight: '{{bool()}}',
      byob: '{{bool()}}',
      alcohol: '{{bool()}}'
    }
  },  
  sides: {
    icon: '/images/dummy.png',
    imageURL: '/images/dummy.png',
    name: 'Sides',
    description: 'Narrow the locations based on the offered sides.',
    duckFries: '{{bool()}}',
    macAndCheese: '{{bool()}}',
    tots: '{{bool()}}',
    defaultCriteria: {
      outdoor: '{{bool()}}',
      latenight: '{{bool()}}',
      byob: '{{bool()}}',
      alcohol: '{{bool()}}'
    }
  },  
  cost: {
    icon: '/images/dummy.png',
    imageURL: '/images/dummy.png',
    name: 'Cost',
    description: 'Narrow the locations based on cost.',
    cost: '{{integer(1,4)}}',
    defaultCriteria: {
      outdoor: '{{bool()}}',
      latenight: '{{bool()}}',
      byob: '{{bool()}}',
      alcohol: '{{bool()}}'
    }
  }
}
```
