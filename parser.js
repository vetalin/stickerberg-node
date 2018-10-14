const jsdom = require("jsdom").JSDOM
const request = require('request-promise')
const {Script} = require('vm')


const sleep = (duration) => {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}

const Parser = {
  async parse (url) {
    try {
      const dom = await jsdom.fromURL(url, {
        includeNodeLocations: true,
        storageQuota: 90000000,
        runScripts: "dangerously",
        // resources: "usable",
        referrer: url,
        // pretendToBeVisual: true
      })
      const jsScript = await request({
        method: 'GET',
        uri: 'https://tlgrm.ru/js/stickers/pack.js?v=16'
      })
      const jsScriptVendor = await request({
        method: 'GET',
        uri: 'https://tlgrm.ru/js/vendor.js?v=10'
      })
      const jsScriptManifest = await request({
        method: 'GET',
        uri: 'https://tlgrm.ru/js/manifest.js?v=16'
      })
      const script = new Script(jsScript)
      const scriptVendor = new Script(jsScriptVendor)
      const scriptManifest = new Script(jsScriptManifest)
      dom.runVMScript(scriptManifest)
      dom.runVMScript(scriptVendor)
      dom.runVMScript(script)

      const scriptExpandImages = new Script(`
        const expander = document.querySelector('.stickerbox__expander__btn')    
        expander.click()
      `)
      dom.runVMScript(scriptExpandImages)


      await sleep(10)

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
      const splitImage = imageNode.srcset.split(',')
      const preview = splitImage[0].replace(' 1.1x', '')
      const full = splitImage[1].replace(' 2x', '')
      srcSets.push({
        preview: `http:${preview}`,
        full: `http:${full}`
      })
    })
    return srcSets
  }
}

module.exports = Parser
