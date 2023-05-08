import { connectDatabase } from "./config/database.js";
import app from "./app.js";

connectDatabase();
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
