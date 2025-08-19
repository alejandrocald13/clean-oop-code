import PostRepository from "./post-repository";

export default class PostSearcher{
    private readonly repository: PostRepository

    constructor(repository: PostRepository){
        this.repository = repository
    }

    public async run(){
        try{
            const result = await this.repository.get();

            return result;
        } catch (err){
            throw err
        }
    }
}