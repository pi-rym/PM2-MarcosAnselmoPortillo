const app = require("./src/server");
const dbConnection = require("./src/config/dbConnection");
require("dotenv").config();

dbConnection()
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(
        `Server is listening on port ${"http://localhost:" + process.env.PORT}`
      )
    );
  })
  .catch((err) =>
    console.log("tenemos problemas con la conexión a la BD", err.message)
  );
