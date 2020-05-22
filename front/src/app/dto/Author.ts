export interface Author {
    createdAt?: number
    updatedAt?: number
    id?: number
    names : string
    lastNames : string
    birthDate : string
    numberBooks : number
    ecuatorian : boolean
    books? : any[]
}