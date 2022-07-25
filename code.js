const btnContainer= document.getElementById('btnContenedor');
let intentos=1;

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
    let variable=8;
    let nombreBtn= 'Defautl';

    if(intentos < 2)
    {
        console.log(intentos);
        for(let i=0; i<=variable; i++)
        {
            let newBtn= document.createElement('button');
            newBtn.innerHTML = nombreBtn;
            newBtn.classList.add('btn');
            newBtn.classList.add('n'+i);
            btnContainer.appendChild(newBtn);
        }
        intentos++;
        console.log(intentos);
    }
}

function cerrar()
{
    document.getElementById("ventana").style.display="none";
}