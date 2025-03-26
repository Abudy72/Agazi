
import { eq} from "drizzle-orm";
import { db } from "./connection";
import { leagues } from "./schemas/leagues";
import { divisions } from "./schemas/divisions";


export async function fetchAllLeagues() {
    return await db.select().from(leagues).execute();
}

export async function fetchDivisionByName(divison_name: string) {
    return await db.select().from(divisions)
        .where(eq(divisions.division_name, divison_name))
        .execute();
}