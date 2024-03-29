/* global $,dhtmlXLayoutObject,BX24 */
var myTabbar = null;
var winProcess = null;
var flagDelete = false;
var myWins = null;
var count = 0;
var position = 0;


function ContextMenu(map,func) {
  map.funcEvent = func
  this._coordinates = null;
  this._waypoints = [];
  this._route = null;
  this._model = new ContextMenu.Model(map);
  this._view = new ContextMenu.View(map);

  this.setMap(map);
}

ContextMenu.WAYPOINTS_LABELS = 'АБ';

ContextMenu.prototype = {
  constructor: ContextMenu,
  _attachHandlers: function () {
    this._model.events
      .add('openmenu', this._onOpenMenu, this)
      .add('closemenu', this._onCloseMenu, this)
      .add('infoloaded', this._onInfoLoaded, this)
      .add('routeloaded', this._onRouteLoaded, this);

    this._view.events
      .on('selectaction', ymaps.util.bind(this._onSelectAction, this));
  },
  _detachHandlers: function () {
    this._model.events
      .remove('openmenu', this._onOpenMenu, this)
      .remove('closemenu', this._onCloseMenu, this)
      .remove('infoloaded', this._onInfoLoaded, this)
      .remove('routeloaded', this._onRouteLoaded, this);

    this._view.events
      .off('selectaction');
  },
  _onOpenMenu: function (e) {
    this._view.clear();
    this._view.render(e.get('position'));
    this._coordinates = e.get('coordinates');
  },
  _onCloseMenu: function (e) {
    this._view.clear();
  },
  _onInfoLoaded: function (e) {
    var result = e.get('result');

    if(result) {
      this._map.balloon
        .open(result.geometry.getCoordinates(), {
          content: result.properties.get('balloonContentBody')
        });
    }
  },
  _onSelectAction: function (e) {
    this[e.action]();
    this._view.clear();
  },
  setMap: function (map) {
    if(map == this._map) {
      return;
    }

    this._detachHandlers();
    this._map = map;
    this._attachHandlers();
  },
  getInfo: function () {
    this._model.getInfo(this._coordinates);
  },
  addMarker: function (label) {
    var marker = new ymaps.Placemark(this._coordinates, {
      iconContent: label
    });

    this._map.geoObjects
      .add(marker);

    return marker;
  },
  routeFrom: function () {
    this._addWayPoint(0);
    this._getRoute();
  },
  routeTo: function () {
    this._addWayPoint(1);
    this._getRoute();
  },
  _getRoute: function () {
    var waypoints = this._waypoints,
      origin = waypoints[0] && waypoints[0].geometry.getCoordinates(),
      destination = waypoints[1] && waypoints[1].geometry.getCoordinates();

    if(origin && destination) {
      this._model.getRoute([origin, destination]);
    }
  },
  _addWayPoint: function (index) {
    var waypoints = this._waypoints,
      label = ContextMenu.WAYPOINTS_LABELS.charAt(index),
      marker = this.addMarker(label);

    if(waypoints[index]) {
      this._map.geoObjects
        .remove(waypoints[index]);
    }

    if(this._route) {
      this._map.geoObjects
        .remove(this._route);
    }

    this._map.geoObjects
      .add(waypoints[index] = marker);
  },
  _onRouteLoaded: function (e) {
    this._map.geoObjects
      .add(this._route = e.get('result'));

    this._route.options.set('preset', 'router#route');
  }
};

ContextMenu.Model = function (map) {
  this.events = new ymaps.event.Manager();
  this.setMap(map);
};

ContextMenu.Model.prototype = {
  constructor: ContextMenu.Model,
  setMap: function (map) {
    if(map == this._map) {
      return;
    }

    this._detachHandlers();
    this._map = map;
    this._attachHandlers();
  },
  _attachHandlers: function () {
    if(this._map) {
      this._map.events
        .add('contextmenu', this._onRightClick, this)
        .add(['click', 'actiontick'], this._onMapAction, this);
    }
  },
  _detachHandlers: function () {
    if(this._map) {
      this._map.events
        .remove('contextmenu', this._onRightClick, this)
        .remove(['click', 'actiontick'], this._onMapAction, this);
    }
  },
  _onRightClick: function (e) {
    var position = e.get('position');

    this.events.fire('openmenu', {
      position: {
        left: position[0],
        top: position[1]
      },
      coordinates: e.get('coordPosition')
    });
  },
  _onMapAction: function (e) {
    this.events.fire('closemenu', {});
  },
  getInfo: function (coordinates) {
    ymaps.geocode(coordinates)
      .then(
        ymaps.util.bind(this._onInfoLoaded, this)
      );
  },
  _onInfoLoaded: function (res) {
    this.events.fire('infoloaded', {
      result: res.geoObjects.get(0)
    });
  },
  getRoute: function (waypoints) {
    ymaps.route(waypoints)
      .then(
        ymaps.util.bind(this._onRouteLoaded, this)
      );
  },
  _onRouteLoaded: function (route) {
    this.events.fire('routeloaded', {
      result: route.getPaths().get(0)
    });
  }
};

ContextMenu.View = function (map) {
  this.events = $({});
  this.map = map
  this._container = $('body');
  this._menu = $(
    '<div class="dropdown clearfix dropdowny">' +
    '<ul class="dropdown-menu">' +
    '<li><a data-action="getInfo" href="#">Добавить адрес</a></li>' +
    '</ul>' +
    '</div>'
  );
};

ContextMenu.View.prototype = {
  constructor: ContextMenu.View,
  render: function (position) {
    this._menu
      .css(position)
      .appendTo(this._container);

    this._attachHandlers();
  },
  clear: function () {
    this._detachHandlers();
    this._menu.remove();
  },
  _attachHandlers: function () {
    this._menu
      .on('click', 'a', $.proxy(this._onSelectAction, this));
  },
  _detachHandlers: function () {
    this._menu
      .off('click', 'a');
  },
  _onSelectAction: function (e) {
    e.preventDefault();
    this._detachHandlers();
    this._menu.remove();
    this.map.funcEvent(e)
  }
};


// Make a call to REST when JS SDK is loaded
window.sort_by_key = function(array, key)
{
  return array.sort(function(a, b)
  {
    var x = a[key]; var y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}
function disableForms(els, flagvisible) {
  for (var i = 0; i < els.length; i++) {
    if (flagvisible) {
      if ($(els[i]).find('#lockDiv').length == 0) {
        $('<div id="lockDiv" class="lockclass"></div>').appendTo($(els[i]));
      }
    } else {
      $(els[i]).find('#lockDiv').remove();

    }
  }

}


var arType = {
    "Офис": [{
        value: "administrativeBuilding",
        text: "Административное здание"
    }, {
        value: "businessCenter",
        text: "Бизнес-центр"
    }, {
        value: "businessCenter2",
        text: "Деловой центр"
    }, {
        value: "businessHouse",
        text: "Деловой дом"
    }, {
        value: "businessPark",
        text: "Бизнес-парк"
    }, {
        value: "businessQuarter",
        text: "Бизнес-квартал"
    }, {
        value: "businessQuarter2",
        text: "Деловой квартал"
    }, {
        value: "free",
        text: "Объект свободного назначения"
    }, {
        value: "industrialComplex",
        text: "Производственный комплекс"
    }, {
        value: "industrialPark",
        text: "Индустриальный парк"
    }, {
        value: "industrialSite",
        text: "Промплощадка"
    }, {
        value: "industrialWarehouseComplex",
        text: "Производственно-складской комплекс"
    }, {
        value: "logisticsCenter",
        text: "Логистический центр"
    }, {
        value: "logisticsComplex",
        text: "Логистический комплекс"
    }, {
        value: "logisticsPark",
        text: "Логистический парк"
    }, {
        value: "mansion",
        text: "Особняк"
    }, {
        value: "manufactureBuilding",
        text: "Производственное здание"
    }, {
        value: "manufacturingFacility",
        text: "Производственный цех"
    }, {
        value: "modular",
        text: "Модульное здание"
    }, {
        value: "multifunctionalComplex",
        text: "Многофункциональный комплекс"
    }, {
        value: "officeAndHotelComplex",
        text: "Офисно-гостиничный комплекс"
    }, {
        value: "officeAndResidentialComplex",
        text: "Офисно-жилой комплекс"
    }, {
        value: "officeAndWarehouse",
        text: "Офисно-складское здание"
    }, {
        value: "officeAndWarehouseComplex",
        text: "Офисно-складской комплекс"
    }, {
        value: "officeBuilding",
        text: "Офисное здание"
    }, {
        value: "officeCenter",
        text: "Офисный центр"
    }, {
        value: "officeComplex",
        text: "Офисный комплекс"
    }, {
        value: "officeIndustrialComplex",
        text: "Офисно-производственный комплекс"
    }, {
        value: "officeQuarter",
        text: "Офисный квартал"
    }, {
        value: "old",
        text: "Старый фонд"
    }, {
        value: "other",
        text: "Другое"
    }, {
        value: "outlet",
        text: "Аутлет"
    }, {
        value: "propertyComplex",
        text: "Имущественный комплекс"
    }, {
        value: "residentialComplex",
        text: "Жилой комплекс"
    }, {
        value: "residentialHouse",
        text: "Жилой дом"
    }, {
        value: "shoppingAndBusinessComplex",
        text: "Торгово-деловой комплекс"
    }, {
        value: "shoppingAndCommunityCenter",
        text: "Торгово-общественный центр"
    }, {
        value: "shoppingAndEntertainmentCenter",
        text: "Торгово-развлекательный центр"
    }, {
        value: "shoppingAndWarehouseComplex",
        text: "Торгово-складской комлекс"
    }, {
        value: "shoppingCenter",
        text: "Торговый центр"
    }, {
        value: "shoppingComplex",
        text: "Торговый комплекс"
    }, {
        value: "specializedShoppingCenter",
        text: "Специализированный торговый центр"
    }, {
        value: "standaloneBuilding",
        text: "Отдельно стоящее здание"
    }, {
        value: "technopark",
        text: "Технопарк"
    }, {
        value: "tradeAndExhibitionComplex",
        text: "Торгово-выставочный комплекс"
    }, {
        value: "tradingHouse",
        text: "Торговый дом"
    }, {
        value: "tradingOfficeComplex",
        text: "Торгово-офисный комплекс"
    }, {
        value: "warehouse",
        text: "Склад"
    }, {
        value: "warehouseComplex",
        text: "Складской комплекс"
    }]
};
dhtmlXForm.prototype.items.koNt21 = {
  render: function(item, data) {
    //console.log('=============', data)
    item.tipFS = data.tip;
    item.uid = generateUID();
    if (data.value.UID) {
      item.uid = data.value.UID;
    }
    $(item).data('data', data);
    item._type = "koNt21";
    item._enabled = true;
    $('<hr>').appendTo($(item));
    var title = $('<div>').appendTo($(item));
    var cont = $('<div>').appendTo($(item));
    item.form21 = new dhtmlXForm(cont[0], [{
      type: "settings",
      inputWidth: 300,
      inputHeight: 25,
      position: "label-top"
    }, {
      type: 'hidden',
      name: 'UID',
      value: item.uid,
      userdata: {
        flabel: 'UID'
      }
    }, {
      type: 'button',
      name: 'delete',
      value: '-',
      offsetLeft: 450
    }, {
      type: "input",
      label: "Фамилия",
      position: "label-left",
      labelWidth: 70,
      inputWidth: 250,
      value: '',
      userdata: {
        flabel: 'LASTNAME'
      }
    }, {
      type: "input",
      label: "Имя",
      position: "label-left",
      labelWidth: 70,
      inputWidth: 250,
      value: '',
      userdata: {
        flabel: 'FIRSTNAME'
      }
    }, {
      type: "block",
      name: "blphone",
      blockOffset: 0,
      inputWidth: 500,
      list: []
    },
      /*
                  {
                      type: "input",
                      name: "SITE",
                      label: "Сайт",
                      position: "label-left",
                      labelWidth: 70,
                      inputWidth: 250,
                      userdata: {
                          flabel: 'SITE'
                      }
                  }, {
                      type: "input",
                      name: "EMAIL",
                      label: "Email",
                      position: "label-left",
                      labelWidth: 70,
                      inputWidth: 250,
                      userdata: {
                          flabel: 'EMAIL'
                      }
                  },
      */

      {
        type: "block",
        name: "blemail",
        blockOffset: 0,
        inputWidth: 500,
        list: []
      }, {
        type: "block",
        name: "blsite",
        blockOffset: 0,
        inputWidth: 500,
        list: []
      }, {
        type: "block",
        name: "blmessenger",
        blockOffset: 0,
        inputWidth: 500,
        list: []
      }

      , {
        type: "block",
        name: "ButAddBl",
        inputWidth: 500,
        blockOffset: 0,
        list: [{
          type: 'label',
          label: 'Добавить',
          offsetTop: 12,
          offsetLeft: 180
        }, , {
          type: 'newcolumn'
        },

          {
            type: 'button',
            name: 'addPhone',
            value: '<i class="far fa-phone"></i>',
            //offsetLeft: 110
          }, {
            type: 'newcolumn'
          }, {
            type: 'button',
            name: 'addEmail',
            value: '<i class="fal fa-envelope"></i>',
            //offsetLeft: 410
          }, {
            type: 'newcolumn'
          }, {
            type: 'button',
            name: 'addSite',
            value: '<i class="fab fa-internet-explorer"></i>',
            //offsetLeft: 410
          }, {
            type: 'newcolumn'
          }, {
            type: 'button',
            name: 'addMessenger',
            value: '<i class="fab fa-facebook-messenger"></i>',
            //offsetLeft: 410
          }
        ]
      },



    ]);
    item.form21.attachEvent("onButtonClick", function(name) {
      if (name.indexOf('addPhone') != -1) {
        item.addPhone({
          PUID: generateUID()
        })
        return;
      }
      if (name.indexOf('addEmail') != -1) {
        item.addEmail({
          PUID: generateUID()
        })
        return;
      }
      if (name.indexOf('addSite') != -1) {
        item.addSite({
          PUID: generateUID()
        })
        return;
      }
      if (name.indexOf('addMessenger') != -1) {
        item.addMessenger({
          PUID: generateUID()
        })
        return;
      }

      if (name.indexOf('delPhone') != -1) {
        dhtmlx.confirm({
          type: "confirm",
          text: "Удалить телефон из контакта ?",
          callback: function(result) {
            if (result) {
              var itemForm = item.form21.getUserData(name, 'puid');
              item.form21.removeItem('userP' + itemForm);

              console.log(itemForm);
            }
          }
        });



        //this.removeItem('userP');

        return;
      }
      var form = $(this.fsitem).data('data');
      dhtmlx.confirm({
        type: "confirm",
        text: "Отвязать контакт ?",
        callback: function(result) {
          if (result) {
            // отправляем запрос на удаление линка
            console.log(form.fsform.getFormData().UID, item.form21.getFormData().UID)

            $.post({
              url: '/api/',
              type: 'POST',
              contentType: 'application/json',
              data: JSON.stringify({
                opp: 'deletelinc',
                item: 'linc21',
                BUILD: form.fsform.getFormData().UID,
                ADRES: item.form21.getFormData().UID
              }),
              success: function(data) {
                form.fsform.removeItem(form.name);

              },
              error: function(err) {
                console.log('ribbon err', err);
              }
            });
          }
        }
      });


      //console.log(form)
    });

    item.form21.fsitem = item;
    item.form21.attachEvent("onChange", function(name, value, state) {
      item.form21.fsitem.callEvent("onChange", [item._idd, '']);

    });



    title.html(data.label);
    item.AddItem = function() {

    }
    item.addMessenger = function(ob) {
      item.form21.addItem('blmessenger', {
        type: "block",
        blockOffset: 0,
        inputWidth: 500,
        name: 'userP' + ob.PUID,
        list: [{
          type: "input",
          inputWidth: 160,
          label: "Месенжер",
          value: ob.MESSENGER,
          userdata: {
            flabel: 'MESSENGER',
            puid: ob.PUID
          }
        }, {
          type: "newcolumn"
        }, {
          type: "input",
          inputWidth: 220,
          offsetLeft: 12,
          label: "Описание",
          value: ob.MESSENGERREM,
          userdata: {
            flabel: 'MESSENGERREM',
            puid: ob.PUID
          }
        }, , {
          type: "newcolumn"
        }, {
          type: 'button',
          offsetLeft: 12,
          offsetTop: 28,
          name: 'delPhone' + ob.PUID,
          value: '-<i class="fab fa-facebook-messenger"></i>',
          userdata: {
            puid: ob.PUID
          }
        }

        ]
      })
    }

    item.addSite = function(ob) {
      item.form21.addItem('blsite', {
        type: "block",
        blockOffset: 0,
        inputWidth: 500,
        name: 'userP' + ob.PUID,
        list: [{
          type: "input",
          inputWidth: 160,
          label: "Сайт",
          value: ob.SITE,
          userdata: {
            flabel: 'SITE',
            puid: ob.PUID
          }
        }, {
          type: "newcolumn"
        }, {
          type: "input",
          inputWidth: 220,
          offsetLeft: 12,
          label: "Описание",
          value: ob.SITEREM,
          userdata: {
            flabel: 'SITEREM',
            puid: ob.PUID
          }
        }, , {
          type: "newcolumn"
        }, {
          type: 'button',
          offsetLeft: 12,
          offsetTop: 28,
          name: 'delPhone' + ob.PUID,
          value: '-<i class="fab fa-internet-explorer"></i>',
          userdata: {
            puid: ob.PUID
          }
        }

        ]
      })
    }
    item.addEmail = function(ob) {
      item.form21.addItem('blemail', {
        type: "block",
        blockOffset: 0,
        inputWidth: 500,
        name: 'userP' + ob.PUID,
        list: [{
          type: "input",
          inputWidth: 160,
          label: "Емаил",
          value: ob.EMAIL,
          userdata: {
            flabel: 'EMAIL',
            puid: ob.PUID
          }
        }, {
          type: "newcolumn"
        }, {
          type: "input",
          inputWidth: 220,
          offsetLeft: 12,
          label: "Описание",
          value: ob.EMAILREM,
          userdata: {
            flabel: 'EMAILREM',
            puid: ob.PUID
          }
        }, , {
          type: "newcolumn"
        }, {
          type: 'button',
          offsetLeft: 12,
          offsetTop: 28,
          name: 'delPhone' + ob.PUID,
          value: '-<i class="fal fa-envelope"></i>',
          userdata: {
            puid: ob.PUID
          }
        }

        ]
      })
    }
    item.addPhone = function(ob) {

      item.form21.addItem('blphone', {
        type: "block",
        blockOffset: 0,
        inputWidth: 500,
        name: 'userP' + ob.PUID,
        list: [{
          type: "input",
          inputWidth: 110,
          label: "Телефон",
          value: ob.PHONE,
          userdata: {
            'mask': '-',
            flabel: 'PHONE',
            puid: ob.PUID
          }
        }, {
          type: "newcolumn"
        }, {
          type: "input",
          inputWidth: 270,
          offsetLeft: 12,
          label: "Описание",
          value: ob.PHONEREM,
          userdata: {
            flabel: 'PHONEREM',
            puid: ob.PUID
          }
        }, , {
          type: "newcolumn"
        }, {
          type: 'button',
          offsetLeft: 12,
          offsetTop: 28,
          name: 'delPhone' + ob.PUID,
          value: '-<i class="far fa-phone"></i>',
          userdata: {
            puid: ob.PUID
          }
        }

        ]
      })
      var data = item.form21.getFormData();
      var form = item.form21;
      for (var key in data) {
        if (item.form21.getUserData(key, "mask") == '-') {
          $($(item.form21._getItemByName(key)).find('input')).inputmask({
            "mask": "(999) 999-99-99",
            oncomplete: function(e) {
              // проверяем или есть такой телефон
              //console.log('complete phone kontakt', $(e.target).val())
              form.lock();

              $.post({
                url: '/api/',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                  opp: 'getitem',
                  like: $(e.target).val()
                }),
                success: function(data) {
                  /*
                                                      if (data.atate != null) {
                                                          data = data.atate;

                                                          for (var i = 0; i < data.length; i++) {
                                                              if (form.isItem(data[i].TITLE)) {
                                                                  form.setItemValue(data[i].TITLE, data[i].VAL)
                                                              }
                                                          }

                                                          var fd = item.form21.getFormData();
                                                          for (var key in fd) {
                                                              var flabel = item.form21.getUserData(key, 'flabel');
                                                              for (var i = 0; i < data.length; i++) {
                                                                  if (flabel == data[i].TITLE) {
                                                                      item.form21.setItemValue(key, data[i].VAL)
                                                                  }
                                                              }
                                                          }
                                                      }
                  */
                  form.unlock();

                  console.log(data, form.getFormData())
                },
                error: function(err) {
                  console.log('ribbon err', err);
                }
              });
            }
          });
        }
      }



    }
console.log('=======',data.value)
    if (data.value != undefined) {
      for (var i = 0; i < data.value.data.length; i++) {
        if (data.value.data[i].PHONE != undefined) {
          //data.value.data[i].UID = generateUID();
          item.addPhone(data.value.data[i]);
        }
        if (data.value.data[i].EMAILREM != undefined) {
          //data.value.data[i].UID = generateUID();
          item.addEmail(data.value.data[i]);
        }
      }

    } else {
      //console.log('==0===', data.value)
      var fd = item.form21.getFormData();
      for (var key in fd) {
        var flabel = item.form21.getUserData(key, 'flabel');
        for (var i = 0; i < data.value.length; i++) {
          if (flabel == data.value[i].TITLE) {
            item.form21.setItemValue(key, data.value[i].VAL)
          }
        }
      }
      var arP = {};
      for (var i = 0; i < data.value.length; i++) {
        if (data.value[i].PUID != '') {
          if (arP[data.value[i].PUID] == undefined) {
            arP[data.value[i].PUID] = {};
          }
          arP[data.value[i].PUID][data.value[i].TITLE] = data.value[i].VAL
          arP[data.value[i].PUID]['PUID'] = data.value[i].PUID
        }
      }
      for (var key in arP) {
        //console.log('arP[key]', arP[key]);
        if (arP[key].PHONEREM != undefined) item.addPhone(arP[key]);
        if (arP[key].EMAILREM != undefined) item.addEmail(arP[key]);
        if (arP[key].SITEREM != undefined) item.addSite(arP[key]);
        if (arP[key].MESSENGERREM != undefined) item.addMessenger(arP[key]);
      }



    }

    var data = item.form21.getFormData();
    var form = item.form21;
    for (var key in data) {
      if (item.form21.getUserData(key, "mask") == '-') {
        $($(item.form21._getItemByName(key)).find('input')).inputmask({
          "mask": "(999) 999-99-99",
          oncomplete: function(e) {
            // проверяем или есть такой телефон
            //console.log('complete phone kontakt', $(e.target).val())
            form.lock();

            $.post({
              url: '/api/',
              type: 'POST',
              contentType: 'application/json',
              data: JSON.stringify({
                opp: 'getitem',
                like: $(e.target).val()
              }),
              success: function(data) {
                form.unlock();

                console.log(data, form.getFormData())
              },
              error: function(err) {
                console.log('ribbon err', err);
              }
            });



          }
        });
      }
    }


    return this;
  },

  // destructor, required (if you will use unload)
  destruct: function(item) {
    item.innerHTML = "";
  },

  // enable item, mandatory
  enable: function(item) {
    item.lastChild.style.color = "black";
    item._enabled = true;
  },
  addMyItem: function(item, ob) {

    if (ob == null) {
      item.form21.removeItem('q111111');
      return;
    }
    var InOb = {};
    for (var i = 0; i < ob.length; i++) {
      if (InOb[ob[i].UID] == undefined) {
        InOb[ob[i].UID] = {};
      }
      if (ob[i].PUID != '') {
        if (InOb[ob[i].UID][ob[i].PUID] == undefined) {
          InOb[ob[i].UID][ob[i].PUID] = {};
        }
        InOb[ob[i].UID][ob[i].PUID][ob[i].TITLE] = ob[i].VAL;

      } else {
        InOb[ob[i].UID][ob[i].TITLE] = ob[i].VAL;
      }
    }
    //console.log(ob, InOb, InOb.FIRSTNAME);
    for (var key in InOb) {
      var block = {
        type: "block",
        name: "bl" + key,
        blockOffset: 0,
        inputWidth: 500,
        list: []
      }
      block.list.push({
        type: 'hidden',
        value: key,
        userdata: {
          flabel: 'UID'
        }
      });
      block.list.push({
        type: "input",
        label: "Фамилия",
        position: "label-left",
        labelWidth: 70,
        inputWidth: 250,
        value: InOb[key].LASTNAME,
        userdata: {
          flabel: 'LASTNAME'
        }
      });
      block.list.push({
        type: "input",
        label: "Имя",
        position: "label-left",
        labelWidth: 70,
        inputWidth: 250,
        value: InOb[key].FIRSTNAME,
        userdata: {
          flabel: 'FIRSTNAME'
        }
      });

      // обработка подблоков телефоны, месенджеры и тд
      var subBL = InOb[key];
      for (var subkey in subBL) {
        if (subBL[subkey] instanceof Object) {
          if (subBL[subkey].PHONE != undefined) {
            block.list.push({
              type: "block",
              blockOffset: 0,
              inputWidth: 500,
              list: [{
                type: "input",
                inputWidth: 110,
                label: "Телефон",
                value: subBL[subkey].PHONE,
                userdata: {
                  'mask': '-',
                  flabel: 'PHONE',
                  puid: subkey
                }
              }, {
                type: "newcolumn"
              }, {
                type: "input",
                inputWidth: 370,
                offsetLeft: 12,
                label: "Описание",
                value: subBL[subkey].PHONEREM,
                userdata: {
                  flabel: 'PHONEREM',
                  puid: subkey
                }
              }]
            })
          }
        }
      }

      item.form21.addItem(null, block);




      //console.log(block);
    }
    var puid = generateUID();

    var block = {}

    /*
            item.form21.addItem(null, {
                type: "block",
                name: "q111111",
                blockOffset: 0,
                inputWidth: 500,
                list: [{
                    type: 'hidden',
                    name: 'UID',
                    value: item.uid,
                    userdata: {
                        flabel: 'UID'
                    }
                }, {
                    type: "input",
                    label: "Фамилия",
                    name: "LASTNAME",
                    position: "label-left",
                    labelWidth: 70,
                    inputWidth: 250,
                    value: InOb.LASTNAME,
                    userdata: {
                        flabel: 'LASTNAME'
                    }
                }, {
                    type: "input",
                    label: "Имя",
                    name: "FIRSTNAME",
                    position: "label-left",
                    labelWidth: 70,
                    inputWidth: 250,
                    value: InOb.FIRSTNAME,
                    userdata: {
                        flabel: 'FIRSTNAME'
                    }
                }, , {
                    type: "block",
                    blockOffset: 0,
                    inputWidth: 500,
                    list: [{
                        type: "input",
                        inputWidth: 110,
                        label: "Телефон",
                        value: '11111',
                        userdata: {
                            'mask': '-',
                            flabel: 'PHONE',
                            puid: puid
                        }
                    }, {
                        type: "newcolumn"
                    }, {
                        type: "input",
                        inputWidth: 370,
                        offsetLeft: 12,
                        label: "Описание",
                        value: "",
                        userdata: {
                            flabel: 'PHONEREM',
                            puid: puid
                        }
                    }]
                }, ]
            });
    */
    var data = item.form21.getFormData();
    for (var key in data) {
      if (item.form21.getUserData(key, "mask") == '-') {
        $($(item.form21._getItemByName(key)).find('input')).inputmask({
          "mask": "(999) 999-99-99",
          oncomplete: function(e) {
            // проверяем или есть такой телефон
            //console.log('complete phone kontakt', $(e.target).val())

            $.post({
              url: '/api/',
              type: 'POST',
              contentType: 'application/json',
              data: JSON.stringify({
                opp: 'getitem',
                like: $(e.target).val()
              }),
              success: function(data) {
                console.log(data)
              },
              error: function(err) {
                console.log('ribbon err', err);
              }
            });



          }
        });
      }
    }

  },
  disable: function(item) {
    item.lastChild.style.color = "gray";
    item._enabled = false;
  },

  setValue: function(item, val) {
    console.log('setValue')
    item._value = val;
  },

  getValue: function(item) {
    var data = item.form21.getFormData(true);
    for (var key in data) {
      if (item.form21.getUserData(key, 'flabel') != "") {
        if (item.form21.getUserData(key, 'flabel') == 'UID') {
          var UID = item.form21.getItemValue(key);
        }
      }

    }
    var outOB = [];
    for (var key in data) {
      if (item.form21.getUserData(key, 'flabel') != "") {
        outOB.push({
          UID: UID,
          TITLE: item.form21.getUserData(key, 'flabel'),
          VAL: item.form21.getItemValue(key),
          PUID: item.form21.getUserData(key, 'puid'),
          TIP: 'koNt21'
        });
      }
    }



    return {
      tip: 'koNt21',
      data: outOB
    };
  }

};

