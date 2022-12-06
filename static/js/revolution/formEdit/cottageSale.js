item.form21 = new dhtmlXForm($(item)[0], [{
        type: "settings",
        //inputWidth: 300,
        inputHeight: 25,
        position: "label-top"
    }, {
        type: "hidden",
        name: "field_SOBST",
        value: ''
    }, {
        type: "hidden",
        name: "field_UID",
        value: generateUID()
    }, {
        type: "block",
        name: "blFoto",
        blockOffset: 0,
        offsetLeft: 12,
        hidden: true,
        list: []

    }, {
        type: "block",
        name: "blGL",
        blockOffset: 0,
        offsetLeft: 12,
        list: [{
            type: "block",
            blockOffset: 0,
            offsetLeft: 0,
            list: [{
                type: "hidden",
                name: "field_Category",
                value: "cottageSale"
            }, {
                type: "checkbox",
                label: "Архив",
                position: "label-left",
                name: "field_ARHIV",
                checked: false
            }, {
                type: "input",
                label: "Изменён",
                position: "label-left",
                name: "field_DATAP",
                inputHeight: 22,
                inputWidth: 90,
                readonly: true
            }, {
                type: "select",
                label: "Ответственный",
                name: "field_IMPORTANT",
                position: "label-left",
                inputWidth: 200,
                filtering: true,
                options: window['listUser']
            }, /*important*/ ]
        }, {
            type: "SelectCian",
            name: "field_OPP",
            position: "label-left",
            label: "Операция *",
            multi: false,
            labelWidth: 138,
            options: [{
                text: "Аренда",
                value: "Аренда"
            }, {
                text: "Продажа",
                value: "Продажа"
            }]
        }, {
            type: "SelectCian",
            name: "field_OPPTIP",
            position: "label-left",
            label: "Тип недвижимости *",
            multi: false,
            labelWidth: 138,
            options: [{
                text: "Коммерческая",
                value: "Коммерческая"
            }, {
                text: "Жилая",
                value: "Жилая"
            }, {
                text: "Загородная",
                value: "Загородная"
            }]
        }, {
            type: "MultyCian",
            name: "field_TIP",
            position: "label-left",
            label: "Тип",
            labelWidth: 160,
            // inputWidth: 510,
            multi: false,
            options: [{
                text: "Квартира",
                value: "Квартира"
            }]
        }, {
            type: "block",
            offset: 0,
            className: "oneBorder",
            blockOffset: 10,
           // width: 500,
            list: [{
                    type: "settings",
                    inputWidth: 400,
                }, {
                    type: "label",
                    className: "linelabel",
                    label: "Об объекте"
                }, {
                    type: "input",
                    name: "field_CadastralNumber",
                    position: "label-left",
                    offsetTop: 22,
                    label: "Кадастровый номер",
                    labelWidth: 138,
                    inputWidth: 200
                }, {
                    type: "input",
                    name: "field_SettlementName",
                    position: "label-left",
                    offsetTop: 12,
                    label: "Название коттеджного поселка",
                    labelWidth: 138,
                    inputWidth: 300
                }, {
                    type: "input",
                    offsetTop: 12,
                    inputWidth: 40,
                    labelWidth: 138,
                    label: "Год постройки",
                    position: "label-left",
                    name: "field_Building:BuildYear",
                    userdata: {
                        mask: "numeric",
                        sizemask: 4
                    }
                }, {
                    type: "MultyCian",
                    name: "field_Building:MaterialType",
                    label: 'Тип дома',
                    // inputWidth: 480,
                    labelWidth: 138,
                    offsetTop: 12,
                    multi: false,
                    options: [{
                        text: "Газобетонный блок",
                        value: "aerocreteBlock"
                    }, {
                        text: "Блочный",
                        value: "block"
                    }, {
                        text: "Щитовой",
                        value: "boards"
                    }, {
                        text: "Кирпичный",
                        value: "brick"
                    }, {
                        text: "Пенобетонный блок",
                        value: "foamConcreteBlock"
                    }, {
                        text: "Газосиликатный блок",
                        value: "gasSilicateBlock"
                    }, {
                        text: "Монолитный",
                        value: "monolith"
                    }, {
                        text: "Монолитно-кирпичный",
                        value: "monolithBrick"
                    }, {
                        text: "Старый фонд",
                        value: "old"
                    }, {
                        text: "Панельный",
                        value: "panel"
                    }, {
                        text: "Сталинский",
                        value: "stalin"
                    }, {
                        text: "Каркасный",
                        value: "wireframe"
                    }, {
                        text: "Деревянный",
                        value: "wood"
                    }]
                }, {
                    type: "input",
                    name: "field_TotalArea",
                    position: "label-left",
                    label: "Общая площадь м²*",
                    labelWidth: 138,
                    inputWidth: 40,
                    offsetTop: 22,
                    userdata: {
                        mask: "float",
                        sizemask: 4
                    }
                }, {
                    type: "input",
                    offsetTop: 12,
                    inputWidth: 40,
                    labelWidth: 138,
                    label: "этажей в доме",
                    position: "label-left",
                    name: "field_Building:FloorsCount",
                    userdata: {
                        mask: "float",
                        sizemask: 3
                    }
                }, {
                    type: "input",
                    offsetTop: 12,
                    inputWidth: 40,
                    labelWidth: 138,
                    label: "Количество спален",
                    position: "label-left",
                    name: "field_BedroomsCount",
                    userdata: {
                        mask: "numeric",
                        sizemask: 2
                    }
                }, {
                    type: "SelectCian",
                    name: "field_WcLocationType",
                    position: "label-left",
                    label: "Санузел",
                    multi: false,
                    labelWidth: 138,
                    options: [{
                        text: "В доме",
                        value: "indoors"
                    }, {
                        text: "На улице",
                        value: "outdoors"
                    }]
                }, {
                    type: "MultyCian",
                    name: "field_Building:HeatingType",
                    label: 'Отопление',
                    // inputWidth: 480,
                    labelWidth: 138,
                    offsetTop: 12,

                    multi: false,
                    options: [{
                        text: "Автономное газовое",
                        value: "autonomousGas"
                    }, {
                        text: "центральное угольное",
                        value: "centralCoal"
                    }, {
                        text: "центральное газовое",
                        value: "centralGas"
                    }, {
                        text: "Дизельное",
                        value: "diesel"
                    }, {
                        text: "Электрическое",
                        value: "electric"
                    }, {
                        text: "Камин",
                        value: "fireplace"
                    }, {
                        text: "Нет",
                        value: "no"
                    }, {
                        text: "Твердотопливный котел",
                        value: "solidFuelBoiler"
                    }, {
                        text: "Печь",
                        value: "stove"
                    }]
                }, {
                    type: "block",
                    offset: 0,
                    blockOffset: 0,
                   // width: 500,
                    list: [{
                        type: "settings",
                        inputHeight: 14,
                    }, {
                        type: "checkbox",
                        label: "электричество",
                        position: "label-left",
                        name: "field_HasElectricity",
                        labelWidth: 120,
                        offsetTop: 6,
                        checked: false,
                        value: 1
                    }, {
                        type: "checkbox",
                        label: "канализация",
                        position: "label-left",
                        name: "field_HasDrainage",
                        labelWidth: 120,
                        offsetTop: 6,
                        checked: false,
                        value: 1
                    }, {
                        type: "checkbox",
                        label: "водоснабжение",
                        position: "label-left",
                        name: "field_HasWater",
                        labelWidth: 120,
                        offsetTop: 6,
                        checked: false,
                        value: 1
                    }, {
                        type: "newcolumn"
                    }, {
                        type: "checkbox",
                        label: "газ",
                        position: "label-left",
                        name: "field_HasGas",
                        labelWidth: 120,
                        offsetTop: 6,
                        checked: false,
                        value: 1
                    }, {
                        type: "checkbox",
                        label: "охрана",
                        position: "label-left",
                        name: "field_HasSecurity",
                        labelWidth: 120,
                        offsetTop: 6,
                        checked: false,
                        value: 1
                    }, {
                        type: "checkbox",
                        label: "телефон",
                        position: "label-left",
                        name: "field_HasPhone",
                        labelWidth: 120,
                        offsetTop: 6,
                        checked: false,
                        value: 1
                    }, {
                        type: "newcolumn"
                    }, {
                        type: "checkbox",
                        label: "баня",
                        position: "label-left",
                        name: "field_HasBathhouse",
                        labelWidth: 120,
                        offsetTop: 6,
                        checked: false,
                        value: 1
                    }, {
                        type: "checkbox",
                        label: "гараж",
                        position: "label-left",
                        name: "field_HasGarage",
                        labelWidth: 120,
                        offsetTop: 6,
                        checked: false,
                        value: 1
                    }, {
                        type: "checkbox",
                        label: "бассейн",
                        position: "label-left",
                        name: "field_HasPool",
                        labelWidth: 120,
                        offsetTop: 6,
                        checked: false,
                        value: 1
                    }]
                }, {
                    type: "block",
                    offset: 0,
                    blockOffset: 0,
                   // width: 500,
                    list: [{
                        type: "input",
                        inputWidth: 80,
                        labelWidth: 138,
                        label: "Площадь участка",
                        position: "label-left",
                        name: "field_Land:Area",
                        userdata: {
                            mask: "float",
                            sizemask: 5
                        }
                    }, {
                        type: "newcolumn"
                    }, {
                        type: "SelectCian",
                        name: "field_Land:AreaUnitType",
                        position: "label-left",
                        inputWidth: 170,
                        label: "",
                        multi: false,
                        labelWidth: 1,
                        options: [{
                            text: "Гектар",
                            value: "hectare"
                        }, {
                            text: "Сотка",
                            value: "sotka"
                        }]

                    }]
                }, {
                    type: "MultyCian",
                    name: "field_Land:Status",
                    position: "label-left",
                    // inputWidth: 480,
                    labelWidth: 138,
                    label: "Статус участка",
                    multi: false,
                    options: [{
                        text: "Фермерское хозяйство",
                        value: "farm"
                    }, {
                        text: "Садоводство",
                        value: "gardening"
                    }, {
                        text: "Индивидуальное жилищное строительство",
                        value: "individualHousingConstructio"
                    }, {
                        text: "Земля промышленного назначения",
                        value: "industrialLand"
                    }, {
                        text: "Инвестпроект",
                        value: "investmentProject"
                    }, {
                        text: "Личное подсобное хозяйство",
                        value: "privateFarm"
                    }, {
                        text: "Дачное некоммерческое партнерство",
                        value: "suburbanNonProfitPartnership"
                    }]

                }




            ]
        }, {
            type: "block",
            offset: 0,
            className: "oneBorder",
            blockOffset: 0,
           // width: 500,
            list: [{
                    type: "label",
                    className: "linelabel",
                    label: "Условия сделки"
                }, {
                    type: "input",
                    inputWidth: 100,
                    labelWidth: 100,
                    label: "Цена",
                    offsetLeft: 6,
                    position: "label-left",
                    name: "field_BargainTerms:Price",
                    userdata: {
                        mask: "float",
                        sizemask: 9
                    }

                }, {
                    type: "checkbox",
                    label: "Ипотека",
                    position: "label-left",
                    name: "field_BargainTerms:MortgageAllowed",
                    labelWidth: 100,
                    offsetLeft: 6,
                    offsetTop: 12,
                    checked: false,
                    value: 1
                }, {
                    type: "MultyCian",
                    name: "field_BargainTerms:SaleType",
                    position: "label-left",
                    label: "Тип продажи",
                    // inputWidth: 480,
                    labelWidth: 160,
                    multi: false,
                    options: [{
                        text: "Альтернатива",
                        value: "alternative",
                        selected: true
                    }, {
                        text: "Свободная продажа",
                        value: "free",
                    }]
                }

            ]
        }, {
            type: "block",
            offset: 0,
            blockOffset: 0,
            list: [ //Бонус агенту
                {
                    type: "block",
                    offset: 0,
                    className: "oneBorder",
                    blockOffset: 0,
                   // width: 500,
                    list: [{
                        type: "label",
                        className: "linelabel",
                        label: "Бонус агенту"
                    }, {
                        type: "input",
                        inputWidth: 100,
                        labelWidth: 180,
                        label: "Значение",
                        offsetLeft: 8,
                        position: "label-left",
                        name: "field_BargainTerms:AgentBonus:Value",
                        userdata: {
                            mask: "float",
                            sizemask: 9
                        }

                    }, {
                        type: "MultyCian",
                        name: "field_BargainTerms:AgentBonus:PaymentType",
                        position: "label-left",
                        label: "Тип оплаты:",
                        multi: false,
                        // inputWidth: 480,
                        options: [{
                            text: "Фиксированный",
                            value: "fixed"
                        }, {
                            text: "Процент",
                            value: "percent"
                        }]
                    }]
                }
            ]
        }, {
            type: 'input',
            name: 'field_CIANREM',
            label: 'Текстовое примечание для CIAN:',
            position: "label-top",
            // inputWidth: 510,
            inputHeight: 224,
            rows: 30,
            offsetTop: 22
        }]
    }, {
        type: 'container',
        name: 'containerBot',
        inputHeight: 80
    },
    // блок аренды
    {
        type: "block",
        name: "blSOBST",
        hidden: true,
        // inputWidth: 500,
        list: [{
            type: 'soBst21',
            name: 'SOBST',
            label: "Собственик",
            // inputWidth: 500
        }]
    },
]);

