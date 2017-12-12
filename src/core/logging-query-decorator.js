function queryLogger(fn, queryName, query) {
    
        console.log(`Start reading ${queryName}`)
        console.time('start query')
    
        try {
            return fn(query)
        } catch (e) {
            console.error(`Exception throw while reading query ${queryName}  ${e.message}   ${e.type} - Time taken: ${console.timeEnd('start query')} `)
        } finally {
            console.timeEnd('start query')
        }
    
    }
    
    module.exports = {queryLogger}



