# Foodle: Hapi.js based RESTful API
 
A Hapi.js based RESTful API. 

### Requirements:
1. Node.js / npm package manager
2. Yarn package manager

Install Yarn globally by,
```javascript
npm i -g yarn
```

### Instructions: 

Clone the repo,
```shell
git clone https://github.com/JaganKaartik/Foodle_Hapi_REST_API.git
cd Foodle_Hapi_REST_API
```
Install all the dependencies by,
```javascript
yarn run install 
``` 
To start the server run,
```
yarn run dev
```
Alternatively you can specify the enviornment and start the server by,
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

#### GET /api/dish/all
![](https://github.com/JaganKaartik/Foodle_Hapi_REST_API/blob/master/media/get.png)
#### GET /api/dish/{id}
![](https://github.com/JaganKaartik/Foodle_Hapi_REST_API/blob/master/media/get_one.png)
#### POST /api/dish/add
![](https://github.com/JaganKaartik/Foodle_Hapi_REST_API/blob/master/media/post.png)
#### PUT /api/dish/update
![](https://github.com/JaganKaartik/Foodle_Hapi_REST_API/blob/master/media/put.png)
#### DELETE /api/dish/delete/{id}
![](https://github.com/JaganKaartik/Foodle_Hapi_REST_API/blob/master/media/delete.png)