var data = item.form21.getFormData();
for (var key in data) {
    if (item.form21.getUserData(key, "mask") == "numeric") {
        $($(item.form21._getItemByName(key)).find('input')).inputmask({
            mask: '9{1,' + item.form21.getUserData(key, "sizemask") + '}',
        });
    }
    if (item.form21.getUserData(key, "mask") == "float") {
        $($(item.form21._getItemByName(key)).find('input')).inputmask('decimal', {});
    }

}

item.form21.fsformLoad = function() {
    console.log("Проверка правельности ввода");
    console.log(item.form21.getFormData());
    if (item.form21.getItemValue('field_FlatRoomsCount') == "1") {
        item.form21.hideItem('field_RoomType');
    } else {
        item.form21.showItem('field_RoomType');
    }
}

var list = $(item.form21.cont).find('.minimumHeight');
for (var i = 0; i < list.length; i++) {
    $(list[i]).find('.dhxform_base').hide();
    $($(list[i]).find('.dhxform_base')[0]).height(11);
    //$($(list[i]).find('.dhxform_base')[0]).width(510);
    $($(list[i]).find('.dhxform_base')[0]).show();
    $($(list[i]).find('.dhxform_base').find('.dhxform_item_label_left')).hide();
}
$(item.form21.cont).find('.labelOpenBl').find('div').click(function() {
    var p = $(this).parent();
    while (!p.hasClass('minimumHeight')) {
        p = p.parent();
    }
    if ($(this).html() == 'Развернуть') {
        $(this).html('Свернуть');
        $(p).find('.dhxform_base').show();
        $($(p).find('.dhxform_base')[0]).css('height', 'auto');
        $($(p).find('.dhxform_base')[0]).show();
        $($(p).find('.dhxform_base').find('.dhxform_item_label_left')).show();
    } else {
        $(this).html('Развернуть')
        $(p).find('.dhxform_base').hide();
        $($(p).find('.dhxform_base')[0]).height(11);
        $($(p).find('.dhxform_base')[0]).show();
        $($(p).find('.dhxform_base').find('.dhxform_item_label_left')).hide();
    }
})
