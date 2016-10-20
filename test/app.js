const app = require('../src/app')

describe('app', () => {

    it('should make text louder', () => {
        app.louder('hello').should.eql('HELLO!!!1one')
    })

    it('should make text quieter', () => {
        app.quieter('HELLO!!!1one').should.eql('hello')
    })

    it('should remove all whitespaces', () => {
        app.removeWhitespaces('           Hello from   the other    side    ').should.eql('Hello_from_the_other_side')
    })
})
