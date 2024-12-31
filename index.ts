import express from 'express';
import photoRoutes from "./src/routes/photoRoutes"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//routes
app.use("/api" ,photoRoutes )


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
