import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
const useSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});
User.plugin(passportLocalMongoose);
const User = mongoose.model("User", User);
export default User;
