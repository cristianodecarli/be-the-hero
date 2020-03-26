const crypto = require('crypto')
const conn = require('../database/connection')

module.exports = {

  async index(req, res) {
    const data = await conn('ongs').select('*')
    return res.json(data)
  },

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body

    const id = crypto.randomBytes(3).toString('HEX')

    await conn('ongs').insert({ id, name, email, whatsapp, city, uf })

    return res.json({ id })
  }
}
