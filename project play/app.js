function Hop(){
    let Hop =0;
    for(let Hop=0; Hop<=17; Hop++){
        if(Hop %2==0){
            console.log("Hop");
        }else if(Hop >=16){
            console.log("پایان");
        }else{
            console.log(Hop);
        }
    }
    return Hop;
}
console.log(Hop());

function Star(array){
    for(let i=0; i <=array; i++){
        let triangle ="";
            for(let x=0; x <=i; x++){
                triangle +=" *";
            }
                    console.log(triangle);
    };
    for(let x=array; x >0; x--){
        let triangle ="";
            for(let z=0; z <x; z++){
                triangle +=" *";
            }
                    console.log(triangle);
    }
}
Star(2);

let Text ="Sea Is The Blue and Fish in Sea.";
function Key(Text, Sea){
    console.log(Text.indexOf("Sea"));
}
Key(Text);

let MyStar =
document.getElementById("Star");
MyStar.style ="color: red";

function Insert(){
    let x , y;
    x =
    document.getElementById("box");
    y =
    document.createElement("textarea");
    x.appendChild(y);
    // x,insertChild(x.childNodes[0]);
}

function Delete(){
    let x , y;
    x =
    document.getElementById("box");
    y =
    x.childNodes.length;
    if(y >0){
        x.removeChild(x.childNodes[0]);
    }else{
        alert("کادر متن وجود ندارد");
    }
}