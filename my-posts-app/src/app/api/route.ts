import PostRegister from "@/utils/post-register";
import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";


export async function POST(request: NextRequest){

    try {
        const data = await request.json();

        const registar = new PostRegister();

        await registar.run(data.id, data.author, data.title, data.description)

        return NextResponse.json(
            {message: 'Post Saved Succesfully'})
    
    } catch (error) {
        console.error('Error saving post', error)
        return NextResponse.json({
            error: 'Failed to save post'},
            {status: 500})
    }
    
}