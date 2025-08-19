import postgres from "postgres";
import Post from "./post";

export default class PostRegister{
    constructor(){}

    public async run(id: number, author: string, title: string, description: string) {
        try{
            const post = Post.create(id, title, description, author)
            await this.savePostData(post.id.value, post.author.value, post.title.value, post.description.value)

        } catch (err){
            throw err
        }
    }

    async savePostData(id: number, author: string, title: string, description: string){
        try{
            const connectionString = 'postgresql://postgres.fvsvtllszvjinglgnyxt:PW0tzIjvPIo3TcXn@aws-1-us-east-2.pooler.supabase.com:6543/postgres'
            const sql = postgres(connectionString)

            await sql `INSERT INTO public.posts (id, title, description, author) values(${id}, ${title}, ${description}, ${author});`;

        } catch (err){
            throw err
        }
    }
}