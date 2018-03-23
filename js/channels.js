// #7 #chlob #new create a new variable
var science = {name: '#Science', createdOn: Date(Date.parse('April 2, 2016')), createdBy: 'minus.plus.science', starred: false, expiresIn: 100, messageCount: 999};
// #7 #chlob #fve create variables for the other channels
var art = {name: '#Art', createdOn: Date(Date.parse('April 2, 2016')), createdBy: 'minus.plus.art', starred: true, expiresIn: 100, messageCount: 999};
var literature = {name: '#Literature', createdOn: Date(Date.parse('April 2, 2016')), createdBy: 'minus.plus.literature', starred: false, expiresIn: 100, messageCount: 999};
var music = {name: '#Music', createdOn: Date(Date.parse('April 2, 2016')), createdBy: 'minus.plus.music', starred: true, expiresIn: 100, messageCount: 999};
var histor = {name: '#History', createdOn: Date(Date.parse('April 2, 2016')), createdBy: 'minus.plus.history', starred: false, expiresIn: 100, messageCount: 999};

//#8 #channel #new channel li creation
function createChannelElement(channelObject) {
    $('#channels ul').append($('<li>').click(function(){switchChannel(channelObject)}).html(channelObject.name).append(
        $('<span>').addClass('channel-meta').append(
        // #7 #icns #chl replaced imgs with FA icons
        $('<i>').addClass('fa').addClass(channelObject.starred ? 'fa-star' : 'fa-star-o')).append(' ').append(
        $('<i>').addClass('fa fa-chevron-right'))))
    
}

/*<li onclick="switchChannel(science)">
            #Science
            <span class="channel-meta">
                <!-- #7 #chl replace star and chevron images with FontAwesome icons -->
                <i class="fa fa-star-o"></i>
                <i class="fa fa-chevron-right"></i>
            </span>
    </li>
                **/

//#8 #channel #onload write function to append new li
function listChannels(){
    createChannelElement(science);
    createChannelElement(art);
    createChannelElement(literature);
    createChannelElement(music);
    createChannelElement(histor);
}
