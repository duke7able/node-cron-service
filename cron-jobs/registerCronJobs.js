/**
 * import all cron required methods here
 */
const sampleCron = require('./../some-module/sampleCron')
/**
 * @description Register all methods which needs be run as cron here in format time <String> : method
 */
const CRONJOBS = {
    '1 * * * * *': sampleCron.log,
}

module.exports = CRONJOBS
