import app from './src/app'

const PORT = 5000

const server = app.listen(PORT, () => console.log(`Server start on: ${PORT}`))

export default server
