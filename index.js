if (!global.segment) {
  global.segment = (await import("oicq")).segment
}

try {
  global.uploadRecord = (await import("./uploadRecord.js")).default
} catch (err) {
  global.uploadRecord = segment.record
}

logger.info('-------^_^-------')
logger.info('高清语音模块已载入')
logger.info('作者：xiaotian')
logger.info('-----------------')