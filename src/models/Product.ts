import { Schema } from "mongoose";
import mongoose from "mongoose";


const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      
    },
  },
  {
    timestamps: true,
  }
);

export const Product =
  mongoose.models.product || mongoose.model("product", productSchema);
