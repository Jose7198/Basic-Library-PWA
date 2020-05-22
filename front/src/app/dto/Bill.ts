export interface Bill {
    createdAt?: number
    updatedAt?: number
    id?: number
    name : string
    ruc : string
    address : string
    phoneNumber : string
    email : string
    cashier : string
    total : number
    detail? : string
}