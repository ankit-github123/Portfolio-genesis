import { Schema } from "mongoose";

export const ServicesSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  caption: {
    type: String,
    trim: true,
    required: true,
  },
  serviceicon: {
    type: String,
    trim: true,
    required: true,
  },
});
