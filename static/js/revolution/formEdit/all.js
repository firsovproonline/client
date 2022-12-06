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
        blockOffset: 0,
        list: [{
            type: "button",
            name: "b1",
            value: "Основной",
            hidden: false,

        }, {
            type: "newcolumn"
        }, {
            type: "button",
            name: "b2",
            value: "Файлы",
            hidden: false,
        }, {
            type: "newcolumn"
        }, {
            type: "button",
            name: "b3",
            value: "Соственики",
            hidden: false
        }, {
            type: "newcolumn"
        }, {
            type: "button",
            name: "b4",
            value: "Арендаторы",
            hidden: false,
        }, {
            type: "newcolumn"
        }, {
            type: "button",
            name: "b5",
            hidden: true,

            value: "Показы"
        }]
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
                    type: "checkbox",
                    label: "Архив",
                    position: "label-left",
                    name: "field_ARHIV",
                    checked: false
                }, {
                    type: "newcolumn"
                }, {
                    type: "input",
                    label: "Изменён",
                    position: "label-left",
                    name: "field_DATAP",
                    inputHeight: 22,
                    inputWidth: 90,
                    readonly: true
                }, {
                    type: "newcolumn"
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
                type: "MultyCian",
                name: "field_OPP",
                position: "label-left",
                label: "Операция *",
                multi: false,
                // inputWidth: 510,
                options: [{
                    text: "Аренда",
                    value: "Аренда"
                }, {
                    text: "Продажа",
                    value: "Продажа"
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
                }]
            }, {
                type: 'block',
                id: 'loadField',
                list: []
            }, {
                type: "MultyCian",
                name: "field_ETAG",
                position: "label-left",
                label: "Этаж",
                multi: false,
                labelWidth: 160,
                // inputWidth: 510,
                options: [{
                        text: "Мансардный",
                        value: "Мансардный"
                    }, {
                        text: "Цокольный",
                        value: "Цокольный"
                    }, {
                        text: "Подвальный",
                        value: "Подвальный"
                    }, {
                        text: "Антресольный",
                        value: "Антресольный"
                    }, {
                        text: "1",
                        value: "1",
                    }, {
                        text: "2",
                        value: "2"
                    }, {
                        text: "3",
                        value: "3"
                    }, {
                        text: "4",
                        value: "4"
                    }, {
                        text: "5",
                        value: "5"
                    }, {
                        text: "6",
                        value: "6"
                    }, {
                        text: "7",
                        value: "7"
                    }, {
                        text: "8",
                        value: "8"
                    }, {
                        text: "9",
                        value: "9"
                    }, {
                        text: "10",
                        value: "10"
                    }, {
                        text: "11",
                        value: "11"
                    }


                ]
            }, {
                type: "MultyCian",
                name: "field_TIPP",
                position: "label-left",
                label: "Назначение",
                labelWidth: 160,
                // inputWidth: 510,
                multi: true,
                //hidden: true,
                options: [{
                    text: "Офис",
                    value: "Офис"
                }, {
                    text: "Склад",
                    value: "Склад"
                }, {
                    text: "Магазин",
                    value: "Магазин"
                }, {
                    text: "ПСН",
                    value: "ПСН"
                }]
            },
            // блок площадей
{
                                    type: "MultyPL",
                                    name: "field_MPL",
                                    position: "label-left",
                                    label: "площади",
                                    labelWidth: 160,
                                    // inputWidth: 510,
                                },
            {
                type: "block",
                offset: 0,
                blockOffset: 0,
                list: [{
                        type: "input",
                        name: "field_PLALL",
                        position: "label-left",
                        offsetTop: 22,
                        label: "Арендуемая площадь (м2)",
                        labelWidth: 200,
                        inputWidth: 40,
                        userdata: {
                            mask: "numeric",
                            sizemask: 4
                        }
                    }, {
                        type: "input",
                        name: "field_PLIN",
                        position: "label-left",
                        offsetTop: 8,
                        hidden: true,
                        label: "Арендуемая площадь (м2) от",
                        labelWidth: 200,
                        inputWidth: 40,
                        userdata: {
                            mask: "numeric",
                            sizemask: 4
                        }
                    }

                    , {
                        type: "newcolumn"
                    }, {
                        type: "checkbox",
                        offsetTop: 26,
                        offsetLeft: 12,
                        label: "Можно _частями",
                        position: "label-left",
                        name: "field_MPLALL",
                        checked: false,
                        hidden:true
                    }
                ]
            }, {
                type: "input",
                name: "field_PL",
                position: "label-left",
                label: "Полезная площадь (м2)",
                labelWidth: 200,
                inputWidth: 40,
                userdata: {
                    mask: "numeric",
                    sizemask: 4
                }
            }, {
                type: "input",
                name: "field_PLKOR",
                position: "label-left",
                label: "Коридорный коэффициент %",
                labelWidth: 200,
                inputWidth: 20,
                userdata: {
                    mask: "numeric",
                    sizemask: 2
                }
            }, {
                type: "block",
               // width: 500,
                offsetLeft: 0,
                blockOffset: 0,
                list: [{
                    type: "input",
                    inputWidth: 100,
                    labelWidth: 100,
                    label: "АС в год за м2",
                    position: "label-left",
                    name: "field_CENA_AR",
                    userdata: {
                        mask: "float",
                        sizemask: 9
                    }

                }, {
                    type: "input",
                    inputWidth: 100,
                    labelWidth: 100,
                    label: "АС в мес. за м2",
                    position: "label-left",
                    name: "field_CENA_AR_MES",
                    userdata: {
                        mask: "float",
                        sizemask: 9
                    }

                }, {
                    type: "input",
                    labelWidth: 100,
                    inputWidth: 100,
                    label: "АС в мес. за всё",
                    position: "label-left",
                    name: "field_CENA_AR_MES_ALL",
                    userdata: {
                        mask: "float",
                        sizemask: 9
                    }

                }]
            }, {
                type: "MultyCian",
                name: "field_LeaseTermType",
                position: "label-left",
                label: "Срок аренды",
                // inputWidth: 510,
                labelWidth: 160,
                multi: false,
                options: [{
                    text: "Длительный",
                    value: "longTerm",
                    selected: true
                }, {
                    text: "Несколько месяцев",
                    value: "fewMonths",
                }]
            }, {
                type: "MultyCian",
                name: "field_LeaseType",
                position: "label-left",
                label: "Тип аренды",
                // inputWidth: 510,
                labelWidth: 160,
                multi: false,
                options: [{
                    text: "Прямая аренда",
                    value: "direct",
                    selected: true
                }, {
                    text: "Субаренда",
                    value: "sublease",
                }]
            }, {
                type: "MultyCian",
                label: "Арендные каникулы",
                // inputWidth: 510,
                position: "label-left",
                name: "field_HasGracePeriod",
                multi: false,
                options: [{
                    text: "Да",
                    value: true,
                }, {
                    text: "Нет",
                    value: false,
                }]
            }, {
                type: "MultyCian",
                label: "Предоплата месяцев",
                // inputWidth: 510,
                position: "label-left",
                name: "field_PrepayMonths",
                multi: false,
                options: [{
                    text: "1",
                    value: "1",
                    selected: true
                }, {
                    text: "2",
                    value: "2",
                }, {
                    text: "3",
                    value: "3",
                }, {
                    text: "4",
                    value: "4",
                }, {
                    text: "5",
                    value: "5",
                }, {
                    text: "6",
                    value: "6",
                }, {
                    text: "7",
                    value: "7",
                }, {
                    text: "8",
                    value: "8",
                }, {
                    text: "9",
                    value: "9",
                }, {
                    text: "10",
                    value: "10",
                }, {
                    text: "11",
                    value: "11",
                }, {
                    text: "12",
                    value: "12",
                }, ]
            }, {
                type: "MultyCian",
                label: "Налог",
                // inputWidth: 510,
                position: "label-left",
                name: "field_VatType",
                multi: false,
                options: [{
                    text: "НДС включен",
                    value: "included",
                }, {
                    text: "НДС не включен",
                    value: "notIncluded",
                }, {
                    text: "УСН",
                    value: "usn",
                }]
            }, //IncludedOptionsEnum
            {
                type: "MultyCian",
                label: "Включено в ставку",
                // inputWidth: 510,
                position: "label-left",
                name: "field_IncludedOptionsEnum",
                multi: true,
                options: [{
                    text: "Операционные расходы",
                    value: "operationalCosts",
                }, {
                    text: "Коммунальные услуги",
                    value: "utilityCharges",
                }]
            }, {
                type: "input",
                labelWidth: 145,
                inputWidth: 100,
                offsetTop: 22,
                label: "Обеспечительный платеж",
                position: "label-left",
                name: "field_SecurityDeposit",
                userdata: {
                    mask: "float",
                    sizemask: 11
                }

            },


            {
                type: "MultyCian",
                name: "field_KOMKL",
                position: "label-left",
                label: "Комисс. для клиента",
                // inputWidth: 510,
                labelWidth: 160,
                multi: false,
                options: [{
                    text: "Без комиссии",
                    value: "Без комиссии"
                }, {
                    text: "С комиссией",
                    value: "С комиссией",
                    selected: true
                }, ]
            }, {
                type: "MultyCian",
                name: "field_GV",
                position: "label-left",
                label: "Готовность к вьезду",
                multi: false,
                labelWidth: 160,
                // inputWidth: 510,
                options: [{
                    text: "Готово к въезду",
                    value: "Готово к въезду"
                }, {
                    text: "Готово к въезду, требуется косметический ремонт",
                    value: "Готово к въезду, требуется косметический ремонт"
                }, {
                    text: "Под отделку",
                    value: "Под отделку"
                }]
            }, {
                type: "MultyCian",
                name: "field_PLANIROVKA",
                position: "label-left",
                label: "Планировка",
                labelWidth: 160,
                // inputWidth: 510,
                multi: false,
                options: [{
                    text: "Кабинетная",
                    value: "Кабинетная"
                }, {
                    text: "Открытая",
                    value: "Открытая"
                }, {
                    text: "Смешанная",
                    value: "Смешанная"
                }, {
                    text: "Зальная",
                    value: "Зальная"
                }]
            }, {
                type: "input",
                name: "field_KOLKAB",
                position: "label-left",
                label: "Количество кабинетов",
                offsetTop: 18,
                labelWidth: 145,
                inputWidth: 40,
                userdata: {
                    mask: "float",
                    sizemask: 2
                }
            }, { //Юридический адрес
                type: "MultyCian",
                label: "Юридический адрес",
                // inputWidth: 510,
                position: "label-left",
                name: "field_IsLegalAddressProvided",
                multi: false,
                options: [{
                    text: "Предоставляется",
                    value: true
                }, {
                    text: "Не предоставляется",
                    value: false
                }]
            }, {
                type: 'MultyCian',
                name: "field_WaterPipesCount",
                label: 'Количество мокрых<br>точек (водопровод):',
                multi: false,
                // inputWidth: 510,
                labelWidth: 90,
                //offsetLeft: 22,
                options: [{
                    text: "Нет",
                    value: 0
                }, {
                    text: "1",
                    value: 1
                }, {
                    text: "2",
                    value: 2
                }, {
                    text: "3",
                    value: 3
                }, {
                    text: "4",
                    value: 4
                }]
            }, {
                type: "checkbox",
                label: "Высокий потолок",
                position: "label-left",
                name: "field_BIGH",
                labelWidth: 140,
                offsetTop: 18,
                checked: false,
                value: 1
            }, {
                type: "checkbox",
                label: "Лофт",
                position: "label-left",
                name: "field_LOFT",
                labelWidth: 140,
                offsetTop: 12,
                checked: false,
                value: 1
            }, {
                type: "checkbox",
                label: "Отдельный вход",
                position: "label-left",
                name: "field_PERSONALVHOD",
                labelWidth: 140,
                offsetTop: 12,
                checked: false,
                value: 1
            },


            {
                type: "MultyCian",
                name: "field_ConditionType",
                label: 'Состояние :',
                // inputWidth: 510,
                labelWidth: 90,
                offsetLeft: 0,
                offsetTop: 6,
                multi: false,
                options: [{
                    text: "Требуется косметический ремонт",
                    value: "cosmeticRepairsRequired"
                }, {
                    text: "Под чистовую отделку",
                    value: "finishing"
                }, {
                    text: "Требуется капитальный ремонт",
                    value: "majorRepairsRequired"
                }, {
                    text: "Офисная отделка",
                    value: "office"
                }]
            },
            {
                type: 'input',
                name: 'field_CIANREM',
                label: 'Текстовое примечание для CIAN:',
                position: "label-top",
                // inputWidth: 510,
                inputHeight: 224,
                rows: 30,
                offsetTop: 22
            }
        ]
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
//item.form21.hideItem('field_TIPP');

var data = item.form21.getFormData();
for (var key in data) {
    if (item.form21.getUserData(key, "mask") == "numeric" || item.form21.getUserData(key, "mask") == "float") {
        $($(item.form21._getItemByName(key)).find('input')).inputmask({
            mask: '9{1,' + item.form21.getUserData(key, "sizemask") + '}',
        });
    }
}

for (var key in data) {

}


//minimumHeight

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
