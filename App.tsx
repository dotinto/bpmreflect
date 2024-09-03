import { useEffect } from "react";

function App() {
    const stylesheet = `@font-face {
    font-family: BreeCYRvarRegular;
    src: url(BreeCYRvarRegular.ttf);
}
body {
    padding: 0;
    margin: 0;
    background: rgb(83,4,4);
    background: radial-gradient(circle, rgba(83,4,4,1) 0%, rgba(0,0,0,1) 100%);
    overflow: hidden;
}
.content {
    width: 100vw;
    height: 100vh;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
img.hand {
    width: 15vw;
    height: 15vw;
}
.center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.inputfield {
    width: 50%;
    margin: auto;
}
.inputfield input {
    width: 8vw;
    background: transparent;
    border: none;
    text-align: right;
    margin-left: -3vw;
    border-bottom: 2px solid white;
}
.inputfield span {
    margin-left: 1vw;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
* {
    font-family: BreeCYRvarRegular;
    color: white;
    font-size: 24pt;
}`

    useEffect(() => {
        function BPMReflect() {
            var bpm = document.getElementById('bpm') as HTMLInputElement;
            var hand = document.querySelector('img.hand') as HTMLImageElement;
            var scale: number = 1;
            var interval: NodeJS.Timer | null = null;
        
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
                interval = setInterval(scaleHand, 30000 / parseInt(bpm.value, 10));
                scaleHand();
            }
        
            bpm.addEventListener('change', BPMChange);
            BPMChange();
        }
        
        BPMReflect();
        
    }, [])
    return (
        <>
        <style>{stylesheet}</style>
        <div className="content">
            <div className="inputfield">
                <input type="number" value="60" name="bpm" id="bpm" /><span>BPM</span>
            </div>
            <div className="center">
                <img className="hand" src="assets/hand.png" alt="hand" />
            </div>
        </div>
        </>
    )
}

export default App;