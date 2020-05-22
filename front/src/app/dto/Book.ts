import { Author } from './Author';

export interface Book {
    createdAt?: number
    updatedAt?: number
    id?: number
    icbn : number
    name : string
    pageNumber : number
    editorialName : string
    publicationDate: string
    edition : number
    author_FK? : number | Author | any
}