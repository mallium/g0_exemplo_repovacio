import { NextResponse } from "next/server";

const data = {
  version: 1.0,
  cartas: [
    { nombre: "pikachu", tipo: "electricidad", poder: 4 },
    { nombre: "bulbasour", tipo: "planta", poder: 3 },
  ],
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  return NextResponse.json(token == "ksgfkjwgfhdvhdshviea83y4" ? data : {});
}
