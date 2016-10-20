
module.exports = {
    louder(text) {
        return text.toUpperCase() + '!!!1one'
    },
    quieter(text) {
        return text.toLowerCase().replace(/!.*/,'')
    },
    removeWhitespaces(text) {
      return text.trim().replace(/ /g,'_')
    }
}
