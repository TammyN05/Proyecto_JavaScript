function traerinfo() {
    fetch("eventos.json")
    .then(Eventos => Eventos.json())
    .then(traerinfo => {
        console.log(traerinfo)
        info(traerinfo)
    })
}
traerinfo();



var traelainfo = []
var todojunto = ``
function info(traelainfo){
    for (i = 0; i < traelainfo.length; i++ ){
        jose = traelainfo[i]
        if (jose.id=="3") {
            todojunto += 
        `<div id="eventos">
            <h1>
                <small>
                    <span class="fecha">${jose.fecha}</span>
                </small>
                <div class="titulo">
                    <span>${jose.nombre}</span>
                </div>
            </h1>
            <hr>
            <small>
                <span class="fecha2">Fecha: ${jose.fecha}</span>
            </small><br>
            <small>
                <span class="lugar">${jose.localidad}</span>
            </small><br>
            <small>
                <span class="precio">${jose.precio}</span>
            </small><br>
            <small>
                <span class="pago">${jose.PagoWeb}</span>
            </small><br>
            <small>
                <span class="retiro">${jose.retiro}</span>
            </small><br>
            <small>
                <span class="locales">${jose.Locales}</span>
            </small><br>
            <small>
                <span class="local">${jose.Local}</span>
            </small>
            <small><br>
                <span class="local 2">${jose.Local2}</span>
            </small><br>
            <small>
                <span class="condicion">${jose.condicion}</span>
            </small><br>
            <a href="https://www.google.com" class="btn">Comprar</a>
        </div>`
        }
        
    }
    document.getElementById("eventos").innerHTML = todojunto

}
