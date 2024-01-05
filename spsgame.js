

function showregisterform() {
    document.getElementById("choice").style.display='none';
    document.getElementById("t1").style.display='none';
    document.getElementById("c").style.display='none';
    document.getElementById("login").style.display='none';
    document.getElementById("ty").style.display='none';
    document.getElementById("register").style.display='block';
    document.getElementById("register").style.position='absolute';
    document.getElementById("register").style.marginTop='0vh';
    document.getElementById("game").style.display='none';

}

function showloginform(){
    document.getElementById("t1").style.display='none';
    document.getElementById("choice").style.display='none';
    document.getElementById("c").style.display='none';
    document.getElementById("register").style.display='none';
    document.getElementById("ty").style.display='none';
    document.getElementById("login").style.display='block';
    document.getElementById("login").style.position='absolute';
    document.getElementById("login").style.marginTop='0vh';
    document.getElementById("game").style.display='none';

}

function choice(){
    document.getElementById("t1").style.display='none';
    document.getElementById("choice").style.display='none';
    document.getElementById("register").style.display='none';
    document.getElementById("login").style.display='none';
    document.getElementById("game").style.display='none';
    document.getElementById("ty").style.display='none';
    document.getElementById("c").style.display='flex';
    document.getElementById("c").style.position='absolute';
    document.getElementById("c").style.marginTop='40vh';
}

function home(){
    document.getElementById("c").style.display='none';
    document.getElementById("register").style.display='none';
    document.getElementById("login").style.display='none';
    document.getElementById("ty").style.display='none';
    document.getElementById("game").style.display='none';
    document.getElementById("t1").style.display='block';
    document.getElementById("choice").style.display='block';
}

function ty(){
    document.getElementById("c").style.display='none';
    document.getElementById("register").style.display='none';
    document.getElementById("login").style.display='none';
    document.getElementById("t1").style.display='none';
    document.getElementById("game").style.display='none';
    document.getElementById("choice").style.display='none';
    document.getElementById("ty").style.display='block';
    document.getElementById("mtg").style.display='none';
    document.getElementById("mtl").style.display='block';

}

function ty1(){
    document.getElementById("c").style.display='none';
    document.getElementById("register").style.display='none';
    document.getElementById("login").style.display='none';
    document.getElementById("t1").style.display='none';
    document.getElementById("game").style.display='none';
    document.getElementById("choice").style.display='none';
    document.getElementById("ty").style.display='block';
    document.getElementById("mtl").style.display='none';
    document.getElementById("mtg").style.display='block';
    document.getElementById("mtg").style.marginLeft='43vw';


}
function game(){
    document.getElementById("c").style.display='none';
    document.getElementById("register").style.display='none';
    document.getElementById("login").style.display='none';
    document.getElementById("t1").style.display='none';
    document.getElementById("game").style.display='block';
    document.getElementById("choice").style.display='none';
    document.getElementById("ty").style.display='none';
    document.getElementById("mtl").style.display='none';
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function result(){
    var number=getRandomInt(0,3)
    if(number==0){
        document.getElementById('loose').style.display='block';
        document.getElementById('win').style.display='none';
        document.getElementById('draw').style.display='none';
        document.getElementById('e').style.display='none';
    }
    if(number==1){
        document.getElementById('win').style.display='block';
        document.getElementById('loose').style.display='none';
        document.getElementById('draw').style.display='none';
        document.getElementById('e').style.display='none';
    }
    if(number==2){
        document.getElementById('draw').style.display='block';
        document.getElementById('loose').style.display='none';
        document.getElementById('win').style.display='none';
        document.getElementById('e').style.display='none';
    }
}

