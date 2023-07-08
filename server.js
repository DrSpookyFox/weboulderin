if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const WEATHER_API= process.env.WEATHER_API
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (req,res) =>{

})

app.listen(3000, () => {
    console.log('Server Started')
  })

