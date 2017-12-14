function eventHandlerLogger(fn, eventHandlerName) {
    
        return async () => {
            console.log(`Start handling event:${eventHandlerName}`)
            console.time('Time taken for handling event')
            try {
                const res = await fn()
                console.timeEnd('Time taken for handling event')
                return res
            } catch (e) {
                console.error(`Exception thrown while handling event ${eventHandlerName}  ${e.message}   ${e.type} `)
                console.timeEnd('Time taken for handling event')
                throw e
            }
        }
    }
    
    module.exports = { eventHandlerLogger }
    