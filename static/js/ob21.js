    function calcCena(ev) {
        var p = $(ev.currentTarget).parent().parent();
        var list = p.find('input');
        var PLALL = $(list[0]).val() * 1;
        if ($(ev.currentTarget).hasClass('pl')) {
            if ($(list[1]).val() != "") {
                var CENA = ($(list[1]).val() * 1) / 12;
            }
            else {
                if ($(list[2]).val() != "") {
                    var CENA = ($(list[2]).val() * 1);
                }
                else {
                    if ($(list[3]).val() != "") {
                        var CENA = ($(list[3]).val() * 1) / PLALL;

                    }
                    else {
                        var CENA = 0;
                    }
                }
            }
        }
        if ($(ev.currentTarget).hasClass('kvg')) {
            var CENA = (($(ev.currentTarget).val() * 1) / 12);
        }
        if ($(ev.currentTarget).hasClass('kvall')) {
            var CENA = (($(ev.currentTarget).val() * 1) / PLALL);
        }
        if ($(ev.currentTarget).hasClass('kvm')) {
            var CENA = ($(ev.currentTarget).val() * 1);
        }
        $(list[1]).val(Math.round(CENA * 12));
        $(list[2]).val(Math.round(CENA));
        $(list[3]).val(Math.round(CENA * PLALL));
        window.pchange('ob21',{})
        return;
    }

    dhtmlXForm.prototype.items.MultyPL = {
        render: function(item, data) {
            item._type = "MultyPL";
            item._enabled = true;
            item._data = data.options;
            item._inputHeight = data.inputHeight;
            item.container = data.name + "myGrid";
            var div = $('<div>').appendTo($(item));
            $(item).data('cont', div);
            item.form21 = new dhtmlXForm(div[0], [{
                type: "label",
                label: "<hr><span style='position:absolute;left:0px;top:9px;background:#ffffff'>&nbsp;" + data.label + "&nbsp;</span>"
            }, {
                type: "label",
                label: "<span style='position:absolute;left:94%;top:-4px;background:#ffffff'><i class='bcloseOpen fas fa-plus' style='margin-top:11px;font-size:22px;cursor:pointer'></i></span>"
            }, {
                type: "container",
                name: data.name + "myGrid",
                label: "",
                labelWidth: 0,
                inputWidth: data.inputWidth,
                inputHeight: 'auto'
            }]);
            $(div).find('.bcloseOpen').click($.proxy(this.clickAdd, this));
            this.item = item;
            return this;
        },
        calcCena: function(ev) {
            var p = $(ev.currentTarget).parent().parent();
            var list = p.find('input');
            var PLALL = $(list[0]).val() * 1;
            if ($(ev.currentTarget).hasClass('pl')) {
                if ($(list[1]).val() != "") {
                    var CENA = ($(list[1]).val() * 1) / 12;
                }
                else {
                    if ($(list[2]).val() != "") {
                        var CENA = ($(list[2]).val() * 1);
                    }
                    else {
                        if ($(list[3]).val() != "") {
                            var CENA = ($(list[3]).val() * 1) / PLALL;

                        }
                        else {
                            var CENA = 0;
                        }
                    }
                }
            }
            if ($(ev.currentTarget).hasClass('kvg')) {
                var CENA = (($(ev.currentTarget).val() * 1) / 12);
            }
            if ($(ev.currentTarget).hasClass('kvall')) {
                var CENA = (($(ev.currentTarget).val() * 1) / PLALL);
            }
            if ($(ev.currentTarget).hasClass('kvm')) {
                var CENA = ($(ev.currentTarget).val() * 1);
            }
            $(list[1]).val(Math.round(CENA * 12));
            $(list[2]).val(Math.round(CENA));
            $(list[3]).val(Math.round(CENA * PLALL));

            return;
            var PLALL = $(list[0]).val() * 1;
            switch ($(el).prop('name')) {
                case 'field_CENA_AR_MES':
                    if (this.form21.getItemValue('field_OPP') == 'Аренда') {
                        var cena = this.form21.getItemValue('field_CENA_AR_MES') * 1;
                        this.form21.setItemValue('field_CENA_AR', (cena * 12));
                        this.form21.setItemValue('field_CENA_AR_MES_ALL', (cena * PLALL));

                    }
                    else {

                    }
                    break;
                case 'field_CENA_AR':
                    if (this.form21.getItemValue('field_OPP') == 'Аренда') {
                        var cena = this.form21.getItemValue('field_CENA_AR') * 1;
                        this.form21.setItemValue('field_CENA_AR_MES', Math.round(cena / 12));
                        this.form21.setItemValue('field_CENA_AR_MES_ALL', (Math.round(cena / 12) * PLALL));
                    }
                    else {
                        var cena = this.form21.getItemValue('field_CENA_AR') * 1;
                        this.form21.setItemValue('field_CENA_AR_MES_ALL', cena * PLALL);

                    }
                    break;
                case 'field_CENA_AR_MES_ALL':
                    if (this.form21.getItemValue('field_OPP') == 'Аренда') {

                        var cena = this.form21.getItemValue('field_CENA_AR_MES_ALL') * 1;
                        this.form21.setItemValue('field_CENA_AR_MES', Math.round(cena / PLALL));
                        this.form21.setItemValue('field_CENA_AR', (Math.round(cena / PLALL) * 12));
                    }
                    else {
                        var cena = this.form21.getItemValue('field_CENA_AR_MES_ALL') * 1;
                        this.form21.setItemValue('field_CENA_AR', (Math.round(cena / PLALL)));

                    }
                    break;
                default:
                    break;
            }

        },
        addSubItem: function(n) {
            var container = this.item.form21.getContainer(this.item.container);
            var divNew = $('<div class="divSubItem" style="border:none;margin-bottom:6px">').appendTo(container);
            var table = $('<table style="width:100%">').appendTo(divNew);
            var tr = $('<tr>').appendTo(table);
            var td = $('<td>').appendTo(tr).html("<div style='width:3px'></div>");
            var td = $('<td>').appendTo(tr);
            this.inputHeight = 25;
            var inp1 = $('<input class="dhxform_textarea phoneInput numInput pl" style="width:40px;height:' + this.inputHeight + 'px" >').appendTo(td);
            inp1.inputmask({
                mask: '9{1,12}',
                oncomplete: calcCena
            });
            if ($.isArray(n)) {
                inp1.val(n[0]);
            }
            else {
                inp1.val(n);
            }

            //inp1.keydown(this.calcCena());
            var td = $('<td>').appendTo(tr).html('m2');

            var td = $('<td>').appendTo(tr);
            var inp2 = $('<input  class="dhxform_textarea phoneInput cenaInput kvg" style="width:60px;height:' + this.inputHeight + 'px" >').appendTo(td);
            inp2.inputmask({
                mask: '9{1,12}',
                oncomplete: calcCena
            });
            if ($.isArray(n)) {
                inp2.val(n[1]);
            }

            //inp2.keydown(this.calcCena());
            var td = $('<td>').appendTo(tr).html('m2 год');

            var td = $('<td>').appendTo(tr);
            var inp3 = $('<input  class="dhxform_textarea phoneInput cenaInput kvm" style="width:60px;height:' + this.inputHeight + 'px" >').appendTo(td);
            inp3.inputmask({
                mask: '9{1,12}',
                oncomplete: calcCena
            });
            if ($.isArray(n)) {
                inp3.val(n[2]);
            }

            //inp3.keydown(this.calcCena());

            var td = $('<td>').appendTo(tr).html('m2 мес.');

            var td = $('<td>').appendTo(tr);
            var inp4 = $('<input  class="dhxform_textarea phoneInput cenaInput kvall" style="width:60px;height:' + this.inputHeight + 'px" >').appendTo(td);
            inp4.inputmask({
                mask: '9{1,12}',
                oncomplete: calcCena
            });
            if ($.isArray(n)) {
                inp4.val(n[3]);
            }
            //inp4.keydown(this.calcCena());

            var td = $('<td>').appendTo(tr).html('мес. всего');


            var td = $('<td style="width:99%">').appendTo(tr);
            var td = $('<td>').appendTo(tr);
            var i = $("<i class='bcloseOpen fas fa-minus' style='font-size:22px;cursor:pointer'></i>").appendTo(td);
            i.click(function() {
                var p = $(this).parent();
                while (!$(p).hasClass('divSubItem')) {
                    p = $(p).parent();
                };
                p.remove();
                window.pchange('ob21',{})

            });
            var td = $('<td style="width:3px">').appendTo(tr).html("<div style='width:3px'></div>");

        },
        clickAdd: function() {
          this.addSubItem('');
          window.pchange('ob21',{})
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
        setValue: function(item, data) {
          let J = []
          if (typeof data === 'string' || data instanceof String){
            J = JSON.parse(data);
          }else{
            J = data;

          }
          console.log('MPL',data)
            for (var i = 0; i < J.length; i++) {
                this.addSubItem(J[i]);
            }
        },
        getValue: function(item, flag) {
            var container = item.form21.getContainer(item.container);
            var list = $(container).find('.numInput');
            var ob = [];
            for (var i = 0; i < list.length; i++) {
                var p = $(list[i]).parent().parent();
                var listv = p.find('input');
                var v = [];
                for (var f = 0; f < listv.length; f++) {
                    v.push($(listv[f]).val())
                }
                ob.push(v)
            }
            return JSON.stringify(ob);
        }
    };

    dhtmlXForm.prototype.setFormData_MultyPL = function(name, value) {
        return this.doWithItem(name, "setValue", value);
    };
    dhtmlXForm.prototype.getFormData_MultyPL = function(name) {
        return this.doWithItem(name, "getValue");
    };
    dhtmlXForm.prototype.items.ob21 = {
        render: function(item, data) {
            item.tipFS = data.tip;
            $(item).data('data', data);
            item._type = "ob21";
            item._enabled = true;
            item.calkCena = function(el) {
                if (this.form21.getItemValue('field_OPPTIP') != "Коммерческая" && this.form21.getItemValue('field_OPPTIP') != null) {
                    if (this.form21.getItemValue('field_OPPTIP') == "") {
                        dhtmlx.message({
                            type: "error",
                            text: "Не заполнено поле тип недвижимости",
                            expire: 0
                        });
                        //this.form21.setItemFocus('field_OPPTIP');
                    }
                    return;
                }

                if (this.form21.getItemValue('field_PLALL') == '' || this.form21.getItemValue('field_PLALL') * 1 == 0) {
                    dhtmlx.message({
                        type: "error",
                        text: "Не заполнено поле площади",
                        expire: 0
                    })

                }
                else {
                    var PLALL = this.form21.getItemValue('field_PLALL') * 1;
                    switch ($(el).prop('name')) {
                        case 'field_CENA_AR_MES':
                            if (this.form21.getItemValue('field_OPP') == 'Аренда') {
                                var cena = this.form21.getItemValue('field_CENA_AR_MES') * 1;
                                this.form21.setItemValue('field_CENA_AR', (cena * 12));
                                this.form21.setItemValue('field_CENA_AR_MES_ALL', (cena * PLALL));

                            }
                            else {

                            }
                            break;
                        case 'field_CENA_AR':
                            if (this.form21.getItemValue('field_OPP') == 'Аренда') {
                                var cena = this.form21.getItemValue('field_CENA_AR') * 1;
                                this.form21.setItemValue('field_CENA_AR_MES', Math.round(cena / 12));
                                this.form21.setItemValue('field_CENA_AR_MES_ALL', (Math.round(cena / 12) * PLALL));
                            }
                            else {
                                var cena = this.form21.getItemValue('field_CENA_AR') * 1;
                                this.form21.setItemValue('field_CENA_AR_MES_ALL', cena * PLALL);

                            }
                            break;
                        case 'field_CENA_AR_MES_ALL':
                            if (this.form21.getItemValue('field_OPP') == 'Аренда') {

                                var cena = this.form21.getItemValue('field_CENA_AR_MES_ALL') * 1;
                                this.form21.setItemValue('field_CENA_AR_MES', Math.round(cena / PLALL));
                                this.form21.setItemValue('field_CENA_AR', (Math.round(cena / PLALL) * 12));
                            }
                            else {
                                var cena = this.form21.getItemValue('field_CENA_AR_MES_ALL') * 1;
                                this.form21.setItemValue('field_CENA_AR', (Math.round(cena / PLALL)));

                            }
                            break;
                        default:
                            break;
                    }

                }
            }
            item.setFormFromTip = function(item_, opp, tip, opptip, func) {
                var jsname = '';
                if (opp == 'Аренда') {
                    switch (tip) {
                        case 'Часть дома':
                            jsname = 'houseShareRent.js';
                            break;

                        case 'Таунхаус':
                            jsname = 'townhouseRent.js';
                            break;

                        case 'Коттедж':
                            jsname = 'cottageRent.js';
                            break;
                        case 'Дом/дача':
                            jsname = 'houseRent.js';
                            break;
                        case 'Комната':
                            jsname = 'roomRent.js';
                            break;
                        case 'Койко-место':
                            jsname = 'bedRent.js';
                            break;
                        case 'Квартира':
                            jsname = 'flatRent.jsr';
                            break;
                        case 'Гараж':
                            jsname = 'garageRent.jsr';
                            break;
                        case 'Готовый бизнес':
                            jsname = 'businessRent.jsr';
                            break;
                        case 'Здание':
                            jsname = 'all.jsr';
                            break;
                        case 'Коммерческая земля':
                            jsname = 'all.jsr';
                            break;
                        case 'Помещение свободного назначения':
                            jsname = 'freeAppointmentObjectRent.jsr';
                            break;
                        case 'Офис':
                            jsname = 'all.jsr';
                            break;
                        case 'Производство':
                            jsname = 'all.jsr';
                            break;
                        case 'Склад':
                            jsname = 'warehouseRent.jsr';
                            break;
                        case 'Торговая площадь':
                            jsname = 'shoppingAreaRent.jsr';
                            break;
                        default:
                            if (opptip == "Загородная" || opptip == "Жилая") {
                                jsname = 'process.js'
                            }
                            else
                                jsname = 'rentItem.js'
                    }
                }
                else {
                    switch (tip) {
                        case 'Часть дома':
                            jsname = 'houseShareSale.js';
                            break;

                        case 'Таунхаус':
                            jsname = 'townhouseSale.js';
                            break;

                        case 'Коттедж':
                            jsname = 'cottageSale.js';
                            break;
                        case 'Дом/дача':
                            jsname = 'houseSale.js';
                            break;
                        case 'Доля в квартире':
                            jsname = 'flatShareSale.js';
                            break;
                        case 'Комната':
                            jsname = 'roomSale.js';
                            break;
                        case 'Квартира новостройка':
                            jsname = 'flatSaleJK.jsr';
                            break;
                        case 'Квартира':
                            jsname = 'flatSale.jsr';
                            break;
                        case 'Гараж':
                            jsname = 'garageSale.jsr';
                            break;
                        case 'Помещение свободного назначения':
                            jsname = 'freeAppointmentObjectSale.jsr';
                            break;
                        default:
                            if (opptip == "Загородная" || opptip == "Жилая") {
                                jsname = 'process.js'

                            }
                            else
                                jsname = 'sale.jsr'
                    }



                    if (tip == 'Готовый бизнес') jsname = 'sale.jsr'; // jsname = 'businessSale.json';
                    if (tip == 'Здание') jsname = 'sale.jsr'; // jsname = 'buildingSale.json';
                    if (tip == 'Коммерческая земля') jsname = 'sale.jsr'; // jsname = 'commercialLandSale.json';
                    if (tip == 'Офис') jsname = 'sale.jsr'; // jsname = 'officeSale.json';
                    if (tip == 'Помещение свободного назначения') jsname = 'freeAppointmentObjectSale.jsr';
                    if (tip == 'Производство') jsname = 'sale.jsr'; // jsname = 'industrySale.json';
                    if (tip == 'Склад') jsname = 'sale.jsr'; // jsname = 'warehouseSale.json';
                    if (tip == 'Торговая площадь') jsname = 'sale.jsr'; // jsname = 'shoppingAreaSale.json';
                }
                if (item_.form21 && item_.form21.unload) {
                    item_.form21.unload();

                }
                item_.func = func;
                item_.inDATA = {
                    opp: opp,
                    tip: tip,
                    opptip: opptip
                };
                // console.log(this)
                $.get('/js/revolution/formEdit/' + jsname, $.proxy(item_.createForm, item_))
            }
            item.createForm = function(data) {
                eval(data);
                if (!this.inDATA.opptip) {
                    if (this.inDATA.tip == "Квартира") {
                        item.form21.setDataList('field_OPPTIP', [{
                            text: "Коммерческая",
                            value: "Коммерческая"
                        }, {
                            text: "Жилая",
                            value: "Жилая"
                        }, {
                            text: "Загородная",
                            value: "Загородная"
                        }]);
                        item.form21.setItemValue('field_OPPTIP', "Жилая");
                        this.inDATA.opptip = "Жилая";
                    }
                }
                if (this.inDATA.opptip == "Загородная") {
                    if (this.inDATA.opp == "Продажа") {
                        item.form21.setDataList('field_TIP', [{
                            text: "Дом/дача",
                            value: "Дом/дача"
                        }, {
                            text: "Коттедж",
                            value: "Коттедж"
                        }, {
                            text: "Таунхаус",
                            value: "Таунхаус"
                        }, {
                            text: "Часть дома",
                            value: "Часть дома"
                        }]);

                    }
                    else {
                        item.form21.setDataList('field_TIP', [{
                            text: "Дом/дача",
                            value: "Дом/дача"
                        }, {
                            text: "Коттедж",
                            value: "Коттедж"
                        }, {
                            text: "Таунхаус",
                            value: "Таунхаус"
                        }, {
                            text: "Часть дома",
                            value: "Часть дома"
                        }]);
                    }

                }

                if (this.inDATA.opptip == "Жилая") {
                    if (this.inDATA.opp == "Продажа") {
                        item.form21.setDataList('field_TIP', [{
                            text: "Квартира",
                            value: "Квартира"
                        }, {
                            text: "Квартира новостройка",
                            value: "Квартира новостройка"
                        }, {
                            text: "Комната",
                            value: "Комната"
                        }, {
                            text: "Доля в квартире",
                            value: "Доля в квартире"
                        }]);

                    }
                    else {
                        item.form21.setDataList('field_TIP', [{
                            text: "Квартира",
                            value: "Квартира"
                        }, {
                            text: "Комната",
                            value: "Комната"
                        }, {
                            text: "Койко-место",
                            value: "Койко-место"
                        }]);
                    }
                }
                if (this.inDATA.opptip == "Коммерческая") {
                    if (this.inDATA.tip == "Квартира" || this.inDATA.tip == "Квартира новостройка") {
                        this.inDATA.tip = "Офис";
                        item.form21.setItemValue('field_TIP', 'Офис');
                        item.tip = "Офис";
                    }
                    item.form21.setDataList('field_TIP', [{
                        text: "Офис",
                        value: "Офис"
                    }, {
                        text: "Склад",
                        value: "Склад"
                    }, {
                        text: "Торговая площадь",
                        value: "Торговая площадь"
                    }, {
                        text: "Помещение свободного назначения",
                        value: "Помещение свободного назначения"
                    }, {
                        text: "Здание",
                        value: "Здание"
                    }, {
                        text: "Гараж",
                        value: "Гараж"
                    }, {
                        text: "Готовый бизнес",
                        value: "Готовый бизнес"
                    }, {
                        text: "Производство",
                        value: "Производство"
                    }, {
                        text: "Коммерческая земля",
                        value: "Коммерческая земля"
                    }]);
                }



                if (this.inDATA.opp == 'Продажа') {
                    this.form21.setItemLabel('field_PLALL', "Продаваемая площадь (м2)");
                    this.form21.setItemLabel('field_CENA_AR', "Цена за м2");
                    this.form21.setItemLabel('field_CENA_AR_MES_ALL', "Цена за всю площадь");
                    this.form21.hideItem('field_LeaseType');
                    this.form21.hideItem('field_CENA_AR_MES');
                    this.form21.hideItem('field_PL');
                    this.form21.hideItem('field_PLKOR');
                    this.form21.hideItem('field_IncludedOptionsEnum');
                }
                this.form21.addItem('field_CIANREM', {
                    type: "button",
                    name: "btnRemExport",
                    value: "Поменять в експорте"
                });
                this.form21.attachEvent("onButtonClick", function(name) {
                    if (name == "btnRemExport") {
                        var cianrem = this.getFormData().field_CIANREM;
                        var uid = this.getFormData().field_UID;

                        $.post({
                            url: '/exportUpdate/',
                            type: 'POST',
                            contentType: 'application/json',
                            data: JSON.stringify({
                                opp: 'updateRem',
                                cianrem: cianrem,
                                uid: uid
                            }),
                            success: function(data) {

                            },
                            error: function(err) {
                                console.log('ribbon err', err);
                                if (err.status === 401) {

                                }
                            }
                        });
                    }
                    window.pchange('ob21',{})
                });

                this.form21.attachEvent("onKeyDown", function(inp, ev, name, value) {
                    setTimeout(function() {
                        item.calkCena(inp);
                        window.pchange('ob21',{})
                  }, 30);
                    return true;
                });
                this.form21.attachEvent("onChange", this.FSonChange);
                if(window.changecount !== 0){
                  setTimeout(function() {
                    window.pchange('ob21',{})
                  }, 100);
                }
                window.changecount = 1;
              if (item.func != undefined) {
                    item.func();
                }
            }
            item.FSonChange = function(name, value, state) {
                if ((name == 'field_TIP' || name == 'field_OPP' || name == 'field_OPPTIP')) {
                    item.oldFormData = this.getFormData();
                    item.opptip = this.getItemValue('field_OPPTIP');
                    item.opp = this.getItemValue('field_OPP');
                    item.tip = this.getItemValue('field_TIP');
                    item.uid = this.getItemValue('field_UID');


                    item.field_SOBST = this.getItemValue('field_SOBST');
                    item.field_IMPORTANT = this.getItemValue('field_IMPORTANT');
                    if (name == 'field_OPPTIP') {
                        if (value == "Жилая") {
                            item.tip = "Квартира";
                        }
                        if (value == "Коммерческая") {
                            item.tip = "Офис";
                        }
                        if (value == "Загородная") {
                            item.tip = "Дом/дача";
                        }
                        item.oldFormData.field_TIP = item.tip;
                        item.oldFormData.TIP = item.tip;
                    }
                    if (name == 'field_OPP') {
                        if (item.opptip == "Жилая") {
                            item.tip = "Квартира";
                        }
                        if (item.opptip == "Коммерческая") {
                            item.tip = "Офис";
                        }
                        if (item.opptip == "Загородная") {
                            item.tip = "Дом/дача";
                        }
                        item.oldFormData.field_TIP = item.tip;
                        item.oldFormData.TIP = item.tip;
                    }




                    item.setFormFromTip(item, item.opp, item.tip, item.opptip, function() {

                        item.form21.setItemValue('field_OPPTIP', item.opptip);
                        item.form21.setItemValue('field_OPP', item.opp);
                        item.form21.setItemValue('field_TIP', item.tip);
                        item.form21.setItemValue('field_UID', item.uid);
                        item.form21.setItemValue('field_IMPORTANT', item.field_IMPORTANT);
                        item.form21.setItemValue('field_SOBST', item.field_SOBST);
                        for (var key in item.oldFormData) {
                            item.form21.setItemValue(key, item.oldFormData[key]);
                        }
                        if (item.opp == 'Продажа') {
                            item.form21.setItemLabel('field_PLALL', "Продаваемая площадь (м2)");
                            item.form21.setItemLabel('field_CENA_AR', "Цена за м2");
                            item.form21.setItemLabel('field_CENA_AR_MES_ALL', "Цена за всю площадь");
                            item.form21.hideItem('field_LeaseType');
                            item.form21.hideItem('field_CENA_AR_MES');
                            item.form21.hideItem('field_PL');
                            item.form21.hideItem('field_PLKOR');
                            item.form21.hideItem('field_IncludedOptionsEnum');
                        }
                    });
                    return true;
                }
                if (name == 'field_MPLALL') { //field_PLIN
                    if (this.isItemChecked('field_MPLALL')) {
                        this.setItemValue('field_PLIN', '');
                        this.showItem('field_PLIN');
                    }
                    else {
                        this.setItemValue('field_PLIN', '');
                        this.hideItem('field_PLIN');
                    }
                }
                if (name == 'field_OPP') {
                    if (value == 'Продажа') {
                        this.setItemLabel('field_PLALL', "Продаваемая площадь (м2)");
                        this.setItemLabel('field_CENA_AR', "Цена за м2");
                        this.setItemLabel('field_CENA_AR_MES_ALL', "Цена за всю площадь");


                        this.hideItem('field_LeaseType');
                        this.hideItem('field_CENA_AR_MES');
                        this.hideItem('field_PL');
                        this.hideItem('field_PLKOR');
                        this.hideItem('field_IncludedOptionsEnum');


                    }
                    else {
                        this.showItem('field_LeaseType');
                        this.showItem('field_CENA_AR_MES');
                        this.setItemLabel('field_PLALL', "Арендуемая площадь (м2)");
                        this.setItemLabel('field_CENA_AR', "АС в год за м2");
                        this.setItemLabel('field_CENA_AR_MES_ALL', "АС в мес. за всё");
                        this.showItem('field_PL');
                        this.showItem('field_PLKOR');
                        this.showItem('field_IncludedOptionsEnum');

                    }
                }
                //console.log('onChange *** formOb21 ***', item.form21.getFormData());
                if (item.form21 && item.form21.fsformLoad) {
                  console.log('fsformLoad')
                    item.form21.fsformLoad();
                }
                window.pchange('ob21',{})
                return true;
            };


            this.item = item;
            return this;
        },
        save: function() {
            var data = this.item.form21.getFormData();
            var fields = [];
            for (var key in data) {
                if (key.indexOf('field_') != -1) {
                    var fname = key.split('field_')[1];
                    fields.push({
                        tip: "ob",
                        title: fname,
                        val: data[key]
                    });
                    if (fname == 'UID') {
                        var uid = data[key];
                    }
                }
            }
            for (var i = 0; i < fields.length; i++) {
                fields[i]['uid'] = uid;
            }

            // отправляем запрос на сервер

            this.item.form21.lock();
            $.post({
                url: '/api/',
                form: this.item.form21,
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    opp: 'save',
                    item: 'ob',
                    fields: fields
                }),
                success: function(data) {
                    this.form.unlock();
                },
                error: function(err) {
                    console.log('ribbon err', err);
                    if (err.status === 401) {

                    }
                }
            });
            // создаём обьект для выгрузки



            console.log(fields);

        },
        // destructor, required (if you will use unload)
        destruct: function(item) {
            item.innerHTML = "";
        },

        // enable item, mandatory
        enable: function(item) {
            if (item.lastChild) {
                item.lastChild.style.color = "black";
                item._enabled = true;

            }
        },

        disable: function(item) {
            item.lastChild.style.color = "gray";
            item._enabled = false;
        },

        setValue: function(item, data) {
            let pchange = data.pchange
            window.pchange = pchange
            window.changecount = 0
            data = data.data
            if (1 == 1) {

                item.setFormFromTip(item, data.OPP, data.TIP, data.OPPTIP, function() {
                    var list = item.form21.getFormData()
                    item.form21.pchange = pchange
                    item.form21.setItemValue('SOBST', []);
                    var IMPORTANT_ = false;
                    item.form21.flagStart = true
                    var sobst = [];
                    var kont = {};
                    var flagMPALL = false;
                    var BIGH = 0;
                    var field_LOFT, field_PERSONALVHOD = 0;
                    // проверяем новые поля
                    for(var key in data){
                      if (item.form21.isItem('field_' + key)) {
                        delete(list['field_' + key]);
                      }
                    }
                    for (var key in data) {
                        if (1===1) {
                            if (key === 'MPLALL') flagMPALL = true;
                            if (item.form21.isItem('field_' + key)) {
                                item.form21.setItemValue('field_' + key, data[key]);
                                if (key == 'BIGH') {
                                    BIGH = data[key];
                                }
                                if (key == 'LOFT') {
                                    field_LOFT = data[key];
                                }
                                if (key == 'PERSONALVHOD') {
                                    field_PERSONALVHOD = data[key];
                                }
                            }
                        }
                    }
                    item.form21.setItemValue('field_BIGH', BIGH);
                    item.form21.setItemValue('field_LOFT', field_LOFT);
                    item.form21.setItemValue('field_PERSONALVHOD', field_PERSONALVHOD);

                    if (flagMPALL) {
                        if (item.form21.getItemValue('field_MPLALL') == 0) {
                            item.form21.hideItem('field_PLIN');
                        }
                        else {
                            item.form21.showItem('field_PLIN');
                        }
                    }
                    else {
                        item.form21.hideItem('field_PLIN');
                        item.form21.setItemValue('field_MPLALL', 0);
                    }
                    item.form21.unlock()
/*
                    if (data.length > 0) {
                        item.form21.unlock()

                    }
                    else {
                        item.form21.lock()

                    }

 */
                    if (item.form21 && item.form21.fsformLoad) {
                        //item.form21.fsformLoad();
                    }

                });

                return;
            }
            //var formdata = item.form21.getFormData();
        },
        getForm:function(){
          console.log('ddddddddddddddddddddddddd')
          return 1
        },
        getValue: function(item) {
            if (!item.form21 || !item.form21.getFormData) {
                return null;
            }
            var data = item.form21.getFormData();
            const outOb = {}
            for (var key in data) {
              outOb[key.replace('field_','')] = data[key]
            }
          // outOb.form = item.form21
            return outOb;
        },
        addMyItem: function(item, ob) {
            var toolbar = $(item).data('Toolbar');
            var tree = $(item).data('Tree');
            tree.toolbar.disableItem('addBL');
            tree.toolbar.disableItem('addBLV');
            tree.toolbar.disableItem('copyBL');
            tree.toolbar.disableItem('delBL');
            toolbar.enableItem('save');
            if (ob.uid == 'new') {
                item.form21.setItemValue('field_UID', generateUID());
                var sobstUID = generateUID();
                item.form21.setItemValue('SOBST', [{
                    UID: sobstUID,
                    PUID: '',
                    VAL: sobstUID,
                    TIP: 'soBst21',
                    TITLE: 'UID'
                }, {
                    UID: sobstUID,
                    PUID: '',
                    VAL: '',
                    TIP: 'soBst21',
                    TITLE: 'NAME'
                }]);
            }

            item.form21.unlock();
        },
        lockItem: function(item, flag) {
            if (flag == true) {
                if (item.form21 && item.form21.lock)
                    item.form21.lock();
            }
            else {
                if (item.form21 && item.form21.unlock)
                    item.form21.unlock();

            }
        },
        validate21_: function(item) {
            if (!item.form21 || !item.form21.getFormData) {
                return true;
            }
            var flagValid = true;
            var data = item.form21.getFormData();
            for (var key in data) {
                if (key.indexOf('field_') != -1 &&
                    (key != 'field_ARHIV' &&
                        (key != 'field_BIGH') &&
                        (key != 'field_LOFT') &&
                        (key != 'field_PERSONALVHOD') &&

                        key != "field_MPLALL")) {
                    if (!item.form21.isItemHidden(key) && data[key] == '') {
                        $(item.form21._getItemByName(key)).find('.dhxform_label').addClass('notPublE');
                        $(item.form21._getItemByName(key)).find('.dhxform_txt_label2').addClass('notPublE');
                        flagValid = false;
                    }
                    else {
                        $(item.form21._getItemByName(key)).find('.dhxform_label').removeClass('notPublE');
                        $(item.form21._getItemByName(key)).find('.dhxform_txt_label2').removeClass('notPublE');

                    }
                }
            }
            return flagValid;
        },
        copyOb: function(item) {
            item.form21.setItemValue('field_UID', generateUID());
        }

    };


    dhtmlXForm.prototype.copyOb = function(name) {
        return this.doWithItem(name, "copyOb");
    };


    dhtmlXForm.prototype.validate21 = function(name) {
        return this.doWithItem(name, "validate21_");
    };


    dhtmlXForm.prototype.lockItem21 = function(name, text) {
        this.doWithItem(name, "lockItem", text);
    };

    dhtmlXForm.prototype.setFormData_ob21 = function(name, value) {
        return this.doWithItem(name, "setValue", value);
    };


    dhtmlXForm.prototype.getFormData_ob21 = function(name) {
        return this.doWithItem(name, "getValue");
    };
    dhtmlXForm.prototype.getForm1 = function() {
      //console.log(name)
      return this.doWithItem("getForm1");
    };

    var ob21 = function(parent_, toolbar) {
        var self = this
        this.parent_ = parent_;
        this.myWins_ = new dhtmlXWindows();
        this.myWins_.attachViewportTo(parent_);

        this.setValue = function(val) {}
    }
