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


