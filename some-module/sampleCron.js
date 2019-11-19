/**
 * this could be an object or class object or just plain method
 */

const log = function () {
    // JFI : this method is set to be run in every minute in registerCronJobs 
    console.log('test cron job run : ', new Date().toISOString())
    // Do your code which is required
    // ..
    // ..
    // ....
    // usually we use a promise based ops -- so return its promise. here dummy promise resolved with dummy data
    return new Promise(resolve => resolve({ status: true }))
}

module.exports = { log }