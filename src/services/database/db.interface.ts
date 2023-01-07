export interface DBHandlerI {
    connect: (options: any) => Promise<void>
}