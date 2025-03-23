import { saveMatch } from "@/libs/business/SaveMatch";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    return saveMatch(body).then(() => {
      return NextResponse.json(
        { message: "Data Recieved and will be processed." },
        { status: 200 }
      );
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
