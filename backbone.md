# Backbone

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