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
}

function cerrar()
{
    document.getElementById("ventana").style.display="none";
}