const jsdom = require("jsdom").JSDOM
const request = require('request-promise')
const {Script} = require('vm')

const Parser = {
  async parse (url) {
    try {
      const dom = await jsdom.fromURL(url, {
        includeNodeLocations: true,
        storageQuota: 90000000,
        runScripts: "dangerously",
        resources: "usable",
        referrer: url,
        pretendToBeVisual: true
      })
      // const jsScript = await request({
      //   method: 'GET',
      //   uri: 'https://tlgrm.ru/js/stickers/pack.js?v=16'
      // })
      // const script = new Script(jsScript)
      // dom.runVMScript(script)

      console.log(dom.serialize())
      return {
        title: this.getTitle(dom),
        images: this.getImages(dom)
      }
    } catch (err) {
      console.error(err)
    }
  },
  getTitle (dom) {
    const title = dom.window.document.querySelector('.stickerpack-header__title__name')
    if (!title) {
      console.warn('Title not found')
      return ''
    }
    return title.textContent
  },
  getImages (dom) {
    const images = dom.window.document.body.querySelectorAll('.stickerbox__image--bigger')
    const srcSets = []
    images.forEach(imageNode => {
      srcSets.push(imageNode.srcset)
    })
    return srcSets
  }
}

module.exports = Parser
