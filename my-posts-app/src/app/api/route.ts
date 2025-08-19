import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function POST(request: NextRequest){

    try {
        const connectionString = 'postgresql://postgres:PW0tzIjvPIo3TcXn@db.fvsvtllszvjinglgnyxt.supabase.co:5432/postgres'
        const sql = postgres(connectionString)

        const data = await request.json();
    
    if (data && data.id && data.title && data.description && data.author) {
        let postApproved = true

        if (typeof data.id !== "number") {
            postApproved = false
        }
        
        if (data.title.length  >=  20) {
            postApproved = false
        }

        if (data.description.length  >=  64) {
            postApproved = false
        }

        if (typeof data.author !== "string") {
            postApproved = false
        }

        if (postApproved) {

            // add logic to save data

            return NextResponse.json({message: 'Post is valid', post: data});

        } else {
            return NextResponse.json({
                error: 'Invalid post format'
            }, {status: 422});
        }

        }

    } catch (error) {
        console.error('Error saving post', error)
        return NextResponse.json({
            error: 'Failed to save post'},
            {status: 500})
    }
    
}