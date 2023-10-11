import axios from 'axios';
export default function ({}, inject) {
  const api = {
    categoriesTitle(val){
      switch (val) {
        case 'flatRent':
          return 'Аренда квартира'
          break
        case 'bedRent':
          return 'Аренда койко-место'
          break
        case 'roomRent':
          return 'Аренда комната'
          break
        case 'houseRent':
          return 'Аренда дом/дача'
          break
        case 'cottageRent':
          return 'Аренда коттедж'
          break
        case 'townhouseRent':
          return 'Аренда таунхаус'
          break
        case 'houseShareRent':
          return 'Аренда часть дома'
          break
        case 'garageRent':
          return 'Аренда гараж'
          break
        case 'buildingRent':
          return 'Аренда здание'
          break
        case 'commercialLandRent':
          return 'Аренда коммерческая земля'
          break
        case 'officeRent':
          return 'Аренда офис'
          break
        case 'freeAppointmentObjectRent':
          return 'Аренда помещение свободного назначения'
          break
        case 'industryRent':
          return 'Аренда производство'
          break
        case 'warehouseRent':
          return 'Аренда склад'
          break
        case 'shoppingAreaRent':
          return 'Аренда торговая площадь'
          break
        case 'flatShareSale':
          return 'Продажа доля в квартире'
          break
        case 'flatSale':
          return 'Продажа квартира'
          break
        case 'newBuildingFlatSale':
          return 'Продажа квартира в новостройке'
          break
        case 'roomSale':
          return 'Продажа комната'
          break
        case 'houseSale':
          return 'Продажа дом/дача'
          break
        case 'cottageSale':
          return 'Продажа коттедж'
          break
        case 'townhouseSale':
          return 'Продажа таунхаус'
          break
        case 'landSale':
          return 'Продажа участок'
          break
        case 'houseShareSale':
          return 'Продажа часть дома'
          break
        case 'garageSale':
          return 'Продажа гараж'
          break
        case 'businessSale':
          return 'Продажа готовый бизнес'
          break
        case 'buildingSale':
          return 'Продажа здание'
          break
        case 'commercialLandSale':
          return 'Продажа коммерческая земля'
          break
        case 'officeSale':
          return 'Продажа офис'
          break
        case 'freeAppointmentObjectSale':
          return 'Продажа помещение свободного назначения'
          break
        case 'industrySale':
          return 'Продажа производство'
          break
        case 'warehouseSale':
          return 'Продажа склад'
          break
        case 'shoppingAreaSale':
          return 'Продажа торговая площадь'
          break
        default:
          return val

      }
      return val
    },
    generateUID(){
      function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      }
      return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
    },
    async saveLog(){
      console.log('log', this)
      try {
        const spr = await axios.put("/api/rent21/log")
        console.log('log save', spr)
      } catch (err) {
        console.error('log error')
      }
    }
  }
  inject('api', api)
}
