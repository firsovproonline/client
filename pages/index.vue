<template>
  <div class="row">
    <recentcalls />
    <list/>
    <activeimpressions/>
  </div>
</template>

<script>
import Activeimpressions from '~/components/impressions/active'
import List from '~/components/impressions/list'
import Recentcalls from '@/components/recentcalls/list'
export default {
  name: 'IndexPage',
  components: { Recentcalls, List, Activeimpressions },
  layout: 'default',
};
</script>
