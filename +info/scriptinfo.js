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
        todojunto += 
        `<div id="eventos">
            <h1>
                <small>
                    <span>${jose.fecha}</span>
                </small>
                <div class="titulo">
                    <span>${jose.nombre}</span>
                </div>
            </h1>
            <hr>
            <small>
                <span>Fecha: ${jose.fecha}</span>
            </small><br>
            <small>
                <span>${jose.localidad}</span>
            </small><br>
            <small>
                <span>${jose.precio}</span>
            </small><br>
            <small>
                <span>${jose.PagoWeb}</span>
            </small><br>
            <small>
                <span>${jose.retiro}</span>
            </small><br>
            <small>
                <span>${jose.Locales}</span>
            </small><br>
            <small>
                <span>${jose.Local}</span>
            </small>
            <small><br>
                <span>${jose.Local2}</span>
            </small><br>
            <small>
                <span>${jose.condicion}</span>
            </small>

        </div>`
    }
    document.getElementById("eventos").innerHTML = todojunto

}