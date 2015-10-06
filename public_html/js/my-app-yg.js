myApp.onPageInit('inflight-delight-me', function (page) {
    $$('.inflight-order-prompt').on('click', function () {
        myApp.prompt('Please enter quantity.', function (data) {
            // @data contains input value

            myApp.alert('We will be with you shortly.');
        });
    });
    $$('.demo-confirm').on('click', function () {
        myApp.confirm('Confirm your order.', function () {
            myApp.alert('We will be with you shortly.!');
        });
    });

    // Custom Toolbar
    var pickerCustomToolbar = myApp.picker({
        input: '#ks-picker-custom-toolbar',
        rotateEffect: true,
        toolbarTemplate:
                '<div class="toolbar">' +
                '<div class="toolbar-inner">' +
                '<div class="left">' +
                '<a href="#" class="link toolbar-randomize-link">Randomize</a>' +
                '</div>' +
                '<div class="right">' +
                '<a href="#" class="link close-picker">That\'s For Me!</a>' +
                '</div>' +
                '</div>' +
                '</div>',
        cols: [
            {
                values: ['Chilli Crab', 'Chicken Rice', 'Roti Prata', 'Ice Cream', 'Angus Beef', 'Fish n Chips'],
            },
            {
                textAlign: 'left',
                values: ('Coke Water Pepsi IceMilo Beer RedWine').split(' ')
            },
            {
                values: ('Pillow BoseEarphones Blanket Napkin').split(' ')
            },
        ],
        onOpen: function (picker) {
            picker.container.find('.toolbar-randomize-link').on('click', function () {
                var col0Values = picker.cols[0].values;
                var col0Random = col0Values[Math.floor(Math.random() * col0Values.length)];

                var col1Values = picker.cols[1].values;
                var col1Random = col1Values[Math.floor(Math.random() * col1Values.length)];

                var col2Values = picker.cols[2].values;
                var col2Random = col2Values[Math.floor(Math.random() * col2Values.length)];

                picker.setValue([col0Random, col1Random, col2Random]);
            });
        }
    });
});