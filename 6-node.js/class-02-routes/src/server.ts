import express from "express"
import "dotenv"

const app = express();
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`);

})