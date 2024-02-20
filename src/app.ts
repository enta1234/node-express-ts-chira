import express from 'express'
import Chira, { Configuration } from 'chira'

const app = express()

const tempConfig: Configuration = {
  projectName: 'express-ts-chira',
  log: {
    time: 15,
    size: null,
    path: './logs/appLog',
    level: 'debug',
    console: true,
    file: true,
    autoAddResBody: true,
    format: 'json'
  }
}

const logger = new Chira().init(tempConfig, app)

app.use(express.json({}))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('ok'))

export default app
