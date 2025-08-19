import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function POST(request: NextRequest){

    try {
        const connectionString = 'postgresql://postgres.fvsvtllszvjinglgnyxt:PW0tzIjvPIo3TcXn@aws-1-us-east-2.pooler.supabase.com:6543/postgres'
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

            await sql `INSERT INTO public.posts (id, title, description, author) values(${data.id}, ${data.title}, ${data.description}, ${data.author});`;

            return NextResponse.json({message: 'Post is valid and save succesfully', post: data});

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