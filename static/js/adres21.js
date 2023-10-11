function eXcell_adres(cell) {
    try {
        if (cell) {
            this.cell = cell;

        }
        this.grid = this.cell.parentNode.grid;
        this.myAcc = this.grid.myAcc;
    } catch (er) {}
    this.edit = function() {

    }
    this.getValue = function() {
        console.log('getValue')
    }
    this.setValue = function(val) {
        if ($(this.cell).data('form21') == undefined) {
            $(this.cell).css('width', '95%');
            $(this.cell).css('border', '1px solid');
            $(this.cell).css('margin-bottom', '6px');
            $(this.cell).css('margin-top', '6px');
            $(this.cell).css('box-shadow', '4px 1px 6px 3px rgba(94,95,156,1)');
            $(this.cell).css('-webkit-box-shadow', '4px 1px 6px 3px rgba(94,95,156,1)');
            $(this.cell).css('-moz-box-shadow', '4px 1px 6px 3px rgba(94,95,156,1)');
            var table = $('<table style="width:98%" class="adres21">').appendTo($(this.cell));
            var tr = $('<tr>').appendTo(table);
            var td1 = $('<td style="width:99%;vertical-align:top;line-height:normal !important">').appendTo(tr);
            var td2 = $('<td style="vertical-align:top;line-height:normal !important">').appendTo(tr);
            var img = $('<img style="width:130px" />').appendTo(td2)
            if (val.ob == undefined) {
                var ob = JSON.parse(val);

            }
            var metro = [];
            var Addres = {};
            for (var i = 0; i < ob.ob.length; i++) {
                if (ob.ob[i].TITLE != undefined) {
                    Addres[ob.ob[i].TITLE] = ob.ob[i].VAL;
                    if (ob.ob[i].TITLE == 'ULITCA') {
                        var ulitca = ob.ob[i].VAL;
                    }

                    if (ob.ob[i].TITLE == 'METRO') {
                        metro.push(ob.ob[i].VAL)
                    }
                }
            }
            var buid21 = {};
            var buid21Ar = [];
            for (var i = 0; i < ob.buid21.length; i++) {
                if (buid21[ob.buid21[i].UID] == undefined) buid21[ob.buid21[i].UID] = [];
                buid21[ob.buid21[i].UID].push(ob.buid21[i]);
            }
            for (var key in buid21) {
                img.attr('src', '/image/?thumbnail=1&first=1&idklient=' + key + '&action=loadImage')
                var buid = {};
                for (var i = 0; i < buid21[key].length; i++) {
                    buid[buid21[key][i].TITLE] = buid21[key][i].VAL;
                }
                var div = $('<div class="title">').appendTo(td1);
                div.html(buid['NAME'])
                var div = $('<div style="display:flex">').appendTo(td1);
                var div1 = $('<div class="label">Адрес:</div>').appendTo(div);
                var div1 = $('<div style="white-space: normal !important;">').appendTo(div);
                div1.html(Addres['ULITCA'] + ' ' + Addres['DOM']);

                var div = $('<div style="display:flex">').appendTo(td1);
                var div1 = $('<div class="label">Район:</div>').appendTo(div);
                var div1 = $('<div style="white-space: normal !important;">').appendTo(div);
                div1.html(Addres['OKRUG'] + ' ' + Addres['RAJON']);

                var div = $('<div style="display:flex">').appendTo(td1);
                var div1 = $('<div class="label">Метро:</div>').appendTo(div);
                var div1 = $('<div style="white-space: normal !important;">').appendTo(div);
                div1.html(metro.join(', '));


                var tr = $('<tr>').appendTo(table);
                var td1 = $('<td style="width:99%;vertical-align:top;line-height:normal !important">').appendTo(tr);
                var td2 = $('<td style="vertical-align:top;line-height:normal !important;float: right">').appendTo(tr);
                var div = $('<div style="display:flex">').appendTo(td2);
                var but = $('<div class="but"><i class="fas fa-info"></i></div>').appendTo(div);
                var but = $('<div class="but"><i class="fas fa-pencil-alt"></i></div>').appendTo(div);
                but.click(function() {
                    var win = window.open('/#edit:' + buid.UID, '_blank');
                    win.focus();
                });
                buid21Ar.push({
                        type: 'block',
                        offsetLeft: 0,
                        list: [{
                            type: 'label',
                            label: buid['NAME'],
                            labelWidth: 260
                        }, {
                            type: 'newcolumn'
                        }, {
                            type: 'label',
                            label: buid['TIPZD']
                        }, {
                            type: 'newcolumn',
                        }, {
                            offsetLeft: 12,
                            type: 'button',
                            value: '<img src="/img/48/pencil_ruler.png" style="width:22px">',
                            name: 'edit' + buid.UID
                        }]
                    }

                )
            }
            $(this.cell).data('form21', {});
        }
    }

    this.detach = function() {
        console.log('detach')
    }
}
eXcell_adres.prototype = new eXcell;

