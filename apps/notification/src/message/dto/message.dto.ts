export class MessageDto {
    readonly name: string    
    readonly createdAt:Date = new Date();
    readonly data?: any
}