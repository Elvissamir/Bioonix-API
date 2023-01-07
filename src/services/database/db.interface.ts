export interface DBHandlerI {
    connect: () => Promise<void>
}