dhtmlXForm.prototype.addMyItem21 = function(name, text) {
  this.doWithItem(name, "addMyItem", text);
};


dhtmlXForm.prototype.setFormData_koNt21 = function(name, value) {
  return this.doWithItem(name, "setValue", value);
};

dhtmlXForm.prototype.getFormData_koNt21 = function(name) {
  return this.doWithItem(name, "getValue");
};





dhtmlXForm.prototype.items.koNt21SF = {
  render: function(item, data) {
    //console.log('koNt21SF', data.value);
    item.newData = data.newData;
    item.first = false;
    if (data.first != undefined) {
      item.first = data.first;
    }


    item.tipFS = data.tip;
    item.uid = generateUID();
    if (data.value.UID) {
      item.uid = data.value.UID;
    }
    $(item).data('data', data);
    var v = data.value;
    item._type = "koNt21";
    item._enabled = true;
    $('<hr>').appendTo($(item));
    var title = $('<div>').appendTo($(item));
    var cont = $('<div>').appendTo($(item));
    item.form21 = new dhtmlXForm(cont[0], [{
      type: "settings",
      inputWidth: 300,
      inputHeight: 25,
      position: "label-top"
    }, {
      type: 'hidden',
      name: 'UID',
      value: v.UID,
      userdata: {
        flabel: 'UID'
      }
    }, {
      type: 'button',
      name: 'delete',
      value: '-',
      disabled: item.first,
      offsetLeft: 450
    }, {
      type: "input",
      label: "Фамилия",
      position: "label-left",
      labelWidth: 70,
      inputWidth: 250,
      value: '',
      userdata: {
        flabel: 'LASTNAME'
      }
    }, {
      type: "input",
      label: "Имя",
      position: "label-left",
      labelWidth: 70,
      inputWidth: 250,
      value: v.NAME,
      userdata: {
        flabel: 'FIRSTNAME'
      }
    }, {
      type: "block",
      name: "blphone",
      blockOffset: 0,
      inputWidth: 500,
      list: []
    }, {
      type: "block",
      name: "blemail",
      blockOffset: 0,
      inputWidth: 500,
      list: []
    }, {
      type: "block",
      name: "blsite",
      blockOffset: 0,
      inputWidth: 500,
      list: []
    }, {
      type: "block",
      name: "blmessenger",
      blockOffset: 0,
      inputWidth: 500,
      list: []
    }

      , {
        type: "block",
        name: "ButAddBl",
        inputWidth: 500,
        blockOffset: 0,
        list: [{
          type: 'label',
          label: 'Добавить',
          offsetTop: 12,
          offsetLeft: 180
        }, , {
          type: 'newcolumn'
        },

          {
            type: 'button',
            name: 'addPhone',
            value: '<i class="far fa-phone"></i>',
            //offsetLeft: 110
          }, {
            type: 'newcolumn'
          }, {
            type: 'button',
            name: 'addEmail',
            value: '<i class="fal fa-envelope"></i>',
            //offsetLeft: 410
          }, {
            type: 'newcolumn'
          }, {
            type: 'button',
            name: 'addSite',
            value: '<i class="fab fa-internet-explorer"></i>',
            //offsetLeft: 410
          }, {
            type: 'newcolumn'
          }, {
            type: 'button',
            name: 'addMessenger',
            value: '<i class="fab fa-facebook-messenger"></i>',
            //offsetLeft: 410
          }


        ]
      },

      {
        type: "button",
        name: 'mergeKont',
        value: 'Обьединить контакт',
        className: 'bright_'


      }

    ]);
    if (item.newData == undefined) {
      item.form21.hideItem('mergeKont');
    }
    item.form21.item = item;
    item.form21.attachEvent("onButtonClick", function(name) {
      if (this.item.newData != undefined) {
        var data = this.item.newData.getFormData();
        if (name == 'mergeKont') {
          var b = {};
          for (var key in data) {
            if (data[key].data != undefined) {
              for (var i = 0; i < data[key].data.length; i++) {
                if (data[key].data[i].PUID != '') {
                  if (b[data[key].data[i].PUID] == undefined) b[data[key].data[i].PUID] = {};
                  b[data[key].data[i].PUID][data[key].data[i].TITLE] = data[key].data[i].VAL;
                }
              }

            }
          }
          for (var key in b) {
            if (b[key].PHONE != undefined) {
              item.addPhone({
                PUID: key,
                PHONE: b[key].PHONE,
                PHONEREM: b[key].PHONEREM,
              })
            }
          }

          var data = item.form21.getFormData(true);
          for (var key in data) {
            if (item.form21.getUserData(key, 'flabel') != "") {
              if (item.form21.getUserData(key, 'flabel') == 'UID') {
                var UID = item.form21.getItemValue(key);
              }
            }

          }
          var outOB = [];
          for (var key in data) {
            if (item.form21.getUserData(key, 'flabel') != "") {
              outOB.push({
                UID: UID,
                TITLE: item.form21.getUserData(key, 'flabel'),
                VAL: item.form21.getItemValue(key),
                PUID: item.form21.getUserData(key, 'puid'),
                TIP: 'koNt21'
              });
            }
          }
          for (var i = 0; i < outOB.length; i++) {
            if (outOB[i].TITLE == 'PHONE' && outOB[i].VAL.indexOf('(') == -1) {
              var phoneSQL = outOB[i].VAL;
              phoneSQL = '(' + phoneSQL.substring(0, 3) + ') ' + phoneSQL.substring(3, 6) + '-' + phoneSQL.substring(6, 8) + '-' + phoneSQL.substring(8, 10);
              outOB[i].VAL = phoneSQL;
            }
          }
          //console.log(outOB);

          $.post({
            url: '/api/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
              opp: 'saveitem',
              data: outOB
            }),
            success: function(data) {
              window.location.reload();
            },
            error: function(err) {
              console.log(err);
            }
          });

          return;
        }

      }
      if (name.indexOf('addPhone') != -1) {
        item.addPhone({
          PUID: generateUID()
        })
        return;
      }
      if (name.indexOf('addEmail') != -1) {
        item.addEmail({
          PUID: generateUID()
        })
        return;
      }
      if (name.indexOf('addSite') != -1) {
        item.addSite({
          PUID: generateUID()
        })
        return;
      }
      if (name.indexOf('addMessenger') != -1) {
        item.addMessenger({
          PUID: generateUID()
        })
        return;
      }

      if (name.indexOf('delPhone') != -1) {
        dhtmlx.confirm({
          type: "confirm",
          text: "Удалить телефон из контакта ?",
          callback: function(result) {
            if (result) {
              var itemForm = item.form21.getUserData(name, 'puid');
              item.form21.removeItem('userP' + itemForm);

              console.log(itemForm);
            }
          }
        });



        //this.removeItem('userP');

        return;
      }
      var form = $(this.fsitem).data('data');
      dhtmlx.confirm({
        type: "confirm",
        text: "Отвязать контакт ?",
        callback: function(result) {
          if (result) {
            // отправляем запрос на удаление линка
            if (form.fsform != undefined) {
              console.log(form.fsform.getFormData().UID, item.form21.getFormData().UID)

              $.post({
                url: '/api/',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                  opp: 'deletelinc',
                  item: 'linc21',
                  BUILD: form.fsform.getFormData().UID,
                  ADRES: item.form21.getFormData().UID
                }),
                success: function(data) {
                  form.fsform.removeItem(form.name);

                },
                error: function(err) {
                  console.log('ribbon err', err);
                }
              });

            } else {
              console.log(form);
              form.parentform.delAR.push(form.name);
              form.parentform.removeItem(form.name);

            }

          }
        }
      });


      //console.log(form)
    });

    item.form21.fsitem = item;
    item.form21.attachEvent("onChange", function(name, value, state) {
      item.form21.fsitem.callEvent("onChange", [item._idd, '']);

    });



    title.html(data.label);
    item.AddItem = function() {

    }
    item.addMessenger = function(ob) {
      item.form21.addItem('blmessenger', {
        type: "block",
        blockOffset: 0,
        inputWidth: 500,
        name: 'userP' + ob.PUID,
        list: [{
          type: "input",
          inputWidth: 160,
          label: "Месенжер",
          value: ob.MESSENGER,
          userdata: {
            flabel: 'MESSENGER',
            puid: ob.PUID
          }
        }, {
          type: "newcolumn"
        }, {
          type: "input",
          inputWidth: 220,
          offsetLeft: 12,
          label: "Описание",
          value: ob.MESSENGERREM,
          userdata: {
            flabel: 'MESSENGERREM',
            puid: ob.PUID
          }
        }, , {
          type: "newcolumn"
        }, {
          type: 'button',
          offsetLeft: 12,
          offsetTop: 28,
          name: 'delPhone' + ob.PUID,
          value: '-<i class="fab fa-facebook-messenger"></i>',
          userdata: {
            puid: ob.PUID
          }
        }

        ]
      })
    }

    item.addSite = function(ob) {
      item.form21.addItem('blsite', {
        type: "block",
        blockOffset: 0,
        inputWidth: 500,
        name: 'userP' + ob.PUID,
        list: [{
          type: "input",
          inputWidth: 160,
          label: "Сайт",
          value: ob.SITE,
          userdata: {
            flabel: 'SITE',
            puid: ob.PUID
          }
        }, {
          type: "newcolumn"
        }, {
          type: "input",
          inputWidth: 220,
          offsetLeft: 12,
          label: "Описание",
          value: ob.SITEREM,
          userdata: {
            flabel: 'SITEREM',
            puid: ob.PUID
          }
        }, , {
          type: "newcolumn"
        }, {
          type: 'button',
          offsetLeft: 12,
          offsetTop: 28,
          name: 'delPhone' + ob.PUID,
          value: '-<i class="fab fa-internet-explorer"></i>',
          userdata: {
            puid: ob.PUID
          }
        }

        ]
      })
    }
    item.addEmail = function(ob) {
      item.form21.addItem('blemail', {
        type: "block",
        blockOffset: 0,
        inputWidth: 500,
        name: 'userP' + ob.PUID,
        list: [{
          type: "input",
          inputWidth: 160,
          label: "Емаил",
          value: ob.EMAIL,
          userdata: {
            flabel: 'EMAIL',
            puid: ob.PUID
          }
        }, {
          type: "newcolumn"
        }, {
          type: "input",
          inputWidth: 220,
          offsetLeft: 12,
          label: "Описание",
          value: ob.EMAILREM,
          userdata: {
            flabel: 'EMAILREM',
            puid: ob.PUID
          }
        }, , {
          type: "newcolumn"
        }, {
          type: 'button',
          offsetLeft: 12,
          offsetTop: 28,
          name: 'delPhone' + ob.PUID,
          value: '-<i class="fal fa-envelope"></i>',
          userdata: {
            puid: ob.PUID
          }
        }

        ]
      })
    }
    item.addPhone = function(ob) {
      if (ob.first == undefined) {
        ob.first = false;
      }
      item.form21.addItem('blphone', {
        type: "block",
        blockOffset: 0,
        inputWidth: 500,
        name: 'userP' + ob.PUID,
        list: [{
          type: "input",
          inputWidth: 110,
          label: "Телефон",
          value: ob.PHONE,
          readonly: ob.first,
          userdata: {
            'mask': '-',
            flabel: 'PHONE',
            puid: ob.PUID
          }
        }, {
          type: "newcolumn"
        }, {
          type: "input",
          inputWidth: 270,
          offsetLeft: 12,
          label: "Описание",
          value: ob.PHONEREM,
          userdata: {
            flabel: 'PHONEREM',
            puid: ob.PUID
          }
        }, , {
          type: "newcolumn"
        }, {
          type: 'button',
          offsetLeft: 12,
          offsetTop: 28,
          disabled: ob.first,
          name: 'delPhone' + ob.PUID,
          value: '-<i class="far fa-phone"></i>',
          userdata: {
            puid: ob.PUID
          }
        }

        ]
      })
      var data = item.form21.getFormData();
      var form = item.form21;
      for (var key in data) {
        if (item.form21.getUserData(key, "mask") == '-') {
          $($(item.form21._getItemByName(key)).find('input')).inputmask({
            "mask": "(999) 999-99-99",
            oncomplete: function(e) {
              // проверяем или есть такой телефон
              //console.log('complete phone kontakt', $(e.target).val())
              form.lock();

              $.post({
                url: '/api/',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                  opp: 'getitem',
                  like: $(e.target).val()
                }),
                success: function(data) {
                  /*
                                                      if (data.atate != null) {
                                                          data = data.atate;

                                                          for (var i = 0; i < data.length; i++) {
                                                              if (form.isItem(data[i].TITLE)) {
                                                                  form.setItemValue(data[i].TITLE, data[i].VAL)
                                                              }
                                                          }

                                                          var fd = item.form21.getFormData();
                                                          for (var key in fd) {
                                                              var flabel = item.form21.getUserData(key, 'flabel');
                                                              for (var i = 0; i < data.length; i++) {
                                                                  if (flabel == data[i].TITLE) {
                                                                      item.form21.setItemValue(key, data[i].VAL)
                                                                  }
                                                              }
                                                          }
                                                      }
                  */
                  form.unlock();

                  console.log(data, form.getFormData())
                },
                error: function(err) {
                  console.log('ribbon err', err);
                }
              });
            }
          });
        }
      }



    }

    if (data.value.data != undefined) {
      console.log('data.value.data', data.value.data)
      for (var i = 0; i < data.value.data.length; i++) {
        if (data.value.data[i].PHONE != undefined) {
          //data.value.data[i].UID = generateUID();
          item.addPhone(data.value.data[i]);
        }
        if (data.value.data[i].EMAILREM != undefined) {
          //data.value.data[i].UID = generateUID();
          item.addEmail(data.value.data[i]);
        }
      }

    } else {
      //console.log('==0===', data.value)
      var fd = item.form21.getFormData();
      for (var key in fd) {
        var flabel = item.form21.getUserData(key, 'flabel');
        for (var i = 0; i < data.value.length; i++) {
          if (flabel == data.value[i].TITLE) {
            item.form21.setItemValue(key, data.value[i].VAL)
          }
        }
      }
      var arP = {};
      for (var i = 0; i < data.value.length; i++) {
        if (data.value[i].PUID != '') {
          if (arP[data.value[i].PUID] == undefined) {
            arP[data.value[i].PUID] = {};
          }
          arP[data.value[i].PUID][data.value[i].TITLE] = data.value[i].VAL
          arP[data.value[i].PUID]['PUID'] = data.value[i].PUID
        }
      }
      for (var key in arP) {
        //console.log('arP[key]', arP[key]);
        arP[key].first = item.first;
        if (arP[key].PHONEREM != undefined) item.addPhone(arP[key]);
        if (arP[key].EMAILREM != undefined) item.addEmail(arP[key]);
        if (arP[key].SITEREM != undefined) item.addSite(arP[key]);
        if (arP[key].MESSENGERREM != undefined) item.addMessenger(arP[key]);
      }



    }

    var data = item.form21.getFormData();
    var form = item.form21;
    for (var key in data) {
      if (item.form21.getUserData(key, "mask") == '-') {
        $($(item.form21._getItemByName(key)).find('input')).inputmask({
          "mask": "(999) 999-99-99",
          oncomplete: function(e) {
            // проверяем или есть такой телефон
            //console.log('complete phone kontakt', $(e.target).val())
            form.lock();

            $.post({
              url: '/api/',
              type: 'POST',
              contentType: 'application/json',
              data: JSON.stringify({
                opp: 'getitem',
                like: $(e.target).val()
              }),
              success: function(data) {
                /*
                                                if (data.atate != null) {
                                                    data = data.atate;

                                                    for (var i = 0; i < data.length; i++) {
                                                        if (form.isItem(data[i].TITLE)) {
                                                            form.setItemValue(data[i].TITLE, data[i].VAL)
                                                        }
                                                    }

                                                    var fd = item.form21.getFormData();
                                                    for (var key in fd) {
                                                        var flabel = item.form21.getUserData(key, 'flabel');
                                                        for (var i = 0; i < data.length; i++) {
                                                            if (flabel == data[i].TITLE) {
                                                                item.form21.setItemValue(key, data[i].VAL)
                                                            }
                                                        }
                                                    }



                                                }
                */
                form.unlock();

                console.log(data, form.getFormData())
              },
              error: function(err) {
                console.log('ribbon err', err);
              }
            });



          }
        });
      }
    }
    //console.log('koNt21SF', v);
    var data = v;
    var b = {};
    for (var key in data) {
      if (data[key].data != undefined) {
        for (var i = 0; i < data[key].data.length; i++) {
          if (data[key].data[i].PUID != '') {
            if (b[data[key].data[i].PUID] == undefined) b[data[key].data[i].PUID] = {};
            b[data[key].data[i].PUID][data[key].data[i].TITLE] = data[key].data[i].VAL;
          }
        }

      }
    }
    for (var key in b) {
      console.log(key)
      if (b[key].PHONE != undefined) {
        item.addPhone({
          first: item.first,
          PUID: key,
          PHONE: b[key].PHONE,
          PHONEREM: b[key].PHONEREM,
        })
      }
    }




    return this;
  },

  // destructor, required (if you will use unload)
  destruct: function(item) {
    item.innerHTML = "";
  },

  // enable item, mandatory
  enable: function(item) {
    item.lastChild.style.color = "black";
    item._enabled = true;
  },
  addMyItem: function(item, ob) {

    if (ob == null) {
      item.form21.removeItem('q111111');
      return;
    }
    var InOb = {};
    for (var i = 0; i < ob.length; i++) {
      if (InOb[ob[i].UID] == undefined) {
        InOb[ob[i].UID] = {};
      }
      if (ob[i].PUID != '') {
        if (InOb[ob[i].UID][ob[i].PUID] == undefined) {
          InOb[ob[i].UID][ob[i].PUID] = {};
        }
        InOb[ob[i].UID][ob[i].PUID][ob[i].TITLE] = ob[i].VAL;

      } else {
        InOb[ob[i].UID][ob[i].TITLE] = ob[i].VAL;
      }
    }
    //console.log(ob, InOb, InOb.FIRSTNAME);
    for (var key in InOb) {
      var block = {
        type: "block",
        name: "bl" + key,
        blockOffset: 0,
        inputWidth: 500,
        list: []
      }
      block.list.push({
        type: 'hidden',
        value: key,
        userdata: {
          flabel: 'UID'
        }
      });
      block.list.push({
        type: "input",
        label: "Фамилия",
        position: "label-left",
        labelWidth: 70,
        inputWidth: 250,
        value: InOb[key].LASTNAME,
        userdata: {
          flabel: 'LASTNAME'
        }
      });
      block.list.push({
        type: "input",
        label: "Имя",
        position: "label-left",
        labelWidth: 70,
        inputWidth: 250,
        value: InOb[key].FIRSTNAME,
        userdata: {
          flabel: 'FIRSTNAME'
        }
      });

      // обработка подблоков телефоны, месенджеры и тд
      var subBL = InOb[key];
      for (var subkey in subBL) {
        if (subBL[subkey] instanceof Object) {
          if (subBL[subkey].PHONE != undefined) {
            block.list.push({
              type: "block",
              blockOffset: 0,
              inputWidth: 500,
              list: [{
                type: "input",
                inputWidth: 110,
                label: "Телефон",
                value: subBL[subkey].PHONE,
                userdata: {
                  'mask': '-',
                  flabel: 'PHONE',
                  puid: subkey
                }
              }, {
                type: "newcolumn"
              }, {
                type: "input",
                inputWidth: 370,
                offsetLeft: 12,
                label: "Описание",
                value: subBL[subkey].PHONEREM,
                userdata: {
                  flabel: 'PHONEREM',
                  puid: subkey
                }
              }]
            })
          }
        }
      }

      item.form21.addItem(null, block);




      //console.log(block);
    }
    var puid = generateUID();

    var block = {}

    /*
            item.form21.addItem(null, {
                type: "block",
                name: "q111111",
                blockOffset: 0,
                inputWidth: 500,
                list: [{
                    type: 'hidden',
                    name: 'UID',
                    value: item.uid,
                    userdata: {
                        flabel: 'UID'
                    }
                }, {
                    type: "input",
                    label: "Фамилия",
                    name: "LASTNAME",
                    position: "label-left",
                    labelWidth: 70,
                    inputWidth: 250,
                    value: InOb.LASTNAME,
                    userdata: {
                        flabel: 'LASTNAME'
                    }
                }, {
                    type: "input",
                    label: "Имя",
                    name: "FIRSTNAME",
                    position: "label-left",
                    labelWidth: 70,
                    inputWidth: 250,
                    value: InOb.FIRSTNAME,
                    userdata: {
                        flabel: 'FIRSTNAME'
                    }
                }, , {
                    type: "block",
                    blockOffset: 0,
                    inputWidth: 500,
                    list: [{
                        type: "input",
                        inputWidth: 110,
                        label: "Телефон",
                        value: '11111',
                        userdata: {
                            'mask': '-',
                            flabel: 'PHONE',
                            puid: puid
                        }
                    }, {
                        type: "newcolumn"
                    }, {
                        type: "input",
                        inputWidth: 370,
                        offsetLeft: 12,
                        label: "Описание",
                        value: "",
                        userdata: {
                            flabel: 'PHONEREM',
                            puid: puid
                        }
                    }]
                }, ]
            });
    */
    var data = item.form21.getFormData();
    for (var key in data) {
      if (item.form21.getUserData(key, "mask") == '-') {
        $($(item.form21._getItemByName(key)).find('input')).inputmask({
          "mask": "(999) 999-99-99",
          oncomplete: function(e) {
            // проверяем или есть такой телефон
            //console.log('complete phone kontakt', $(e.target).val())

            $.post({
              url: '/api/',
              type: 'POST',
              contentType: 'application/json',
              data: JSON.stringify({
                opp: 'getitem',
                like: $(e.target).val()
              }),
              success: function(data) {
                console.log(data)
              },
              error: function(err) {
                console.log('ribbon err', err);
              }
            });



          }
        });
      }
    }

  },
  disable: function(item) {
    item.lastChild.style.color = "gray";
    item._enabled = false;
  },

  setValue: function(item, val) {
    console.log('setValue')
    item._value = val;
  },

  getValue: function(item) {
    var data = item.form21.getFormData(true);
    for (var key in data) {
      if (item.form21.getUserData(key, 'flabel') != "") {
        if (item.form21.getUserData(key, 'flabel') == 'UID') {
          var UID = item.form21.getItemValue(key);
        }
      }

    }
    var outOB = [];
    for (var key in data) {
      if (item.form21.getUserData(key, 'flabel') != "") {
        outOB.push({
          UID: UID,
          TITLE: item.form21.getUserData(key, 'flabel'),
          VAL: item.form21.getItemValue(key),
          PUID: item.form21.getUserData(key, 'puid'),
          TIP: 'koNt21'
        });
      }
    }



    return {
      tip: 'koNt21',
      data: outOB
    };
  }

};

