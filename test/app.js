const app = require('../src/app')

describe('app', () => {

    it('should make text louder', () => {
        app.louder('hello').should.eql("HELLO!!!1one")
    })

})
