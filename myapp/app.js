const express = require('express')
const app = express()
let my_sql = require('./mysql_db')
const cors = require('cors')
const bodyparser = require('body-parser')

app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json())


app.listen(8000, () => {
    console.log("Server Running at http://localhost:8000/");
})


app.get('/project', async (req,res) => {
    let data = await my_sql.getProjectData()
    res.write(JSON.stringify(data))
    res.end()
})
app.post('/project', async (req,res) => {
  let requestBodyData = req.body
  //console.log(requestBodyData)
  let data = await my_sql.saveProjectData(requestBodyData)
  res.write(JSON.stringify(data))        
  res.end();
})
app.delete('/project/:id', async (req,res) => {
  let {id} = req.params;
  console.log(id)
  let data = await my_sql.deleteProjectData(id);
  res.write(JSON.stringify(data))
  res.end();      
})


app.get('/product', async (req,res) => {
  let data = await my_sql.getProdectData();
  res.write(JSON.stringify(data))
  res.end();
})
app.post('/product', async (req,res) => {
  let requestBodyData = req.body
  console.log(requestBodyData)
  let data = await my_sql.saveProductData(requestBodyData)
  res.write(JSON.stringify(data))        
  res.end();
})
app.delete('/product/:id', async (req,res) => {
  let {id} = req.params;
  console.log(id)
  let data = await my_sql.deleteProductData(id);
  res.write(JSON.stringify(data))
  res.end();      
})



app.get('/sell', async (req,res) => {
  let data = await my_sql.getSellData();
  res.write(JSON.stringify(data))
  res.end();
})
app.post('/sell', async (req,res) => {
  let requestBodyData = req.body
  
  let data = await my_sql.saveSellData(requestBodyData);
  res.write(JSON.stringify(data))
  res.end();
})
app.delete('/sell/:id', async (req,res) => {
  let {id} = req.params;
  console.log(id)
  let data = await my_sql.deleteSellData(id)
  res.write(JSON.stringify(data))
  res.end();      
})

app.get('/login', async (req,res) => {
  let data = await my_sql.getloginData();
  res.write(JSON.stringify(data))
  res.end();
})
