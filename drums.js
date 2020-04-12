drums = new Vue({
    el: '#drums',
    data: {
        drumsamples: [
            {
                title: 'kick',
                sound: 'kick.wav',
                button: 'a'
            },
            {
                title: 'snare',
                sound: 'snare.wav',
                button: 's'
            },
            {
                title: 'cymbal',
                sound: 'cymbal.wav',
                button: 'd'
            },
            {
                title: 'hihat',
                sound: 'hihat.wav',
                button: 'f'
            },
            {
                title: 'hihatopen',
                sound: 'hihatopen.wav',
                button: 'r'
            },
            {
                title: 'tom',
                sound: 'tom.wav',
                button: 'g'
            },
        ]
    },
    methods: {
        playSample: function(sampleId) {
            sound = document.getElementById(sampleId);
            sound.pause();
            sound.currentTime = 0;
            sound.play();
        }
    },
    mounted: function() {
        self = this;
        window.addEventListener("keypress", function(e) {
            switch (String.fromCharCode(e.keyCode)) {
                case 'a':
                    self.playSample('kick');
                    break;

                case 's':
                    self.playSample('snare');
                    break;

                case 'd':
                    self.playSample('cymbal');
                    break;

                case 'f':
                    self.playSample('hihat');
                    break;

                case 'r':
                    self.playSample('hihatopen');
                    break;

                case 'g':
                    self.playSample('tom');
                    break;
            }
            console.log(String.fromCharCode(e.keyCode));
        });
    }
});