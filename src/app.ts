import express, { Request, Response } from 'express'
import Chira, { Configuration } from 'chira'
import Logger from './core/logger'

const tempConfig: Configuration = {
  projectName: 'express-ts-chira',
  log: {
    time: 15,
    size: null,
    path: './logs/appLog',
    level: 'debug',
    console: true,
    file: true,
    format: 'json'
  },
  info: {
    time: 15,
    size: null,
    path: './logs/infoLog',
    console: false,
    file: true,
    rawData: false
  }
}

const app = express()
app.use(express.json({}))
app.use(express.urlencoded({ extended: true }))

const chira = new Chira().init(tempConfig, app)
chira.setSessionId((req: Request, res: Response) => req.headers['request-id'] ? req.headers['request-id'] as string : '')

app.get('/', (req, res) => {
  const sid = req.headers['request-id'] as string
  const logger = new Logger(sid)
  logger.debug('debug', 'debug')
  res.send('ok')
})

export default app
