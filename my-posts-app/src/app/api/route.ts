import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
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
            return NextResponse.json({message: 'Post is valid', post: data});
        } else {
            return NextResponse.json({
                error: 'Invalid post format'
            }, {status: 422});
        }

    }
    return NextResponse.json({
        data
    })
}