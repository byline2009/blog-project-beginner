import { NextResponse } from "next/server";

export async function GET() {
  console.log("env", process.env.API_URL)
  return NextResponse.json({ message: "Hello - GET" });
}
