const music = document.getElementById("bgmusic");

// mobile safe music start
document.addEventListener("click", () => {
    music.play().catch(()=>{});
}, { once:true });

let step = 0;

function next(){

    const title = document.getElementById("title");
    const text = document.getElementById("text");

    step++;

    if(step==1){
        title.innerText="I Wanted To Say";
        text.innerText="You are special for me 💕";
    }
    else if(step==2){
        title.innerText="Every Moment";
        text.innerText="With you feels beautiful ✨";
    }
    else if(step==3){
        title.innerText="So...";
        text.innerText="Will you stay with me forever? ❤️";
    }
    else{
        title.innerText="I Love You 💖";
        text.innerText="Always & Forever";
    }
}