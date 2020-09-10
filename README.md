# Foodle: Hapi.js based RESTful API
 
A Hapi.js based RESTful API. 

### Requirements:
1. Node.js / npm package manager
2. Yarn package manager

Install Globally by,
```javascript
npm i -g yarn
```

### Instructions: 

```shell
git clone https://github.com/JaganKaartik/Foodle_Hapi_REST_API.git
cd Foodle_Hapi_REST_API
```
To install all dependencies,
```javascript
yarn run install 
``` 
To start the server,
```
yarn run dev
```
Alternatively,
```
export NODE_ENV=development 
yarn run start
```
API is served from ```http://localhost:8888```


#### API Reference

```
    GET
    /api/dish/all
    Response: Array<dish>

    /api/dish/{id}
    Response: dish

    POST
    /api/dish/add
    Body: added dish

    PUT
    /api/dish/update
    Body: updated dish

    DELETE
    /api/dish/delete/{id}
    /api/dish/delete/all
```
### Screenshots

![](https://github.com/JaganKaartik/Foodle_Hapi_REST_API/blob/master/media/get.png)
![](https://github.com/JaganKaartik/Foodle_Hapi_REST_API/blob/master/media/get_one.png)
![](https://github.com/JaganKaartik/Foodle_Hapi_REST_API/blob/master/media/post.png)
![](https://github.com/JaganKaartik/Foodle_Hapi_REST_API/blob/master/media/put.png)
![](https://github.com/JaganKaartik/Foodle_Hapi_REST_API/blob/master/media/delete.png)
