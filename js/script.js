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

/* liking a channel on #click
  * #7 #str use toggleClass to change star on click
  */
function star() {
    $('#channel-star').toggleClass('fa-star, fa-star-o');
    //#7 #tgl change Boolean value of starred when star is clicked
    currentChannel.starred=!currentChannel.starred;
    //#7 #lst change star in the channel list
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

