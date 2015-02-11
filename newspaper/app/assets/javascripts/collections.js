var ArticlesCollection = Backbone.Collection.extend({
	
	model: Article,
	url: 'http://localhost:3000/articles/'
});

var articles = new ArticlesCollection();

console.log(articles);

var article1 = new Article({
	headline: 'NYC is Murder Free for 7 Whole Days',
       content: 'Due to Winter Storm Mike Ditka, nobody was in the mood to kill another person because it was inconvenient',
       photo_url: "http://ia.media-imdb.com/images/M/MV5BMjIzOTA0OTQyN15BMl5BanBnXkFtZTcwMjE1OTIwMw@@._V1_SY317_CR5,0,214,317_AL_.jpg",
       author_id: 1
});

console.log(article1);

article1.set({content: "We are really nice people, I swear!"});

console.log(article1.attributes.content);




// var j5 = new Pet({name: 'number 5', type: 'robot'});
// console.log(j5.attributes.name);

// //create sees that it does not have an id, and makes an id for Johnny 5
// //if there is no id assigned to it, it sends out a POST request to create the new id
// pets.create(j5, {
//   success: function(response) {
//     j5.set('id', response.toJSON().id);
//     // j5.set({name: 'Johnny 5'});
//     // j5.save();
//   }
// });

// var little_moe = new Pet({name: 'Little Moe', type: 'frog'});
// pets.create(little_moe, {
//   success: function(response) {
//     little_moe.set('id', response.toJSON().id);
//     console.log(little_moe.toJSON())
//     little_moe.destroy();
//   }
// });

// pets.fetch()
// console.log(pets)

// // var PetsCollection = Backbone.Collection.extend({
// // 	model : Pet

// // });

// // var pets = new PetsCollection(pet1);
// // pets.add(pet2);
// // console.log(pets);

// // //the .set method will remove and replace all of your collections
// // // pets.set(pet3);

// // //removes a pet
// // pets.remove(pet2);

// // //quick and easy way to remove all pets from your collection
// // pets.reset();

// // //add multiple pets at once
// // pets.add([pet2, pet3]);
// // console.log(pets)
// // console.log(pets.length);

// // //you can also add manually
// // //however it is not defined as a variable, there is no "pet4". 
// // pets.add({name:"little Moe", type:"frog", id:4})

// // console.log(pets.get(2));
// // console.log(pets.get(2).attributes.name);
// // console.log(pets.get(2)['cid']);

// // pets.on("add", function(pet){
// // 	console.log("there's a new " + pet.get('type') + ' in town named ' + pet.get('name'));
// // });

// // pets.add({name:"frick", type:"fish", id:5});

// // //add an event listener to log "name changed" whenever a name is changed

// // // pets.on("change:name", function(pet){
// // // 	console.log("Pets has changed their name")
// // // 	console.log("HELLO")
// // // })

// // // pet1.set({name: "Ralph"});

// // // console.log("GOODBYE");
// // console.log("BLAH BLAH BLAH")
// // //
// // pets.on("change:name", function(){
// //     console.log("Your pet has been changed to ")
// // })

// // pet1.set({name: "Ralph"})
// // pet1.set({type: "Dog"})



// var PetsCollection = Backbone.Collection.extend({
//     model: Pet
// })

// var pets = new PetsCollection(pet1);
// pets.add(pet2)
// console.log(pets)
// pets.remove(pet2)
// console.log(pets.length)

// pets.add([pet2, pet3])
// console.log(pets)

// //this adds a pet but will not set it to a variable name
// pets.add({name:"Little Moe", type: "frog", id: 4})
// console.log(pets)


// console.log(pets.get(4))
// console.log(pets.get(2)['attributes'].name)
// console.log(pets.get(2).attributes.name)

// //cid = client id
// // a client id is assigned by backbone as they are created.
// console.log(pets.get(2)['cid'])
// console.log(pets.get(2).cid)

// // // removes all pets
// // pets.reset()
// // console.log(pets)

// //this replaces everything with pet 3
// //pets.set(pet3)


// pets.on("add", function(pet){
//     console.log("There's a new " + pet.get('type') + " in town named " + pet.get('name'))
// })
// pets.add({name: "Frick", type: "Goldfish", id: 5})


// pets.on("change:name", function(pet){
//     console.log("Your pet has been changed to " + pet.get('name'))
// })

// pet1.set({name: "Ralph"})
// pet1.set({type: "Dog"})

// console.log(pets)


// console.log("ahahhahahahhahahahhah")

// console.log(pets)
// console.log(_.map(pets.models, function(pet){  return pet.attributes}))
// console.log(_.pluck(pets.models, "attributes"))
// console.log(_.each(pets.models, function(each){ console.log(each.attributes)}))
// console.log(_.indexOf(["Tiffany", "Jason", "Karl"], "Jason"))
// console.log(_.some([pet1.location, pet2.location]))