'use strict';

/*
 * CLICK ROBOT TO SPEAK
 * Change text in message.text
 * variable to alter robot message
 *
 * CONFIG.DEFAULT: false, will override
 * system default voice
 */

var CONFIG = {
    DEFAULT: false,
    VOICE: 'Fred'
};

var robot = document.querySelector('.robot');

var message = new SpeechSynthesisUtterance();

message.text = 'hi,human. i am robot391839129. my friend is Ying. she is a computational designer and multimedia artist based in Brooklyn, she send me to say hello to you, thanks for coming.';
var voices = [];

speechSynthesis.addEventListener('voiceschanged', function (event) {
    voices = speechSynthesis.getVoices();
    if (!CONFIG.DEFAULT) {
        message.voice = voices.find(function (voice) {
            return voice.name === CONFIG.VOICE;
        });
    }
});

message.onend = function (event) {
    robot.classList.remove('robot_speaking');
};

robot.addEventListener('click', function (event) {
    if (speechSynthesis.speaking) {
        robot.classList.remove('robot_speaking');
        speechSynthesis.cancel();
    } else {
        robot.classList.add('robot_speaking');
        speechSynthesis.speak(message);
    }
});
