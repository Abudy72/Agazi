import { fetchAllLeagues } from "@/libs/db/LeagueOps";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return fetchAllLeagues().then((leagues) => {
      return NextResponse.json(
        { data:  leagues},
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