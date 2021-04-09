<template>
  <div>
    <div v-bind:class="{ 'row-wrap-space-around-flex-container': isRow }">
      <div v-for="(page, index, array) in markdownPages" :key="index">
        <p>
          <a :href="$withBase(page.regularPath)">
            {{ page.title }}
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list-markdown-pages',
  props: {
    isRow: {
      type: Boolean,
      defaultValue: false,
    },
  },
  data() {
    return {
      markdownPages: [],
    };
  },
  mounted() {
    let path = this.$page.path;
    let nonSame = aPage => aPage.path !== path;
    let nonSystem = aPage => !aPage.frontmatter.system;
    this.markdownPages = this.$site
                             .pages
                             .filter(nonSame)
                             .filter(nonSystem);
  }
};
</script>

<style scoped lang="stylus">
.row-wrap-space-around-flex-container
  display flex
  flex-direction row
  flex-wrap wrap
  justify-content space-around
</style>
