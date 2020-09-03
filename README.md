# Foodle-APP :exclamation: 
 
A basic CRUD application developed to learn some fundamental concepts.

:exclamation: Needs revision

## Tools & Technology Stack

![](https://img.shields.io/badge/1.%20-React.js-blue)
![](https://img.shields.io/badge/2.%20-Redux.js-purple)
![](https://img.shields.io/badge/3.%20-Node.js-brightgreen)
![](https://img.shields.io/badge/4.%20-Hapi.js-orange)
![](https://img.shields.io/badge/5.%20-PostgreSQL-blue)
![](https://img.shields.io/badge/6.-VS%20Code%20Insiders-green)
![](https://img.shields.io/badge/7.%20-Postman-orange)

**Styles**

![](https://img.shields.io/badge/1.%20-AtlasKit-blue)
![](https://img.shields.io/badge/2.%20-Materialize-red)
![](https://img.shields.io/badge/3.%20-Semantic%20UI-green)
![](https://img.shields.io/badge/4.%20-Google%20Fonts-red)



## How to install and test this APP?

1. From ```root dir```  run ```npm run install ``` to install all the dependencies of the project as specified in the ```package.json``` files.
2. Run ```npm run foodle``` to start the application.
3. Go to ```http://localhost:3000/``` to use Foodle.

#### API Tests via Postman

By default Server runs at ```http://localhost:5000``` and client runs at ```http://localhost:3000```

* ```GET```    Display All Dishes ```http://localhost:5000/dish/```
* ```GET```    Display a specific dish ```http://localhost:5000/dish/{id}```
* ```POST```   Add a Dish ```http://localhost:5000/dish/``` and enter data in the body using JSON format.
* ```PUT```    Update a Dish ```http://localhost:5000/dish/``` and enter data in the body using JSON format.
* ```DELETE``` Delete a specific dish ```http://localhost:5000/dish/{id}```
* ```DELETE``` Delete all dishes ```http://localhost:5000/dish/```

#### API Reference

```
    GET
    /dish
    Response: Array<dish>

    /dish/{id}
    Response: dish

    POST
    /dish
    Body: added dish

    PUT
    /dish/{id}
    Body: updated dish

    DELETE
    /dish/{id}
    /dish
```
## User Interface

![](https://github.com/JaganKaartik/Foodle/blob/master/Screens/home.png)

![](https://github.com/JaganKaartik/Foodle/blob/master/Screens/login.png)

![](https://github.com/JaganKaartik/Foodle/blob/master/Screens/dash.png)

![](https://github.com/JaganKaartik/Foodle/blob/master/Screens/dash-filter.png)

![](https://github.com/JaganKaartik/Foodle/blob/master/Screens/add.png)

![](https://github.com/JaganKaartik/Foodle/blob/master/Screens/search.png)

![](https://github.com/JaganKaartik/Foodle/blob/master/Screens/oper.png)
