<template>
  <div class="col-xl-6 box-col-12 des-xl-100 top-dealer-sec" style="min-width: 100%;" >
    <div class="card" style="height: 400px">
      <div class="card-header pb-0">
        <div class="header-top d-sm-flex justify-content-between align-items-center">
          <h5>Список клиентов</h5>
          <div class="center-content">
          </div>
          <div class="setting-list">
            <ul class="list-unstyled setting-option">
              <li>1</li>
              <li>2</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-body" style="overflow: auto;margin-bottom: 20px;padding-top: 0px">
        <item v-for="(item,index) in items" :key="index" :item="item" style="border-bottom: 1px dotted" />
      </div>
    </div>
  </div>

</template>

<script>
import Item from '~/components/impressions/item'
export default {
  name: 'list',
  components: { Item },
  data: () => ({
    items: []
  }),
  mounted () {
    this.$axios.get('https://rent21.ru:4439/apiv2/impressions/list').then((item) => {
      window.console.log(item.data);
      this.items = item.data;
    });
  }

}
</script>

<style scoped>

</style>
