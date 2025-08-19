import postgres from "postgres";

export default class PostRegister{
    constructor(){}

    public async run(id: number, author: string, title: string, description: string) {
        try{
            this.isValidPost(id, author, title, description);
            this.savePostData(id, author, title, description);
        } catch (err){
            throw err
        }
    }

    isValidPost(id: number, author: string, title: string, description: string){
        try{
            if (id && title && description && author) {
    
                if (typeof id !== "number") {
                    throw new TypeError('Type of id is not number')
                }
                
                if (title.length  >=  20) {
                    throw new Error('Length of title is greater than 20 chars.')
                }
    
                if (description.length  >=  64) {
                    throw new Error('Length of description is greater than 64 chars.')
                }
    
                if (typeof author !== "string") {
                    throw new TypeError('Type of id is not number')
                }
            } else{
                throw new Error("Invalid empty or wrong fields")
            }
        } catch (err) {
            console.error(err)
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