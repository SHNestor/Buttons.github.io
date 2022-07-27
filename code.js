const btnContainer= document.getElementById('btnContenedor');
let intentos=1;
var foto= new Array();

//Esto sirve para buscar una imagen desde java//
foto[0]= ['Imagenes/logo.png', 'logo']; 

const app= new Vue({
    el: '#lista',
    data:
    {
        menus:[
            {nombre: 'Colors'},
            {nombre: 'Typography'},
            {nombre: 'Spaces'},
            {nombre: 'Buttons'},
            {nombre: ' '},
            {nombre: 'Grid'}
        ]
    }
});

function abrir()
{
    //El getElementById nos permite obtener el un objeto espesifico por el id y el style
    // nos permite acceder a las caracteristicas de css
    document.getElementById("ventana").style.display="block";
    cantidadBtn();
}

const cantidadBtn = () =>
{
    let variable=20;
    let nombreBtn= 'Defautl';

    if(intentos < 2)
    {
        console.log(intentos);
        for(let i=0; i<=variable; i++)
        {
            let newBtn= document.createElement('button');
            let newFoto= document.createElement('img');

            if(i >= 10 && i < 12)
            {
                //Se busca ña imagen con esto//
            newFoto.setAttribute('src', foto[0][0]);
            //Se le da un id a la imagen//
            newFoto.setAttribute('id', 'imagen');
            //Se le da nombre a la etiqueta html imagen//
            newBtn.innerHTML= nombreBtn;
            //Se le da classe a la etiqueta button//
            newBtn.classList.add('btn');
            newBtn.classList.add('n'+i);
            newBtn.appendChild(newFoto);
            btnContainer.appendChild(newBtn);
            }else{
                newBtn.innerHTML= nombreBtn;
                newBtn.classList.add('btn');
                newBtn.classList.add('n'+i);
                btnContainer.appendChild(newBtn);
            }
        }
        intentos++;
        console.log(intentos);
    }
}

function cerrar()
{
    document.getElementById("ventana").style.display="none";
}