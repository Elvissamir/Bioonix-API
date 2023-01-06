const addProcessEvents = () => {
    process.on('uncaughtException', async (err: Error) => {
        console.log('uncaught', err)
    
        process.exit(1)
    })
    
    process.on('unhandledRejection', (reason: Error) => {
        console.log('unhandled', reason)
        throw reason
    })
}

export default addProcessEvents 