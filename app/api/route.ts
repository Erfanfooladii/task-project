import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

export async function GET() {
  const employees = Array.from({ length: 50 }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    company: faker.company.name(),
    address: faker.location.streetAddress(),
    profileImage: faker.image.avatar(),
    information: faker.lorem.paragraphs(),
    startDate: faker.date.past({ years: 10 }).toISOString(),
    image: faker.image.url(),
  }));

  return NextResponse.json(employees);
}
