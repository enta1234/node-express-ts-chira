import Chira, { Configuration } from 'chira'

class Logger {
  private chira: Chira
  sessionId: string

  constructor(sid?: string) {
    this.chira = new Chira().init()
    this.sessionId = sid || ''
  }

  debug(...x: any[]) {
    this.chira.debug(this.sessionId, ...x)
  }
  info(...x: any[]) {
    this.chira.info(this.sessionId, ...x)
  }
  warn(...x: any[]) {
    this.chira.warn(this.sessionId, ...x)
  }
  error(...x: any[]) {
    this.chira.error(this.sessionId, ...x)
  }
}

export default Logger