dhtmlXForm.prototype.addMyItem21SF = function(name, text) {
  this.doWithItem(name, "addMyItem", text);
};


dhtmlXForm.prototype.setFormData_koNt21SF = function(name, value) {
  return this.doWithItem(name, "setValue", value);
};

dhtmlXForm.prototype.getFormData_koNt21SF = function(name) {
  return this.doWithItem(name, "getValue");
};
dhtmlXForm.prototype.items.myKontact = {
  render: function(item, data) {
    item._type = "myKontact";
    item._enabled = true;
    $(item).css('width', data.inputWidth + 'px')
    $('<hr>').appendTo($(item));
    $(item).addClass('mySobst')

    var title = $('<div style="display:flex">').appendTo($(item));
    $('<span>' + data.my_text + '</span>').appendTo(title);

    var a = $('<a href="#" style="margin-left:8px">Создать</a>').appendTo(title);
    a.data('item', item);
    /*
            if (data.addFunction) {
                a.click(data.addFunction);
            } else
    */

    {
      a.click(function() {
        var item = $(this).data('item');
        FormsEdit.show('formKontact', null, null, function(el, data) {
          console.log(item)
          createDivKont(item, data);
          $(el).find('.bclose').click();
        });
        return false;
      })
    }
    return this;
  },
  destruct: function(item) {
    item.innerHTML = "";
  },
  // this methos will public
  setText: function(item, text) {
    // it already exists in form
    item.lastChild.innerHTML = text;

    // demo of triggering events
    // this will call user handler and pass item name and new text
    item.callEvent("onTextChanged", [item._idd, text]);
  },

  // this methos will also public
  setBoldText: function(item, text) {
    // but it not exists in form, so link to it needed, see below
    item.lastChild.innerHTML = "<b>" + text + "</b>";

    // demo of triggering events
    // this will call user handler and pass item name and new text and true as bolded flag
    item.callEvent("onTextChanged", [item._idd, text, true]);
  },
  enable: function(item) {
    item.style.color = "black";
    item._enabled = true;
  },
  disable: function(item) {
    item.style.color = "gray";
    item._enabled = false;
  },
  setValue: function(item, val) {
    item._value = val;
    if (val == '') {
      $(item).find('.kontDivItem').remove();
    }
    for (var i = 0; i < val.length; i++) {
      $.post({
        url: '/',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          opp: 'getitem',
          item: 'kont',
          uid: val[i]
        }),
        success: function(data) {
          createDivKont(item, data);
          //console.log(data)
        },
        error: function(err) {
          console.log('ribbon err', err);
          if (err.status === 401) {

          }
        }
      });


    }
  },
  getValue: function(item) {
    var divK = $(item).find('.kontDivItem');
    var a = [];
    for (var i = 0; i < divK.length; i++) {
      a.push({
        tip: 'kont',
        value: $(divK[i]).data('uid')
      })
    }

    return a;
  }
}
dhtmlXForm.prototype.setFormData_myKontact = function(name, value) {
  return this.doWithItem(name, "setValue", value);
};

dhtmlXForm.prototype.getFormData_myKontact = function(name) {
  return this.doWithItem(name, "getValue");
};

dhtmlXForm.prototype.items.myItem = {
  render: function(item, data) {
    item.tipFS = data.tip;
    $(item).data('data', data);
    $(item).data('comboList', []);
    if (data.tip == 'phone') {
      $(item).data('comboList', [{
        value: "Рабочий",
        text: "Рабочий"
      }, {
        value: "Мобильный",
        text: "Мобильный"
      }, {
        value: "Факс",
        text: "Факс"
      }, {
        value: "Домашний",
        text: "Домашний"
      }, {
        value: "Пейджер",
        text: "Пейджер"
      }, {
        value: "Другой",
        text: "Другой"
      }]);
    }
    if (data.tip == 'email') {
      $(item).data('comboList', [{
        value: "Рабочий",
        text: "Рабочий"
      }, {
        value: "Частный",
        text: "Частный"
      }, {
        value: "Другой",
        text: "Другой"
      }])
    }
    if (data.tip == 'site') {
      $(item).data('comboList', [{
        value: "Корпоротивный",
        text: "Корпоротивный"
      }, {
        value: "Личный",
        text: "Личный"
      }, {
        value: "Facebook",
        text: "Facebook"
      }, {
        value: "Вконтакте",
        text: "Вконтакте"
      }, {
        value: "LiveJournal",
        text: "LiveJournal"
      }, {
        value: "Twiter",
        text: "Twiter"
      }, {
        value: "Другой",
        text: "Другой"
      }])
    }
    if (data.tip == 'messenger') {
      $(item).data('comboList', [{
        value: "Facebook",
        text: "Facebook"
      }, {
        value: "Telegram",
        text: "Telegram"
      }, {
        value: "Вконтакте",
        text: "Вконтакте"
      }, {
        value: "Skype",
        text: "Skype"
      }, {
        value: "Viber",
        text: "Viber"
      }, {
        value: "Instagram",
        text: "Instagram"
      }, {
        value: "Битрикс24",
        text: "Битрикс24"
      }, {
        value: "Онлайн-чат",
        text: "Онлайн-чат"
      }, {
        value: "Открытая линия",
        text: "Открытая линия"
      }, {
        value: "ICQ",
        text: "ICQ"
      }, {
        value: "MSN/Live",
        text: "MSN/Live"
      }, {
        value: "Jabber",
        text: "Jabber"
      }, {
        value: "Другой",
        text: "Другой"
      }])
    }
    item._type = "myItem";
    item._enabled = true;
    $('<hr>').appendTo($(item));
    var title = $('<div>').appendTo($(item));
    $(item).data('cont', $('<div>').appendTo($(item)));
    var cont = $('<div style="display:flex" class="divPhone">').appendTo($(item).data('cont'));
    var inp1 = $('<input class="dhxform_textarea phoneInput" style="height:' + data.inputHeight + 'px" >').appendTo(cont);
    var combo_ = $('<div class="tipPhone">').appendTo(cont);
    var but = $('<button class="delBut dhxform_btn_filler"> - </button>').appendTo(cont);
    but.click(function() {
      var bb = this;
      dhtmlx.message({
        ob: this,
        type: "confirm",
        text: "Удалить пункт?",
        callback: function(el) {
          if (el) {
            $(bb).parent().remove();

          }
        }
      });
    })

    if (data.tip == 'phone') {
      $(inp1).inputmask({
        "mask": "(999) 999-99-99",
        "oncomplete": function() {
          alert('inputmask complete');
        }
      });
      inp1[0].onkeyup = function(e) {
        e = e || event;
        item.callEvent("onKeyUp", [this, e, 'phone', inp1.val()]);
      };
      inp1[0].onkeydown = function(e) {
        e = e || event;
        item.callEvent("onKeyDown", [this, e, 'phone', inp1.val()]);
      };


    }
    cont.data('combo', new dhtmlXCombo({
        parent: combo_[0],
        items: $(item).data('comboList')
      }

    ))
    var adddiv = $('<div>').appendTo($(item));
    var a = $('<a href="#" style="color: gray;">Добавить</a>').appendTo(adddiv);
    a.data('item', item);
    a.data('tip', data.tip);
    a.click(function() {
      var cont = $('<div style="display:flex" class="divPhone">').appendTo($($(this).data('item')).data('cont'));
      var inp1 = $('<input class="dhxform_textarea phoneInput" style="height:' + data.inputHeight + 'px" >').appendTo(cont);
      var combo_ = $('<div class="tipPhone">').appendTo(cont);
      var but = $('<button class="delBut dhxform_btn_filler"> - </button>').appendTo(cont);
      but.click(function() {
        var bb = this;
        dhtmlx.message({
          ob: this,
          type: "confirm",
          text: "Удалить пункт?",
          callback: function(el) {
            if (el) {
              $(bb).parent().remove();

            }
          }
        });
      })

      if ($(this).data('tip') == 'phone') {
        $(inp1).inputmask({
          "mask": "(999) 999-99-99"
        });
      }
      inp1[0].onkeyup = function(e) {
        e = e || event;
        item.callEvent("onKeyUp", [this, e, 'phone', inp1.val()]);
      };
      inp1[0].onkeydown = function(e) {
        e = e || event;
        item.callEvent("onKeyDown", [this, e, 'phone', inp1.val()]);
      };

      cont.data('combo', new dhtmlXCombo({
          parent: combo_[0],
          items: $($(this).data('item')).data('comboList')
        }

      ))
      return false;
    })
    title.html(data.my_text)
    this._custom_inner_func(item);
    return this;
  },

  // destructor, required (if you will use unload)
  destruct: function(item) {
    var div = $(item).find('.divPhone');
    for (var i = 0; i < div.length; i++) {
      $(div[i]).data('combo').unload();
    }
    item.innerHTML = "";
  },

  // enable item, mandatory
  enable: function(item) {
    item.lastChild.style.color = "black";
    item._enabled = true;
  },

  // disable item, mandatory
  disable: function(item) {
    item.lastChild.style.color = "gray";
    item._enabled = false;
  },

  // your custom functionality
  _custom_inner_func: function(item) {
    item.lastChild.onclick = function() {
      if (this.parentNode._is_enabled) alert("Hello!")
    }
  },

  _custom_inner_func2: function(item) {
    item.lastChild.onclick = null;
  },

  // this methos will public
  setText: function(item, text) {
    // it already exists in form
    item.lastChild.innerHTML = text;

    // demo of triggering events
    // this will call user handler and pass item name and new text
    item.callEvent("onTextChanged", [item._idd, text]);
  },

  // this methos will also public
  setBoldText: function(item, text) {
    // but it not exists in form, so link to it needed, see below
    item.lastChild.innerHTML = "<b>" + text + "</b>";

    // demo of triggering events
    // this will call user handler and pass item name and new text and true as bolded flag
    item.callEvent("onTextChanged", [item._idd, text, true]);
  },

  // you you need validation and you need set/get value for you form, you need:
  // setValue and getValue, below basic code, you can add yout custom code also
  setValue: function(item, val) {
    var div = $(item).find('.divPhone');
    for (var i = 0; i < div.length; i++) {
      $(div[i]).data('combo').unload();
    }
    div.remove();
    for (var i = 0; i < val.length; i++) {
      var cont = $('<div style="display:flex" class="divPhone">').appendTo($(item).data('cont'));
      var inp1 = $('<input class="dhxform_textarea phoneInput" style="height:' + $(item).data('data').inputHeight + 'px" >').appendTo(cont);
      inp1.val(val[i].VAL);
      if (item.tipFS == 'phone') {
        $(inp1).inputmask({
          "mask": "(999) 999-99-99"
        });
      }
      inp1[0].onkeyup = function(e) {
        e = e || event;
        item.callEvent("onKeyUp", [this, e, 'phone', inp1.val()]);
      };
      inp1[0].onkeydown = function(e) {
        e = e || event;
        item.callEvent("onKeyDown", [this, e, 'phone', inp1.val()]);
      };


      var combo_ = $('<div class="tipPhone">').appendTo(cont);
      cont.data('combo', new dhtmlXCombo({
          parent: combo_[0],
          items: $(item).data('comboList')
        }

      ))
      cont.data('combo').setComboValue(val[i].TIP);
      var but = $('<button class="delBut dhxform_btn_filler"> - </button>').appendTo(cont);
      but.click(function() {
        var bb = this;
        dhtmlx.message({
          ob: this,
          type: "confirm",
          text: "Удалить пункт?",
          callback: function(el) {
            if (el) {
              $(bb).parent().remove();

            }
          }
        });
      })

    }



    item._value = val;
  },

  getValue: function(item) {
    var div = $(item).find('.divPhone');
    var p = [];
    for (var i = 0; i < div.length; i++) {
      p.push({
        val: $(div[i]).find('.phoneInput').val(),
        tip: $(div[i]).data('combo').getSelectedValue()
      })
    }
    return p;
  }

};
dhtmlXForm.prototype.setFormData_myItem = function(name, value) {
  return this.doWithItem(name, "setValue", value);
};

dhtmlXForm.prototype.getFormData_myItem = function(name) {
  return this.doWithItem(name, "getValue");
};


dhtmlXForm.prototype.items.MultyCian = {
    render: function(item, data) {
        item._type = "MultyCian";
        item._enabled = true;
        item._data = data.options;
        if (data.name == 'field_ETAG') {
            //console.log('data.options', data)
            data.custom = true;
        }
        var div = $('<div>').appendTo($(item));
        if (data.multi == undefined) {
            data.multi = true;
        }
        item.multi = data.multi;
        if (data.custom == undefined) {
            data.custom = false;
        }
        item.custom = data.custom;


        if (data.required) {
            data.label = data.label + '<span class="item_required">*</span>';
        }
        item.form21 = new dhtmlXForm(div[0], [{
                type: "label",
                label: "<hr><span style='position:absolute;left:0px;top:9px;background:#ffffff'>&nbsp;" + data.label + "&nbsp;</span>"
            }, {
                type: "label",
                label: "<span style='position:absolute;left:150px;top:8px;background:#ffffff' class='infoSpanVal'></span>"
            }, {
                type: "label",
                label: "<span style='position:absolute;left:94%;top:-4px;background:#ffffff'><i class='bcloseOpen fas fa-sort-down' style='font-size:30px;cursor:pointer'></i></span>"
            }, {
                type: "container",
                name: data.name + "myGrid",
                label: "",
                labelWidth: 0,
                inputWidth: data.inputWidth,
                inputHeight: 'auto'
            }
            /*, {
                            type: "label",
                            label: "<hr>"
                        }*/
        ]);
        var list = $(item.form21.cont).find('i');
        $(item.form21.cont).find('.infoSpanVal').hide();
        list.data('fitem', item);
        list.click(function() {
            //console.log($($(this).data('fitem')).parent());
            var item = $(this).data('fitem');
            if (item.multi) {
                $(this).parent().parent().parent().parent().find('div').removeClass('hideMultyItem');
                item.callEvent("onChange", [item._idd, '']);

            } else {
                if ($(this).hasClass('fa-sort-down')) {
                    $(this).removeClass('fa-sort-down');
                    $(this).addClass('fa-sort-up');
                    $(this).parent().css('top', '8px');
                    $(item.form21.grid).css('height', '0px');
                    $(item).find('.dhxform_obj_dhx_skyblue').css('height', '32px');
                    //console.log($(item).find('.dhxform_obj_dhx_skyblue'))
                } else {
                    $(this).removeClass('fa-sort-up');
                    $(this).addClass('fa-sort-down');
                    $(this).parent().css('top', '-4px');
                    $(item.form21.grid).css('height', 'auto');
                    $(item).find('.dhxform_obj_dhx_skyblue').css('height', 'auto');

                }

            }
        })

        item.form21.grid = item.form21.getContainer(data.name + "myGrid");
        //console.log(data, item.form21.grid);
        $(item.form21.grid).find('.dhxform_container').css('height', 'auto');
        $(item.form21.grid).css('display', 'flex');
        $(item.form21.grid).css('overflow', 'auto');
        $(item.form21.grid).css('flex-wrap', 'wrap');
        $(item.form21.grid).css('margin-top', '-30px');

        for (var i = 0; i < data.options.length; i++) {
            var div = $('<div>').appendTo($(item.form21.grid));
            div.css('margin', '5px');
            div.css('padding', '4px');
            div.css('border', '1px solid');
            div.css('cursor', 'pointer');
            div.addClass('fsmultyItem');
            div.html(data.options[i].text);
            div.data('fitem', item);
            div.data('fself', this);
            div.data('multi', item.multi);
            div.data('text', data.options[i].text);
            div.data('value', data.options[i].value);

            div.click(function() {
                var item = $(this).data('fitem');
                var fself = $(this).data('fself');
                if ($(this).data('multi') == true) {
                    if ($(this).hasClass('selectMultyItem')) {
                        $(this).removeClass('selectMultyItem');
                    } else {
                        $(this).addClass('selectMultyItem');
                    }
                } else {
                    $(this).parent().find('div').removeClass('selectMultyItem');
                    $(this).addClass('selectMultyItem');
                    $(item.form21.cont).find('.infoSpanVal').html($(this).data('text'))
                    $(item.form21.cont).find('.infoSpanVal').show();
                    $(item.form21.cont).find('.bcloseOpen').removeClass('fa-sort-down');
                    $(item.form21.cont).find('.bcloseOpen').addClass('fa-sort-up');
                    $(item.form21.cont).find('.bcloseOpen').parent().css('top', '8px');
                    $(item.form21.grid).css('height', '0px');
                    $(item).find('.dhxform_obj_dhx_skyblue').css('height', '32px');

                }
                item.callEvent("onChange", [item._idd, fself.getValue(item), 5]);
            })
        }
        if (item.custom == true) {
            var div = $('<div>').appendTo($(item.form21.grid));
            div.css('margin', '5px');
            div.css('padding', '4px');
            div.css('border', '1px solid');
            div.addClass('fsmultyItem');
            var inp = $('<input type="text" style="width:25px" class="customV">').appendTo(div);
            inp.data('fself', this);
            inp.data('fitem', item);

            inp.keydown(function(ev) {
                var item = $(this).data('fitem');
                var fself = $(this).data('fself');

                if (ev.originalEvent.code == 'Enter') {
                    if ($(this).val() != '') {
                        $(item.form21.cont).find('.infoSpanVal').html($(this).val())
                        $(item.form21.cont).find('.infoSpanVal').show();
                        $(item.form21.cont).find('.bcloseOpen').removeClass('fa-sort-down');
                        $(item.form21.cont).find('.bcloseOpen').addClass('fa-sort-up');
                        $(item.form21.cont).find('.bcloseOpen').parent().css('top', '8px');
                        $(item.form21.grid).css('height', '0px');
                        $(item).find('.dhxform_obj_dhx_skyblue').css('height', '32px');
                        item.callEvent("onChange", [item._idd, fself.getValue(item), 5]);
                    } else {
                        $(item.form21.cont).find('.infoSpanVal').html($(this).val())
                        item.callEvent("onChange", [item._idd, fself.getValue(item), 5]);
                    }
                    console.log($(this).val())
                        //if($(this).val())
                }
            });
            inp.inputmask({
                mask: '9{1,3}',
            });

        }


        if (data.multi == true) {
            //$(item.form21.cont).find('.bcloseOpen').hide();
        }
        item.openDiv = function() {
            var iel = $(this.form21.cont).find('i');
            $(iel).removeClass('fa-sort-up');
            $(iel).addClass('fa-sort-down');
            $(iel).parent().css('top', '-4px');
            $(this.form21.grid).css('height', 'auto');

            //console.log('item.openDiv', this.form21.grid);
            //alert()
            $(this).find('.dhxform_obj_dhx_skyblue').css('height', 'auto');

            $(this.form21.grid).find('.dhxform_container').css('height', 'auto');
            $(this.form21.grid).css('display', 'flex');
            $(this.form21.grid).css('overflow', 'auto');
            $(this.form21.grid).css('flex-wrap', 'wrap');
            $(this.form21.grid).css('margin-top', '-30px');

        }
        if (data.value != undefined && data.value != '') {
            this.setValue(item, data.value)
        }
        return this;
    },
    enable: function(item) {
        item.lastChild.style.color = "black";
        item._enabled = true;
    },

    disable: function(item) {
        item.lastChild.style.color = "gray";
        item._enabled = false;
    },
    destruct: function(item) {
        item.innerHTML = "";
    },
    setDataList: function(item, data) {
        //console.log('setDataList', data)
        $(item.form21.grid).empty();
        for (var i = 0; i < data.length; i++) {
            var div = $('<div>').appendTo($(item.form21.grid));
            div.css('margin', '5px');
            div.css('padding', '4px');
            div.css('border', '1px solid');
            div.css('cursor', 'pointer');
            div.addClass('fsmultyItem');

            div.html(data[i].text);
            div.data('fitem', item);
            div.data('fself', this);
            div.data('multi', item.multi);
            div.data('text', data[i].text);
            div.data('value', data[i].value);
            div.click(function() {
                var item = $(this).data('fitem');
                var fself = $(this).data('fself');
                if ($(this).data('multi') == true) {
                    //$(this).parent().find('div').removeClass('hideMultyItem');


                    if ($(this).hasClass('selectMultyItem')) {
                        $(this).removeClass('selectMultyItem');
                    } else {
                        $(this).addClass('selectMultyItem');
                    }
                } else {
                    $(this).parent().find('div').removeClass('selectMultyItem');
                    $(this).addClass('selectMultyItem');
                    $(item.form21.cont).find('.infoSpanVal').html($(this).data('text'))
                    $(item.form21.cont).find('.infoSpanVal').show();
                    $(item.form21.cont).find('.bcloseOpen').removeClass('fa-sort-down');
                    $(item.form21.cont).find('.bcloseOpen').addClass('fa-sort-up');
                    $(item.form21.cont).find('.bcloseOpen').parent().css('top', '8px');
                    $(item.form21.grid).css('height', '0px');
                    $(item).find('.dhxform_obj_dhx_skyblue').css('height', '32px');

                }
                item.callEvent("onChange", [item._idd, fself.getValue(item)]);
            })
        }
        if (item.multi == true) {
            item.openDiv();
        }

    },
    setValue: function(item, data) {
        data = data + '';
        //console.log(data)
        if (data == null) return;

        item._value = data;
        var div = $(item).find('.fsmultyItem');
        var ar = data.split('|');
        div.removeClass('selectMultyItem');
        var flagCustom = true;
        for (var i = 0; i < div.length; i++) {
            if (ar.indexOf($(div[i]).data('text')) != -1) {
                $(div[i]).addClass('selectMultyItem');
                $(item.form21.cont).find('.infoSpanVal').html(data);
                flagCustom = false;
            } else {
                if (item.multi) {
                    $(div[i]).addClass('hideMultyItem');
                }
            }
        }

        if (item.multi == false) {
            if (data != '' && data.indexOf('|') == -1) {
                //flagCustom = true;
                $(item.form21.cont).find('.infoSpanVal').show();
                $(item.form21.cont).find('.bcloseOpen').removeClass('fa-sort-down');
                $(item.form21.cont).find('.bcloseOpen').addClass('fa-sort-up');
                $(item.form21.cont).find('.bcloseOpen').parent().css('top', '8px');
                $(item.form21.grid).css('height', '0px');
                $(item).find('.dhxform_obj_dhx_skyblue').css('height', '32px');
            } else {
                $(item.form21.cont).find('.infoSpanVal').hide();
                $(item.form21.grid).css('height', 'auto');
                $(item).find('.dhxform_obj_dhx_skyblue').css('height', 'auto');
            }
        }
        if (flagCustom == true) {
            $(item.form21.cont).find('.infoSpanVal').html(data);
            $(item.form21.cont).find('.customV').val(data);

        }
    },
    getValue: function(item, flag) {
        var data = $(item).find('.selectMultyItem');
        var val = '';
        for (var i = 0; i < data.length; i++) {
            if (val != '') val += '|';
            val += $(data[i]).data('text');
        }
        if (flag) {
            for (var i = 0; i < item._data.length; i++) {
                if (item._data[i].text == val) {
                    val = item._data[i].value;
                }
            }
        }

        if ($(item).find('.customV').length > 0 && $(item).find('.customV').val() != '') {
            val = $(item).find('.customV').val();
        }

        return val;
    }
};
dhtmlXForm.prototype.setDataList = function(name, text) {
    this.doWithItem(name, "setDataList", text);
};
dhtmlXForm.prototype.setFormData_MultyCian = function(name, value) {
    return this.doWithItem(name, "setValue", value);
};
dhtmlXForm.prototype.getFormData_MultyCian = function(name) {
    return this.doWithItem(name, "getValue");
};

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function generateUID() {
    return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
}

