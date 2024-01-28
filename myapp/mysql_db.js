let mysql = require('mysql2')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin@123',
    database: 'realstatedb'
})

const startConnection = () => {
    connection.connect(function (err) {
      if (err) {
        return console.error(error.message)
      }
      console.log('Connected to the Mysql Database..')
      })
}


//Get Project data from mysql database
const getProjectData = async () => {
   startConnection();
   let quary = await connection.promise().query(
     `select * from projectData;`
    )
   return quary[0];
}
const saveProjectData = async (requestBodyData) => {
  const {id,name,location,description} = requestBodyData
  let d = 1
  let value = id+d
  d = value
  startConnection();
  let query = await connection.promise().query(`
  insert into projectData (name,location,description)
  values ('${name}','${location}','${description}');
  `)
  return 'Data save successfully..'
}
const deleteProjectData = async (id) => {
  startConnection();
  let quary = await connection.promise().query(`
  delete from projectdata where id= ${id};
  `)
  return 'Data delete successfully..'
}


// Get Prodect data from mysql database
const getProdectData = async () => {
  startConnection();
  let query = await connection.promise().query(
  `select * from productData;`
  )
  return query[0];
}
const saveProductData = async (requestBodyData) => {
  const {id,projectName,flattype,flatnumber,flatsize,unitprice,parkingcharge,utiltycharge,discount,description}= requestBodyData
  startConnection();
  let query = await connection.promise().query(`
  insert into productData
  (projectName,flattype,flatnumber,flatsize,unitprice,parkingcharge,utilitycharge,discount,description)
  values
    ('${projectName}','${flattype}','${flatnumber}',${flatsize},${unitprice},${parkingcharge},${utiltycharge},${discount},'${description}');
  `)
  return 'Data save successfully..'
}
const deleteProductData = async (id) => {
  startConnection();
  let quary = await connection.promise().query(`
   delete from productData where id=${id};
  `)
  return 'Data delete successfully..'
}




const getSellData = async () => {
  startConnection();
  let query = await connection.promise().query(
  `select * from sellData;`
  )
  return query[0];
}
const saveSellData = async (requestBodyData) => {
  console.log(requestBodyData.customername)
  const {customername,projectname,productid,employename,date} = requestBodyData

  startConnection();
  let query = await connection.promise().query(`
  insert into sellData
  (customername,projectname,productid,employename,date_of)
  values ('${customername}','${projectname}','${productid}','${employename}','${date}');
  `)
  return 'Data save successfully..'
}
const deleteSellData = async (id) => {
  startConnection();
  let quary = await connection.promise().query(`
    delete from sellData where id = ${id};    
  `)
  return 'Data delete successfully..'
}

const getloginData = async () => {
  startConnection();
  let query = await connection.promise().query(
  `select * from loginData;`
  )
  return query[0];
}








module.exports = {
  getProjectData : async () => getProjectData(),
  saveProjectData: async (a) => saveProjectData(a),
  deleteProjectData: async (id) => deleteProjectData(id),

  getProdectData: async () => getProdectData(),
  saveProductData: async (a) => saveProductData(a),
  deleteProductData: async (id) => deleteProductData(id),

  getSellData: async () => getSellData(),
  saveSellData: async (a) => saveSellData(a),
  deleteSellData: async (id) => deleteSellData(id),

  getloginData: async () => getloginData()
}