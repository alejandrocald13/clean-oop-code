import InMemoryPostRepository from "@/utils/in-memory-post-repository";
import PostRegister from "@/utils/post-register";
import PostSearcher from "@/utils/post-searcher";
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

export async function GET() {
    try{
        const repository = new PostgresPostRepository()

        const get = new PostSearcher(repository);

        const data = await get.run();

        return NextResponse.json(
            {message: 'Posts getting correctly',
                data: data
            },
        )

    } catch (err){
        console.error('Error getting posts', err)
        return NextResponse.json(
            {error: 'Failed to get posts'},
            {status: 500})

    }
    
}