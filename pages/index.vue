<template>
  <pre>
    {{ contentItem }}
  </pre>
</template>

<script>
export default {
  name: 'IndexPage',

  async asyncData({ _params, $axios, $config: { KONTENT_PROJECT_ID }, error }) {
    // Request the content Item
    const contentItem = await $axios.$get(
      `https://preview-deliver.kontent.ai/${KONTENT_PROJECT_ID}/items/homepage`
    )

    return {
      contentItem,
    }
  },
}
</script>
