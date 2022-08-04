var character=document.getElementById('character');
var block=document.getElementById('block');

function jump(){
    if(character.classList!='animate'){
        character.classList.add('animate');
    }
    setTimeout(function(){
        character.classList.remove('animate')
    },300);
}

var checkDead=setInterval(function(){
    var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<23 && blockLeft>0 && characterTop>=125){
        block.style.animation="none";
        block.style.display="none";
        alert("Game Over. You lost!");
    }
},10);