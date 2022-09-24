export default function ({ $axios, redirect, $config }) {
  $axios.onRequest((config) => {
    // Check if query is send to Kontent.ai preview API
    if (config.url.startsWith('https://preview-deliver.kontent.ai/')) {
      // Add authorization header
      config.headers.common.Authorization = `Bearer ${$config.KONTENT_PREVIEW_TOKEN}`
    }
  })
}