function showProcess() {
    winProcess = myWins.createWindow({
        id: "about",
        left: 20,
        top: 30,
        width: 500,
        height: 130,
        center: true,
        modal: true,
    });
    winProcess.hideHeader();
    winProcess.progressOn();
}
var rent21 = {
    createForm: {
        Build21: function(p) {
            $(p).css('height', $(window).height() + 'px');
            var myLayout = new dhtmlXLayoutObject(p, "3W");
            $(myLayout.cells('a').cell).find('.dhx_cell_cont_layout').css('padding', '6px');
            this.Adres21($(myLayout.cells('a').cell).find('.dhx_cell_cont_layout')[0]);
            myLayout.cells('b').attachForm([
                /*            {
                            type: "block",
                            blockOffset: 0,
                            list: [{
                                type: "button",
                                name: "b1",
                                value: "Главная"
                            }, {
                                type: "newcolumn"
                            }, {
                                type: "button",
                                name: "b2",
                                value: "Файлы",
                                hidden: false
                            }, {
                                type: "newcolumn"
                            }, {
                                type: "button",
                                name: "b3",
                                value: "Собственики",
                                hidden: true
                            }, {
                                type: "newcolumn"
                            }, {
                                type: "button",
                                name: "b4",
                                value: "Арендаторы",
                                hidden: true

                            }, {
                                type: "newcolumn"
                            }, {
                                type: "button",
                                name: "b5",
                                value: "Показы",
                                hidden: true
                            }]
                        },*/
                {
                    type: "settings",
                    position: "label-left",
                }, {
                    type: "block",
                    name: "blGL",
                    //inputWidth: 120,
                    offsetLeft: 10,
                    list: [{
                            type: "settings",
                            position: "label-left",
                            //inputWidth: 120,
                            labelWidth: 80,
                        }, {
                            type: 'hidden',
                            name: 'field_UID'
                        }, {
                            type: 'input',
                            position: "label-left",
                            label: "Наименование",
                            value: "",
                            inputWidth: 380,
                            name: "field_NAME",
                            required: true,

                        }, {
                            type: "block",
                            //name: 'firstBl',
                            blockOffset: 0,
                            inputWidth: 450,
                            list: [{
                                    type: "block",
                                    inputWidth: 240,
                                    blockOffset: 0,
                                    list: [{
                                        type: 'combo',
                                        position: "label-left",
                                        label: "Проверен",
                                        value: 0,
                                        inputWidth: 140,
                                        labelWidth: 80,
                                        hidden: true,
                                        name: "field_STATUS",
                                        options: [{
                                            text: "Проверен",
                                            value: "Проверен"
                                        }, {
                                            text: "Непроверен",
                                            value: "Непроверен",
                                            selected: true
                                        }, ]
                                    }, {
                                        type: 'input',
                                        position: "label-left",
                                        label: "Этажность",
                                        required: true,
                                        value: "",
                                        inputWidth: 20,
                                        labelWidth: 80,
                                        name: "field_ETAGALL",
                                    }, {
                                        type: 'input',
                                        position: "label-left",
                                        label: "Урл",
                                        value: "",
                                        hidden: true,
                                        inputWidth: 160,
                                        labelWidth: 80,
                                        name: "field_URL",
                                    }]
                                }, {
                                    type: 'newcolumn',
                                    offset: 10
                                }, {
                                    type: "container",
                                    name: "firstphoto",
                                    label: "",
                                    inputWidth: 180,
                                    inputHeight: 120
                                }

                                /*
                            {
                                type: "image",
                                name: "firstphoto",
                                disabled: true,
                                url: '/image/?thumbnail=1&first=1&idklient=' + win.fotouid,

                                //value: '/image/?first=1&thumbnail=1&idklient=' + win.fotouid,
                                position: "label-top",
                                offsetTop: 8,
                                imageWidth: 120,
                                imageHeight: 120,
                                inputWidth: 140,
                                inputHeight: 140
                            }
*/
                            ]

                        }, {
                            type: 'MultyCian',
                            position: "label-left",
                            label: "Тип здания",
                            value: 0,
                            labelWidth: 90,
                            // inputWidth: 440,
                            multi: false,
                            required: true,

                            name: "field_TIPZD",
                            options: arType["Офис"]
                        }, {
                            type: 'MultyCian',
                            position: "label-left",
                            label: "Класс здания",
                            // inputWidth: 440,
                            labelWidth: 80,
                            multi: false,
                            name: "field_KLASS",
                            required: true,
                            options: [{
                                text: "A",
                                value: "a"
                            }, {
                                text: "A+",
                                value: "aPlus"
                            }, {
                                text: "B",
                                value: "b"
                            }, {
                                text: "B-",
                                value: "bMinus"
                            }, {
                                text: "B+",
                                value: "bPlus"
                            }, {
                                text: "C",
                                value: "c"
                            }, {
                                text: "Нет",
                                value: null,
                                selected: true
                            }]
                        },
 {
                            type: "checkbox",
                            label: "Комм. фонд",
                            position: "label-left",
                            name: "field_FONDKOM",
                            checked: false
                        }, {
                            type: "checkbox",
                            label: "жилой. фонд",
                            position: "label-left",
                            name: "field_FONDH",
                            checked: false
                        }, {
                            type: "checkbox",
                            label: "частный фонд",
                            position: "label-left",
                            name: "field_FONDZ",
                            checked: false
                        },
                        {
                            type: "block",
                            name: 'firstBl',
                        }
                        , {
                            type: "adRes21",
                            label: "Адрес здания",
                            offsetLeft: 0,
                            offset: 0,
                            inputLeft: 0,

                            name: 'adres'
                        }, {
                            type: 'input',
                            position: "label-left",
                            label: "Год постройки",
                            value: "",
                            numberFormat: "0000",
                            labelWidth: 140,
                            inputWidth: 35,
                            name: "field_GODP",

                        }, {
                            type: 'input',
                            position: "label-left",
                            label: "Год реконструкции",
                            value: "",
                            numberFormat: "0000",
                            labelWidth: 140,
                            inputWidth: 35,
                            name: "field_GODR",
                        }, {
                            type: 'input',
                            position: "label-left",
                            label: "Площадь здания",
                            value: "",
                            labelWidth: 140,
                            inputWidth: 60,
                            name: "field_PLALL",

                        }, {
                            type: 'input',
                            position: "label-left",
                            label: "Площадь участка",
                            value: "",
                            labelWidth: 140,
                            inputWidth: 60,
                            name: "field_PLALLZ",

                        }, {
                            type: 'calendar',
                            position: "label-left",
                            label: "Год договора<br>аренды участка",
                            value: "",
                            labelWidth: 140,
                            inputWidth: 120,
                            name: "field_GODAR",
                        }, {
                            type: 'MultyCian',
                            position: "label-left",
                            label: "Парковочный<br>коэффициент",
                            // inputWidth: 440,
                            labelWidth: 140,
                            multi: false,
                            //offsetLeft: 24,
                            name: "field_PARKKOEF",
                            options: [{
                                text: "Не ограничено",
                                value: "Не ограничено"
                            }, {
                                text: "Неизвестно",
                                value: "Неизвестно",
                                selected: true

                            }, {
                                text: "1:50",
                                value: "1:50"
                            }, {
                                text: "1:100",
                                value: "1:100"
                            }, {
                                text: "1:150",
                                value: "1:150"
                            }, {
                                text: "1:200",
                                value: "1:200"
                            }]
                        },

                        {
                            type: "MultyCian",
                            name: "field_VentilationType",
                            label: 'Вентиляция:',
                            // inputWidth: 440,
                            labelWidth: 90,
                            multi: false,
                            options: [{
                                text: "Приточная",
                                value: "forced"
                            }, {
                                text: "Естественная",
                                value: "natural"
                            }, {
                                text: "Нет",
                                value: "no"
                            }]
                        }, {
                            type: "MultyCian",
                            name: "field_ConditioningType",
                            label: 'Кондиционирование:',
                            // inputWidth: 440,
                            labelWidth: 90,
                            multi: false,
                            options: [{
                                text: "Центральное",
                                value: "central"
                            }, {
                                text: "Местное",
                                value: "local"
                            }, {
                                text: "Нет",
                                value: "no"
                            }]
                        }, {
                            type: "MultyCian",
                            name: "field_ExtinguishingSystemType",
                            label: 'Система<br>пожаротушения:',
                            // inputWidth: 440,
                            labelWidth: 90,
                            multi: false,
                            options: [{
                                text: "Сигнализация",
                                value: "alarm"
                            }, {
                                text: "Газовая",
                                value: "gas"
                            }, {
                                text: "Гидрантная",
                                value: "hydrant"
                            }, {
                                text: "Нет",
                                value: "no"
                            }, {
                                text: "П��рошковая",
                                value: "powder"
                            }, {
                                text: "Спринклерная",
                                value: "sprinkler"
                            }]
                        }, {
                            type: "MultyCian",
                            name: "field_StatusType",
                            label: 'Категория:',
                            // inputWidth: 440,
                            labelWidth: 90,
                            multi: false,
                            options: [{
                                text: "Действующее",
                                value: "operational"
                            }, {
                                text: "Проект",
                                value: "project"
                            }, {
                                text: "Строящееся",
                                value: "underConstruction"
                            }]
                        }, {
                            type: "MultyCian",
                            name: "field_AccessType",
                            label: 'Вход:',
                            // inputWidth: 440,
                            labelWidth: 90,
                            multi: false,
                            options: [{
                                text: "Свободный",
                                value: "free"
                            }, {
                                text: "Пропускная система",
                                value: "passSystem"
                            }]
                        }, {
                            type: "MultyCian",
                            name: "field_Infrastructure",
                            label: 'Инфраструктура:',
                            // inputWidth: 440,
                            inputHeight: 12,
                            labelWidth: 90,
                            options: [{
                                text: "Автомойка",
                                value: "HasCarWash"
                            }, {
                                text: "Буфет",
                                value: "HasBuffet"
                            }, {
                                text: "Автосервис",
                                value: "HasCarService"
                            }, {
                                text: "Столовая",
                                value: "HasCanteen"
                            }, {
                                text: "Центральная рецепция",
                                value: "HasCentralReception"
                            }, {
                                text: "Гостиница",
                                value: "HasHotel"
                            }, {
                                text: "Банкомат",
                                value: "HasAtm"
                            }, {
                                text: "Выставочно-складской комплекс",
                                value: "HasExhibitionAndWarehouseComplex"
                            }, {
                                text: "Аптека",
                                value: "HasPharmacy"
                            }, {
                                text: "Отделение банка",
                                value: "HasBankDepartment"
                            }, {
                                text: "Кинотеатр",
                                value: "HasCinema"
                            }, {
                                text: "Кафе",
                                value: "HasCafe"
                            }, {
                                text: "Медицинский центр",
                                value: "HasMedicalCenter"
                            }, {
                                text: "Салон красоты",
                                value: "HasBeautyShop"
                            }, {
                                text: "Фотосалон",
                                value: "HasStudio"
                            }, {
                                text: "Нотариальная контора",
                                value: "HasNotaryOffice"
                            }, {
                                text: "Бассейн",
                                value: "HasPool"
                            }, {
                                text: "Ателье одежды",
                                value: "HasClothesStudio"
                            }, {
                                text: "Складские помещения",
                                value: "HasWarehouse"
                            }, {
                                text: "Парк",
                                value: "HasPark"
                            }, {
                                text: "Ресторан",
                                value: "HasRestaurant"
                            }, {
                                text: "Фитнес-центр",
                                value: "HasFitnessCentre"
                            }, {
                                text: "Супермаркет",
                                value: "HasSupermarket"
                            }, {
                                text: "Минимаркет",
                                value: "HasMinimarket"
                            }, {
                                text: "Торговая зона",
                                value: "HasShoppingArea"
                            }, {
                                text: "Конференц-зал",
                                value: "HasConferenceRoom"
                            }]
                        }

                        , {
                            type: "block",
                            list: [{
                                    type: "combo",
                                    position: "label-left",
                                    label: "Паркинг наземный",
                                    name: "field_PARKNAZ",
                                    inputWidth: 150,
                                    labelWidth: 140,
                                    options: [{
                                        text: "Стихийный",
                                        value: "Стихийный"
                                    }, {
                                        text: "Нет",
                                        value: "Нет",
                                        selected: true

                                    }, {
                                        text: "Охраняемый",
                                        value: "Охраняемый"
                                    }]
                                }, {
                                    type: "newcolumn"
                                }, {
                                    type: 'input',
                                    position: "label-left",
                                    label: "Цена",
                                    value: "",
                                    labelWidth: 50,
                                    inputWidth: 40,
                                    name: "field_PARKNAZCENA",

                                }

                            ]
                        }, {
                            type: "block",
                            list: [{
                                type: "combo",
                                position: "label-left",
                                label: "Паркинг крытый",
                                name: "field_PARKKR",
                                inputWidth: 150,
                                labelWidth: 140,
                                options: [{
                                    text: "Нет",
                                    value: "Нет",
                                    selected: true

                                }, {
                                    text: "Подземный",
                                    value: "Подземный"
                                }, {
                                    text: "Наземный",
                                    value: "Наземный"
                                }, {
                                    text: "Наземный многоярусный",
                                    value: "Наземный многоярусный"
                                }, {
                                    text: "Типа бокс",
                                    value: "Типа бокс"
                                }]
                            }, {
                                type: "newcolumn"
                            }, {
                                type: 'input',
                                position: "label-left",
                                label: "Цена",
                                value: "",
                                labelWidth: 50,
                                inputWidth: 40,
                                name: "field_PARKKRCENA",
                            }]
                        }


                    ]
                }, {
                    type: "container",
                    inputHeight: 52
                }
            ]);
            var item = $(myLayout.cells('c').cell).find('.dhx_cell_cont_layout');
            window.item = item;
            item.css('overflow', 'auto');
            var opp = "Аренда";
            var tip = "Здание";
            var jsname = '';
            if (opp == 'Аренда') {
                if (tip == 'Гараж') jsname = 'garageRent.jsr';
                if (tip == 'Готовый бизнес') jsname = 'businessRent.jsr';
                if (tip == 'Здание') jsname = 'all.js'; //jsname = 'buildingRent.json';
                if (tip == 'Коммерческая земля') jsname = 'all.jsr'; //jsname = 'commercialLandRent.json';
                if (tip == 'Офис') jsname = 'all.jsr'; //jsname = 'officeRent.json';
                if (tip == 'Помещение свободного назначения') jsname = 'freeAppointmentObjectRent.jsr';
                if (tip == 'Производство') jsname = 'all.jsr'; //'industryRent.json';
                if (tip == 'Склад') jsname = 'warehouseRent.jsr'; // jsname = 'warehouseRent.jsr';
                if (tip == 'Торговая площадь') jsname = 'shoppingAreaRent.jsr';
            } else {
                if (tip == 'Гараж') jsname = 'garageSale.jsr';
                if (tip == 'Готовый бизнес') jsname = 'sale.jsr'; // jsname = 'businessSale.json';
                if (tip == 'Здание') jsname = 'sale.jsr'; // jsname = 'buildingSale.json';
                if (tip == 'Коммерческая земля') jsname = 'sale.jsr'; // jsname = 'commercialLandSale.json';
                if (tip == 'Офис') jsname = 'sale.jsr'; // jsname = 'officeSale.json';
                if (tip == 'Помещение свободного назначения') jsname = 'freeAppointmentObjectSale.jsr';
                if (tip == 'Производство') jsname = 'sale.jsr'; // jsname = 'industrySale.json';
                if (tip == 'Склад') jsname = 'sale.jsr'; // jsname = 'warehouseSale.json';
                if (tip == 'Торговая площадь') jsname = 'sale.jsr'; // jsname = 'shoppingAreaSale.json';
            }
            $.get('/js/revolution/formEdit/' + jsname, function(data) {
                //eval(data);
                item.css('overflow', 'auto');
                item.form21.attachEvent("onButtonClick", function(name) {
                    BX24.selectCRM({
                        entityType: ['company'],
                        multiple: false,
                        value: []
                    }, function() {
                        console.log(arguments);
                    })
                });
            })



        },
        Adres21: function(p) {
            var form21 = new dhtmlXForm(p, [{
                    type: "settings",
                    // inputWidth: 440,
                    inputHeight: 25,
                    offsetLeft: 0,
                    offset: 0,
                    position: "label-top"
                }, {
                    type: "hidden",
                    name: "NALOGKOD",
                    value: 0,
                    userdata: {
                        flabel: 'NALOGKOD'
                    }
                },

                {
                    type: "hidden",
                    name: "UID",
                    value: generateUID(),
                    userdata: {
                        flabel: 'UID'
                    }
                }, {
                    type: "hidden",
                    name: "LAT",
                    value: 0,
                    userdata: {
                        flabel: 'LAT'
                    }
                }, {
                    type: "hidden",
                    name: "LNG",
                    value: 0,
                    userdata: {
                        flabel: 'LNG'
                    }
                }, {
                    type: "input",
                    name: "YADRES",
                    label: "Строка ввода адреса  <a href='#' class='bAddrEdit' >Редактировать</a>",
                    value: "",
                    tooltip: "Введите адрес",
                    required: true,
                    info: true,
                    userdata: {
                        flabel: 'YADRES'
                    }
                },


                {
                    type: 'block',
                    name: 'mapBlock',
                    disabled: false,
                    offsetLeft: 0,
                    offset: 0,
                    inputLeft: 0,
                    list: [{
                            type: "settings",
                            inputWidth: 400,
                            inputHeight: 25,
                            offsetLeft: 0,
                            offset: 0,
                            position: "label-left"
                        }, {
                            type: "container",
                            name: "mapYandex",
                            offsetLeft: 0,
                            offset: 0,
                            inputLeft: 0,
                            inputHeight: 222,
                            //inputWidth: 170
                        }

                        , {
                            type: 'newcolumn'
                        }, {
                            type: "block",
                            blockOffset: 0,
                            offsetLeft: 10,
                            inputHeight: 25,
                            inputWidth: 250,
                            list: [{
                                    type: "settings",
                                    position: "label-left",
                                    labelWidth: 60
                                }, {
                                    position: "label-left",
                                    type: "input",
                                    name: "GOROD",
                                    label: "Нас. пункт",
                                    inputWidth: 180,
                                    readonly: true,
                                    value: "",
                                    tooltip: "",
                                    required: false,
                                    info: false,
                                    inputHeight: 16,
                                    userdata: {
                                        flabel: 'GOROD'
                                    }

                                }, {
                                    position: "label-left",
                                    inputWidth: 180,
                                    type: "input",
                                    name: "RAJON",
                                    label: "Район",
                                    value: "",
                                    tooltip: "",
                                    readonly: true,
                                    required: false,
                                    info: false,
                                    inputHeight: 16,
                                    userdata: {
                                        flabel: 'RAJON'
                                    }

                                }, {
                                    position: "label-left",
                                    inputWidth: 180,
                                    type: "input",
                                    name: "OKRUG",
                                    label: "Округ",
                                    value: "",
                                    tooltip: "",
                                    readonly: true,
                                    required: false,
                                    info: false,
                                    inputHeight: 16,
                                    userdata: {
                                        flabel: 'OKRUG'
                                    }

                                },

                                {
                                    position: "label-left",
                                    type: "input",
                                    name: "ULITCA",
                                    label: "Улица",
                                    value: "",
                                    tooltip: "",
                                    inputWidth: 180,
                                    readonly: true,
                                    required: false,
                                    info: false,
                                    inputHeight: 16,
                                    userdata: {
                                        flabel: 'ULITCA'
                                    }

                                }, {
                                    position: "label-left",
                                    type: "input",
                                    name: "DOM",
                                    label: "Дом          ",
                                    value: "",
                                    tooltip: "",
                                    readonly: true,
                                    required: false,
                                    inputWidth: 80,
                                    inputLeft: 90,
                                    info: false,
                                    inputHeight: 16,
                                    userdata: {
                                        flabel: 'DOM'
                                    }
                                }, {
                                    position: "label-left",
                                    type: "input",
                                    name: "NALOGNAME",
                                    label: "Налоговая",
                                    inputWidth: 180,

                                    value: "",
                                    tooltip: "",
                                    readonly: true,
                                    required: false,
                                    info: false,
                                    inputHeight: 16,
                                    userdata: {
                                        flabel: 'NALOGNAME'
                                    }

                                }


                            ]
                        }
                    ]
                }, {
                    type: 'button',
                    name: "metroR",
                    value: "Радиус метро 0.04"
                }, {
                    type: "block",
                    blockOffset: 0,
                    offsetLeft: 0,
                    name: "metro"
                }
            ]);
            form21.radius = 0.04;
            form21.map = new ymaps.Map(form21.getContainer('mapYandex'), {
                center: [55.76, 37.64],
                zoom: 16,
                controls: []
            });
            form21.map.controls.add('zoomControl', {
                position: {
                    right: 10,
                    top: 10
                }
            });
            form21.map.form = form21;
            var myFormAdres = form21;
            var flagEdit = true;
            var oldv = [0, 0];
            var suggestView = new ymaps.SuggestView($(form21._getItemByName('YADRES')).find('input')[0]);
            suggestView.state.findMap = form21.map;
            suggestView.state.events.add('change', function(e) {
                var activeIndex = suggestView.state.get('activeIndex');
                if (typeof activeIndex == 'number') {
                    var activeItem = suggestView.state.get('items')[activeIndex];
                    if (activeItem && flagEdit) {
                        var myGeocoder = ymaps.geocode(activeItem.value);
                        myGeocoder.then(
                            function(res) {
                                v = res.geoObjects.get(0).geometry.getCoordinates();
                                e.originalEvent.target.findMap.setCenter(v, 16);
                            },
                            function(err) {
                                console.log('Ошибка');
                            }
                        );
                    }
                }
            });
            form21.map.events.add('actionend', function(e) {
                var v = e.originalEvent.map.getCenter();
                if (flagEdit && (oldv[0] != v[0] && oldv[1] != v[1])) {
                    flagEdit = false;
                    oldv[0] = v[0];
                    oldv[1] = v[1];
                    e.originalEvent.map.geoObjects.removeAll();
                    var myGeoObject = new ymaps.GeoObject({
                        geometry: {
                            type: "Point",
                            coordinates: v
                        },
                        properties: {}
                    }, {
                        preset: 'islands#blackStretchyIcon',
                        draggable: false
                    });
                    e.originalEvent.map.geoObjects.add(myGeoObject);
                    var map = e.originalEvent.map;
                    flagEdit = true;

                    var myGeocoder = ymaps.geocode(v);
                    myGeocoder.then(
                        function(res) {
                            v = res.geoObjects.get(0).geometry.getCoordinates();
                            var meta = res.geoObjects.get(0).properties.get('metaDataProperty');
                            var postCode = meta.GeocoderMetaData.Address.postal_code;
                            var listAddr = meta.GeocoderMetaData.Address.Components;
                            var house = "";
                            for (var i = 0; i < listAddr.length; i++) {
                                if (listAddr[i].kind == 'house') {
                                    house = listAddr[i].name.replace('с', 'стр');
                                }
                            }

                            meta = meta.GeocoderMetaData;
                            r = meta.text;
                            r = r.replace('Россия, ', '');
                            r = r.replace(',', '');
                            url = "https://kladr-api.ru/api.php?query=" + r + "&oneString=1&limit=1&withParent=1";
                            $.ajax({
                                url: url,
                                dataType: 'jsonp',
                                success: function(data) {
                                    if (data && data.result) {
                                        obj = data.result[0];
                                        var sid = obj.id;
                                        $.ajax({
                                            url: 'https://rent21.ru/getkladr.php?nalog=' + sid, // указываем URL и
                                            dataType: "json", // тип загружаемых данных
                                            success: function(data, textStatus) { // вешаем свой обработчик на функцию success

                                                if (data[0]) {
                                                    if (myFormAdres) {
                                                        myFormAdres.setItemValue('NALOGNAME', data[0].NAIMK);
                                                        myFormAdres.setItemValue('NALOGKOD', data[0].KOD);

                                                    }
                                                }

                                            }
                                        });
                                    }
                                }
                            });
                            for (var i = 0; i < meta.Address.Components.length; i++) {
                                if (meta.Address.Components[i].kind == 'locality') myFormAdres.setItemValue('GOROD', meta.Address.Components[i].name);
                                if (meta.Address.Components[i].kind == 'street') {
                                    myFormAdres.setItemValue('ULITCA', meta.Address.Components[i].name)
                                };
                                if (meta.Address.Components[i].kind == 'house') myFormAdres.setItemValue('DOM', meta.Address.Components[i].name);
                                //window['updateFormSF'](myFormAdres.getItemValue('GOROD') + ', ' + myFormAdres.getItemValue('ULITCA') + ', ' + myFormAdres.getItemValue('DOM'));

                                if (
                                    window['updateFormSF'] &&
                                    myFormAdres.getItemValue('GOROD') != '' &&
                                    myFormAdres.getItemValue('ULITCA') != '' &&
                                    myFormAdres.getItemValue('DOM') != ''
                                ) {
                                    window['updateFormSF'](myFormAdres.getItemValue('GOROD') + ', ' + myFormAdres.getItemValue('ULITCA') + ', ' + myFormAdres.getItemValue('DOM'));
                                }
                            }
                        },
                        function(err) {
                            console.log('Ошибка');
                        }
                    )

                    map.form.setItemValue('LAT', v[1]);
                    map.form.setItemValue('LNG', v[0]);
                    //?apikey=80f1ab75-f93f-476a-ab4c-4f8de2496f76&format=json
                    $.ajax({
                        form: map.form,
                        type: 'POST',
                        url: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address',
                        //dataType: "application/json",
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': 'Token d7ea78712d8f7dcd2ff6b781ae949470562df9eb'
                        },
                        data: JSON.stringify({
                            lat: v[0],
                            lon: v[1],
                            count: 1
                        }),
                        //Authorization: 'Token d7ea78712d8f7dcd2ff6b781ae949470562df9eb',
                        //crossDomain: true, // тип загружаемых данных
                        success: function(data) { // вешаем свой обработчик на функцию success
                            if (data.suggestions.length > 0) {


                            }
                        },
                        error: function(data) {
                            console.log(JSON.parse(data.responseText))
                        }
                    });

                    var url = "//geocode-maps.yandex.ru/1.x/?apikey=80f1ab75-f93f-476a-ab4c-4f8de2496f76&geocode=" + v[1] + "," + v[0] + "&kind=district&format=json"; //&rspn=1&spn=0.03,0.03";
                    $.ajax({
                        form: map.form,
                        url: url, // указываем URL и
                        dataType: "json",
                        crossDomain: true, // тип загружаемых данных
                        success: function(data, textStatus) { // вешаем свой обработчик на функцию success
                            var ar = data.response.GeoObjectCollection.featureMember;
                            for (var i = 0; i < ar.length; i++) {
                                if (ar[i].GeoObject.name.indexOf('административный округ') != -1) {
                                    this.form.setItemValue('OKRUG', ar[i].GeoObject.name.replace(' административный округ', ''));
                                } else {
                                    this.form.setItemValue('RAJON', ar[i].GeoObject.name.replace(' район', ''));
                                }
                            }
                        }
                    });


                    var url = "//geocode-maps.yandex.ru/1.x/?apikey=80f1ab75-f93f-476a-ab4c-4f8de2496f76&geocode=" + v[1] + "," + v[0] + "&kind=metro&format=json&spn=0.04,0.04";
                    $.ajax({
                        form: map.form,
                        url: url, // указываем URL и
                        dataType: "json",
                        crossDomain: true, // тип загружаемых данных
                        success: function(data, textStatus) { // вешаем свой обработчик на функцию success
                            var globalMetro = [];
                            var ar = data.response.GeoObjectCollection.featureMember;
                            var opts = []; //myFormAdres.getOptions('METRO');
                            var a = [];
                            var data = this.form.getFormData();
                            for (var key in data) {
                                if (this.form.getUserData(key, 'metro') != '') {
                                    this.form.removeItem(key);
                                }

                            }

                            for (var i = 0; i < ar.length; i++) {
                                var g = ar[i].GeoObject.Point.pos.split(' ');
                                g[0] = 1 * g[0];
                                g[1] = 1 * g[1];
                                var metroName = ar[i].GeoObject.name.replace('метро ', '');
                                if (a.indexOf(metroName) == -1 &&
                                    metroName.indexOf('E14') == -1 &&
                                    metroName.indexOf('14E') == -1 &&
                                    metroName.indexOf('14Е') == -1 &&
                                    metroName.indexOf('14e') == -1) {
                                    a.push(metroName);
                                    var subkey = generateUID();
                                    this.form.addItem('metro', {
                                        type: "block",
                                        blockOffset: 0,
                                        list: [{
                                            type: 'input',
                                            value: metroName,
                                            position: "label-left",
                                            inputWidth: 170,
                                            userdata: {
                                                metro: metroName,
                                                flabel: 'METRO',
                                                puid: subkey
                                            }

                                        }, {
                                            type: "newcolumn"
                                        }, {
                                            type: "select",

                                            position: "label-left",
                                            inputWidth: 120,
                                            inputHeight: 35,
                                            userdata: {
                                                metro: metroName,
                                                flabel: 'UDTIP',
                                                puid: subkey
                                            },
                                            options: [{
                                                text: "Транспортом",
                                                value: "transport",
                                            }, {
                                                text: "Пешком",
                                                value: "walk",
                                                selected: true,
                                            }],
                                            value: 'walk',
                                        }, {
                                            type: "newcolumn"
                                        }, {
                                            type: 'input',
                                            position: "label-left",
                                            value: 0,
                                            inputWidth: 40,
                                            userdata: {
                                                metro: metroName,
                                                flabel: 'UD',
                                                puid: subkey
                                            }
                                        }, {
                                            type: "newcolumn"
                                        }, {
                                            type: "checkbox",
                                            position: "label-left",
                                            checked: false,
                                            userdata: {
                                                metro: metroName,
                                                flabel: 'GLMETRO',
                                                puid: subkey
                                            }
                                        }]
                                    });
                                }
                            }
                        }
                    });
                }
            });

            BX24.callMethod('entity.item.get', {
                ENTITY: 'adres21',
                SORT: {
                    DATE_ACTIVE_FROM: 'ASC',
                    ID: 'ASC'
                },
                FILTER: {
                    ID: 7265
                }
            }, function(data) {
                var list = data.data();
                for (var i = 0; i < list.length; i++) {
                    var ob = list[i].PROPERTY_VALUES;
                    if (ob.METRO) {
                        ob.METRO = JSON.parse(ob.METRO);
                    }
                }
                for (var key in ob) {
                    if (form21.isItem(key)) {
                        form21.setItemValue(key, ob[key]);
                    }
                }
                if (ob.METRO) {
                    for (var key in ob.METRO) {
                        form21.addItem('metro', {
                            type: "block",
                            blockOffset: 0,
                            list: [{
                                type: 'input',
                                value: ob.METRO[key].METRO,
                                position: "label-left",
                                inputWidth: 170,
                                userdata: {
                                    metro: ob.METRO[key].METRO,
                                    flabel: 'METRO',
                                    puid: key
                                }

                            }, {
                                type: "newcolumn"
                            }, {
                                type: "select",

                                position: "label-left",
                                inputWidth: 120,
                                inputHeight: 35,
                                userdata: {
                                    metro: ob.METRO[key].METRO,
                                    flabel: 'UDTIP',
                                    puid: key
                                },
                                options: [{
                                    text: "Транспортом",
                                    value: "transport",
                                }, {
                                    text: "Пешком",
                                    value: "walk",
                                    selected: true,
                                }],
                                value: ob.METRO[key].UDTIP,
                            }, {
                                type: "newcolumn"
                            }, {
                                type: 'input',
                                position: "label-left",
                                value: ob.METRO[key].UD,
                                inputWidth: 40,
                                userdata: {
                                    metro: ob.METRO[key].METRO,
                                    flabel: 'UD',
                                    puid: key
                                }
                            }, {
                                type: "newcolumn"
                            }, {
                                type: "checkbox",
                                position: "label-left",
                                checked: ob.METRO[key].GLMETRO,
                                userdata: {
                                    metro: ob.METRO[key].METRO,
                                    flabel: 'GLMETRO',
                                    puid: key
                                }
                            }]
                        });

                    }
                }
                console.log(ob, form21.getFormData());
            });

        },
        wizard: {
            Build21: function(p, clusterer) {
                var myLayout = new dhtmlXLayoutObject(p, "2E");
                myLayout.cells('a').hideHeader();
                myLayout.cells('b').hideHeader();
                myLayout.cells('a').setHeight(10);
                var inp = $('<input style="width:99%;height:25px">').appendTo($(myLayout.cells('a').cell).find('.dhx_cell_cont_layout'));
                var map = new ymaps.Map(myLayout.cells('b').cell, {
                    center: [55.76, 37.64],
                    zoom: 16,
                    controls: []
                });
                map.controls.add('zoomControl', {
                    position: {
                        right: 10,
                        top: 10
                    }
                });
                var suggestView = new ymaps.SuggestView(inp[0], {
                    container: myLayout.cells('b').cell
                });
                suggestView.state.findMap = map;
                suggestView.state.events.add('change', function(e) {
                    var activeIndex = suggestView.state.get('activeIndex');
                    if (typeof activeIndex == 'number') {
                        var activeItem = suggestView.state.get('items')[activeIndex];
                        if (activeItem) {
                            var myGeocoder = ymaps.geocode(activeItem.value);
                            myGeocoder.then(
                                function(res) {
                                    v = res.geoObjects.get(0).geometry.getCoordinates();
                                    e.originalEvent.target.findMap.setCenter(v, 16);
                                },
                                function(err) {
                                    console.log('Ошибка');
                                }
                            );
                        }
                    }
                });

                if (clusterer) {
                    map.geoObjects.add(clusterer);
                }
                myLayout.map = map;
                myLayout.attachEvent("onPanelResizeFinish", function(names) {
                    this.map.container.fitToViewport();
                });
                myLayout.attachEvent("onResizeFinish", function() {
                    this.map.container.fitToViewport();
                });
                return myLayout;
            }
        }
    },
    editBuild_: function(id) {
        BX24.openApplication({
                'name': "editBuild",
                left: 300,
                formRent: "editBuild",
                id: id
            },
            function(aaa) {
                console.log('Application closed!');
            }
        );
    },
    editBuild: function(id) {
        var timerStart = setInterval(function() {
            if (this.BX24) {
                clearInterval(timerStart);
                $(window.document.body).empty();
                rent21.createForm.Build21(window.document.body);
            }
        }, 100);
    },

    editAdres_: function(id) {
        BX24.openApplication({
                'name': "editAdres",
                left: 300,
                formRent: "editAdres",
                id: id
            },
            function(aaa) {
                console.log('Application closed!', this)
            }
        )
    },
    editAdres: function(id) {
        var timerStart = setInterval(function() {
            if (this.BX24) {
                clearInterval(timerStart);
                $(window.document.body).empty();
                var table = $('<table style="width:100%">').appendTo(window.document.body);
                var tr = $('<tr>').appendTo(table);
                var td = $('<td style="width:40%">').appendTo(tr);
                var tdMain = $('<td style="background-color:#e7f1ff;padding:6px">').appendTo(tr);
                var td = $('<td style="width:40%">').appendTo(tr);
                rent21.createForm.Adres21(tdMain[0]);
            }
        }, 100);
    }
}

