            var contenido 
            var tarjetas = [];

            //FETCH FUNCTION KELOKE

            var eventos = []
            function traerApi(){
                fetch("js/eventos.json")
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        mostrarEventos(data);  
                });
            };

            //LAS CARTAS ANASHI

            traerApi();
            function mostrarEventos(data){
                contenido =`

                <div class="espectaculos py-5 ">
                    <div class="container">
                        <div class="row">`;

                for(let eventos of data){
                    contenido +=

                        `<div class="col col-md-4 col-lg-3 py-1">
                                <div class="card" style="width: 280px;">
                                <img src="${eventos.imagen}" class="imagen">
                                        <div class="card-img-overlay">
                                            <h5 class="card-title">${eventos.nombre}</h5>
                                            <p class="card-text"> Fecha: ${eventos.fecha}</p>
                                            <p class="card-text1"> Tipo: ${eventos.tipo}</p>
                                            <a href="#" class="btn">${eventos.comprar}</a>
                                        </div>
                                </div>
                        </div>`

                };
                contenido += 
                `       </div>
                    </div>
                </div>` 
                 document.getElementById("eventos").innerHTML = contenido;             
            }

    