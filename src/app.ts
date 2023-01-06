import express, { Application, NextFunction, Request, Response, Router } from 'express'
import { Server } from 'http'
import 'express-async-errors'

interface AppI {
    server: Server | null
    start: () => Server 
    close: () => void
}

interface AppParams {
    routes: Router
    middlewareList: any[]
    errorMiddleware: (err: Error, req: Request, res: Response, next: NextFunction) => Promise<any>
}

class App implements AppI {
    private readonly app: Application
    private readonly port: number | string 
    private readonly _server: Server | null

    constructor({ routes, middlewareList, errorMiddleware }: AppParams) {
        this.app = express()
        this.loadMiddleware(middlewareList)
        this.loadRoutes(routes)
        this.loadErrorMiddleware(errorMiddleware)

        this.port = environment.getValue(`${environment.envType}_PORT`) || 3002
        this._server = null
    }

    private loadMiddleware(middlewareList: any[]) {
        middlewareList.forEach(middleware => this.app.use(middleware))
    }

    private loadRoutes(routes: Router) {
        this.app.use(routes)
    }

    private loadErrorMiddleware(errorMiddleware: (err: Error, req: Request, res: Response, next: NextFunction) => Promise<any>) {
        this.app.use(errorMiddleware as any)
    }

    start() {
        const server = this.app.listen(this.port, () => {
            if (environment.envType !== 'TEST') 
                Logger.info(`SERVER: listening to port:', ${this.port}`)
        })

        return server
    }

    close() {
        if (this._server) this._server.close()
    }

    get server() {
        return this._server
    }
}

export default App