var Base64 = (function make_b64(){
  var map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  return {
    encode: function(input) {
      var o = "";
      var c1=0, c2=0, c3=0, e1=0, e2=0, e3=0, e4=0;
      for(var i = 0; i < input.length; ) {
        c1 = input.charCodeAt(i++);
        e1 = (c1 >> 2);

        c2 = input.charCodeAt(i++);
        e2 = ((c1 & 3) << 4) | (c2 >> 4);

        c3 = input.charCodeAt(i++);
        e3 = ((c2 & 15) << 2) | (c3 >> 6);
        e4 = (c3 & 63);
        if (isNaN(c2)) { e3 = e4 = 64; }
        else if (isNaN(c3)) { e4 = 64; }
        o += map.charAt(e1) + map.charAt(e2) + map.charAt(e3) + map.charAt(e4);
      }
      return o;
    },
    decode: function b64_decode(input) {
      var o = "";
      var c1=0, c2=0, c3=0, e1=0, e2=0, e3=0, e4=0;
      input = input.replace(/[^\w\+\/\=]/g, "");
      for(var i = 0; i < input.length;) {
        e1 = map.indexOf(input.charAt(i++));
        e2 = map.indexOf(input.charAt(i++));
        c1 = (e1 << 2) | (e2 >> 4);
        o += String.fromCharCode(c1);

        e3 = map.indexOf(input.charAt(i++));
        c2 = ((e2 & 15) << 4) | (e3 >> 2);
        if (e3 !== 64) { o += String.fromCharCode(c2); }

        e4 = map.indexOf(input.charAt(i++));
        c3 = ((e3 & 3) << 6) | e4;
        if (e4 !== 64) { o += String.fromCharCode(c3); }
      }
      return o;
    }
  };
})();
var has_buf = (typeof Buffer !== 'undefined' && typeof process !== 'undefined' && typeof process.versions !== 'undefined' && process.versions.node);

var Buffer_from = function(){};

if(typeof Buffer !== 'undefined') {
  var nbfs = !Buffer.from;
  if(!nbfs) try { Buffer.from("foo", "utf8"); } catch(e) { nbfs = true; }
  Buffer_from = nbfs ? function(buf, enc) { return (enc) ? new Buffer(buf, enc) : new Buffer(buf); } : Buffer.from.bind(Buffer);
  // $FlowIgnore
  if(!Buffer.alloc) Buffer.alloc = function(n) { return new Buffer(n); };
  // $FlowIgnore
  if(!Buffer.allocUnsafe) Buffer.allocUnsafe = function(n) { return new Buffer(n); };
}

function new_raw_buf(len) {
  /* jshint -W056 */
  return has_buf ? Buffer.alloc(len) : new Array(len);
  /* jshint +W056 */
}

function new_unsafe_buf(len) {
  /* jshint -W056 */
  return has_buf ? Buffer.allocUnsafe(len) : new Array(len);
  /* jshint +W056 */
}

var s2a = function s2a(s) {
  if(has_buf) return Buffer_from(s, "binary");
  return s.split("").map(function(x){ return x.charCodeAt(0) & 0xff; });
};

var chr0 = /\u0000/g, chr1 = /[\u0001-\u0006]/g;
var __toBuffer = function(bufs) { var x = []; for(var i = 0; i < bufs[0].length; ++i) { x.push.apply(x, bufs[0][i]); } return x; };
var ___toBuffer = __toBuffer;
var __utf16le = function(b,s,e) { var ss=[]; for(var i=s; i<e; i+=2) ss.push(String.fromCharCode(__readUInt16LE(b,i))); return ss.join("").replace(chr0,''); };
var ___utf16le = __utf16le;
var __hexlify = function(b,s,l) { var ss=[]; for(var i=s; i<s+l; ++i) ss.push(("0" + b[i].toString(16)).slice(-2)); return ss.join(""); };
var ___hexlify = __hexlify;
var __bconcat = function(bufs) {
  if(Array.isArray(bufs[0])) return [].concat.apply([], bufs);
  var maxlen = 0, i = 0;
  for(i = 0; i < bufs.length; ++i) maxlen += bufs[i].length;
  var o = new Uint8Array(maxlen);
  for(i = 0, maxlen = 0; i < bufs.length; maxlen += bufs[i].length, ++i) o.set(bufs[i], maxlen);
  return o;
};
var bconcat = __bconcat;


if(has_buf) {
  __utf16le = function(b,s,e) {
    if(!Buffer.isBuffer(b)) return ___utf16le(b,s,e);
    return b.toString('utf16le',s,e).replace(chr0,'')/*.replace(chr1,'!')*/;
  };
  __hexlify = function(b,s,l) { return Buffer.isBuffer(b) ? b.toString('hex',s,s+l) : ___hexlify(b,s,l); };
  __toBuffer = function(bufs) { return (bufs[0].length > 0 && Buffer.isBuffer(bufs[0][0])) ? Buffer.concat((bufs[0])) : ___toBuffer(bufs);};
  s2a = function(s) { return Buffer_from(s, "binary"); };
  bconcat = function(bufs) { return Buffer.isBuffer(bufs[0]) ? Buffer.concat(bufs) : __bconcat(bufs); };
}


var __readUInt8 = function(b, idx) { return b[idx]; };
var __readUInt16LE = function(b, idx) { return b[idx+1]*(1<<8)+b[idx]; };
var __readInt16LE = function(b, idx) { var u = b[idx+1]*(1<<8)+b[idx]; return (u < 0x8000) ? u : (0xffff - u + 1) * -1; };
var __readUInt32LE = function(b, idx) { return b[idx+3]*(1<<24)+(b[idx+2]<<16)+(b[idx+1]<<8)+b[idx]; };
var __readInt32LE = function(b, idx) { return (b[idx+3]<<24)+(b[idx+2]<<16)+(b[idx+1]<<8)+b[idx]; };

