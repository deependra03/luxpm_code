const Development = {
    USER: "root",
    PASSWORD: "",
};

const Production = {
    USER: "admin",
    PASSWORD: "",
}

module.exports = {
    USER: "root",
    PASSWORD: "",
    HOST: "localhost",
    DB: "singh",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
}