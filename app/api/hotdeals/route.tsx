import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";
import { productCategories } from "../categories/route";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const hotdeals = Array.from({ length: 15 }, () => {
    const selectedCategory = category
      ? category
      : faker.helpers.arrayElement(productCategories);
    const originalPrice = Number(faker.commerce.price({ min: 10, max: 1000 }));
    const hasDiscount = faker.datatype.boolean({ probability: 0.7 });
    const discountPercentage = hasDiscount
      ? faker.number.int({ min: 5, max: 50 })
      : 0;
    const discountedPrice = originalPrice * (1 - discountPercentage / 100);

    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: originalPrice,
      discount: {
        percentage: discountPercentage,
        discountedPrice: Number(discountedPrice.toFixed(2)),
        hasDiscount: hasDiscount,
      },
      category: selectedCategory,
      image: faker.image.urlLoremFlickr({
        category: selectedCategory.split("&")[0].trim().toLowerCase(),
      }),
      rating: Number(faker.number.float({ min: 1, max: 5 })),
      stock: faker.number.int({ min: 0, max: 100 }),
    };
  });

  if (category) {
    const filteredProducts = hotdeals.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
    return NextResponse.json(filteredProducts);
  }

  return NextResponse.json(hotdeals);
}
