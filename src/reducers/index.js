import {combineReducers} from 'redux';
//REDUCERS CREATED//

export const songsReducer = () =>{
    return[
        {title : 'All Stars', duration:'4:05'},
        {title : 'Children', duration:'2:30'},
        {title : 'Want it that way', duration:'3:30'},
        {title : 'GTAV', duration:'3:30'}
    ];
};

export const selectedSongReducer = (selectedSong=null,action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
});

