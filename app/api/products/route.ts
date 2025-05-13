import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";
import { productCategories } from "../categories/route";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const products = Array.from({ length: 50 }, () => {
    const selectedCategory = category
      ? category
      : faker.helpers.arrayElement(productCategories);

    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price({ min: 10, max: 1000 })),
      category: selectedCategory,
      image: faker.image.urlLoremFlickr({
        category: selectedCategory.split("&")[0].trim().toLowerCase(),
      }),
      rating: Number(faker.number.float({ min: 1, max: 5 })),
      stock: faker.number.int({ min: 0, max: 100 }),
      discount: faker.datatype.boolean()
        ? faker.number.int({ min: 5, max: 50 })
        : 0,
      brand: faker.company.name(),
      createdAt: faker.date.past({ years: 2 }).toISOString(),
      updatedAt: faker.date.recent().toISOString(),
    };
  });

  if (category) {
    const filteredProducts = products.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
    return NextResponse.json(filteredProducts);
  }

  return NextResponse.json(products);
}
