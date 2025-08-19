export default class PostDescription{
    public value: string

    constructor(value: string){
        this.isValidLengthTitle(value)
        this.value = value
    };

    isValidLengthTitle(value: string){
        if (value.length  >=  64) {
            throw new Error('Length of description is greater than 64 chars.')
        }
    }
}