var obj1;
function startTask() {
    obj1 = setInterval("cssEffect()",1000);
}
var i=0;
function cssEffect() {
    var obj = new Date();
    document.getElementById("dd").innerHTML=obj.getHours()+":"+obj.getMinutes()+":"+obj.getSeconds();
    if(i%2==0){
        document.getElementById("obj1").style.color="RED"
        document.getElementById("obj1").style.backgroundColor="GREEN"
        document.getElementById("imgId").src="https://media.gettyimages.com/photos/fruits-and-vegetables-vegetarian-food-on-rustic-wood-board-picture-id1222380854?k=6&m=1222380854&s=612x612&w=0&h=TORaBT4xcZ5h77qA1iJwdexD7Vai9dYPtSICl1R-1kU="
    }else {
        document.getElementById("obj1").style.color="GREEN";
        document.getElementById("obj1").style.backgroundColor="RED"
        document.getElementById("imgId").src="https://media.gettyimages.com/photos/bunch-of-limes-lemons-and-avacados-picture-id1220073455?k=6&m=1220073455&s=612x612&w=0&h=kR8c5qFsd8rk9LvB3ymfOnTq5AJkOIlfxK6VuX42f-A="
    }
    i++;
}

function stop() {
    clearInterval(obj1);
}