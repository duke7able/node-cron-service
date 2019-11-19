const CronJob = require('cron').CronJob
const CRONJOBS = require('./registerCronJobs')
class CronJobs {
    constructor() { }

    /**
     * @description This method will register and start all the scheduled jobs or cron jobs
     */
    async start() {
        for (const time in CRONJOBS) {
            new CronJob(
                time,
                () => {
                    CRONJOBS[time]()
                        .then(data => {
                            console.log('data job', data)
                        })
                        .catch(error => {
                            console.log('error cron job time : ', time, error)
                        })
                },
                null,
                true
            )
        }
    }
}

const cronJobs = new CronJobs()

module.exports = cronJobs
