import mongoose from "mongoose";
// import { ENV_TARGET } from "./constants";
declare global {
  var mongoose: any; // This must be a `var` and not a `let / const`
}

const DATABASE_URI = `mongodb://${process.env.MONGO_APP_USERNAME}:${process.env.MONGO_APP_PASSWORD}@plusquepro-mongodb-container:27017/${process.env.MONGO_DATABASE}?authSource=${process.env.MONGO_DATABASE}`;
// const DATABASE_URI = DATABASE_URIS[ENV_TARGET];

// if (!DATABASE_URI) {
//   throw new Error(
//     "Please define the DATABASE_URI_DEVELOPMENT, DATABASE_URI_STAGING and DATABASE_URI_PRODUCTION environment variables inside .env"
//   );
// }

console.log(DATABASE_URI);

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(DATABASE_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
