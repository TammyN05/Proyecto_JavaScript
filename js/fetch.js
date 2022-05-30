            var contenido 
            var tarjetas = [];

            //FETCH FUNCTION KELOKE

            var eventos = []
            function traerApi(){
                fetch("js/eventos.json")
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        mostrarEvento(data);  
                });
            };

            //LAS CARTAS ANASHI

            traerApi();
            function mostrarEvento(data){
                contenido =`

                <div class="espectaculos py-5 ">
                    <div class="container">
                        <div class="row">`;

                for(let evento of data){
                    contenido +=
               
                    `<div class="col col-md-4 col-lg-3 py-1">
                    <div class="card" style="width: 280px;">
                    <img src="${evento.imagen}" class="imagen">
                            <div class="card-img-overlay">
                                <h5 class="card-title">${evento.nombre}</h5>
                                <p class="card-text"> Fecha: ${evento.fecha}</p>
                                <p class="card-text1"> Tipo: ${evento.tipo}</p>
                                <a href=${evento.compra_link}  class="btn " target="_blank"> Comprar </a>
                            </div>
                    </div>
            </div>`
                 
                };
                contenido += 
                `       </div>
                    </div>
                </div>` 
                 document.getElementById("evento").innerHTML = contenido;             
            }

    