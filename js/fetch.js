            var contenido 
            var tarjetas = [];

            //FETCH FUNCTION KELOKE

            var eventos = []
            function traerApi(){
                fetch("/js/eventos.json")
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        mostrarEventos(data);  
                });
            };

            traerApi();
            function mostrarEventos(data){
                contenido =`
                <div class="album py-5 ">
                    <div class="container">
                        <div class="row">`;
                for(let eventos of data){
                    contenido +=
                        `<div class="col col-md-4 col-lg-3">
                            <div class="card  mb-4">
                                <img class="card-img-top" src="${eventos.imagen}"/>
                                <h5 class="card-title">Nombre: ${eventos.nombre}</h5>
                                <p class="card-text overflow">Tipo: ${eventos.tipo}</p>
                                <p class="card-text overflow"> Fecha: ${eventos.fecha}</p>
                                <p class="card-text overflow"> Lugar: ${eventos.localidad}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-100 d-none d-sm-block d-md-none"><!-- wrap every 2 on sm--></div>`
                            
                };
                contenido += 
                `       </div>
                    </div>
                </div>` 
                document.getElementById("eventos").innerHTML = contenido;          
            }

            