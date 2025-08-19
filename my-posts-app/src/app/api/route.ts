import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";


export async function POST(request: NextRequest){

    try {
        const data = await request.json();

        isValidPost(data);

        await savePostData(data);

        return NextResponse.json(
            {message: 'Post Saved Succesfully'})
    
    } catch (error) {
        console.error('Error saving post', error)
        return NextResponse.json({
            error: 'Failed to save post'},
            {status: 500})
    }
    
}

function isValidPost(data: any){
    try{
        if (data && data.id && data.title && data.description && data.author) {

            if (typeof data.id !== "number") {
                throw new TypeError('Type of id is not number')
            }
            
            if (data.title.length  >=  20) {
                throw new Error('Length of title is greater than 20 chars.')
            }

            if (data.description.length  >=  64) {
                throw new Error('Length of description is greater than 64 chars.')
            }

            if (typeof data.author !== "string") {
                throw new TypeError('Type of id is not number')
            }
        } else{
            throw new Error("Invalid empty or wrong fields")
        }

        return NextResponse.json({message: 'Post is valid', post: data});

    } catch (err) {
            console.error(err)
            return NextResponse.json({
                error: 'Invalid post format'
            }, {status: 422});
    }

}

async function savePostData(data: any) {
    try{
        const connectionString = 'postgresql://postgres.fvsvtllszvjinglgnyxt:PW0tzIjvPIo3TcXn@aws-1-us-east-2.pooler.supabase.com:6543/postgres'
        const sql = postgres(connectionString)

        await sql `INSERT INTO public.posts (id, title, description, author) values(${data.id}, ${data.title}, ${data.description}, ${data.author});`;

    } catch (err){
        throw err
    }
}    