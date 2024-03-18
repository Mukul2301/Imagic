import { Schema, model, models } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationType: string;
  PublicId: string;
  secureUrl: URL;
  width?: number;
  height?: number;
  config?: URL;
  transformationUrl?: URL;
  aspectRatio?: URL;
  color?: URL;
  prompt?: URL;
  author: { _id: string; firstName: string; lastName: string };
  createdAt: Date;
  updatedAt: Date;
}

const imageSchema = new Schema({
  title: { type: String, required: true },
  trsnsformationType: { type: String, required: true },
  PublicId: { type: String, required: true },
  secureUrl: { type: URL, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: URL },
  transformationUrl: { type: URL },
  aspectRatio: { type: URL },
  color: { type: URL },
  prompt: { type: URL },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", imageSchema);
export default Image;
