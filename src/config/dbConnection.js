import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:S4f3h0us3!@cluster0.0znhhkc.mongodb.net/cadastro-node");
mongoose.set('strictQuery', true);

let connection = mongoose.connection;

export default connection;