<template>
    <ThreeScene />
</template>

<script>
import ThreeScene from '@/components/three/scene'
export default {
  name: 'index',
  components: { ThreeScene },
  mounted () {
    const width = this.$el.offsetWidth
    const height = window.innerHeight - this.$el.getBoundingClientRect().top;
      myWins = new dhtmlXWindows({});

      const winM = myWins.createWindow({
        id: "wautch",
        width: width,
        height: height,
        resize: false,
        modal: true,
        center: true,
        maximize: false,
        caption: ''
      });
      winM.button('close').show();
      winM.button('minmax').hide();
      winM.button('park').hide();
      winM.attachObject(this.$el);
  }
}
</script>

<style>
.dhxwins_vp_dhx_skyblue div.dhxwin_active div.dhx_cell_wins, .dhxwins_vp_dhx_skyblue div.dhxwin_inactive div.dhx_cell_wins{
  left: 0px !important;
}
</style>
