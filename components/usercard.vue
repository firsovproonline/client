<template>
  <div class="sidebar-user text-center"><a class="setting-primary" href="javascript:void(0)">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></a>
    <img v-if="user.photos" class="img-90 rounded-circle"
         :src="user.photos[0].value" alt="">
    <img v-else class="img-90 rounded-circle" src="/images/dashboard/1.png" alt="">
    <div class="badge-bottom"><span class="badge badge-primary">New</span></div>
    <div>
      <h6 v-if="user.displayName" class="mt-3 f-14 f-w-600">{{user.displayName}}</h6>
      <h6 v-else><a href="/api/auth/yandex">Авторизоваться</a></h6>

    </div>
    <p class="mb-0 font-roboto">Rent21</p>
    <ul>
      <li><span><span class="counter">0</span></span>
        <p>сделок</p>
      </li>
      <li><span>7 лет</span>
        <p>время работы</p>
      </li>
      <li><span><span class="counter">50000</span>р</span>
        <p>доход </p>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'usercard',
  data: () => ({
    user: {
      real_name: ''
    }
  }),
  mounted () {
    this.$axios.get('/api/user').then((item) => {
      this.user = item.data;
      this.$store.dispatch('main/setuser',item.data)
      console.log('====',this.user)

    });
  }
}
</script>

<style scoped>
.img-90 {
  width: 90px!important;
  height: 90px;
}
</style>
