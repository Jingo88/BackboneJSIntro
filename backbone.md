# Backbone

### Models

* Think ok Models as a constructor. We will call the models when we need to organize / store data. Data is stored in your controller.
* Initialize() - this method is used whenever a new instance of the model is called. It is optional. (e.g. you can stick a console log in here to know when and if the model is being called correctly). The initialize function is also a convenient place to store change events(when there are changes to a model). 
* Model.get() - this provides easy access to a model's attributes
* Model.toJSON() - returns a copy of the Model's data attributes in JSON
* Model.set() - sets a hash containing one or more attributes on the model. If these attributes alter the model you can use a "change" event on the Model as a whole or on individual attributes. .set() is considered best practice when changing models
* Model.validate() - checks the attributes for a model before setting them. Validation occurs during a .save() or .set() method. The below validation example was taken from http://addyosmani.github.io/backbone.

```
var Todo = Backbone.Model.extend({
  defaults: {
    completed: false
  },

  validate: function(attributes){
    if(attributes.title === undefined){
        return "Remember to set a title for your todo.";
    }
  },

  initialize: function(){
    console.log('This model has been initialized.');
    this.on("invalid", function(model, error){
        console.log(error);
    });
  }
});

var myTodo = new Todo();
myTodo.set('completed', true, {validate: true}); // logs: Remember to set a title for your todo.
console.log('completed: ' + myTodo.get('completed')); // completed: false
```


### Views

* Views present the logic for the presentation of the models data to the user. 
* Backbone is hardcoded with underscore.js and jQuery
* A views render method can be bound to a change event in a model

##### EL

* el - the central property of a view
* 



### Backbone unorganized class notes Below

Backbone.Model.extend(); means to inherit things from the Backbone Model

``` 
var Pet = Backbone.Model.extend();
```

going to the console you can see the pets attributes. But you have to type the attributes. 

```
var pet1 = new Pet();
pet1.set("name", "fluffy");
pet1.set("type", "hamster");
```

If you open the index.html and type pet1 into the console it will show you a bunch of weird items. The name and the type fall under attributes. You can view these in cleaner fashion by typing "pet1.attributes"

The default sync handler maps CRUD to REST like so:

* create → POST   /collection
* read → GET   /collection[/id]
* update → PUT   /collection/id
* delete → DELETE   /collection/id


###Things to understand for populating views and CRUD

* in your html you can set a script tag to "type = "text/template""
* One definite perk is you do not have to constantly call document.createElement/getElement, and the like
* el in your Backbone Extend targets an element
* initialize - 
* 'sync' - an event that gets triggered by collections. Anytime we do anything that connects to the api the syn will trigger
* render - you know what this does
* this.listenTo
* this.collection
* el.append(new Variable(this will be a single model)({model: target model name}.render().el);
* PetsView vs PetView - they are two different variables. 
* In the CreatePetView, the sync event from the PetsView will occur and it will re-render the whole thing

```
more code here
```