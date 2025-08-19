import Post from './post';
import postgres, { Sql } from 'postgres';
import PostRepository from './post-repository';

export default class PostgresPostRepository implements PostRepository{
    private readonly sql: Sql;
    
    constructor() {
        const connectionString = 'postgresql://postgres.fvsvtllszvjinglgnyxt:PW0tzIjvPIo3TcXn@aws-1-us-east-2.pooler.supabase.com:6543/postgres';
        this.sql = postgres(connectionString);
    }


    async save(post: Post){
        try{
            const id = post.id.value;
            const author = post.author.value;
            const description = post.description.value;
            const title = post.title.value;

            await this.sql `INSERT INTO public.posts (id, title, description, author) values(${id}, ${title}, ${description}, ${author});`;


        } catch (err) {
            console.error(err)
            throw new Error("Failed to save post in postgres")
        }
    }

    async get(){
        try{
            const data = await this.sql `SELECT * FROM public.posts`;

            return data;
        } catch (err){
            console.error(err)
            throw new Error('Failed to get posts in postgres')

        }
    }

    async update(post: Post){
        try{
            const id = post.id.value;
            const author = post.author.value;
            const description = post.description.value;
            const title = post.title.value;

            await this.sql `UPDATE public.posts SET author = ${author}, description = ${description}, title = ${title} WHERE id = ${id}`

        } catch (err){
            console.error(err)
            throw new Error('Failed to update post in postgres')
        }
    }
}