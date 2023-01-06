import AppLogger from './Logger'
import pinoLogger from './pinoLogger'

const Logger = new AppLogger({ logger: pinoLogger })

export default Logger