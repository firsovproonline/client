<template xmlns="http://www.w3.org/1999/html">
  <div style="padding: 30px">
    <div class="pdf" v-if="item.fields" style="padding: 22px;background-color: white;" ref="pdf">
      <img @click="generateReport()" src="/bg/21logo.png">
      <div style="display: flex">
        <h1>{{this.$api.categoriesTitle(item.category)}}</h1>
        <h1 style="margin-left: 12px">{{item.fields.PLALL}} м2</h1>
        <h1 style="margin-left: 12px">{{item.address.ULITCA}} {{item.address.DOM}}</h1>
      </div>
      <div style="display: flex">
        <ImageBg style="width: 320px;height: 180px" :src="'https://rent21.ru:4439/image/?first=1&action=loadImage&idklient='+item.build" />
        <div class="address" style="margin-left: 8px">
          <div class="labelDiv">
            <div class="d-label">Город</div>
            <div class="d-value">{{item.address.GOROD}}</div>
          </div>
          <div class="labelDiv">
            <div class="d-label">Район</div>
            <div class="d-value">{{item.address.OKRUG}}</div>
          </div>
          <div class="labelDiv">
            <div class="d-label">Округ</div>
            <div class="d-value">{{item.address.RAJON}}</div>
          </div>
          <div class="labelDiv">
            <div class="d-label">Налоговая</div>
            <div class="d-value">{{item.address.NALOGNAME}}</div>
          </div>
          <div class="labelDiv">
            <div class="d-label">Тип здания</div>
            <div class="d-value">{{item.building.TIPZD}} {{item.building.KLASS}}</div>
          </div>
          <div class="labelDiv">
            <div class="d-label">Вход</div>
            <div class="d-value">{{item.building.AccessType}}</div>
          </div>
          <div class="labelDiv">
            <div class="d-label">Паркинг наземный</div>
            <div class="d-value">{{item.building.PARKNAZ}}</div>
          </div>
          <div class="labelDiv">
            <div class="d-label">Паркинг крытый</div>
            <div class="d-value">{{item.building.PARKKR}}</div>
          </div>
        </div>
      </div>
      <hr>
      <div style="display: flex">
        <div style="flex: 1 auto">
          <div v-if="item.address">
            <div v-for="(metro,index) in item.address.METRO" :key="index" >
              <div style="display: flex" v-if="index < 3">
                <div style="font-weight: bold">Метро:</div>
                <div style="margin-left: 7px">{{metro.NAME}}</div>
                <div style="margin-left: 7px">{{metro.UD}}</div>
                <div style="margin-left: 7px" >{{metro.UDTIP ==='walk'? 'пешком':'транспортом'}}</div>
              </div>
            </div>
          </div>
          <div class="labelDiv" v-if="item.fields && item.fields.LeaseType">
            <div class="d-label">Тип аренды:</div>
            <div class="d-value">{{item.fields.LeaseType}}</div>
          </div>
          <div class="labelDiv" v-if="item.fields && item.fields.VatType">
            <div class="d-label">Налог:</div>
            <div class="d-value">{{item.fields.VatType}}</div>
          </div>
          <div class="labelDiv" v-if="item.fields && item.fields.IncludedOptionsEnum">
            <div class="d-label">Включено в ставку:</div>
            <div class="d-value">{{item.fields.IncludedOptionsEnum}}</div>
          </div>
          <div class="labelDiv" v-if="item.fields && item.fields.PLANIROVKA">
            <div class="d-label">Планировка:</div>
            <div class="d-value">{{item.fields.PLANIROVKA}}</div>
          </div>
          <div class="labelDiv" v-if="item.fields && item.fields.KOMKL">
            <div class="d-label">Комисс. для клиента:</div>
            <div class="d-value">{{item.fields.KOMKL}}</div>
          </div>
          <div class="labelDiv" v-if="item.fields && item.fields.WaterPipesCount">
            <div class="d-label">Количество мокрых точек:</div>
            <div class="d-value">{{item.fields.WaterPipesCount}}</div>
          </div>
          <div class="labelDiv" v-if="item.fields && item.fields.GV">
            <div class="d-label">Готовность к вьезду:</div>
            <div class="d-value">{{item.fields.GV}}</div>
          </div>
          <div class="labelDiv" v-if="item.fields && item.fields.ETAG">
            <div class="d-label">Этаж:</div>
            <div class="d-value">{{item.fields.ETAG}}</div>
          </div>
        </div>
        <ImageBg style="width: 380px;height: 170px" :src="'https://static-maps.yandex.ru/1.x/?l=map&size=300,130&z=16&pt=' + item.address.LAT + ',' + item.address.LNG + ',org'" />
      </div>
      <hr>
        <table style="width: 100%">
          <tr>
            <th style="width: 278px">Арендуемая площадь (м2)</th>
            <th style="width:25%">АС в год за м2</th>
            <th style="width:25%">АС в мес. за м2</th>
            <th style="width:25%">АС в мес. за всё</th>
          </tr>
          <tr>
            <td>{{item.fields.PLALL}}</td>
            <td>{{item.fields.CENA_AR}}</td>
            <td>{{item.fields.CENA_AR_MES}}</td>
            <td>{{item.fields.CENA_AR_MES_ALL}}</td>
          </tr>
        </table>
        <div v-if="item.fields && item.fields.MPL && item.fields.MPL.length!==0">
          <div>Можно частями</div>
          <table style="width: 100%">
            <tr v-for="(pl, index) in item.fields.MPL" :key="index">
              <td style="width: 278px">{{pl[0]}}</td>
              <td style="width:25%">{{pl[1]}}</td>
              <td style="width:25%">{{pl[2]}}</td>
              <td style="width:25%">{{pl[3]}}</td>

            </tr>
          </table>
        </div>
      <hr>
      <div v-html="item.fields.CIANREM.replace(/\n/g,'<div/>')" style="width: 100%"></div>
      <div v-for="(item, index) in this.obItems" :key="index" class="rowOb">
        <ImageBg :src="'https://rent21.ru:4439/image/?first=1&thumbnail=1&action=loadImage&idklient='+item.build" />
        <div class="colRow" style="min-width: 170px">
          <div>{{item.address.GOROD}}</div>
          <div>{{item.address.ULITCA}}</div>
          <div>{{item.address.DOM}}</div>
        </div>
        <div class="colRow" style="width: 99%">
          <div>{{item.fields.TIP}}</div>
          <div>{{item.fields.TotalArea}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";

import ImageBg from '@/components/rent21/ui/imageBg'
export default {
  name: 'pdfPage',
  components: {
    ImageBg

  },
  data: () => ({
    obItems: [],
    item:{},
    imgs:{}
  }),
  computed:{
  },
  methods: {
    generateReport () {
      // this.$refs.html2Pdf.generatePdf()
      console.log(this.$refs.pdf)
      html2pdf(this.$refs.pdf, {
        margin: 1,
        dpi: 150,
        scale: 0.9,
        width: 2000,
//        jsPDF: { format: 'A4', orientation: 'portrait',width: 2000, },
        //filename: "i-was-html.pdf",
      });
    }
  },
  mounted () {
    // this.img2b64('dddd')
    this.$axios.get('/api/rent21/ob/'+this.$route.params.id).then(item=>{
      this.item = item.data.row[0]
      console.log('ob', this.item)
    })
/*
    this.$axios.post('/api/rent21/ob/officeRent',{

    }).then(item=>{
      console.log(item.data.rows)
      this.obItems = item.data.rows
      this.$nextTick(()=>{

      })
    })
 */

  }

}
</script>

<style lang="scss" scoped>
.pdf{
  width: 800px;
  h1{
    font-size: 22px;
  }
}
.labelDiv{
  display: flex;
  *{
    font-size: 16px;
  }
  .d-label{
    min-width: 110px;
    font-weight: bolder;
    margin-right: 8px;
  }

}
.colRow{
  padding: 4px;
  border-right: 1px solid;
}

.rowOb{
  display: flex;
  padding: 4px;
  border-bottom: 1px solid;
}
</style>




