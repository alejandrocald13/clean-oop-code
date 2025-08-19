import PostRepository from "./post-repository";

// CASO DE USO (REGISTRAR POST)

export default class PostDelete{
    private readonly repository: PostRepository

    constructor(repository: PostRepository){
        this.repository = repository
    }

    public async run(id: number) {
        try{

            await this.repository.delete(id);

        } catch (err){
            throw err
        }
    }
}