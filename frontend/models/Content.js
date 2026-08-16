import mongoose from "mongoose";

const statSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    value: { type: String, required: true },
    label: { type: String, required: true },
    description: { type: String, default: "" }
  },
  { _id: false }
);

const heroSchema = new mongoose.Schema(
  {
    headline: { type: String, required: true },
    subtitle: { type: String, required: true },
    primaryCta: { type: String, required: true },
    secondaryCta: { type: String, required: true }
  },
  { _id: false }
);

const contentSchema = new mongoose.Schema(
  {
    hero: { type: heroSchema, required: true },
    stats: { type: [statSchema], required: true }
  },
  { timestamps: true }
);

const Content = mongoose.model("Content", contentSchema);

export default Content;
