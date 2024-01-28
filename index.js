
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./routes/users')
const AuthRoute = require('./routes/auth')
const productRoute = require('./routes/products')
const orderrRoute = require('./routes/order')
const cartRoute = require('./routes/cart')


dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('db connection successfull')).catch((e)=>{console.log(e)})

app.use(express.json())// this lets us input json data from the user
app.use('/api/user',userRoute)
app.use('/api/auth', AuthRoute)
app.use('/api/products', productRoute)
app.use('/api/cart', cartRoute)
app.use('/api/order', orderrRoute)



app.listen(process.env.PORT || 4000,
     ()=>console.log('listining to 4000'))