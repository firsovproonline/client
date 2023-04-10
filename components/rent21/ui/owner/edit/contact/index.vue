<template>
  <div class="main">
    <hr>
    <div class="editDiv">
      <div class="label">Имя</div>
      <input type="text" v-model="item.FIRSTNAME" >
    </div>
    <div class="editDiv">
      <div class="label">Фамилия</div>
      <input type="text" v-model="item.LASTNAME" >
    </div>
    <div v-if="item.PHONE.length > 0">
      <editPhone v-for="(phone, index) in item.PHONE" :item="phone" :key="index" />
    </div>
    <div v-if="item.EMAIL.length > 0">
      <editEmail v-for="(email, index) in item.EMAIL" :item="email" :items="item.EMAIL" :index="index" :key="index"/>
    </div>
    <div v-if="item.WEBSITE.length > 0">
      <edit-site v-for="(site, index) in item.WEBSITE" :item="site" :key="index"/>
    </div>
    <div style="display: flex;justify-content: flex-end;align-items: center;">
      <div>Добавить</div>
      <div @click="addPhone" style="padding-top: 2px; width: 24px;height: 27px;margin-left: 8px;cursor: pointer">
        <svg style="color:green;fill: green;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </div>
      <div @click="addEmail" style="padding-top: 2px; width: 24px;height: 27px;margin-left: 8px;cursor: pointer">
        <svg style="color:green;fill: green;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      </div>
      <div @click="addSite" style="padding-top: 2px; width: 24px;height: 27px;margin-left: 8px;cursor: pointer">
        <svg style="color:green;fill: green;" sxmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </div>
      <div style="padding-top: 2px; width: 24px;height: 27px;margin-left: 8px;cursor: pointer">
        <svg style="color:green;fill: green;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
      </div>

    </div>
  </div>
</template>

<script>
import EditPhone from '@/components/rent21/ui/owner/edit/contact/phone'
import EditEmail from '@/components/rent21/ui/owner/edit/contact/email'
import editSite from '@/components/rent21/ui/owner/edit/contact/site'
export default {
  name: 'editContact',
  components: { editSite, EditEmail, EditPhone },
  props:{
    item: {}
  },
  methods:{
    addPhone(){
      if(!this.item.PHONE)this.item.PHONE = []
      this.item.PHONE.push({VAL:'',REM:''})

    },
    addEmail(){
      if(!this.item.EMAIL)this.item.EMAIL = []
      this.item.EMAIL.push({VAL:'',REM:''})
    },
    addSite(){
      if(!this.item.WEBSITE)this.item.WEBSITE = []
      this.item.WEBSITE.push({VAL:'',REM:''})
    }

  }
}
</script>

<style lang="scss" scoped>
.main{
  padding: 0px;
  *{
    color: black;
  }
  .buttonDiv{
    font-family: Tahoma,Helvetica;
    padding: 6px;
    font-size: inherit;
    color: black;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
    border: 1px solid #a4bed4;
    background-color: #e2efff;
    background: linear-gradient(#e2efff,#d3e7ff);
    background: -webkit-linear-gradient(#e2efff,#d3e7ff);
    filter: progid:DXImageTransform.Microsoft.Gradient(gradientType=0,startColorStr=#e2efff,endColorStr=#d3e7ff) progid:DXImageTransform.Microsoft.Alpha(opacity=100);
    margin: 5px 2px;
    border-radius: 2px;
    float: left;
    cursor: default;
    clear: both;
    position: relative;
    overflow: hidden;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    cursor: pointer;
  }
  .editDiv{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 6px;
    width: 100%;
    .label{
      width: 120px;
      white-space: nowrap
    }
    input{
      flex: 1 auto;
      width: 100%;
    }
  }
}

</style>
