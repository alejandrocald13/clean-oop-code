export default class PostTitle{
    public value: string

    constructor(value: string){
        this.isValidLengthTitle(value)
        this.value = value
    };

    isValidLengthTitle(value: string){
        if (value.length  >=  20) {
            throw new Error('Length of title is greater than 20 chars.')
        }
    }
}