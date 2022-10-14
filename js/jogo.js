var cells = document.querySelectorAll('.cell');
var turno = document.querySelector('.turn');
var recomecar = document.querySelector('span');
recomecar.style.cursor='pointer';


const tabuleiro =[];

const hipoteses=[  
    {p1:0,p2:1,p3:2},
    {p1:3,p2:4,p3:5},
    {p1:6,p2:7,p3:8},
    {p1:0,p2:3,p3:6},
    {p1:1,p2:4,p3:7},
    {p1:2,p2:5,p3:8},
    {p1:0,p2:4,p3:8},
    {p1:2,p2:4,p3:6},

]


const vitoria = () => {
for (let i= 0; i <hipoteses.length;i++){
    if(tabuleiro[hipoteses[i].p1])
    if(tabuleiro[hipoteses[i].p1] == tabuleiro[hipoteses[i].p2] && tabuleiro[hipoteses[i].p2] == tabuleiro[hipoteses[i].p3] )
    return true;

}
return false;

}

var vencedor = document.querySelector('.result');



turno.innerText="Jogador 1";

cells.forEach( (cell,indice)=>{
    cell.onclick=e =>{

        if(turno.innerText==="Jogador 1"){
            if (!cell.hasChildNodes('img')){
                var img = document.createElement("img");
                img.src = "images/o.png";
                tabuleiro[indice]="o.png";
                //console.log(tabuleiro)
                
                cell.appendChild(img)
                vitoria()
                
                if (vitoria() === true)
                vencedor.innerHTML="Vencedor Jogador 1"
               
                turno.innerText="Jogador 2"; 
            }

        }else if (turno.innerText==="Jogador 2"){
            if (!cell.hasChildNodes('img')){
            var img = document.createElement("img");
            img.src = "images/x.png"; 
            tabuleiro[indice]="x.png"; 
            //console.log(tabuleiro)      
         
                cell.appendChild(img)
                vitoria()
               

                if (vitoria() === true)
                vencedor.innerHTML="Vencedor Jogador 2"
                
                turno.innerText="Jogador 1"; 
            }
           
        }
       
    }
});





recomecar.onclick = e => {
    location.reload();
}