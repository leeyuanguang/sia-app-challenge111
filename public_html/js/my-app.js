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
            var title;
            var price;
            var type;
            title = $('#title1').text();
            price = $('#price1').text();
            type = $('#type1').text();

            alert(title);
            alert(price);
            alert(type);

            var str = title + "," + price + "," + type;
            $.ajax({
                url: "http://localhost:8080/SIAFlightAttendant/api/hello?param1=test&param2=hehe",
                type: 'post', // performing a POST request
                data: {
                    param1: title,
                    param2: price
                },
                dataType: 'json',
                success: function (data)
                {
                    alert('success!')
                }
            });
            myApp.alert(str);
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

/* ===== Messages Page ===== */
myApp.onPageInit('messages', function (page) {
    var conversationStarted = false;
    var answers = [
        'Fuck you!',
        'Bitch',
        'Hm...',
        'GO to hell you!!!',
        'you asshole!!',
        'May be ;)',
        'Lorem ipsum dolor sit amet, consectetur',
        'What?',
        'Are you sure?',
        'Of course',
        'Need to think about it',
        'Amazing!!!',
    ];
    var people = [
        {
            name: 'Kate Johanson',
            avatar: 'img/avatar/people-q-c-100-100-9.jpg'
        },
        {
            name: 'Raheed Maden',
            avatar: 'img/avatar/people-q-c-100-100-7.jpg'
        }

    ];
    var answerTimeout, isFocused;

    // Initialize Messages
    var myMessages = myApp.messages('.messages');

    // Initialize Messagebar
    var myMessagebar = myApp.messagebar('.messagebar');

    $$('.messagebar a.send-message').on('touchstart mousedown', function () {
        isFocused = document.activeElement && document.activeElement === myMessagebar.textarea[0];
    });
    $$('.messagebar a.send-message').on('click', function (e) {
        // Keep focused messagebar's textarea if it was in focus before
        if (isFocused) {
            e.preventDefault();
            myMessagebar.textarea[0].focus();
        }
        var messageText = myMessagebar.value();
        if (messageText.length === 0) {
            return;
        }
        // Clear messagebar
        myMessagebar.clear();

        // Add Message
        myMessages.addMessage({
            text: messageText,
            avatar: 'img/avatar/people-q-c-100-100-5.jpg',
            type: 'sent',
            date: 'Now'
        });
        conversationStarted = true;
        // Add answer after timeout
        if (answerTimeout)
            clearTimeout(answerTimeout);
        answerTimeout = setTimeout(function () {
            var answerText = answers[Math.floor(Math.random() * answers.length)];
            var person = people[Math.floor(Math.random() * people.length)];
            myMessages.addMessage({
                text: answers[Math.floor(Math.random() * answers.length)],
                type: 'received',
                name: person.name,
                avatar: person.avatar,
                date: 'Just now'
            });
        }, 2000);
    });
});

function removeFromCart(e) {
    $(this).closest('li').remove();
}

