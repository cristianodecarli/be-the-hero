const crypto = require('crypto')
const conn = require('../database/connection')

module.exports = {

  async create(req, res) {
    const { id } = req.body

    const data = await conn('ongs')
      .where('id', id)
      .select('name')
      .first()

    if (!data) return res.status(404).json({ error: 'No ONG found with this ID' })

    return res.json(data)
  }

}
