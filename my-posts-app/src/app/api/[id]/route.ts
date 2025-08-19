import PostgresPostRepository from "@/utils/postgres-post-repository";
import PostUpdate from "@/utils/post-updater";
import { NextRequest, NextResponse } from "next/server";


export async function PUT(request: NextRequest, {params} : {params: {id: string}}){

    try {
        const data = await request.json();

        const repository = new PostgresPostRepository();

        // const repository2 = new InMemoryPostRepository();

        const updater = new PostUpdate(repository);

        await updater.run(Number(params.id), data.author, data.title, data.description)


        return NextResponse.json(
            {message: 'Post Updated Succesfully'})
    
    } catch (error) {
        console.error('Error updating post', error)
        return NextResponse.json({
            error: 'Failed to update post'},
            {status: 500})
    }
}