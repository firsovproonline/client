<template>
    <List />
</template>

<script>
import Activeimpressions from '~/components/impressions/active'
import List from '~/components/impressions/list'
import Recentcalls from '@/components/recentcalls/list'
import DhtmlxGrid from '@/components/dhtmlx/grid'
export default {
  name: 'IndexPage',
  components: { DhtmlxGrid, Recentcalls, List, Activeimpressions },
  layout: 'default',
};
</script>
