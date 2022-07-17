  const express = require('express');
  const app = express();

  const loginRouter =require("./Routes/logIn_Route")
  const usersRouter = require("./Routes/users_routes");
  const booksRoutes=  require('./Routes/books_routes');
  const categoriesRouters = require("./Routes/categories_routes");
  const writersRouter = require("./Routes/writers_routes");
  const promotionsRouter = require("./Routes/promotions_router");
  // const autherizationsRouter = require("./Routes/autherizations_routes");
  const ordersRouter = require("./Routes/orders_routes");
  const reviewsRouter = require("./Routes/reviews_routes");
  const cartsRouters = require("./Routes/carts_routes");
  const wishListRouters = require("./Routes/wishLists_routes");

  app.use((req,res,next)=>{
    // * : no matter which domain is dsending the request is allowed to access our resources
    res.setHeader('Access-Control-Allow-Origin', '*');
    // the incoming request may have these headers
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type, Accept')
    // the incoming METHODS
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,PUT,DELETE,OPTIONS')

    next();
  })

  app.use(express.json())
  app.use(express.urlencoded({extended:true}))

  app.use(loginRouter)
  app.use(usersRouter);
  app.use(booksRoutes);
  app.use(categoriesRouters);
  app.use(writersRouter);
  app.use(promotionsRouter);
  // app.use(autherizationsRouter);
  app.use(ordersRouter);
  app.use(reviewsRouter);
  app.use(cartsRouters);
  app.use(wishListRouters);


  //not found response 
  app.use((req,res)=>{
    res.status(404).send("NOT FOUND")
  })

  //catch all errors
  app.use((err,req,res,next)=>{
    res.status(err.status||500).send({message:"err: "+err.message})
  })

  module.exports=app;