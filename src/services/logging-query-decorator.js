function queryLogger(fn, queryName) {

    return async () => {
        console.log(`Start reading ${queryName}`)
        console.time('Time taken for query')
        try {
            const res = await fn()
            console.timeEnd('Time taken for query')
            return res
        } catch (e) {
            console.error(`Exception throw while reading query ${queryName}  ${e.message}   ${e.type} `)
            console.timeEnd('Time taken for query')
            throw e
        }
    }
}

module.exports = { queryLogger }

