export default class PostId{
    public value: number

    constructor(value: number){
        this.isValidTypeId(value)
        this.value = value
    };

    isValidTypeId(value: number){
        if (typeof value !== "number"){
            throw new TypeError("Id type not valid")
        }
    }
}