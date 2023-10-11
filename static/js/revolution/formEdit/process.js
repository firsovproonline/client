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
            value: "bedRent"
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
    }]
}, {
                type: 'input',
                name: 'field_CIANREM',
                label: 'Текстовое примечание для CIAN:',
                position: "label-top",
                // inputWidth: 510,
                inputHeight: 224,
                rows: 30,
                offsetTop: 22
            }, {
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
