import app from './src/app'
import Logger from './src/core/logger'
const logger = new Logger('start app')
const PORT = 5000

const server = app.listen(PORT, () => logger.debug(`Server start on: ${PORT}`))

export default server
