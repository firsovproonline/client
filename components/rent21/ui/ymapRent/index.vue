<template>
  <div ref="map" class="main">
    <YmapFind ref="YmapFind" />
  </div>
</template>

<script>

import YmapFind from '@/components/rent21/ui/ymapRent/filter'
export default {
  name: "ymapRent",
  components: { YmapFind },
  data: () => ({
    myMap: {}
  }),
  props:{
    Mapready: null
  },

  mounted() {
    this.resize();
    window.ymaps.ready(()=> {
      this.myMap = new window.ymaps.Map(this.$refs.map, {
        center: [55.76, 37.64],
        zoom: 13,
        // controls: []
      });
      this.myMap.controls.getContainer().appendChild(this.$refs.YmapFind.$el)
      if(this.Mapready)this.Mapready(this.myMap)
      this.$axios.post('/api/rent21/map').then(items=>{
        // console.log(items)
        const clusterer = new window.ymaps.Clusterer();
        items.data.rows.forEach(item=>{
//          if(item.building && item.building.length > 1){
//            console.log(item.building.length)
//          }
//console.log(items.data.temp[item.build_uid])
          var myPlacemark = new ymaps.GeoObject({
            geometry: {
              type: "Point",
              coordinates: [item.lng, item.lat]
            },
            properties: {
              id: item.build_uid,
              fdata: item,

              name: 'data[key].fields.ULITCA',
              metaDataProperty: {
                description: 'data[key].fields.DOM'
              },
            }
          }, {
            iconLayout: 'default#image',
            iconImageHref: 'data:image/svg+xml,' + this.generateChart(items.data.temp[item.build_uid].countOb), //'/img/charge.jpg',
            iconImageSize: [42, 42],
            //iconImageOffset: [-3, -42],
            //balloonContentBodyLayout: myBalloonContentBodyLayout,
            //balloonContentLayout: myBalloonContentLayout,
            //iconContentLayout: myIconContentLayout,
            // Выставляем тянущийся макет иконки, чтобы вместился вложенный макет myIconContentLayout.
            preset: 'twirl#nightStretchyIcon'
          });
          myPlacemark.events.add('click', this.clickPlacemark);
          clusterer.add(myPlacemark);
        })
        this.myMap.geoObjects.add(clusterer);
      })
    });
    window.addEventListener('resize', this.resize);
  },
  destroyed() {
    window.removeEventListener('resize', this.resize);
  },
  methods:{
    clickPlacemark(e){
      const data = e.get('target').properties.get('fdata');
      console.log(data)
      this.$axios.get('/api/rent21/building/'+data.build_uid).then(build=>{
        console.log(build)
      })
      window.open(
          '/realestate/'+data.build_uid,
          '_blank' // <- This is what makes it open in a new window.
        );
    },
    generateChart(data) {
      var s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M10,10 H90 L50,70"/></svg>';
      var slices = [];
      var div = $('<div>'); //style="transform: rotate(-90deg)"
      const svgEl = $('<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 2 2" ></svg>').appendTo(div)[0]; // document.querySelector('svg');
      var color = ['Coral', 'CornflowerBlue', 'green', 'blue', 'red']
      var idcolor = 0;
      var max = 0;

      for (var key in data) {
        if (data[key] != 0) {
          max = max + data[key];
        }
      }
      if (max == 0) {
        slices.push({
          percent: 1,
          color: color[4]
        })

      }
      else {
        for (var key in data) {
          if (data[key] != 0) {
            slices.push({
              percent: 1 / (max / data[key]),
              color: color[idcolor]
            })
          }
          idcolor++;
        }

      }
      /*
                          const slices = [{
                              percent: 0.1,
                              color: 'Coral'
                          }, {
                              percent: 0.7,
                              color: 'CornflowerBlue'
                          }, {
                              percent: 0.2,
                              color: '#00ab6b'
                          }, ];
      */
      let cumulativePercent = 0;

      function getCoordinatesForPercent(percent) {
        const x = Math.cos(2 * Math.PI * percent);
        const y = Math.sin(2 * Math.PI * percent);
        return [x, y];
      }

      slices.forEach(slice => {
        // destructuring assignment sets the two variables at once
        const [startX, startY] = getCoordinatesForPercent(cumulativePercent);

        // each slice starts where the last slice ended, so keep a cumulative percent
        cumulativePercent += slice.percent;

        const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

        // if the slice is more than 50%, take the large arc (the long way around)
        const largeArcFlag = slice.percent > .5 ? 1 : 0;

        // create an array and join it just for code readability
        const pathData = [
          `M ${startX} ${startY}`, // Move
          `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
          `L 0 0`, // Line
        ].join(' ');

        // create a <path> and append it to the <svg> element
        var pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathEl.setAttribute('d', pathData);
        pathEl.setAttribute('fill', slice.color);
        svgEl.appendChild(pathEl);
      });
      var pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      pathEl.setAttribute('x', '-0.5');
      pathEl.setAttribute('y', '0.3');
      pathEl.setAttribute('style', 'font-size:  1px;color:#ffffff');
      if (max < 10) pathEl.setAttribute('x', '-0.2');

      pathEl.innerHTML = max;
      svgEl.appendChild(pathEl);
      return encodeURIComponent(div.html())
    },
    resize(){
      const h = window.innerHeight - this.$refs.map.getBoundingClientRect().top;
      const w = window.innerWidth - this.$refs.map.getBoundingClientRect().left;
      this.$refs.map.style.height = (h- 10) + 'px';
      // this.$refs.map.style.width = (w -70) + 'px';
      // console.log(this.$refs.map.left)
    }

  },
}
</script>

<style scoped>
.main{
  min-height: 300px;
  width: 100%;
}
</style>
