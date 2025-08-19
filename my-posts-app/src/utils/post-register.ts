import Post from "./post";
import PostRepository from "./post-repository";

export default class PostRegister{
    private readonly repository: PostRepository

    constructor(repository: PostRepository){
        this.repository = repository
    }

    public async run(id: number, author: string, title: string, description: string) {
        try{
            const post = Post.create(id, title, description, author)

            await this.repository.save(post);

        } catch (err){
            throw err
        }
    }
}