import { getAvaliableProperty } from './utils';

let __canvas__ = document.createElement('canvas');

export default {

    transition: getAvaliableProperty(['transition', 'webkitTransition', 'mozTransition', 'oTransition']),

    animation: getAvaliableProperty(['animation', 'webkitAnimation', 'mozAnimation', 'oAnimation']),

    transform: getAvaliableProperty(['transform', 'webkitTransform', 'mozTransform', 'oTransform']),

    media: (function () {
        let video = document.createElement('video');
        let audio = document.createElement('audio');

        return !!video.play && !!audio.play;
    })(),

    canvas: !!__canvas__.getContext,

    webgl: (function () {
        try {
            return !!__canvas__.getContext('webgl');
        } catch (e) {
            return false;
        }
    })()

};
