// Initialize your app
var myApp = new Framework7({
    modalTitle: 'Singapore Airlines',
    // Enable Material theme
    material: true,
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
});
// Add another view, which is in right panel
var rightView = myApp.addView('.view-right', {
});

//mainView.router.loadPage("login.html");

// Login events 
myApp.onPageInit('login', function (page) {
    $$(page.container).find('.button').on('click', function () {
        var username = $$(page.container).find('input[name="username"]').val();
        var password = $$(page.container).find('input[name="password"]').val();
        if (username == "" || password == "") {
            myApp.alert('Invalid Login');
        } else {
            myApp.alert('Welcome Jason!', function () {
                mainView.router.back();
            });
        }
    });
});

myApp.onPageInit('inflight-beverages-detail', function (page) {
    $$('.inflight-order-prompt').on('click', function () {
        myApp.prompt('Please enter quantity.', function (data) {
            // @data contains input value

            myApp.alert('The attendant will be right with you.');
        });
    });
});

myApp.onPageInit('inflight-amenities-detail', function (page) {
    $$('.inflight-order-prompt').on('click', function () {
        myApp.prompt('Please enter quantity.', function (data) {
            // @data contains input value

            myApp.alert('The attendant will be right with you.');
        });
    });
});

myApp.onPageInit('inflight-food-detail', function (page) {
    $$('.inflight-order-prompt').on('click', function () {
        myApp.prompt('Please enter quantity.', function (data) {
            // @data contains input value

            myApp.alert('The attendant will be right with you.');
        });
    });
});

myApp.onPageInit('inflight-delight-me', function (page) {
    $$('.inflight-order-prompt').on('click', function () {
        myApp.prompt('Please enter quantity.', function (data) {
            // @data contains input value

            myApp.alert('The attendant will be right with you.');
        });
    });
    $$('.demo-confirm').on('click', function () {
        myApp.confirm('Confirm your order.', function () {
            myApp.alert('The attendant will be right with you!');
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

myApp.onPageInit('inflight-menu', function (page) {
    $$('.inflight-order-prompt').on('click', function () {

        // @data contains input value

        myApp.alert('The attendant will be right with you.');

    });
});



$$('.open-left-panel').on('click', function (e) {
    // 'left' position to open Left panel
    myApp.openPanel('left');
});

$$('.open-right-panel').on('click', function (e) {
    // 'right' position to open Right panel
    myApp.openPanel('right');
});

$$('.panel-close').on('click', function (e) {
    myApp.closePanel();
});

