import { Schema, model, models } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  email: string;
  photo: string;
  username: string;
  firstName: string;
  lastName: string;
  planId: number;
  creditBalance: number;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String },
  photo: { type: String },
  lastName: { type: String },
  planId: { type: Number, default: 1 },
  creditBalance: { type: Number, default: 10 },
});

const Image = models?.Image || model("User", UserSchema);
export default Image;