function ReadShift(size, t) {
  var oI, oS, type = 0;
  switch(size) {
    case 1: oI = __readUInt8(this, this.l); break;
    case 2: oI = (t !== 'i' ? __readUInt16LE : __readInt16LE)(this, this.l); break;
    case 4: oI = __readInt32LE(this, this.l); break;
    case 16: type = 2; oS = __hexlify(this, this.l, size);
  }
  this.l += size; if(type === 0) return oI; return oS;
}

var __writeUInt32LE = function(b, val, idx) { b[idx] = (val & 0xFF); b[idx+1] = ((val >>> 8) & 0xFF); b[idx+2] = ((val >>> 16) & 0xFF); b[idx+3] = ((val >>> 24) & 0xFF); };
var __writeInt32LE  = function(b, val, idx) { b[idx] = (val & 0xFF); b[idx+1] = ((val >> 8) & 0xFF); b[idx+2] = ((val >> 16) & 0xFF); b[idx+3] = ((val >> 24) & 0xFF); };

function WriteShift(t, val, f) {
  var size = 0, i = 0;
  switch(f) {
    case "hex": for(; i < t; ++i) {
      this[this.l++] = parseInt(val.slice(2*i, 2*i+2), 16)||0;
    } return this;
    case "utf16le":
      var end = this.l + t;
      for(i = 0; i < Math.min(val.length, t); ++i) {
        var cc = val.charCodeAt(i);
        this[this.l++] = cc & 0xff;
        this[this.l++] = cc >> 8;
      }
      while(this.l < end) this[this.l++] = 0;
      return this;
  }
  switch(t) {
    case  1: size = 1; this[this.l] = val&0xFF; break;
    case  2: size = 2; this[this.l] = val&0xFF; val >>>= 8; this[this.l+1] = val&0xFF; break;
    case  4: size = 4; __writeUInt32LE(this, val, this.l); break;
    case -4: size = 4; __writeInt32LE(this, val, this.l); break;
  }
  this.l += size; return this;
}

function CheckField(hexstr, fld) {
  var m = __hexlify(this,this.l,hexstr.length>>1);
  if(m !== hexstr) throw new Error(fld + 'Expected ' + hexstr + ' saw ' + m);
  this.l += hexstr.length>>1;
}

function prep_blob(blob, pos) {
  blob.l = pos;
  blob.read_shift = ReadShift;
  blob.chk = CheckField;
  blob.write_shift = WriteShift;
}

function new_buf(sz) {
  var o = (new_raw_buf(sz));
  prep_blob(o, 0);
  return o;
}

/* crc32.js (C) 2014-present SheetJS -- http://sheetjs.com */
/* vim: set ts=2: */
/*exported CRC32 */
var CRC32;
(function (factory) {
  /*jshint ignore:start */
  /*eslint-disable */
  factory(CRC32 = {});
  /*eslint-enable */
  /*jshint ignore:end */
}(function(CRC32) {
  CRC32.version = '1.2.0';
  /* see perf/crc32table.js */
  /*global Int32Array */
  function signed_crc_table() {
    var c = 0, table = new Array(256);

    for(var n =0; n != 256; ++n){
      c = n;
      c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
      c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
      c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
      c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
      c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
      c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
      c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
      c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
      table[n] = c;
    }

    return typeof Int32Array !== 'undefined' ? new Int32Array(table) : table;
  }

  var T = signed_crc_table();
  function crc32_bstr(bstr, seed) {
    var C = seed ^ -1, L = bstr.length - 1;
    for(var i = 0; i < L;) {
      C = (C>>>8) ^ T[(C^bstr.charCodeAt(i++))&0xFF];
      C = (C>>>8) ^ T[(C^bstr.charCodeAt(i++))&0xFF];
    }
    if(i === L) C = (C>>>8) ^ T[(C ^ bstr.charCodeAt(i))&0xFF];
    return C ^ -1;
  }

  function crc32_buf(buf, seed) {
    if(buf.length > 10000) return crc32_buf_8(buf, seed);
    var C = seed ^ -1, L = buf.length - 3;
    for(var i = 0; i < L;) {
      C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
      C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
      C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
      C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
    }
    while(i < L+3) C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
    return C ^ -1;
  }

  function crc32_buf_8(buf, seed) {
    var C = seed ^ -1, L = buf.length - 7;
    for(var i = 0; i < L;) {
      C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
      C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
      C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
      C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
      C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
      C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
      C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
      C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
    }
    while(i < L+7) C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
    return C ^ -1;
  }

  function crc32_str(str, seed) {
    var C = seed ^ -1;
    for(var i = 0, L=str.length, c, d; i < L;) {
      c = str.charCodeAt(i++);
      if(c < 0x80) {
        C = (C>>>8) ^ T[(C ^ c)&0xFF];
      } else if(c < 0x800) {
        C = (C>>>8) ^ T[(C ^ (192|((c>>6)&31)))&0xFF];
        C = (C>>>8) ^ T[(C ^ (128|(c&63)))&0xFF];
      } else if(c >= 0xD800 && c < 0xE000) {
        c = (c&1023)+64; d = str.charCodeAt(i++)&1023;
        C = (C>>>8) ^ T[(C ^ (240|((c>>8)&7)))&0xFF];
        C = (C>>>8) ^ T[(C ^ (128|((c>>2)&63)))&0xFF];
        C = (C>>>8) ^ T[(C ^ (128|((d>>6)&15)|((c&3)<<4)))&0xFF];
        C = (C>>>8) ^ T[(C ^ (128|(d&63)))&0xFF];
      } else {
        C = (C>>>8) ^ T[(C ^ (224|((c>>12)&15)))&0xFF];
        C = (C>>>8) ^ T[(C ^ (128|((c>>6)&63)))&0xFF];
        C = (C>>>8) ^ T[(C ^ (128|(c&63)))&0xFF];
      }
    }
    return C ^ -1;
  }
  CRC32.table = T;
  CRC32.bstr = crc32_bstr;
  CRC32.buf = crc32_buf;
  CRC32.str = crc32_str;
}));
/* [MS-CFB] v20171201 */
var CFB = (function _CFB(){
  var exports = {};
  exports.version = '1.2.0';
  /* [MS-CFB] 2.6.4 */
  function namecmp(l, r) {
    var L = l.split("/"), R = r.split("/");
    for(var i = 0, c = 0, Z = Math.min(L.length, R.length); i < Z; ++i) {
      if((c = L[i].length - R[i].length)) return c;
      if(L[i] != R[i]) return L[i] < R[i] ? -1 : 1;
    }
    return L.length - R.length;
  }
  function dirname(p) {
    if(p.charAt(p.length - 1) == "/") return (p.slice(0,-1).indexOf("/") === -1) ? p : dirname(p.slice(0, -1));
    var c = p.lastIndexOf("/");
    return (c === -1) ? p : p.slice(0, c+1);
  }

  function filename(p) {
    if(p.charAt(p.length - 1) == "/") return filename(p.slice(0, -1));
    var c = p.lastIndexOf("/");
    return (c === -1) ? p : p.slice(c+1);
  }
  /* -------------------------------------------------------------------------- */
  /* DOS Date format:
     high|YYYYYYYm.mmmddddd.HHHHHMMM.MMMSSSSS|low
     add 1980 to stored year
     stored second should be doubled
  */

  /* write JS date to buf as a DOS date */
  function write_dos_date(buf, date) {
    if(typeof date === "string") date = new Date(date);
    var hms = date.getHours();
    hms = hms << 6 | date.getMinutes();
    hms = hms << 5 | (date.getSeconds()>>>1);
    buf.write_shift(2, hms);
    var ymd = (date.getFullYear() - 1980);
    ymd = ymd << 4 | (date.getMonth()+1);
    ymd = ymd << 5 | date.getDate();
    buf.write_shift(2, ymd);
  }

  /* read four bytes from buf and interpret as a DOS date */
  function parse_dos_date(buf) {
    var hms = buf.read_shift(2) & 0xFFFF;
    var ymd = buf.read_shift(2) & 0xFFFF;
    var val = new Date();
    var d = ymd & 0x1F; ymd >>>= 5;
    var m = ymd & 0x0F; ymd >>>= 4;
    val.setMilliseconds(0);
    val.setFullYear(ymd + 1980);
    val.setMonth(m-1);
    val.setDate(d);
    var S = hms & 0x1F; hms >>>= 5;
    var M = hms & 0x3F; hms >>>= 6;
    val.setHours(hms);
    val.setMinutes(M);
    val.setSeconds(S<<1);
    return val;
  }
  function parse_extra_field(blob) {
    prep_blob(blob, 0);
    var o = {};
    var flags = 0;
    while(blob.l <= blob.length - 4) {
      var type = blob.read_shift(2);
      var sz = blob.read_shift(2), tgt = blob.l + sz;
      var p = {};
      switch(type) {
        /* UNIX-style Timestamps */
        case 0x5455: {
          flags = blob.read_shift(1);
          if(flags & 1) p.mtime = blob.read_shift(4);
          /* for some reason, CD flag corresponds to LFH */
          if(sz > 5) {
            if(flags & 2) p.atime = blob.read_shift(4);
            if(flags & 4) p.ctime = blob.read_shift(4);
          }
          if(p.mtime) p.mt = new Date(p.mtime*1000);
        }
          break;
      }
      blob.l = tgt;
      o[type] = p;
    }
    return o;
  }
  var fs;
  function get_fs() { return fs || (fs = require('fs')); }
  function parse(file, options) {
    if(file[0] == 0x50 && file[1] == 0x4b) return parse_zip(file, options);
    if((file[0] | 0x20) == 0x6d && (file[1]|0x20) == 0x69) return parse_mad(file, options);
    if(file.length < 512) throw new Error("CFB file size " + file.length + " < 512");
    var mver = 3;
    var ssz = 512;
    var nmfs = 0; // number of mini FAT sectors
    var difat_sec_cnt = 0;
    var dir_start = 0;
    var minifat_start = 0;
    var difat_start = 0;

    var fat_addrs = []; // locations of FAT sectors

    /* [MS-CFB] 2.2 Compound File Header */
    var blob = file.slice(0,512);
    prep_blob(blob, 0);

    /* major version */
    var mv = check_get_mver(blob);
    mver = mv[0];
    switch(mver) {
      case 3: ssz = 512; break; case 4: ssz = 4096; break;
      case 0: if(mv[1] == 0) return parse_zip(file, options);
      /* falls through */
      default: throw new Error("Major Version: Expected 3 or 4 saw " + mver);
    }

    /* reprocess header */
    if(ssz !== 512) { blob = file.slice(0,ssz); prep_blob(blob, 28 /* blob.l */); }
    /* Save header for final object */
    var header = file.slice(0,ssz);

    check_shifts(blob, mver);

// Number of Directory Sectors
    var dir_cnt = blob.read_shift(4, 'i');
    if(mver === 3 && dir_cnt !== 0) throw new Error('# Directory Sectors: Expected 0 saw ' + dir_cnt);

// Number of FAT Sectors
    blob.l += 4;

// First Directory Sector Location
    dir_start = blob.read_shift(4, 'i');

// Transaction Signature
    blob.l += 4;

// Mini Stream Cutoff Size
    blob.chk('00100000', 'Mini Stream Cutoff Size: ');

// First Mini FAT Sector Location
    minifat_start = blob.read_shift(4, 'i');

// Number of Mini FAT Sectors
    nmfs = blob.read_shift(4, 'i');

// First DIFAT sector location
    difat_start = blob.read_shift(4, 'i');

// Number of DIFAT Sectors
    difat_sec_cnt = blob.read_shift(4, 'i');

// Grab FAT Sector Locations
    for(var q = -1, j = 0; j < 109; ++j) { /* 109 = (512 - blob.l)>>>2; */
      q = blob.read_shift(4, 'i');
      if(q<0) break;
      fat_addrs[j] = q;
    }

    /** Break the file up into sectors */
    var sectors = sectorify(file, ssz);

    sleuth_fat(difat_start, difat_sec_cnt, sectors, ssz, fat_addrs);

    /** Chains */
    var sector_list = make_sector_list(sectors, dir_start, fat_addrs, ssz);

    sector_list[dir_start].name = "!Directory";
    if(nmfs > 0 && minifat_start !== ENDOFCHAIN) sector_list[minifat_start].name = "!MiniFAT";
    sector_list[fat_addrs[0]].name = "!FAT";
    sector_list.fat_addrs = fat_addrs;
    sector_list.ssz = ssz;

    /* [MS-CFB] 2.6.1 Compound File Directory Entry */
    var files = {}, Paths = [], FileIndex = [], FullPaths = [];
    read_directory(dir_start, sector_list, sectors, Paths, nmfs, files, FileIndex, minifat_start);

    build_full_paths(FileIndex, FullPaths, Paths);
    Paths.shift();

    var o = {
      FileIndex: FileIndex,
      FullPaths: FullPaths
    };

// $FlowIgnore
    if(options && options.raw) o.raw = {header: header, sectors: sectors};
    return o;
  } // parse

  /* [MS-CFB] 2.2 Compound File Header -- read up to major version */
  function check_get_mver(blob) {
    if(blob[blob.l] == 0x50 && blob[blob.l + 1] == 0x4b) return [0, 0];
    // header signature 8
    blob.chk(HEADER_SIGNATURE, 'Header Signature: ');

    // clsid 16
    //blob.chk(HEADER_CLSID, 'CLSID: ');
    blob.l += 16;

    // minor version 2
    var mver = blob.read_shift(2, 'u');

    return [blob.read_shift(2,'u'), mver];
  }
  function check_shifts(blob, mver) {
    var shift = 0x09;

    // Byte Order
    //blob.chk('feff', 'Byte Order: '); // note: some writers put 0xffff
    blob.l += 2;

    // Sector Shift
    switch((shift = blob.read_shift(2))) {
      case 0x09: if(mver != 3) throw new Error('Sector Shift: Expected 9 saw ' + shift); break;
      case 0x0c: if(mver != 4) throw new Error('Sector Shift: Expected 12 saw ' + shift); break;
      default: throw new Error('Sector Shift: Expected 9 or 12 saw ' + shift);
    }

    // Mini Sector Shift
    blob.chk('0600', 'Mini Sector Shift: ');

    // Reserved
    blob.chk('000000000000', 'Reserved: ');
  }

  /** Break the file up into sectors */
  function sectorify(file, ssz) {
    var nsectors = Math.ceil(file.length/ssz)-1;
    var sectors = [];
    for(var i=1; i < nsectors; ++i) sectors[i-1] = file.slice(i*ssz,(i+1)*ssz);
    sectors[nsectors-1] = file.slice(nsectors*ssz);
    return sectors;
  }

  /* [MS-CFB] 2.6.4 Red-Black Tree */
  function build_full_paths(FI, FP, Paths) {
    var i = 0, L = 0, R = 0, C = 0, j = 0, pl = Paths.length;
    var dad = [], q = [];

    for(; i < pl; ++i) { dad[i]=q[i]=i; FP[i]=Paths[i]; }

    for(; j < q.length; ++j) {
      i = q[j];
      L = FI[i].L; R = FI[i].R; C = FI[i].C;
      if(dad[i] === i) {
        if(L !== -1 /*NOSTREAM*/ && dad[L] !== L) dad[i] = dad[L];
        if(R !== -1 && dad[R] !== R) dad[i] = dad[R];
      }
      if(C !== -1 /*NOSTREAM*/) dad[C] = i;
      if(L !== -1 && i != dad[i]) { dad[L] = dad[i]; if(q.lastIndexOf(L) < j) q.push(L); }
      if(R !== -1 && i != dad[i]) { dad[R] = dad[i]; if(q.lastIndexOf(R) < j) q.push(R); }
    }
    for(i=1; i < pl; ++i) if(dad[i] === i) {
      if(R !== -1 /*NOSTREAM*/ && dad[R] !== R) dad[i] = dad[R];
      else if(L !== -1 && dad[L] !== L) dad[i] = dad[L];
    }

    for(i=1; i < pl; ++i) {
      if(FI[i].type === 0 /* unknown */) continue;
      j = i;
      if(j != dad[j]) do {
        j = dad[j];
        FP[i] = FP[j] + "/" + FP[i];
      } while (j !== 0 && -1 !== dad[j] && j != dad[j]);
      dad[i] = -1;
    }

    FP[0] += "/";
    for(i=1; i < pl; ++i) {
      if(FI[i].type !== 2 /* stream */) FP[i] += "/";
    }
  }

  function get_mfat_entry(entry, payload, mini) {
    var start = entry.start, size = entry.size;
    //return (payload.slice(start*MSSZ, start*MSSZ + size));
    var o = [];
    var idx = start;
    while(mini && size > 0 && idx >= 0) {
      o.push(payload.slice(idx * MSSZ, idx * MSSZ + MSSZ));
      size -= MSSZ;
      idx = __readInt32LE(mini, idx * 4);
    }
    if(o.length === 0) return (new_buf(0));
    return (bconcat(o).slice(0, entry.size));
  }

  /** Chase down the rest of the DIFAT chain to build a comprehensive list
   DIFAT chains by storing the next sector number as the last 32 bits */
  function sleuth_fat(idx, cnt, sectors, ssz, fat_addrs) {
    var q = ENDOFCHAIN;
    if(idx === ENDOFCHAIN) {
      if(cnt !== 0) throw new Error("DIFAT chain shorter than expected");
    } else if(idx !== -1 /*FREESECT*/) {
      var sector = sectors[idx], m = (ssz>>>2)-1;
      if(!sector) return;
      for(var i = 0; i < m; ++i) {
        if((q = __readInt32LE(sector,i*4)) === ENDOFCHAIN) break;
        fat_addrs.push(q);
      }
      sleuth_fat(__readInt32LE(sector,ssz-4),cnt - 1, sectors, ssz, fat_addrs);
    }
  }

  /** Follow the linked list of sectors for a given starting point */
  function get_sector_list(sectors, start, fat_addrs, ssz, chkd) {
    var buf = [], buf_chain = [];
    if(!chkd) chkd = [];
    var modulus = ssz - 1, j = 0, jj = 0;
    for(j=start; j>=0;) {
      chkd[j] = true;
      buf[buf.length] = j;
      buf_chain.push(sectors[j]);
      var addr = fat_addrs[Math.floor(j*4/ssz)];
      jj = ((j*4) & modulus);
      if(ssz < 4 + jj) throw new Error("FAT boundary crossed: " + j + " 4 "+ssz);
      if(!sectors[addr]) break;
      j = __readInt32LE(sectors[addr], jj);
    }
    return {nodes: buf, data:__toBuffer([buf_chain])};
  }

  /** Chase down the sector linked lists */
  function make_sector_list(sectors, dir_start, fat_addrs, ssz) {
    var sl = sectors.length, sector_list = ([]);
    var chkd = [], buf = [], buf_chain = [];
    var modulus = ssz - 1, i=0, j=0, k=0, jj=0;
    for(i=0; i < sl; ++i) {
      buf = ([]);
      k = (i + dir_start); if(k >= sl) k-=sl;
      if(chkd[k]) continue;
      buf_chain = [];
      var seen = [];
      for(j=k; j>=0;) {
        seen[j] = true;
        chkd[j] = true;
        buf[buf.length] = j;
        buf_chain.push(sectors[j]);
        var addr = fat_addrs[Math.floor(j*4/ssz)];
        jj = ((j*4) & modulus);
        if(ssz < 4 + jj) throw new Error("FAT boundary crossed: " + j + " 4 "+ssz);
        if(!sectors[addr]) break;
        j = __readInt32LE(sectors[addr], jj);
        if(seen[j]) break;
      }
      sector_list[k] = ({nodes: buf, data:__toBuffer([buf_chain])});
    }
    return sector_list;
  }

  /* [MS-CFB] 2.6.1 Compound File Directory Entry */
  function read_directory(dir_start, sector_list, sectors, Paths, nmfs, files, FileIndex, mini) {
    var minifat_store = 0, pl = (Paths.length?2:0);
    var sector = sector_list[dir_start].data;
    var i = 0, namelen = 0, name;
    for(; i < sector.length; i+= 128) {
      var blob = sector.slice(i, i+128);
      prep_blob(blob, 64);
      namelen = blob.read_shift(2);
      name = __utf16le(blob,0,namelen-pl);
      Paths.push(name);
      var o = ({
        name:  name,
        type:  blob.read_shift(1),
        color: blob.read_shift(1),
        L:     blob.read_shift(4, 'i'),
        R:     blob.read_shift(4, 'i'),
        C:     blob.read_shift(4, 'i'),
        clsid: blob.read_shift(16),
        state: blob.read_shift(4, 'i'),
        start: 0,
        size: 0
      });
      var ctime = blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2);
      if(ctime !== 0) o.ct = read_date(blob, blob.l-8);
      var mtime = blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2);
      if(mtime !== 0) o.mt = read_date(blob, blob.l-8);
      o.start = blob.read_shift(4, 'i');
      o.size = blob.read_shift(4, 'i');
      if(o.size < 0 && o.start < 0) { o.size = o.type = 0; o.start = ENDOFCHAIN; o.name = ""; }
      if(o.type === 5) { /* root */
        minifat_store = o.start;
        if(nmfs > 0 && minifat_store !== ENDOFCHAIN) sector_list[minifat_store].name = "!StreamData";
        /*minifat_size = o.size;*/
      } else if(o.size >= 4096 /* MSCSZ */) {
        o.storage = 'fat';
        if(sector_list[o.start] === undefined) sector_list[o.start] = get_sector_list(sectors, o.start, sector_list.fat_addrs, sector_list.ssz);
        sector_list[o.start].name = o.name;
        o.content = (sector_list[o.start].data.slice(0,o.size));
      } else {
        o.storage = 'minifat';
        if(o.size < 0) o.size = 0;
        else if(minifat_store !== ENDOFCHAIN && o.start !== ENDOFCHAIN && sector_list[minifat_store]) {
          o.content = get_mfat_entry(o, sector_list[minifat_store].data, (sector_list[mini]||{}).data);
        }
      }
      if(o.content) prep_blob(o.content, 0);
      files[name] = o;
      FileIndex.push(o);
    }
  }

  function read_date(blob, offset) {
    return new Date(( ( (__readUInt32LE(blob,offset+4)/1e7)*Math.pow(2,32)+__readUInt32LE(blob,offset)/1e7 ) - 11644473600)*1000);
  }

  function read_file(filename, options) {
    get_fs();
    return parse(fs.readFileSync(filename), options);
  }

  function read(blob, options) {
    switch(options && options.type || "base64") {
      case "file": return read_file(blob, options);
      case "base64": return parse(s2a(Base64.decode(blob)), options);
      case "binary": return parse(s2a(blob), options);
    }
    return parse(blob, options);
  }

  function init_cfb(cfb, opts) {
    var o = opts || {}, root = o.root || "Root Entry";
    if(!cfb.FullPaths) cfb.FullPaths = [];
    if(!cfb.FileIndex) cfb.FileIndex = [];
    if(cfb.FullPaths.length !== cfb.FileIndex.length) throw new Error("inconsistent CFB structure");
    if(cfb.FullPaths.length === 0) {
      cfb.FullPaths[0] = root + "/";
      cfb.FileIndex[0] = ({ name: root, type: 5 });
    }
    if(o.CLSID) cfb.FileIndex[0].clsid = o.CLSID;
    seed_cfb(cfb);
  }
  function seed_cfb(cfb) {
    var nm = "\u0001Sh33tJ5";
    if(CFB.find(cfb, "/" + nm)) return;
    var p = new_buf(4); p[0] = 55; p[1] = p[3] = 50; p[2] = 54;
    cfb.FileIndex.push(({ name: nm, type: 2, content:p, size:4, L:69, R:69, C:69 }));
    cfb.FullPaths.push(cfb.FullPaths[0] + nm);
    rebuild_cfb(cfb);
  }
  function rebuild_cfb(cfb, f) {
    init_cfb(cfb);
    var gc = false, s = false;
    for(var i = cfb.FullPaths.length - 1; i >= 0; --i) {
      var _file = cfb.FileIndex[i];
      switch(_file.type) {
        case 0:
          if(s) gc = true;
          else { cfb.FileIndex.pop(); cfb.FullPaths.pop(); }
          break;
        case 1: case 2: case 5:
          s = true;
          if(isNaN(_file.R * _file.L * _file.C)) gc = true;
          if(_file.R > -1 && _file.L > -1 && _file.R == _file.L) gc = true;
          break;
        default: gc = true; break;
      }
    }
    if(!gc && !f) return;

    var now = new Date(1987, 1, 19), j = 0;
    var data = [];
    for(i = 0; i < cfb.FullPaths.length; ++i) {
      if(cfb.FileIndex[i].type === 0) continue;
      data.push([cfb.FullPaths[i], cfb.FileIndex[i]]);
    }
    for(i = 0; i < data.length; ++i) {
      var dad = dirname(data[i][0]);
      s = false;
      for(j = 0; j < data.length; ++j) if(data[j][0] === dad) s = true;
      if(!s) data.push([dad, ({
        name: filename(dad).replace("/",""),
        type: 1,
        clsid: HEADER_CLSID,
        ct: now, mt: now,
        content: null
      })]);
    }

    data.sort(function(x,y) { return namecmp(x[0], y[0]); });
    cfb.FullPaths = []; cfb.FileIndex = [];
    for(i = 0; i < data.length; ++i) { cfb.FullPaths[i] = data[i][0]; cfb.FileIndex[i] = data[i][1]; }
    for(i = 0; i < data.length; ++i) {
      var elt = cfb.FileIndex[i];
      var nm = cfb.FullPaths[i];

      elt.name =  filename(nm).replace("/","");
      elt.L = elt.R = elt.C = -(elt.color = 1);
      elt.size = elt.content ? elt.content.length : 0;
      elt.start = 0;
      elt.clsid = (elt.clsid || HEADER_CLSID);
      if(i === 0) {
        elt.C = data.length > 1 ? 1 : -1;
        elt.size = 0;
        elt.type = 5;
      } else if(nm.slice(-1) == "/") {
        for(j=i+1;j < data.length; ++j) if(dirname(cfb.FullPaths[j])==nm) break;
        elt.C = j >= data.length ? -1 : j;
        for(j=i+1;j < data.length; ++j) if(dirname(cfb.FullPaths[j])==dirname(nm)) break;
        elt.R = j >= data.length ? -1 : j;
        elt.type = 1;
      } else {
        if(dirname(cfb.FullPaths[i+1]||"") == dirname(nm)) elt.R = i + 1;
        elt.type = 2;
      }
    }

  }

  function _write(cfb, options) {
    var _opts = options || {};
    /* MAD is order-sensitive, skip rebuild and sort */
    if(_opts.fileType == 'mad') return write_mad(cfb, _opts);
    rebuild_cfb(cfb);
    switch(_opts.fileType) {
      case 'zip': return write_zip(cfb, _opts);
      //case 'mad': return write_mad(cfb, _opts);
    }
    var L = (function(cfb){
      var mini_size = 0, fat_size = 0;
      for(var i = 0; i < cfb.FileIndex.length; ++i) {
        var file = cfb.FileIndex[i];
        if(!file.content) continue;
        var flen = file.content.length;
        if(flen > 0){
          if(flen < 0x1000) mini_size += (flen + 0x3F) >> 6;
          else fat_size += (flen + 0x01FF) >> 9;
        }
      }
      var dir_cnt = (cfb.FullPaths.length +3) >> 2;
      var mini_cnt = (mini_size + 7) >> 3;
      var mfat_cnt = (mini_size + 0x7F) >> 7;
      var fat_base = mini_cnt + fat_size + dir_cnt + mfat_cnt;
      var fat_cnt = (fat_base + 0x7F) >> 7;
      var difat_cnt = fat_cnt <= 109 ? 0 : Math.ceil((fat_cnt-109)/0x7F);
      while(((fat_base + fat_cnt + difat_cnt + 0x7F) >> 7) > fat_cnt) difat_cnt = ++fat_cnt <= 109 ? 0 : Math.ceil((fat_cnt-109)/0x7F);
      var L =  [1, difat_cnt, fat_cnt, mfat_cnt, dir_cnt, fat_size, mini_size, 0];
      cfb.FileIndex[0].size = mini_size << 6;
      L[7] = (cfb.FileIndex[0].start=L[0]+L[1]+L[2]+L[3]+L[4]+L[5])+((L[6]+7) >> 3);
      return L;
    })(cfb);
    var o = new_buf(L[7] << 9);
    var i = 0, T = 0;
    {
      for(i = 0; i < 8; ++i) o.write_shift(1, HEADER_SIG[i]);
      for(i = 0; i < 8; ++i) o.write_shift(2, 0);
      o.write_shift(2, 0x003E);
      o.write_shift(2, 0x0003);
      o.write_shift(2, 0xFFFE);
      o.write_shift(2, 0x0009);
      o.write_shift(2, 0x0006);
      for(i = 0; i < 3; ++i) o.write_shift(2, 0);
      o.write_shift(4, 0);
      o.write_shift(4, L[2]);
      o.write_shift(4, L[0] + L[1] + L[2] + L[3] - 1);
      o.write_shift(4, 0);
      o.write_shift(4, 1<<12);
      o.write_shift(4, L[3] ? L[0] + L[1] + L[2] - 1: ENDOFCHAIN);
      o.write_shift(4, L[3]);
      o.write_shift(-4, L[1] ? L[0] - 1: ENDOFCHAIN);
      o.write_shift(4, L[1]);
      for(i = 0; i < 109; ++i) o.write_shift(-4, i < L[2] ? L[1] + i : -1);
    }
    if(L[1]) {
      for(T = 0; T < L[1]; ++T) {
        for(; i < 236 + T * 127; ++i) o.write_shift(-4, i < L[2] ? L[1] + i : -1);
        o.write_shift(-4, T === L[1] - 1 ? ENDOFCHAIN : T + 1);
      }
    }
    var chainit = function(w) {
      for(T += w; i<T-1; ++i) o.write_shift(-4, i+1);
      if(w) { ++i; o.write_shift(-4, ENDOFCHAIN); }
    };
    T = i = 0;
    for(T+=L[1]; i<T; ++i) o.write_shift(-4, consts.DIFSECT);
    for(T+=L[2]; i<T; ++i) o.write_shift(-4, consts.FATSECT);
    chainit(L[3]);
    chainit(L[4]);
    var j = 0, flen = 0;
    var file = cfb.FileIndex[0];
    for(; j < cfb.FileIndex.length; ++j) {
      file = cfb.FileIndex[j];
      if(!file.content) continue;
      flen = file.content.length;
      if(flen < 0x1000) continue;
      file.start = T;
      chainit((flen + 0x01FF) >> 9);
    }
    chainit((L[6] + 7) >> 3);
    while(o.l & 0x1FF) o.write_shift(-4, consts.ENDOFCHAIN);
    T = i = 0;
    for(j = 0; j < cfb.FileIndex.length; ++j) {
      file = cfb.FileIndex[j];
      if(!file.content) continue;
      flen = file.content.length;
      if(!flen || flen >= 0x1000) continue;
      file.start = T;
      chainit((flen + 0x3F) >> 6);
    }
    while(o.l & 0x1FF) o.write_shift(-4, consts.ENDOFCHAIN);
    for(i = 0; i < L[4]<<2; ++i) {
      var nm = cfb.FullPaths[i];
      if(!nm || nm.length === 0) {
        for(j = 0; j < 17; ++j) o.write_shift(4, 0);
        for(j = 0; j < 3; ++j) o.write_shift(4, -1);
        for(j = 0; j < 12; ++j) o.write_shift(4, 0);
        continue;
      }
      file = cfb.FileIndex[i];
      if(i === 0) file.start = file.size ? file.start - 1 : ENDOFCHAIN;
      var _nm = (i === 0 && _opts.root) || file.name;
      flen = 2*(_nm.length+1);
      o.write_shift(64, _nm, "utf16le");
      o.write_shift(2, flen);
      o.write_shift(1, file.type);
      o.write_shift(1, file.color);
      o.write_shift(-4, file.L);
      o.write_shift(-4, file.R);
      o.write_shift(-4, file.C);
      if(!file.clsid) for(j = 0; j < 4; ++j) o.write_shift(4, 0);
      else o.write_shift(16, file.clsid, "hex");
      o.write_shift(4, file.state || 0);
      o.write_shift(4, 0); o.write_shift(4, 0);
      o.write_shift(4, 0); o.write_shift(4, 0);
      o.write_shift(4, file.start);
      o.write_shift(4, file.size); o.write_shift(4, 0);
    }
    for(i = 1; i < cfb.FileIndex.length; ++i) {
      file = cfb.FileIndex[i];
      if(file.size >= 0x1000) {
        o.l = (file.start+1) << 9;
        for(j = 0; j < file.size; ++j) o.write_shift(1, file.content[j]);
        for(; j & 0x1FF; ++j) o.write_shift(1, 0);
      }
    }
    for(i = 1; i < cfb.FileIndex.length; ++i) {
      file = cfb.FileIndex[i];
      if(file.size > 0 && file.size < 0x1000) {
        for(j = 0; j < file.size; ++j) o.write_shift(1, file.content[j]);
        for(; j & 0x3F; ++j) o.write_shift(1, 0);
      }
    }
    while(o.l < o.length) o.write_shift(1, 0);
    return o;
  }
  /* [MS-CFB] 2.6.4 (Unicode 3.0.1 case conversion) */
  function find(cfb, path) {
    var UCFullPaths = cfb.FullPaths.map(function(x) { return x.toUpperCase(); });
    var UCPaths = UCFullPaths.map(function(x) { var y = x.split("/"); return y[y.length - (x.slice(-1) == "/" ? 2 : 1)]; });
    var k = false;
    if(path.charCodeAt(0) === 47 /* "/" */) { k = true; path = UCFullPaths[0].slice(0, -1) + path; }
    else k = path.indexOf("/") !== -1;
    var UCPath = path.toUpperCase();
    var w = k === true ? UCFullPaths.indexOf(UCPath) : UCPaths.indexOf(UCPath);
    if(w !== -1) return cfb.FileIndex[w];

    var m = !UCPath.match(chr1);
    UCPath = UCPath.replace(chr0,'');
    if(m) UCPath = UCPath.replace(chr1,'!');
    for(w = 0; w < UCFullPaths.length; ++w) {
      if((m ? UCFullPaths[w].replace(chr1,'!') : UCFullPaths[w]).replace(chr0,'') == UCPath) return cfb.FileIndex[w];
      if((m ? UCPaths[w].replace(chr1,'!') : UCPaths[w]).replace(chr0,'') == UCPath) return cfb.FileIndex[w];
    }
    return null;
  }
  /** CFB Constants */
  var MSSZ = 64; /* Mini Sector Size = 1<<6 */
