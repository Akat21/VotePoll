export interface type{
    s: String
}

export interface MongoDBResponse{
    acknowledged: boolean,
    insertedId: string
}

export interface Poll{
    question: string,
    answers: Answers[]
}

export interface Answers{
    name: string,
    count: number
}