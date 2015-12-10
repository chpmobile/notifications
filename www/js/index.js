var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage();
	});
        $('#messageButton1').on('click', function() {
        createMessage();
         });
            $('#messageButton2').on('click', function() {
        createMessage();
         });
	


	$('#dialogButton').on('click', function() {
		createDialog();
	});

    $('#dialogButton1').on('click', function() {
        createDialog1();
    });


	$('#notificationButton').on('click', function() {
		createNotification();
	});


});



function createMessage(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'An example message.', duration: 2000}); 	
}
     function createMessage1(){      
    //phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js

    if (navigator.notification.buttons='yes') {
    new Toast({content: 'take a break and eat some food.', duration: 2000});   
    }
    else {
         new Toast({content: 'corry on working.', duration: 2000}); 
    } 

}
     

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'What do you think of this dialog?',  // message
        dialogDismissed,         // callback
        'An example dialog!',            // title
        ['Awesome!', 'Sucks']                  // buttons
    );

}
function createDialog1() {

    //phonegap supports native dialog boxes.
    //here's a simple example
      
    navigator.notification.confirm(
        'Are you hungry?',  // message
        dialogDismissed,         // callback
        'An example dialog!',            // title
        ['yes', 'no']                  // buttons
    );
    createMessage1();
}

        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast({content: "You're easily pleased", duration: 3000});
   	else if(buttonIndex==2) new Toast({content: 'It is rather boring.', duration: 3000});

}

   
   
function createNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 1000); //delayed time  - add 1 second
    			
    //
    //setup notification
    //
	window.plugin.notification.local.add({ 
    	id: 		1,
        title: 		"Hey you",
        message: 	"This is an example notification",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}