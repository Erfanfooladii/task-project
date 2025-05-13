import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

export const productCategories = [
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Books",
  "Toys & Games",
  "Beauty & Personal Care",
  "Sports & Outdoors",
  "Automotive",
  "Grocery",
];

export async function GET() {
  const categoriesWithDetails = productCategories.map((category) => ({
    id: faker.string.uuid(),
    name: category,
    slug: category
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    description: `Explore our wide range of ${category} products`,
    image: faker.image.urlLoremFlickr({
      category: category.split("&")[0].trim().toLowerCase(),
      width: 800,
      height: 600,
    }),
    productCount: faker.number.int({ min: 15, max: 100 }),
    featured: faker.datatype.boolean(),
  }));

  return NextResponse.json(categoriesWithDetails);
}
