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
        dialogDismissed1,         // callback
        'An example dialog!',            // title
        ['yes', 'no']                  // buttons
    );
    
}

        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast({content: "You're easily pleased", duration: 3000});
            
        
   	else if(buttonIndex==2) new Toast({content: 'It is rather boring.', duration: 3000});

}
function dialogDismissed1(buttonIndex) {
    
    if (buttonIndex==1)
    {
      new Toast({content: "Take a break have a snack", duration: 3000});    
        createNotification();
    }
    
    else if(buttonIndex==2) new Toast({content: 'carry working.', duration: 3000});

}
   
   
function createNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 30000); //delayed time  - add 1 second
    			
    //
    //setup notification
    //
	window.plugin.notification.local.add({ 
    	id: 		1,
        title: 		"Hey you",
        message: 	"Go back to work",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}