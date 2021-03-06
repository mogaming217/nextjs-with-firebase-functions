import * as functions from 'firebase-functions'

export interface EnvorinmentVariables {
}

let config: any
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'test') {
  // FIXME: とりあえずdev環境をロード
  config = require('../env/dev.json')
} else {
  config = functions.config()
}

export const env = config as EnvorinmentVariables
