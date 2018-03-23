// start the #external #action and say hello
console.log("App is alive");

// #7 #var store currentChannel #fix set its initial state to initial active channel
var currentChannel=art;
// #7 #loc store currentLocation
var currentLocation = {longitude: -71.118648, latitude: 42.398789, what3words: 'encounter.crush.wicked'};

/**
/**
 * function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channelName) {
    //Log the channel switch
    console.log("Tuning in to channel", channelName);

    // #7 #dgst use object properties to write channel name
    document.getElementById('channel-name').innerHTML = channelName.name;

    // #7 #dgst use object properties to write channel location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/' + channelName.createdBy + '" target="_blank"><strong>' + channelName.createdBy + '</strong></a>';

    // #7 #trn toggle star based on object property
    $('#channel-star').removeClass('fa-star, fa-star-o');
    $('#channel-star').addClass(channelName.starred ? 'fa-star' : 'fa-star-o');
    
    /* highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName.name + ')').addClass('selected');
    
    //#7 set and log currentChannel
    currentChannel = channelName;
    console.log("currentChannel", currentChannel);
}

// liking a channel on #click
function star() {
    // #7 #icns #str use toggleClass to change star on click
    $('#channel-star').toggleClass('fa-star, fa-star-o');
    //#7 #star #tgl change Boolean value of starred when star is clicked
    currentChannel.starred=!currentChannel.starred;
    //#7 #star #lst change star in the channel list
     $('#channels li:contains(' + currentChannel.name + ') span i').removeClass('fa-star, fa-star-o');
    $('#channels li:contains(' + currentChannel.name + ') span i').addClass(currentChannel.starred ? 'fa-star' : 'fa-star-o');
}
/**
 * selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    // log the new tab on change...
    console.log('Changing to tab', tabId);

    // add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}

//#8 #message #constructor create a constructor function to store messages
function Message(text) {
    var today = new Date();
    var todayFull = today.toLocaleString();
    this.createdBy = currentLocation.what3words;
    this.latitude = currentLocation.latitude;
    this.longitude = currentLocation.longitude;
    this.createdOn = todayFull;
    this.expiresOn = Date.now() + 900000; 
    this.text = text;
    this.own = true;
}

//#8 #message #element take a message object and make it a string representation of an HTML element
function createMessageElement(messageObject) {
    // #8 #message convert expiresOn to expiresIn
    var diffExpires = messageObject.expiresOn - Date.now();
    var expiresIn = Math.round(((diffExpires % 86400000) % 3600000) / 60000);
    
    // #8 #message #append the message HTML to the messages div
    $('#messages').append('<div class="message"><h3><a href="http://w3w.co/'
        + messageObject.createdBy + 
        '" target="_blank"><strong>' 
        + messageObject.createdBy + 
        '</strong></a>' 
        + messageObject.createdOn +
        '<em>'
        + expiresIn + 
        ' min. left</em></h3><p>' 
        + messageObject.text + 
        '</p><button>+5 min.</button></div>')
}

//#8 #message #send create a function to create a new message object 
function sendMessage() {
 // #8 #input #real take input from message bo
    var newMessage = new Message($('input[name = "messagetext"]').val());
    console.log(newMessage)
    createMessageElement(newMessage);
 // #8 #input #clear the input after message has been sent
    $('input[name = "messagetext"]').val('')
}

