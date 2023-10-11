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
            value: "roomSale"
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
            type: "SelectCian",
            name: "field_RoomsForSaleCount",
            position: "label-left",
            label: "Комнат в продажу *",
            multi: false,
            inputWidth: 400,
            labelWidth: 138,
            options: [{
                text: "1",
                value: "1"
            }, {
                text: "2",
                value: "2"
            }, {
                text: "3",
                value: "3"
            }, {
                text: "4",
                value: "5"
            }, {
                text: "5",
                value: "5"
            }, {
                text: "6 и более",
                value: "6"
            }]
        }, {
            type: "SelectCian",
            name: "field_RoomType",
            position: "label-left",
            label: "Тип комнаты *",
            multi: false,
            hidden: true,
            inputWidth: 400,
            labelWidth: 138,
            options: [{
                text: "Совмещенная",
                value: "combined"
            }, {
                text: "Изолированная",
                value: "separate"
            }]
        }, {
            type: "input",
            name: "field_RoomArea",
            position: "label-left",
            offsetTop: 22,
            label: "Площадь комнаты м²*",
            labelWidth: 138,
            inputWidth: 40,
            userdata: {
                mask: "float",
                sizemask: 4
            }
        }, {
            type: "input",
            name: "field_AllRoomsArea",
            position: "label-left",
            offsetTop: 22,
            label: "Площадь комнат, м². +",
            labelWidth: 138,
            inputWidth: 220,
        }, {
            type: "MultyCian",
            name: "field_ETAG",
            position: "label-left",
            label: "Этаж",
            multi: false,
            labelWidth: 160,
            // inputWidth: 480,
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
            }]
        }, {
            type: "SelectCian",
            name: "field_RoomsCount",
            position: "label-left",
            label: "Всего комнат в квартире *",
            multi: false,
            inputWidth: 400,
            labelWidth: 138,
            offsetTop: 22,
            options: [{
                text: "1",
                value: "1"
            }, {
                text: "2",
                value: "2"
            }, {
                text: "3",
                value: "3"
            }, {
                text: "4",
                value: "5"
            }, {
                text: "5",
                value: "5"
            }, {
                text: "6 и более",
                value: "6"
            }]
        }, {
            type: "input",
            name: "field_TotalArea",
            position: "label-left",
            label: "Общая площадь м²*",
            labelWidth: 138,
            inputWidth: 40,
            userdata: {
                mask: "float",
                sizemask: 4
            }
        }, {
            type: "input",
            name: "field_KitchenArea",
            position: "label-left",
            label: "Кухня м²",
            labelWidth: 138,
            inputWidth: 40,
            userdata: {
                mask: "float",
                sizemask: 4
            }
        }, {
            type: "SelectCian",
            name: "field_LoggiasCount",
            position: "label-left",
            label: "Количество лоджий",
            multi: false,
            labelWidth: 138,
            options: [{
                text: "Нет",
                value: ""
            }, {
                text: "1",
                value: "1"
            }, {
                text: "2",
                value: "2"
            }, {
                text: "3",
                value: "3"
            }, {
                text: "4",
                value: "4"
            }]
        }, {
            type: "SelectCian",
            name: "field_BalconiesCount",
            position: "label-left",
            label: "Количество балконов",
            multi: false,
            labelWidth: 138,
            options: [{
                text: "Нет",
                value: ""
            }, {
                text: "1",
                value: "1"
            }, {
                text: "2",
                value: "2"
            }, {
                text: "3",
                value: "3"
            }, {
                text: "4",
                value: "4"
            }]
        }, {
            type: "block",
            offset: 0,
            blockOffset: 0,
            list: [{
                type: "SelectCian",
                name: "field_SeparateWcsCount",
                position: "label-left",
                label: "раздельных санузлов",
                multi: false,
                labelWidth: 138,
                options: [{
                    text: "Нет",
                    value: ""
                }, {
                    text: "1",
                    value: "1"
                }, {
                    text: "2",
                    value: "2"
                }, {
                    text: "3",
                    value: "3"
                }, {
                    text: "4",
                    value: "4"
                }]
            }, {
                type: "SelectCian",
                name: "field_CombinedWcsCount",
                position: "label-left",
                label: "совместных санузлов",
                multi: false,
                labelWidth: 138,
                options: [{
                    text: "Нет",
                    value: ""
                }, {
                    text: "1",
                    value: "1"
                }, {
                    text: "2",
                    value: "2"
                }, {
                    text: "3",
                    value: "3"
                }, {
                    text: "4",
                    value: "4"
                }]
            }]
        }, {
            type: "MultyCian",
            name: "field_RepairType",
            position: "label-left",
            label: "Тип ремонта",
            // inputWidth: 480,
            labelWidth: 160,
            multi: false,
            options: [{
                text: "Без ремонта",
                value: "no",
                selected: true
            }, {
                text: "Косметический",
                value: "cosmetic",
            }, {
                text: "Дизайнерский",
                value: "design",
            }, {
                text: "Евроремонт",
                value: "euro",
            }]
        }, {
            type: "checkbox",
            label: "телефон",
            position: "label-left",
            name: "field_HasPhone",
            labelWidth: 120,
            offsetTop: 6,
            checked: false,
            value: 1
        }]
    }, {
        type: "block",
        offset: 0,
        className: "oneBorder",
        blockOffset: 0,
       // width: 500,
        list: [{
            type: "label",
            className: "linelabel",
            label: "о здании"
        }, {
            type: "input",
            label: "Название",
            position: "label-left",
            offsetTop: 8,
            offsetLeft: 6,
            labelTop: 11,
            labelWidth: 90,
            // inputWidth: 380,
            name: "field_Building:Name"
        }, {
            type: "input",
            inputWidth: 40,
            offsetLeft: 6,
            labelWidth: 200,
            label: "Количество этажей в здании",
            position: "label-left",
            name: "field_Building:FloorsCount",
            userdata: {
                mask: "float",
                sizemask: 3
            }
        }, {
            type: "input",
            inputWidth: 40,
            offsetLeft: 6,
            labelWidth: 200,
            label: "Год постройки",
            position: "label-left",
            name: "field_Building:BuildYear",
            userdata: {
                mask: "float",
                sizemask: 4
            }
        }, {
            type: "MultyCian",
            name: "field_Building:MaterialType",
            label: 'Тип дома',
            // inputWidth: 480,
            labelWidth: 90,
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
            inputWidth: 140,
            offsetLeft: 6,
            labelWidth: 200,
            label: "Серия дома",
            position: "label-left",
            name: "field_Building:Series",
        }, {
            type: "input",
            inputWidth: 40,
            offsetLeft: 6,
            labelWidth: 200,
            label: "Высота потолков, м",
            position: "label-left",
            name: "field_Building:CeilingHeight",
            userdata: {
                mask: "float",
                sizemask: 3
            }
        }, {
            type: "SelectCian",
            name: "field_Building:PassengerLiftsCount",
            position: "label-left",
            label: "пассажирских лифтов",
            multi: false,
            labelWidth: 138,
            options: [{
                text: "Нет",
                value: ""
            }, {
                text: "1",
                value: "1"
            }, {
                text: "2",
                value: "2"
            }, {
                text: "3",
                value: "3"
            }, {
                text: "4",
                value: "4"
            }]
        }, {
            type: "SelectCian",
            name: "field_Building:CargoLiftsCount",
            position: "label-left",
            label: "грузовых лифтов",
            multi: false,
            labelWidth: 138,
            options: [{
                text: "Нет",
                value: ""
            }, {
                text: "1",
                value: "1"
            }, {
                text: "2",
                value: "2"
            }, {
                text: "3",
                value: "3"
            }, {
                text: "4",
                value: "4"
            }]
        }, {
            type: "checkbox",
            label: "Пандус",
            position: "label-left",
            name: "field_HasRamp",
            labelWidth: 100,
            offsetLeft: 6,
            offsetTop: 12,
            checked: false,
            value: 1
        }, {
            type: "checkbox",
            label: "Мусоропровод",
            position: "label-left",
            name: "field_Building:HasGarbageChute",
            labelWidth: 100,
            offsetLeft: 6,
            offsetTop: 12,
            checked: false,
            value: 1
        }, {
            type: "MultyCian",
            name: "field_Building:Parking:Type",
            label: 'Парковка',
            // inputWidth: 480,
            labelWidth: 90,
            multi: false,
            options: [{
                text: "Наземная",
                value: "ground"
            }, {
                text: "Многоуровневая",
                value: "multilevel"
            }, {
                text: "Открытая",
                value: "open"
            }, {
                text: "На крыше",
                value: "roof"
            }, {
                text: "Подземная",
                value: "underground"
            }]
        }]
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
        offsetTop: 8
    }]
}]);

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
