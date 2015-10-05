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
        myApp.prompt('Please confirm your order.', function (data) {
            // @data contains input value

            myApp.alert('The attendant will be right with you.');
        });
    });
});

myApp.onPageInit('inflight-amenities-detail', function (page) {
    $$('.inflight-order-prompt').on('click', function () {
        myApp.prompt('Please confirm your order.', function (data) {
            // @data contains input value

            myApp.alert('The attendant will be right with you.');
        });
    });
});

myApp.onPageInit('inflight-menu', function (page) {
    $$('.inflight-order-prompt').on('click', function () {
        
            // @data contains input value

            myApp.alert('The attendant will be right with you.');
        
    });
});