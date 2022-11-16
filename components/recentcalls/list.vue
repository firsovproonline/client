<template>
  <div class="col-xl-6 box-col-12 des-xl-100 top-dealer-sec" style="min-width: 100%;" >
    <div class="card" style="height: 400px">
      <div class="card-header pb-0" style="display: flex;padding-top: 0px">
        <div class="header-top d-sm-flex justify-content-between align-items-center" style="width: 100%">
          <h5>Звонки</h5>
          <div class="center-content" style="flex: 1 auto;width: 100%">
          </div>
          <div>
            <div style="display: flex">
              <div>1</div>
              <div>2</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body" style="overflow: auto;margin-bottom: 20px;padding-top: 0px;font-size: 12px">
        <item v-for="(item,index) in items" :key="index" :item="item" style="border-bottom: 1px dotted" />
      </div>
    </div>
  </div>

</template>

<script>
import Item from '~/components/recentcalls/item'
export default {
  name: 'recentcalls',
  components: { Item },
  data: () => ({
    items: []
  }),
  mounted () {
    this.$axios.get('https://rent21.ru:4439/apiv2/recentcalls').then((item) => {
      window.console.log(item.data);
      this.items = item.data;
    });
  }

}
</script>

<style scoped>

</style>
