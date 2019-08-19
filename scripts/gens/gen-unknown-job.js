// Generate unknown job type for testing.

const { queue } = require('../queue');
const logger = require('../../app/utils/log')(module);

var buildUnknown = async function () {
  let jobId = 'blar:blar';
  let payload = {};
  let job = await queue.createJob(payload).setId(jobId).save();
  logger.info('job added ' + job.id);
  return job;
};

if (require.main === module) {
  buildUnknown()
    .catch(logger.error)
    .finally(() => process.exit(0));
}