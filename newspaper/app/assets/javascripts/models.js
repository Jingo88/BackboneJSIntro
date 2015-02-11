var Article = Backbone.Model.extend({

   defaults: {
       headline: 'NYC is Murder Free for 7 Whole Days',
       content: 'Due to Winter Storm Mike Ditka, nobody was in the mood to kill another person because it was inconvenient',
       photo_url: "http://ia.media-imdb.com/images/M/MV5BMjIzOTA0OTQyN15BMl5BanBnXkFtZTcwMjE1OTIwMw@@._V1_SY317_CR5,0,214,317_AL_.jpg",
       author_id: 1
   },

   initialize: function(){
       console.log("A new article has been written");
       // a heads up on any change of state
       this.on('change', function(){
           console.log("STOP THE PRESSES!");
       });
       this.on('change:content', function(){
           console.log('Who let that copy through?');
       });
       this.on("invalid", function(model, error){
           console.log(error);
       });
   },

   validate: function(attributes){

     if (attributes.author === undefined){
         return "Authors, unlike pants, are optional";
     } if (attributes.content === undefined){
         return "Content, unlike pants, is not optional.";
     } if (attributes.headline === undefined){
         return "Headlines, unlike pants, are not optional.";
     } if (http(attributes.photo_url) != "http://") {
       return ("Your image url is incorrect, idiot.");
     }
   }

});

var newArticle = new Article({
 author: "Peter Parker",
 headline: "Spiders attack!",
 content: "After spiders killed my parents, I decided to become a crime fighter",
 photo_url: "http://img3.wikia.nocookie.net/__cb20100419210629/marvel_dc/images/1/14/Superman_0002.jpg (28KB)"
}, {validate:true})

function http(address) {
 return address.substring(0, 7);
};

