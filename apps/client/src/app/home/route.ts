import ConnectDB, { User } from "db";
import { NextResponse } from "next/server";

ConnectDB();

export function GET() {
  return NextResponse.json({ message: "hi from get method" });
}

export async function POST() {
  const email = "asdasdsa";
  const password = "passsword";

  const newUser = new User({ email: email, password: password });
  if (!newUser) {
    return NextResponse.json({ message: "error saving user" }, { status: 403 });
  }
  await newUser.save();

  return NextResponse.json({ message: "user saved" }, { status: 211 });
}
