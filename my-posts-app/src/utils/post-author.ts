export default class PostAuthor{
    public value: string

    constructor(value: string){
        this.isValidTypeAuthor(value)
        this.value = value
    };

    isValidTypeAuthor(value: string){
        if (typeof value !== "string"){
            throw new TypeError("Author type not valid")
        }
    }
}