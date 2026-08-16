import mongoose from "mongoose";
import dotenv from "dotenv";
import Content from "../models/Content.js";

dotenv.config();

const initialContent = {
  hero: {
    headline: "Transforming Global Enterprises with Next-Gen Digital Solutions",
    subtitle: "Eminenture delivers tech-driven business process management, data analytics, and automation to power Fortune 500 growth.",
    primaryCta: "Explore Enterprise Solutions",
    secondaryCta: "Schedule Consultation"
  },
  stats: [
    {
      id: "1",
      value: "500+",
      label: "Global Enterprise Clients",
      description: "Trusted by Fortune 500 leaders worldwide"
    },
    {
      id: "2",
      value: "99.8%",
      label: "SLA Accuracy Rate",
      description: "Delivering unmatched process reliability"
    },
    {
      id: "3",
      value: "15M+",
      label: "Transactions Processed Daily",
      description: "Scalable cloud & AI infrastructure"
    },
    {
      id: "4",
      value: "24/7",
      label: "Global Operations Center",
      description: "Continuous support across timezones"
    }
  ]
};

const seedData = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000
    });

    const existingContent = await Content.findOne();
    if (existingContent && existingContent.hero && existingContent.hero.headline) {
      console.log("Content already exists in database. Skipping seed.");
      await mongoose.disconnect();
      process.exit(0);
    }

    await Content.deleteMany({});
    await Content.create(initialContent);
    console.log("Initial content seeded successfully.");

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("Error seeding content:", error.message);
    process.exit(1);
  }
};

seedData();