var flagEdit = true;

var ymapinit = false;
dhtmlXForm.prototype.items.adRes21 = {
    setmap: function() {
        if (ymapinit == true) {
            var item = this;
            clearInterval(this.timerIdSetV);
            item.stopMap = true;
            item.form21.map.geoObjects.removeAll();
            var myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: [item.form21.getItemValue('LNG'), item.form21.getItemValue('LAT')]
                },
                properties: {}
            }, {
                preset: 'islands#blackStretchyIcon',
                draggable: false
            });
            item.form21.map.geoObjects.add(myGeoObject);

            item.form21.map.setCenter([item.form21.getItemValue('LNG'), item.form21.getItemValue('LAT')], 16);
            if (item.form21.getItemValue('LNG') != '') {
                item.form21.disableItem('mapBlock');
            }
        }

    },
    setmap_: function() {
        if (ymapinit == true) {
            var item = this;
            clearInterval(this.timerIdSetV);
            //item.stopMap = true;
            item.form21.map.geoObjects.removeAll();
            var myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: [item.form21.getItemValue('LNG'), item.form21.getItemValue('LAT')]
                },
                properties: {}
            }, {
                preset: 'islands#blackStretchyIcon',
                draggable: false
            });
            item.form21.map.geoObjects.add(myGeoObject);

            item.form21.map.setCenter([item.form21.getItemValue('LNG'), item.form21.getItemValue('LAT')], 16);
            if (item.form21.getItemValue('LNG') != '') {
                item.form21.disableItem('mapBlock');
            }
        }

    },

    initMap: function() {
        if (ymapinit == true) {
            var item = this;
            clearInterval(this.timerId);
            item.form21.map = new ymaps.Map(item.form21.getContainer('mapYandex'), {
                center: [55.76, 37.64],
                zoom: 16,
                controls: []
            });
            item.form21.map.controls.add('zoomControl', {
                position: {
                    right: 10,
                    top: 10
                }
            });
            item.form21.map.form = item.form21;
            var suggestView = new ymaps.SuggestView($(item.form21._getItemByName('YADRES')).find('input')[0]);
            suggestView.state.findMap = item.form21.map;
            suggestView.state.events.add('change', function(e) {
                var win = window['editWin'];
                if (win != undefined) {
                    if (win.saveAr.indexOf('formBuild') == -1)
                        win.saveAr.push('formBuild');
                    win.glBut.show();
                    if (win.flagNew) {
                        disableForms([win.dhxTabbar.layout.cells('b').cell, win.dhxTabbar.layout.cells('c').cell, win.dhxTabbar.layout.cells('d').cell], true);
                    } else {
                        disableForms([win.dhxTabbar.layout.cells('c').cell, win.dhxTabbar.layout.cells('d').cell], true);

                    }
                    var grid = win.dhxTabbar.layout.cells('b').myGrid;
                    grid.forEachRow(function(id) {
                        var cellObj = grid.cellById(id, 2);
                        var form = $(cellObj.cell).data('form21But');
                        form.disableItem('add');
                    });
                }
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

            item.form21.map.events.add('actionend', function(e) {
                if (!item.form21.map.form.isItemEnabled('mapBlock')) {
                    console.log('Нет редактирования')
                    return;
                }




                if (item.stopMap == true) {
                    item.stopMap = false;

                    return;
                }
                v = e.originalEvent.map.getCenter();
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
                map.timerStart = 0;
                var myFormAdres = map.form;

                if (map.idtimer == undefined || map.idtimer == null) {
                    map.idtimer = setInterval(function() {
                        map.timerStart++;
                        if (map.timerStart == 4) {
                            clearTimeout(map.idtimer);
                            map.idtimer = null;

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
                                    url = "//kladr-api.ru/api.php?contentType=building&limit=400&withParent=1&zip=" + postCode;
                                    $.ajax({
                                        url: url,
                                        dataType: 'jsonp',
                                        success: function(data) {
                                            var nid = '';
                                            if (data && data.result) {
                                                for (var i = 0; i < data.result.length; i++) {
                                                    if (data.result[i].name == house) {
                                                        nid = data.result[i].id;
                                                    }
                                                }
                                            }
                                            if (nid == '') {
                                                dhtmlx.message({
                                                    type: "error",
                                                    text: "Кладр не вернул налоговую",
                                                    expire: 0
                                                });
                                            } else {

                                            }
                                        }
                                    });
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
                    }, 100);
                }
                return;
            });
        }
    },
    render: function(item, data) {
        ymaps.ready(function() {
            ymapinit = true;
        });

        item.tipFS = data.tip;
        $(item).data('data', data);
        item._type = "adRes21";
        item._enabled = true;
        //$('<hr>').appendTo($(item));
        var title = $('<div>').appendTo($(item));
        var cont = $('<div class="divAdresForm">').appendTo($(item));

        item.form21 = new dhtmlXForm(cont[0],
          [{
                type: "settings",
                inputWidth: 385,
                inputHeight: 25,
                offsetLeft: 0,
                offset: 0,
                position: "label-top"
            },
          {
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
                        inputWidth: 250,
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
                        inputWidth: 170
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
                                inputWidth: 140,
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
                                inputWidth: 140,
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
                                inputWidth: 140,
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
                                inputWidth: 140,
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
                                inputWidth: 140,

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
            },

            {
                type: 'block',
                name: 'metroB',
                offsetLeft: 0,
                offset: 0,
                list: [{
                    type: 'button',
                    name: "metroR",
                    value: "Радиус метро 0.04"
                }, {
                    type: "newcolumn"
                }, {
                    type: 'button',
                    name: "metroUD",
                    value: "Установить растояние"
                }]
            }, {
                type: "block",
                blockOffset: 0,
                offsetLeft: 0,
                name: "metro"
            }
        ]);
        item.form21.radius = 0.04;
      item.form21.ponChange = data.pform;
      item.form21.attachEvent("onButtonClick", function(name) {
            //var ob = this.getValue();
            var data = item.form21.getFormData(true);
            for (var key in data) {
                if (item.form21.getUserData(key, 'flabel') != "") {
                    if (item.form21.getUserData(key, 'flabel') == 'UID') {
                        var UID = item.form21.getItemValue(key);
                    }
                }
            }
            var outOB = [];
            var metroList = {};
            for (var key in data) {
                if (item.form21.getUserData(key, 'flabel') != "") {
                    outOB.push({
                        UID: UID,
                        TITLE: item.form21.getUserData(key, 'flabel'),
                        VAL: item.form21.getItemValue(key),
                        PUID: item.form21.getUserData(key, 'puid'),
                        TIP: 'adRes21'
                    });
                    if (item.form21.getUserData(key, 'flabel') == 'GOROD') var GOROD = item.form21.getItemValue(key);
                    if (item.form21.getUserData(key, 'flabel') == 'ULITCA') var ULITCA = item.form21.getItemValue(key);
                    if (item.form21.getUserData(key, 'flabel') == "DOM") var DOM = item.form21.getItemValue(key);
                    if (item.form21.getUserData(key, 'flabel') == "UD" || item.form21.getUserData(key, 'flabel') == "METRO") {
                        if (!metroList[item.form21.getUserData(key, 'puid')]) {
                            metroList[item.form21.getUserData(key, 'puid')] = [];
                        }
                        metroList[item.form21.getUserData(key, 'puid')].push({
                            name: key,
                            flabel: item.form21.getUserData(key, 'flabel'),
                            val: item.form21.getItemValue(key)

                        });
                    }

                }
            }

            var addrString = ULITCA + ', ' + DOM + ', ' + GOROD;
            var allPromise = [];

            window.itemMetroGeo = item;
            ymaps.geocode(addrString).then(function(res) {
                var moscowCoords = res.geoObjects.get(0).geometry.getCoordinates();
                for (var key in metroList) {
                    allPromise.push(
                        new Promise((resolve, reject) => {
                            var m = metroList[key];
                            ymaps.geocode('метро ' + metroList[key][0].val).then(function(res) {
                                var newYorkCoords = res.geoObjects.get(0).geometry.getCoordinates();
                                // Расстояние
                                resolve({
                                    metro: m,
                                    ud: Math.round(ymaps.coordSystem.geo.getDistance(moscowCoords, newYorkCoords) / 100)
                                });
                            });
                        })
                    );

                }
                Promise.allSettled(allPromise).then(result => {
                    for (var i = 0; i < result.length; i++) {
                        window.itemMetroGeo.form21.setItemValue(result[i].value.metro[1].name, result[i].value.ud);
                    }
                    $('.bAddrEdit').click();
                });


            });
            if (name == "metroR") {
                if (item.form21.radius < 0.15) {
                    this.radius = this.radius + 0.01;
                } else {
                    this.radius = 0.04;
                }
                this.setItemLabel('metroR', "Радиус метро " + this.radius);
                var url = "//geocode-maps.yandex.ru/1.x/?apikey=80f1ab75-f93f-476a-ab4c-4f8de2496f76&geocode=" + this.getItemValue('LAT') + "," + this.getItemValue('LNG') + "&kind=metro&format=json&spn=" + this.radius + "," + this.radius;
                $.ajax({
                    form: this,
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
                            if (a.indexOf(metroName) == -1) {
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
        $('.bAddrEdit').data('form', item.form21);
        $('.bAddrEdit').click(function() {
            $(this).data('form').enableItem('mapBlock');
            if(!window['editWin']) window['editWin'] = {}
            var win = window['editWin'];
            if(!win.saveAr) win.saveAr = [];
            if (win.saveAr.indexOf('formBuild') == -1)
                win.saveAr.push('formBuild');
            if(win.glBut) win.glBut.show();

/*
            var grid = win.dhxTabbar.layout.cells('b').myGrid;
            grid.forEachRow(function(id) {
                var cellObj = grid.cellById(id, 2);
                var form = $(cellObj.cell).data('form21But');
                form.disableItem('add');
            });
*/
          //let event = new Event('Change');
          $(this).data('form').ponChange('address',1,1)
            flagEdit = true;

            return false;
        })
        item.form21.attachEvent("onChange", function(name, value, state) {
            var win = window['editWin'];
            if (win != undefined) {
                if (win.saveAr.indexOf('formBuild') == -1)
                    win.saveAr.push('formBuild');
                win.glBut.show();
                if (win.flagNew) {
                    disableForms([win.dhxTabbar.layout.cells('b').cell, win.dhxTabbar.layout.cells('c').cell, win.dhxTabbar.layout.cells('d').cell], true);
                } else {
                    disableForms([win.dhxTabbar.layout.cells('c').cell, win.dhxTabbar.layout.cells('d').cell], true);

                }
                var grid = win.dhxTabbar.layout.cells('b').myGrid;
                grid.forEachRow(function(id) {
                    var cellObj = grid.cellById(id, 2);
                    var form = $(cellObj.cell).data('form21But');
                    form.disableItem('add');
                });
            }
            if(this.ponChange) this.ponChange('address',{})
        });
        $(cont[0]).parent().css('padding-left', '0px')
        $(cont[0]).parent().parent().css('padding-left', '0px')
        $(cont[0]).parent().parent().parent().css('padding-left', '0px')
        $('.dhxform_base_nested').css('padding-left', '0px')
        title.html(data.label);
        item.clearMetro = function (){
          console.log('this.form21', this.form21)
          //this.form21.clear()

        }
        item.addMetro = function(obMetro) {
            var subkey = obMetro.PUID;
            this.form21.addItem('metro', {
                type: "block",
                blockOffset: 0,
                list: [{
                    type: 'input',
                    value: obMetro.NAME,
                    position: "label-left",
                    inputWidth: 170,
                    userdata: {
                        metro: obMetro.NAME,
                        flabel: 'METRO',
                        puid: subkey
                    }

                }, {
                    type: "newcolumn"
                }, {
                    type: 'input',
                    position: "label-left",
                    value: obMetro.UD,
                    inputWidth: 40,
                    userdata: {
                        metro: obMetro.NAME,
                        flabel: 'UD',
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
                        metro: obMetro.NAME,
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
                    value: obMetro.UDTIP,
                }, {
                    type: "newcolumn"
                }, {
                    type: "checkbox",
                    position: "label-left",
                    checked: obMetro.GLMETRO,
                    userdata: {
                        metro: obMetro.NAME,
                        flabel: 'GLMETRO',
                        puid: subkey
                    }
                }]
            });
        }
        item.timerId = setInterval($.proxy(this.initMap, item), 300);
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

    disable: function(item) {
        item.lastChild.style.color = "gray";
        item._enabled = false;
        item.form21.hideItem('YADRES')
        item.form21.hideItem('metroR')
        item.form21.hideItem('metroUD')
    },

    setValue: function(item, ob) {
        for (let key in ob) {
            if (item.form21.isItem(key)) {
                item.form21.setItemValue(key, ob[key]);
            }

        }
      let f = 0;
        if(ob){
          ob.METRO.forEach(metroitem=>{
            metroitem.PUID = generateUID();
            item.addMetro(metroitem)
            f++
          })
          item.glv = [item.form21.getItemValue('LAT'), item.form21.getItemValue('LNG')];
          if (f < 1) {
            item.timerIdSetV = setInterval($.proxy(this.setmap_, item), 300);

          } else {
            item.timerIdSetV = setInterval($.proxy(this.setmap, item), 300);
          }

        }
        //item.form21.map.setCenter([item.form21.getItemValue('LAT'), item.form21.getItemValue('LNG')])
        item._value = ob;
      //item.clearMetro()

    },
    setReadonly: function(item, val) {
        var data = item.form21.getFormData(true);

        if (val) {
            for (var key in data) {
                if (item.form21.isItem(key) && item.form21.getItemType(key) != 'hidden' && item.form21.getItemType(key) != '1select') {
                    item.form21.disableItem(key);
                }
            }
            item.form21.hideItem('YADRES');
        }
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
                    TIP: 'adRes21'
                });
            }
        }
        const ob = {}
        const metro = []
        outOB.forEach(item => {
          item.TITLE = item.TITLE.trim();
          switch (item.TITLE) {
            case "METRO":
            case "GLMETRO":
            case "UD":
            case "UDTIP":
              if (!metro[item.PUID]) {
                metro[item.PUID] = {}
              }
              metro[item.PUID][item.TITLE] = item.VAL;
              break;
            default:
              ob[item.TITLE] = item.VAL;
          }
        })

        if (Object.keys(metro).length > 0) {
          ob['METRO'] = [];
          Object.values(metro).forEach(valM => {
            ob['METRO'].push({
              NAME: valM.METRO,
              GLMETRO: valM.GLMETRO,
              UD: valM.UD,
              UDTIP: valM.UDTIP,
            })
          })
        }
        return {
            tip: 'adRes21',
            data: ob
        };
    }
};
dhtmlXForm.prototype.setFormData_adRes21 = function(name, value) {
    return this.doWithItem(name, "setValue", value);
};

dhtmlXForm.prototype.getFormData_adRes21 = function(name) {
    return this.doWithItem(name, "getValue");
};
