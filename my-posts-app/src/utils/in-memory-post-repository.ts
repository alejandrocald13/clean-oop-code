import Post from "./post";
import PostRepository from "./post-repository";

export default class InMemoryPostRepository implements PostRepository{
    private posts: Array<{id: number, author: string, description: string, title: string}>;

    constructor(){
        this.posts = [];
    }

    public async save(post: Post): Promise<void>{
        const id = post.id.value;
        const author = post.author.value;
        const description = post.description.value;
        const title = post.title.value;

        this.posts.push({id: id, author: author, description: description, title: title});
    }

    public async get(){
        return this.posts
    }

    public async update(post: Post): Promise<void>{
    }

    public async delete(id: number): Promise<void>{
        
    }
}