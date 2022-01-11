import * as core from '@actions/core'
import * as QRCode from 'qrcode'

async function run(): Promise<void> {
  try {
    const content = core.getInput('content', {required: true})
    const data = await QRCode.toDataURL(content)
    const text = await QRCode.toString(content)

    core.setOutput('QR_DATA', data)
    core.setOutput('QR_TEXT', text)
    // eslint-disable-next-line no-console
    console.log(text)
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    } else {
      core.setFailed('Internal error')
    }
  }
}

run()
