import { createLeague, fetchAllLeagues, fetchLeagueById, updateLeague } from "@/libs/db/LeagueOps";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        
        if (!body.league_name || ! body.current_season) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        await createLeague({
            league_id: body.league_id,
            league_name: body.league_name,
            current_season: body.current_season,
        });
        return NextResponse.json({ message: "League created successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error creating league:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// Update a league's season.
export async function PATCH(req: NextRequest) {
    try {
        const body = await req.json();
        
        if (!body.league_id) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        await fetchLeagueById(body.league_id).then(res => {
            updateLeague(
                res[0].league_id,
                {current_season:  res[0].current_season + 1}
            )
        })

        return NextResponse.json({ message: "Season updated sucessfully." }, { status: 201 });
    } catch (error) {
        console.error("Error updating season:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// Get all leagues
export async function GET() {
    try {
        const data = await fetchAllLeagues();
        return NextResponse.json({ message: `${data.length} leagues retrieved`, data: data }, { status: 200 },);
    } catch (error) {
        console.error("Error creating league:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}