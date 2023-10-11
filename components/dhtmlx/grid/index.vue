<template>
  <div class="col-xl-6 box-col-12 des-xl-100 top-dealer-sec" style="min-width: 100%;" >
    <div class="card" style="">
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
      <div class="card-body"  style="overflow: auto;margin-bottom: 20px;padding-top: 0px;font-size: 12px;display: flex;">
        <div ref="grid" class="grid" ></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'dhtmlxGrid',
  data: () => ({
    dhtmlGrid: null
  }),
  mounted () {
    console.log(this)
    this.dhtmlGrid = new dhtmlXGridObject(this.$refs.grid);
    this.dhtmlGrid.setHeader("ID,Дата заведения клиента,Телефон,Имя,Пл,Принял,Дата последнего звонка,Тип,Опп,Дата последнего сохранения,Ответственный");
    this.dhtmlGrid.attachHeader("#text_filter,#text_filter,#text_filter,#text_filter,#text_filter,#text_filter,#text_filter,,,,#text_filter,");
    this.dhtmlGrid.setColTypes("ro,myDate,ro,myURL,ro,ro,myDateStamp,ro,ro,myDate1,myUSER");
    this.dhtmlGrid.setInitWidths("70,90,120,*,80,200,90,0,0,0,120");
    //this.dhtmlGrid.selMultiRows = false;
    //this.dhtmlGrid.enableMultiline(true);
    //this.dhtmlGrid.enableAutoWidth(true);
    this.dhtmlGrid.enableAutoHeight(true);
    //this.dhtmlGrid.enableMultiselect(true);
    this.dhtmlGrid.setSizes();
    //this.dhtmlGrid.enableSmartRendering(false);
    this.dhtmlGrid.init();
  }
}
</script>

<style >
  .grid{
    width: 100%;
    height: 600px !important;
    display: flex;
    flex-direction: column;
  }
  .xhdr{
    height: auto !important;
  }
  .hdr{
    table-layout: unset !important;
  }

  .objbox{
    flex: 1 auto;
  }
</style>
