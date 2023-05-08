import mongoose from 'mongoose';

export const connectDatabase = () => {
  console.log(process.env.DB_URI);
  mongoose
    .connect(process.env.DB_URI)
    .then((con) => console.log(`Database is connected at : ${con.connection.host}`))
    .catch((err) => console.log(err));
};
