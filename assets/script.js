function BPMReflect() {
    var bpm = document.getElementById('bpm');
    var hand = document.querySelector('img.hand');
    var scale = 1;
    var interval = null;

    function scaleHand() {
        scale = scale === 1 ? 1.2 : 1;
        hand.style.transform = 'scale(' + scale + ')';
        if (scale === 1.2) {
            setTimeout(function() {
                hand.style.transform = 'scale(1)';
            }, 100);
        }
    }

    function BPMChange() {
        if (interval) {
            clearInterval(interval);
        }
        interval = setInterval(scaleHand, 30000 / bpm.value);
        scaleHand();
    }

    bpm.addEventListener('change', BPMChange);
    BPMChange();
}

BPMReflect();