//var MSCSZ = 4096; /* Mini Stream Cutoff Size */
  /* 2.1 Compound File Sector Numbers and Types */
  var ENDOFCHAIN = -2;
  /* 2.2 Compound File Header */
  var HEADER_SIGNATURE = 'd0cf11e0a1b11ae1';
  var HEADER_SIG = [0xD0, 0xCF, 0x11, 0xE0, 0xA1, 0xB1, 0x1A, 0xE1];
  var HEADER_CLSID = '00000000000000000000000000000000';
  var consts = {
    /* 2.1 Compund File Sector Numbers and Types */
    MAXREGSECT: -6,
    DIFSECT: -4,
    FATSECT: -3,
    ENDOFCHAIN: ENDOFCHAIN,
    FREESECT: -1,
    /* 2.2 Compound File Header */
    HEADER_SIGNATURE: HEADER_SIGNATURE,
    HEADER_MINOR_VERSION: '3e00',
    MAXREGSID: -6,
    NOSTREAM: -1,
    HEADER_CLSID: HEADER_CLSID,
    /* 2.6.1 Compound File Directory Entry */
    EntryTypes: ['unknown','storage','stream','lockbytes','property','root']
  };

  function write_file(cfb, filename, options) {
    get_fs();
    var o = _write(cfb, options);
    fs.writeFileSync(filename, o);
  }

  function a2s(o) {
    var out = new Array(o.length);
    for(var i = 0; i < o.length; ++i) out[i] = String.fromCharCode(o[i]);
    return out.join("");
  }

  function write(cfb, options) {
    var o = _write(cfb, options);
    switch(options && options.type || "buffer") {
      case "file": get_fs(); fs.writeFileSync(options.filename, (o)); return o;
      case "binary": return typeof o == "string" ? o : a2s(o);
      case "base64": return Base64.encode(typeof o == "string" ? o : a2s(o));
      case "buffer": if(has_buf) return Buffer.isBuffer(o) ? o : Buffer_from(o);
      /* falls through */
      case "array": return typeof o == "string" ? s2a(o) : o;
    }
    return o;
  }
  /* node < 8.1 zlib does not expose bytesRead, so default to pure JS */
  var _zlib;
  function use_zlib(zlib) { try {
    var InflateRaw = zlib.InflateRaw;
    var InflRaw = new InflateRaw();
    InflRaw._processChunk(new Uint8Array([3, 0]), InflRaw._finishFlushFlag);
    if(InflRaw.bytesRead) _zlib = zlib;
    else throw new Error("zlib does not expose bytesRead");
  } catch(e) {console.error("cannot use native zlib: " + (e.message || e)); } }

  function _inflateRawSync(payload, usz) {
    if(!_zlib) return _inflate(payload, usz);
    var InflateRaw = _zlib.InflateRaw;
    var InflRaw = new InflateRaw();
    var out = InflRaw._processChunk(payload.slice(payload.l), InflRaw._finishFlushFlag);
    payload.l += InflRaw.bytesRead;
    return out;
  }

  function _deflateRawSync(payload) {
    return _zlib ? _zlib.deflateRawSync(payload) : _deflate(payload);
  }
  var CLEN_ORDER = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];

  /*  LEN_ID = [ 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285 ]; */
  var LEN_LN = [   3,   4,   5,   6,   7,   8,   9,  10,  11,  13 , 15,  17,  19,  23,  27,  31,  35,  43,  51,  59,  67,  83,  99, 115, 131, 163, 195, 227, 258 ];

  /*  DST_ID = [  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13,  14,  15,  16,  17,  18,  19,   20,   21,   22,   23,   24,   25,   26,    27,    28,    29 ]; */
  var DST_LN = [  1,  2,  3,  4,  5,  7,  9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577 ];

  function bit_swap_8(n) { var t = (((((n<<1)|(n<<11)) & 0x22110) | (((n<<5)|(n<<15)) & 0x88440))); return ((t>>16) | (t>>8) |t)&0xFF; }

  var use_typed_arrays = typeof Uint8Array !== 'undefined';

  var bitswap8 = use_typed_arrays ? new Uint8Array(1<<8) : [];
  for(var q = 0; q < (1<<8); ++q) bitswap8[q] = bit_swap_8(q);

  function bit_swap_n(n, b) {
    var rev = bitswap8[n & 0xFF];
    if(b <= 8) return rev >>> (8-b);
    rev = (rev << 8) | bitswap8[(n>>8)&0xFF];
    if(b <= 16) return rev >>> (16-b);
    rev = (rev << 8) | bitswap8[(n>>16)&0xFF];
    return rev >>> (24-b);
  }

  /* helpers for unaligned bit reads */
  function read_bits_2(buf, bl) { var w = (bl&7), h = (bl>>>3); return ((buf[h]|(w <= 6 ? 0 : buf[h+1]<<8))>>>w)& 0x03; }
  function read_bits_3(buf, bl) { var w = (bl&7), h = (bl>>>3); return ((buf[h]|(w <= 5 ? 0 : buf[h+1]<<8))>>>w)& 0x07; }
  function read_bits_4(buf, bl) { var w = (bl&7), h = (bl>>>3); return ((buf[h]|(w <= 4 ? 0 : buf[h+1]<<8))>>>w)& 0x0F; }
  function read_bits_5(buf, bl) { var w = (bl&7), h = (bl>>>3); return ((buf[h]|(w <= 3 ? 0 : buf[h+1]<<8))>>>w)& 0x1F; }
  function read_bits_7(buf, bl) { var w = (bl&7), h = (bl>>>3); return ((buf[h]|(w <= 1 ? 0 : buf[h+1]<<8))>>>w)& 0x7F; }

  /* works up to n = 3 * 8 + 1 = 25 */
  function read_bits_n(buf, bl, n) {
    var w = (bl&7), h = (bl>>>3), f = ((1<<n)-1);
    var v = buf[h] >>> w;
    if(n < 8 - w) return v & f;
    v |= buf[h+1]<<(8-w);
    if(n < 16 - w) return v & f;
    v |= buf[h+2]<<(16-w);
    if(n < 24 - w) return v & f;
    v |= buf[h+3]<<(24-w);
    return v & f;
  }

  /* until ArrayBuffer#realloc is a thing, fake a realloc */
  function realloc(b, sz) {
    var L = b.length, M = 2*L > sz ? 2*L : sz + 5, i = 0;
    if(L >= sz) return b;
    if(has_buf) {
      var o = new_unsafe_buf(M);
      // $FlowIgnore
      if(b.copy) b.copy(o);
      else for(; i < b.length; ++i) o[i] = b[i];
      return o;
    } else if(use_typed_arrays) {
      var a = new Uint8Array(M);
      if(a.set) a.set(b);
      else for(; i < b.length; ++i) a[i] = b[i];
      return a;
    }
    b.length = M;
    return b;
  }

  /* zero-filled arrays for older browsers */
  function zero_fill_array(n) {
    var o = new Array(n);
    for(var i = 0; i < n; ++i) o[i] = 0;
    return o;
  }var _deflate = (function() {
    var _deflateRaw = (function() {
      return function deflateRaw(data, out) {
        var boff = 0;
        while(boff < data.length) {
          var L = Math.min(0xFFFF, data.length - boff);
          var h = boff + L == data.length;
          /* TODO: this is only type 0 stored */
          out.write_shift(1, +h);
          out.write_shift(2, L);
          out.write_shift(2, (~L) & 0xFFFF);
          while(L-- > 0) out[out.l++] = data[boff++];
        }
        return out.l;
      };
    })();

    return function(data) {
      var buf = new_buf(50+Math.floor(data.length*1.1));
      var off = _deflateRaw(data, buf);
      return buf.slice(0, off);
    };
  })();
  /* modified inflate function also moves original read head */

  /* build tree (used for literals and lengths) */
  function build_tree(clens, cmap, MAX) {
    var maxlen = 1, w = 0, i = 0, j = 0, ccode = 0, L = clens.length;

    var bl_count  = use_typed_arrays ? new Uint16Array(32) : zero_fill_array(32);
    for(i = 0; i < 32; ++i) bl_count[i] = 0;

    for(i = L; i < MAX; ++i) clens[i] = 0;
    L = clens.length;

    var ctree = use_typed_arrays ? new Uint16Array(L) : zero_fill_array(L); // []

    /* build code tree */
    for(i = 0; i < L; ++i) {
      bl_count[(w = clens[i])]++;
      if(maxlen < w) maxlen = w;
      ctree[i] = 0;
    }
    bl_count[0] = 0;
    for(i = 1; i <= maxlen; ++i) bl_count[i+16] = (ccode = (ccode + bl_count[i-1])<<1);
    for(i = 0; i < L; ++i) {
      ccode = clens[i];
      if(ccode != 0) ctree[i] = bl_count[ccode+16]++;
    }

    /* cmap[maxlen + 4 bits] = (off&15) + (lit<<4) reverse mapping */
    var cleni = 0;
    for(i = 0; i < L; ++i) {
      cleni = clens[i];
      if(cleni != 0) {
        ccode = bit_swap_n(ctree[i], maxlen)>>(maxlen-cleni);
        for(j = (1<<(maxlen + 4 - cleni)) - 1; j>=0; --j)
          cmap[ccode|(j<<cleni)] = (cleni&15) | (i<<4);
      }
    }
    return maxlen;
  }

  var fix_lmap = use_typed_arrays ? new Uint16Array(512) : zero_fill_array(512);
  var fix_dmap = use_typed_arrays ? new Uint16Array(32)  : zero_fill_array(32);
  if(!use_typed_arrays) {
    for(var i = 0; i < 512; ++i) fix_lmap[i] = 0;
    for(i = 0; i < 32; ++i) fix_dmap[i] = 0;
  }
  (function() {
    var dlens = [];
    var i = 0;
    for(;i<32; i++) dlens.push(5);
    build_tree(dlens, fix_dmap, 32);

    var clens = [];
    i = 0;
    for(; i<=143; i++) clens.push(8);
    for(; i<=255; i++) clens.push(9);
    for(; i<=279; i++) clens.push(7);
    for(; i<=287; i++) clens.push(8);
    build_tree(clens, fix_lmap, 288);
  })();

  var dyn_lmap = use_typed_arrays ? new Uint16Array(32768) : zero_fill_array(32768);
  var dyn_dmap = use_typed_arrays ? new Uint16Array(32768) : zero_fill_array(32768);
  var dyn_cmap = use_typed_arrays ? new Uint16Array(128)   : zero_fill_array(128);
  var dyn_len_1 = 1, dyn_len_2 = 1;

  /* 5.5.3 Expanding Huffman Codes */
  function dyn(data, boff) {
    /* nomenclature from RFC1951 refers to bit values; these are offset by the implicit constant */
    var _HLIT = read_bits_5(data, boff) + 257; boff += 5;
    var _HDIST = read_bits_5(data, boff) + 1; boff += 5;
    var _HCLEN = read_bits_4(data, boff) + 4; boff += 4;
    var w = 0;

    /* grab and store code lengths */
    var clens = use_typed_arrays ? new Uint8Array(19) : zero_fill_array(19);
    var ctree = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    var maxlen = 1;
    var bl_count =  use_typed_arrays ? new Uint8Array(8) : zero_fill_array(8);
    var next_code = use_typed_arrays ? new Uint8Array(8) : zero_fill_array(8);
    var L = clens.length; /* 19 */
    for(var i = 0; i < _HCLEN; ++i) {
      clens[CLEN_ORDER[i]] = w = read_bits_3(data, boff);
      if(maxlen < w) maxlen = w;
      bl_count[w]++;
      boff += 3;
    }

    /* build code tree */
    var ccode = 0;
    bl_count[0] = 0;
    for(i = 1; i <= maxlen; ++i) next_code[i] = ccode = (ccode + bl_count[i-1])<<1;
    for(i = 0; i < L; ++i) if((ccode = clens[i]) != 0) ctree[i] = next_code[ccode]++;
    /* cmap[7 bits from stream] = (off&7) + (lit<<3) */
    var cleni = 0;
    for(i = 0; i < L; ++i) {
      cleni = clens[i];
      if(cleni != 0) {
        ccode = bitswap8[ctree[i]]>>(8-cleni);
        for(var j = (1<<(7-cleni))-1; j>=0; --j) dyn_cmap[ccode|(j<<cleni)] = (cleni&7) | (i<<3);
      }
    }

    /* read literal and dist codes at once */
    var hcodes = [];
    maxlen = 1;
    for(; hcodes.length < _HLIT + _HDIST;) {
      ccode = dyn_cmap[read_bits_7(data, boff)];
      boff += ccode & 7;
      switch((ccode >>>= 3)) {
        case 16:
          w = 3 + read_bits_2(data, boff); boff += 2;
          ccode = hcodes[hcodes.length - 1];
          while(w-- > 0) hcodes.push(ccode);
          break;
        case 17:
          w = 3 + read_bits_3(data, boff); boff += 3;
          while(w-- > 0) hcodes.push(0);
          break;
        case 18:
          w = 11 + read_bits_7(data, boff); boff += 7;
          while(w -- > 0) hcodes.push(0);
          break;
        default:
          hcodes.push(ccode);
          if(maxlen < ccode) maxlen = ccode;
          break;
      }
    }

    /* build literal / length trees */
    var h1 = hcodes.slice(0, _HLIT), h2 = hcodes.slice(_HLIT);
    for(i = _HLIT; i < 286; ++i) h1[i] = 0;
    for(i = _HDIST; i < 30; ++i) h2[i] = 0;
    dyn_len_1 = build_tree(h1, dyn_lmap, 286);
    dyn_len_2 = build_tree(h2, dyn_dmap, 30);
    return boff;
  }

  /* return [ data, bytesRead ] */
  function inflate(data, usz) {
    /* shortcircuit for empty buffer [0x03, 0x00] */
    if(data[0] == 3 && !(data[1] & 0x3)) { return [new_raw_buf(usz), 2]; }

    /* bit offset */
    var boff = 0;

    /* header includes final bit and type bits */
    var header = 0;

    var outbuf = new_unsafe_buf(usz ? usz : (1<<18));
    var woff = 0;
    var OL = outbuf.length>>>0;
    var max_len_1 = 0, max_len_2 = 0;

    while((header&1) == 0) {
      header = read_bits_3(data, boff); boff += 3;
      if((header >>> 1) == 0) {
        /* Stored block */
        if(boff & 7) boff += 8 - (boff&7);
        /* 2 bytes sz, 2 bytes bit inverse */
        var sz = data[boff>>>3] | data[(boff>>>3)+1]<<8;
        boff += 32;
        /* push sz bytes */
        if(!usz && OL < woff + sz) { outbuf = realloc(outbuf, woff + sz); OL = outbuf.length; }
        if(typeof data.copy === 'function') {
          // $FlowIgnore
          data.copy(outbuf, woff, boff>>>3, (boff>>>3)+sz);
          woff += sz; boff += 8*sz;
        } else while(sz-- > 0) { outbuf[woff++] = data[boff>>>3]; boff += 8; }
        continue;
      } else if((header >>> 1) == 1) {
        /* Fixed Huffman */
        max_len_1 = 9; max_len_2 = 5;
      } else {
        /* Dynamic Huffman */
        boff = dyn(data, boff);
        max_len_1 = dyn_len_1; max_len_2 = dyn_len_2;
      }
      if(!usz && (OL < woff + 32767)) { outbuf = realloc(outbuf, woff + 32767); OL = outbuf.length; }
      for(;;) { // while(true) is apparently out of vogue in modern JS circles
        /* ingest code and move read head */
        var bits = read_bits_n(data, boff, max_len_1);
        var code = (header>>>1) == 1 ? fix_lmap[bits] : dyn_lmap[bits];
        boff += code & 15; code >>>= 4;
        /* 0-255 are literals, 256 is end of block token, 257+ are copy tokens */
        if(((code>>>8)&0xFF) === 0) outbuf[woff++] = code;
        else if(code == 256) break;
        else {
          code -= 257;
          var len_eb = (code < 8) ? 0 : ((code-4)>>2); if(len_eb > 5) len_eb = 0;
          var tgt = woff + LEN_LN[code];
          /* length extra bits */
          if(len_eb > 0) {
            tgt += read_bits_n(data, boff, len_eb);
            boff += len_eb;
          }

          /* dist code */
          bits = read_bits_n(data, boff, max_len_2);
          code = (header>>>1) == 1 ? fix_dmap[bits] : dyn_dmap[bits];
          boff += code & 15; code >>>= 4;
          var dst_eb = (code < 4 ? 0 : (code-2)>>1);
          var dst = DST_LN[code];
          /* dist extra bits */
          if(dst_eb > 0) {
            dst += read_bits_n(data, boff, dst_eb);
            boff += dst_eb;
          }

          /* in the common case, manual byte copy is faster than TA set / Buffer copy */
          if(!usz && OL < tgt) { outbuf = realloc(outbuf, tgt); OL = outbuf.length; }
          while(woff < tgt) { outbuf[woff] = outbuf[woff - dst]; ++woff; }
        }
      }
    }
    return [usz ? outbuf : outbuf.slice(0, woff), (boff+7)>>>3];
  }

  function _inflate(payload, usz) {
    var data = payload.slice(payload.l||0);
    var out = inflate(data, usz);
    payload.l += out[1];
    return out[0];
  }

  function warn_or_throw(wrn, msg) {
    if(wrn) { if(typeof console !== 'undefined') console.error(msg); }
    else throw new Error(msg);
  }

  function parse_zip(file, options) {
    var blob = file;
    prep_blob(blob, 0);

    var FileIndex = [], FullPaths = [];
    var o = {
      FileIndex: FileIndex,
      FullPaths: FullPaths
    };
    init_cfb(o, { root: options.root });

    /* find end of central directory, start just after signature */
    var i = blob.length - 4;
    while((blob[i] != 0x50 || blob[i+1] != 0x4b || blob[i+2] != 0x05 || blob[i+3] != 0x06) && i >= 0) --i;
    blob.l = i + 4;

    /* parse end of central directory */
    blob.l += 4;
    var fcnt = blob.read_shift(2);
    blob.l += 6;
    var start_cd = blob.read_shift(4);

    /* parse central directory */
    blob.l = start_cd;

    for(i = 0; i < fcnt; ++i) {
      /* trust local file header instead of CD entry */
      blob.l += 20;
      var csz = blob.read_shift(4);
      var usz = blob.read_shift(4);
      var namelen = blob.read_shift(2);
      var efsz = blob.read_shift(2);
      var fcsz = blob.read_shift(2);
      blob.l += 8;
      var offset = blob.read_shift(4);
      var EF = parse_extra_field(blob.slice(blob.l+namelen, blob.l+namelen+efsz));
      blob.l += namelen + efsz + fcsz;

      var L = blob.l;
      blob.l = offset + 4;
      parse_local_file(blob, csz, usz, o, EF);
      blob.l = L;
    }

    return o;
  }


  /* head starts just after local file header signature */
  function parse_local_file(blob, csz, usz, o, EF) {
    /* [local file header] */
    blob.l += 2;
    var flags = blob.read_shift(2);
    var meth = blob.read_shift(2);
    var date = parse_dos_date(blob);

    if(flags & 0x2041) throw new Error("Unsupported ZIP encryption");
    var crc32 = blob.read_shift(4);
    var _csz = blob.read_shift(4);
    var _usz = blob.read_shift(4);

    var namelen = blob.read_shift(2);
    var efsz = blob.read_shift(2);

    // TODO: flags & (1<<11) // UTF8
    var name = ""; for(var i = 0; i < namelen; ++i) name += String.fromCharCode(blob[blob.l++]);
    if(efsz) {
      var ef = parse_extra_field(blob.slice(blob.l, blob.l + efsz));
      if((ef[0x5455]||{}).mt) date = ef[0x5455].mt;
      if(((EF||{})[0x5455]||{}).mt) date = EF[0x5455].mt;
    }
    blob.l += efsz;

    /* [encryption header] */

    /* [file data] */
    var data = blob.slice(blob.l, blob.l + _csz);
    switch(meth) {
      case 8: data = _inflateRawSync(blob, _usz); break;
      case 0: break;
      default: throw new Error("Unsupported ZIP Compression method " + meth);
    }

    /* [data descriptor] */
    var wrn = false;
    if(flags & 8) {
      crc32 = blob.read_shift(4);
      if(crc32 == 0x08074b50) { crc32 = blob.read_shift(4); wrn = true; }
      _csz = blob.read_shift(4);
      _usz = blob.read_shift(4);
    }

    if(_csz != csz) warn_or_throw(wrn, "Bad compressed size: " + csz + " != " + _csz);
    if(_usz != usz) warn_or_throw(wrn, "Bad uncompressed size: " + usz + " != " + _usz);
    var _crc32 = CRC32.buf(data, 0);
    if((crc32>>0) != (_crc32>>0)) warn_or_throw(wrn, "Bad CRC32 checksum: " + crc32 + " != " + _crc32);
    cfb_add(o, name, data, {unsafe: true, mt: date});
  }
  function write_zip(cfb, options) {
    var _opts = options || {};
    var out = [], cdirs = [];
    var o = new_buf(1);
    var method = (_opts.compression ? 8 : 0), flags = 0;
    var desc = false;
    if(desc) flags |= 8;
    var i = 0, j = 0;

    var start_cd = 0, fcnt = 0;
    var root = cfb.FullPaths[0], fp = root, fi = cfb.FileIndex[0];
    var crcs = [];
    var sz_cd = 0;

    for(i = 1; i < cfb.FullPaths.length; ++i) {
      fp = cfb.FullPaths[i].slice(root.length); fi = cfb.FileIndex[i];
      if(!fi.size || !fi.content || fp == "\u0001Sh33tJ5") continue;
      var start = start_cd;

      /* TODO: CP437 filename */
      var namebuf = new_buf(fp.length);
      for(j = 0; j < fp.length; ++j) namebuf.write_shift(1, fp.charCodeAt(j) & 0x7F);
      namebuf = namebuf.slice(0, namebuf.l);
      crcs[fcnt] = CRC32.buf(fi.content, 0);

      var outbuf = fi.content;
      if(method == 8) outbuf = _deflateRawSync(outbuf);

      /* local file header */
      o = new_buf(30);
      o.write_shift(4, 0x04034b50);
      o.write_shift(2, 20);
      o.write_shift(2, flags);
      o.write_shift(2, method);
      /* TODO: last mod file time/date */
      if(fi.mt) write_dos_date(o, fi.mt);
      else o.write_shift(4, 0);
      o.write_shift(-4, (flags & 8) ? 0 : crcs[fcnt]);
      o.write_shift(4,  (flags & 8) ? 0 : outbuf.length);
      o.write_shift(4,  (flags & 8) ? 0 : fi.content.length);
      o.write_shift(2, namebuf.length);
      o.write_shift(2, 0);

      start_cd += o.length;
      out.push(o);
      start_cd += namebuf.length;
      out.push(namebuf);

      /* TODO: encryption header ? */
      start_cd += outbuf.length;
      out.push(outbuf);

      /* data descriptor */
      if(flags & 8) {
        o = new_buf(12);
        o.write_shift(-4, crcs[fcnt]);
        o.write_shift(4, outbuf.length);
        o.write_shift(4, fi.content.length);
        start_cd += o.l;
        out.push(o);
      }

      /* central directory */
      o = new_buf(46);
      o.write_shift(4, 0x02014b50);
      o.write_shift(2, 0);
      o.write_shift(2, 20);
      o.write_shift(2, flags);
      o.write_shift(2, method);
      o.write_shift(4, 0); /* TODO: last mod file time/date */
      o.write_shift(-4, crcs[fcnt]);

      o.write_shift(4, outbuf.length);
      o.write_shift(4, fi.content.length);
      o.write_shift(2, namebuf.length);
      o.write_shift(2, 0);
      o.write_shift(2, 0);
      o.write_shift(2, 0);
      o.write_shift(2, 0);
      o.write_shift(4, 0);
      o.write_shift(4, start);

      sz_cd += o.l;
      cdirs.push(o);
      sz_cd += namebuf.length;
      cdirs.push(namebuf);
      ++fcnt;
    }

    /* end of central directory */
    o = new_buf(22);
    o.write_shift(4, 0x06054b50);
    o.write_shift(2, 0);
    o.write_shift(2, 0);
    o.write_shift(2, fcnt);
    o.write_shift(2, fcnt);
    o.write_shift(4, sz_cd);
    o.write_shift(4, start_cd);
    o.write_shift(2, 0);

    return bconcat(([bconcat((out)), bconcat(cdirs), o]));
  }
  var ContentTypeMap = ({
    "htm": "text/html",
    "xml": "text/xml",

    "gif": "image/gif",
    "jpg": "image/jpeg",
    "png": "image/png",

    "mso": "application/x-mso",
    "thmx": "application/vnd.ms-officetheme",
    "sh33tj5": "application/octet-stream"
  });

  function get_content_type(fi, fp) {
    if(fi.ctype) return fi.ctype;

    var ext = fi.name || "", m = ext.match(/\.([^\.]+)$/);
    if(m && ContentTypeMap[m[1]]) return ContentTypeMap[m[1]];

    if(fp) {
      m = (ext = fp).match(/[\.\\]([^\.\\])+$/);
      if(m && ContentTypeMap[m[1]]) return ContentTypeMap[m[1]];
    }

    return "application/octet-stream";
  }

  /* 76 character chunks TODO: intertwine encoding */
  function write_base64_76(bstr) {
    var data = Base64.encode(bstr);
    var o = [];
    for(var i = 0; i < data.length; i+= 76) o.push(data.slice(i, i+76));
    return o.join("\r\n") + "\r\n";
  }

  /*
  Rules for QP:
    - escape =## applies for all non-display characters and literal "="
    - space or tab at end of line must be encoded
    - \r\n newlines can be preserved, but bare \r and \n must be escaped
    - lines must not exceed 76 characters, use soft breaks =\r\n

  TODO: Some files from word appear to write line extensions with bare equals:

  ```
  <table class=3DMsoTableGrid border=3D1 cellspacing=3D0 cellpadding=3D0 width=
  ="70%"
  ```
  */
  function write_quoted_printable(text) {
    var encoded = text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(c) {
      var w = c.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (w.length == 1 ? "0" + w : w);
    });

    encoded = encoded.replace(/ $/mg, "=20").replace(/\t$/mg, "=09");

    if(encoded.charAt(0) == "\n") encoded = "=0D" + encoded.slice(1);
    encoded = encoded.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, "\n=0A").replace(/([^\r\n])\n/mg, "$1=0A");

    var o = [], split = encoded.split("\r\n");
    for(var si = 0; si < split.length; ++si) {
      var str = split[si];
      if(str.length == 0) { o.push(""); continue; }
      for(var i = 0; i < str.length;) {
        var end = 76;
        var tmp = str.slice(i, i + end);
        if(tmp.charAt(end - 1) == "=") end --;
        else if(tmp.charAt(end - 2) == "=") end -= 2;
        else if(tmp.charAt(end - 3) == "=") end -= 3;
        tmp = str.slice(i, i + end);
        i += end;
        if(i < str.length) tmp += "=";
        o.push(tmp);
      }
    }

    return o.join("\r\n");
  }
  function parse_quoted_printable(data) {
    var o = [];

    /* unify long lines */
    for(var di = 0; di < data.length; ++di) {
      var line = data[di];
      while(di <= data.length && line.charAt(line.length - 1) == "=") line = line.slice(0, line.length - 1) + data[++di];
      o.push(line);
    }

    /* decode */
    for(var oi = 0; oi < o.length; ++oi) o[oi] = o[oi].replace(/=[0-9A-Fa-f]{2}/g, function($$) { return String.fromCharCode(parseInt($$.slice(1), 16)); });
    return s2a(o.join("\r\n"));
  }


  function parse_mime(cfb, data, root) {
    var fname = "", cte = "", ctype = "", fdata;
    var di = 0;
    for(;di < 10; ++di) {
      var line = data[di];
      if(!line || line.match(/^\s*$/)) break;
      var m = line.match(/^(.*?):\s*([^\s].*)$/);
      if(m) switch(m[1].toLowerCase()) {
        case "content-location": fname = m[2].trim(); break;
        case "content-type": ctype = m[2].trim(); break;
        case "content-transfer-encoding": cte = m[2].trim(); break;
      }
    }
    ++di;
    switch(cte.toLowerCase()) {
      case 'base64': fdata = s2a(Base64.decode(data.slice(di).join(""))); break;
      case 'quoted-printable': fdata = parse_quoted_printable(data.slice(di)); break;
      default: throw new Error("Unsupported Content-Transfer-Encoding " + cte);
    }
    var file = cfb_add(cfb, fname.slice(root.length), fdata, {unsafe: true});
    if(ctype) file.ctype = ctype;
  }

  function parse_mad(file, options) {
    if(a2s(file.slice(0,13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
    var root = (options && options.root || "");
    // $FlowIgnore
    var data = (has_buf && Buffer.isBuffer(file) ? file.toString("binary") : a2s(file)).split("\r\n");
    var di = 0, row = "";

    /* if root is not specified, scan for the common prefix */
    for(di = 0; di < data.length; ++di) {
      row = data[di];
      if(!/^Content-Location:/i.test(row)) continue;
      row = row.slice(row.indexOf("file"));
      if(!root) root = row.slice(0, row.lastIndexOf("/") + 1);
      if(row.slice(0, root.length) == root) continue;
      while(root.length > 0) {
        root = root.slice(0, root.length - 1);
        root = root.slice(0, root.lastIndexOf("/") + 1);
        if(row.slice(0,root.length) == root) break;
      }
    }

    var mboundary = (data[1] || "").match(/boundary="(.*?)"/);
    if(!mboundary) throw new Error("MAD cannot find boundary");
    var boundary = "--" + (mboundary[1] || "");

    var FileIndex = [], FullPaths = [];
    var o = {
      FileIndex: FileIndex,
      FullPaths: FullPaths
    };
    init_cfb(o);
    var start_di, fcnt = 0;
    for(di = 0; di < data.length; ++di) {
      var line = data[di];
      if(line !== boundary && line !== boundary + "--") continue;
      if(fcnt++) parse_mime(o, data.slice(start_di, di), root);
      start_di = di;
    }
    return o;
  }

  function write_mad(cfb, options) {
    var opts = options || {};
    var boundary = opts.boundary || "SheetJS";
    boundary = '------=' + boundary;

    var out = [
      'MIME-Version: 1.0',
      'Content-Type: multipart/related; boundary="' + boundary.slice(2) + '"',
      '',
      '',
      ''
    ];

    var root = cfb.FullPaths[0], fp = root, fi = cfb.FileIndex[0];
    for(var i = 1; i < cfb.FullPaths.length; ++i) {
      fp = cfb.FullPaths[i].slice(root.length);
      fi = cfb.FileIndex[i];
      if(!fi.size || !fi.content || fp == "\u0001Sh33tJ5") continue;

      /* Normalize filename */
      fp = fp.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(c) {
        return "_x" + c.charCodeAt(0).toString(16) + "_";
      }).replace(/[\u0080-\uFFFF]/g, function(u) {
        return "_u" + u.charCodeAt(0).toString(16) + "_";
      });

      /* Extract content as binary string */
      var ca = fi.content;
      // $FlowIgnore
      var cstr = has_buf && Buffer.isBuffer(ca) ? ca.toString("binary") : a2s(ca);

      /* 4/5 of first 1024 chars ascii -> quoted printable, else base64 */
      var dispcnt = 0, L = Math.min(1024, cstr.length), cc = 0;
      for(var csl = 0; csl <= L; ++csl) if((cc=cstr.charCodeAt(csl)) >= 0x20 && cc < 0x80) ++dispcnt;
      var qp = dispcnt >= L * 4 / 5;

      out.push(boundary);
      out.push('Content-Location: ' + (opts.root || 'file:///C:/SheetJS/') + fp);
      out.push('Content-Transfer-Encoding: ' + (qp ? 'quoted-printable' : 'base64'));
      out.push('Content-Type: ' + get_content_type(fi, fp));
      out.push('');

      out.push(qp ? write_quoted_printable(cstr) : write_base64_76(cstr));
    }
    out.push(boundary + '--\r\n');
    return out.join("\r\n");
  }function cfb_new(opts) {
    var o = ({});
    init_cfb(o, opts);
    return o;
  }

  function cfb_add(cfb, name, content, opts) {
    var unsafe = opts && opts.unsafe;
    if(!unsafe) init_cfb(cfb);
    var file = !unsafe && CFB.find(cfb, name);
    if(!file) {
      var fpath = cfb.FullPaths[0];
      if(name.slice(0, fpath.length) == fpath) fpath = name;
      else {
        if(fpath.slice(-1) != "/") fpath += "/";
        fpath = (fpath + name).replace("//","/");
      }
      file = ({name: filename(name), type: 2});
      cfb.FileIndex.push(file);
      cfb.FullPaths.push(fpath);
      if(!unsafe) CFB.utils.cfb_gc(cfb);
    }
    file.content = (content);
    file.size = content ? content.length : 0;
    if(opts) {
      if(opts.CLSID) file.clsid = opts.CLSID;
      if(opts.mt) file.mt = opts.mt;
      if(opts.ct) file.ct = opts.ct;
    }
    return file;
  }

  function cfb_del(cfb, name) {
    init_cfb(cfb);
    var file = CFB.find(cfb, name);
    if(file) for(var j = 0; j < cfb.FileIndex.length; ++j) if(cfb.FileIndex[j] == file) {
      cfb.FileIndex.splice(j, 1);
      cfb.FullPaths.splice(j, 1);
      return true;
    }
    return false;
  }

  function cfb_mov(cfb, old_name, new_name) {
    init_cfb(cfb);
    var file = CFB.find(cfb, old_name);
    if(file) for(var j = 0; j < cfb.FileIndex.length; ++j) if(cfb.FileIndex[j] == file) {
      cfb.FileIndex[j].name = filename(new_name);
      cfb.FullPaths[j] = new_name;
      return true;
    }
    return false;
  }

  function cfb_gc(cfb) { rebuild_cfb(cfb, true); }

  exports.find = find;
  exports.read = read;
  exports.parse = parse;
  exports.write = write;
  exports.writeFile = write_file;
  exports.utils = {
    cfb_new: cfb_new,
    cfb_add: cfb_add,
    cfb_del: cfb_del,
    cfb_mov: cfb_mov,
    cfb_gc: cfb_gc,
    ReadShift: ReadShift,
    CheckField: CheckField,
    prep_blob: prep_blob,
    bconcat: bconcat,
    use_zlib: use_zlib,
    _deflateRaw: _deflate,
    _inflateRaw: _inflate,
    consts: consts
  };

  return exports;
})();

if(typeof require !== 'undefined' && typeof module !== 'undefined' && typeof DO_NOT_EXPORT_CFB === 'undefined') { module.exports = CFB; }
