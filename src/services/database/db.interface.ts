export interface DBHandlerI {
    connect: (options: any) => Promise<void>
}

export abstract class DBModelI {
    static load: () => Promise<void>
}