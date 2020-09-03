const apiHandler = require("../handlers");
const Joi = require("joi");

module.exports = [
  {
    method: "GET",
    path: "/api/callback",
    config: {
      auth: "github",
      handler: (request, h) => {
        if (request.auth.isAuthenticated) {
          const user = request.auth.credentials.profile;
          request.cookieAuth.set({ user: user });
          return h.redirect('/home')
        }
      }
    }
  },
  {
    method: "GET",
    path: "/auth/github",
    config: {
      auth: "github"
    },
    handler: () => {
      return { "passed": "true" }
    }
  },
  {
    method: "GET",
    path: "/home",
    config: {
      auth: {
        strategy: "session",
        mode: "try"
      }
    },
    handler: () => {
      return { message: "success" };
    }
  },
  {
    method: "GET",
    path: "/auth/logout",
    config: {
      auth: false,
      handler: (request, h) => {
        request.cookieAuth.clear();
        return ("<h1>Thanks for using our app.</h1>");
      }
    }
  },
  {
    method: "GET",
    path: "/",
    config: {
      auth: false,
      handler: (request, h) => {
        return h.redirect("/auth/login");
      }
    }
  },
  {
    method: `GET`,
    path: `/api/user/{id}`,
    handler: apiHandler.displayUser,
    config: {
      // auth: "session",
      validate: {
        params: Joi.object({
          id: Joi.number().integer()
        })
      }
    }
  },
  {
    method: `GET`,
    path: `/api/dish/all`,
    // config: { auth: "session" },
    handler: apiHandler.displayAllDish
  },
  {
    method: `GET`,
    path: `/api/dish/{id}`,
    handler: apiHandler.displayDish,
    config: {
      auth: "session",
      validate: {
        params: Joi.object({
          id: Joi.number().integer()
        })
      }
    }
  },
  {
    method: `POST`,
    path: `/api/dish/add`,
    handler: apiHandler.addDish,
    config: {
      auth: "session",
      validate: {
        payload: Joi.object({
          name: Joi.string().required(),
          type: Joi.string().alphanum().required(),
          price: Joi.string().required()
        })
      }
    }
  },
  {
    method: `PUT`,
    path: `/api/dish/update`,
    handler: apiHandler.updateDish,
    config: {
      auth: "session",
      validate: {
        payload: Joi.object({
          name: Joi.string().required(),
          price: Joi.string().required()
        })
      }
    }
  },
  {
    method: "DELETE",
    path: "/api/dish/delete/{id}",
    handler: apiHandler.deleteDish,
    config: {
      auth: "session",
      validate: {
        params: Joi.object({
          id: Joi.number().integer()
        })
      }
    }
  },
  {
    method: "DELETE",
    path: "/api/dish/delete/all",
    config: { auth: "session" },
    handler: apiHandler.deleteAll
  },
  {
    method: "GET",
    path: "/error",
    config: {
      auth: false
    },
    handler: (request, h) => {
      return { 'message': 'Error' };
    }
  }
]

