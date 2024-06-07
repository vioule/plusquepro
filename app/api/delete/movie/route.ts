import Movie from "@/models/Movie";
import { NextRequest, NextResponse } from "next/server";
import { JWT_SECRET } from "@/lib/constant";
import * as jose from "jose";
import { JWTPayload } from "@/middleware";

export async function DELETE(request: NextRequest) {
  try {
    const jwt = request.cookies.get("jwt");
    if (jwt && jwt.value) {
      try {
        //verify user
        await jose.jwtVerify<JWTPayload>(jwt.value, JWT_SECRET);

        const { id } = await request.json();
        await Movie.deleteOne({ id });
        return NextResponse.json({ success: true });
      } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
      }
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
