// start the #external #action and say hello
console.log("App is alive");

/**
/**
 * function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channelName) {
    //Log the channel switch
    console.log("Tuning in to channel", channelName.name);

    // #7 #dgst use object properties to write channel name
    document.getElementById('channel-name').innerHTML = channelName.name;

    // #7 #dgst use object properties to write channel location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/' + channelName.createdBy + '" target="_blank"><strong>' + channelName.createdBy + '</strong></a>';

    // liking channels on #click
    $('#channel-star').toggleClass(className.starred ? 'fa-star-o' : 'fa-star');

    /* highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName + ')').addClass('selected');
}

/* liking a channel on #click
  * #7 #str use toggleClass to change star on click
  */
function star() {
    $('#channel-star').toggleClass('fa-star, fa-star-o');
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
