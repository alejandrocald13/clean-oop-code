import PostAuthor from "./post-author";
import PostId from "./post-id";
import PostTitle from "./post-title";
import PostDescription from "./post-description";

export default class Post{
    public id: PostId
    public author: PostAuthor
    public title: PostTitle
    public description: PostDescription

    
    constructor(id: PostId, title: PostTitle, description: PostDescription, author: PostAuthor) {
        this.id = id;

        this.title = title;

        this.description = description;

        this.author = author;
    }

    public static create(id: number, title: string, description: string, author: string): Post {
        const posts = new Post(
            new PostId(id),
            new PostTitle(title),
            new PostDescription(description),
            new PostAuthor(author)
            
        );

        return posts;
    }
}