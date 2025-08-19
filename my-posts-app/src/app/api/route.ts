import InMemoryPostRepository from "@/utils/in-memory-post-repository";
import PostRegister from "@/utils/post-register";
import PostgresPostRepository from "@/utils/postgres-post-repository";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){

    try {
        const data = await request.json();

        const repository = new PostgresPostRepository();

        // const repository2 = new InMemoryPostRepository();

        const register = new PostRegister(repository);

        await register.run(data.id, data.author, data.title, data.description)


        return NextResponse.json(
            {message: 'Post Saved Succesfully'})
    
    } catch (error) {
        console.error('Error saving post', error)
        return NextResponse.json({
            error: 'Failed to save post'},
            {status: 500})
    }
    
}