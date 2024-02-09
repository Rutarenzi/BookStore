import Keys from "../../keys"


const {
PORT,
NODE_ENV,
DEV_DATABASE,
DATABASE_HOST,
DATABASE_PASSWORD,
DATABASE_PORT,
DATABASE_USER,
} = Keys

module.exports ={ 
  development: {
    username: DATABASE_USER,
    database: DEV_DATABASE,
    password: DATABASE_PASSWORD,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    ssl:true,    
    dialect: "postgres",
    logging: false,
    protocol: "postgres",
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false,
    //   },
    // },
  
  },
}