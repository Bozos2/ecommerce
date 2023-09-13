import { Schema, model, models } from "mongoose";
import mongoose from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid email address",
    ],
  },
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    minLength: [5, "Full name should be atleast 5 characters long"],
    maxLength: [30, "Full name should be less than 30 characters"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
  },
});

const User = models.User || mongoose.model("User", UserSchema);

export default User;
