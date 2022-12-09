/* global $,dhtmlXLayoutObject,BX24 */
var myTabbar = null;
var winProcess = null;
var flagDelete = false;
var myWins = null;
var count = 0;
var position = 0;
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
