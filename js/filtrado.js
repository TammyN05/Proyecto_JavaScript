var contenido 
var tarjetas = [];


            var eventos = []
            function traerApi(){
                fetch("js/eventos.json")
                    .then(res => res.json())
                    .then(data => {
                        tarjetas=data;
                        console.log(data);
                        mostrarEventos(data);  
                });
            };


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



///////////////////////////////////////////////////////////FILTRADO////////////////////////////////////////////////////////////////

            ///////BUSQUEDA POR NOMBRE/////////

            let botonBuscar = document.getElementById("buscar");
            botonBuscar.addEventListener("click",buscar)

            function buscar(){
            let coincidencia = document.getElementById("buscador").value;
            let filtrada = tarjetas.filter(x => x.nombre.toLowerCase().indexOf(coincidencia.toLowerCase()) > -1);
            console.log(filtrada)
            mostrarEventos(filtrada);
        }



            ////VARIABLES/////

var btnBuscar= document.getElementById("btnBuscar")
var btnLugar = document.getElementById("btnLugar");
var btnPrecio = document.getElementById("btnPrecio");
var btnTipo = document.getElementById("btnTipo");
var btnFecha = document.getElementById("btnFecha")



//btnBuscar.addEventListener("click",ordenarFecha)
            /////FUNCIONES DE FILTRADO////

            ///POR LOCACION

function ordenarLugar(){
    fetch("js/eventos.json")
        .then(res=> res.json())
        .then(data =>{
            let listaFiltradaL = [];
            for(i=0; i< data.length; i++){
                if(data[i].localidad === "Estadio Centenario" && btnLugar.value=="Estadio Centenario"){
                    listaFiltradaL.push(data[i]);
                } else if (data[i].localidad === "Auditorio Nacional del Sodre" && btnLugar.value=="Auditorio Nacional del Sodre"){
                    listaFiltradaL.push(data[i]);
                }else if (data[i].localidad === "Plaza Mateo" && btnLugar.value=="Plaza Mateo"){
                    listaFiltradaL.push(data[i]);   
                }else if (data[i].localidad === "Teatro de Verano" && btnLugar.value=="Teatro de Verano"){
                    listaFiltradaL.push(data[i]); 
                }else if (data[i].localidad === "Sala del Museo" && btnLugar.value=="Sala del Museo"){
                    listaFiltradaL.push(data[i]); 
                }else if (data[i].localidad === "Sala Verdi" && btnLugar.value=="Sala Verdi"){
                    listaFiltradaL.push(data[i]); 
                }else if (data[i].localidad === "Under Movie" && btnLugar.value=="Under Movie"){
                    listaFiltradaL.push(data[i]); 
                }else if (data[i].localidad === "Antel Arena" && btnLugar.value=="Antel Arena"){
                    listaFiltradaL.push(data[i]); 
                  
            }
        }
        console.log(listaFiltradaL)
        mostrarEventos(listaFiltradaL) 
    });
}

//btnBuscar.addEventListener("click", function buscarAll() {});
    

        //POR TIPO DE EVEMTO

        
function ordenarTipo(){
    fetch("js/eventos.json")
        .then(res=> res.json())
        .then(data =>{
            let listaFiltradaT = [];
            for(i=0; i< data.length; i++){
                if(data[i].tipo === "Musica" && btnTipo.value=="Musica"){
                    listaFiltradaT.push(data[i]);
                } else if (data[i].tipo === "Teatro" && btnTipo.value=="Teatro"){
                    listaFiltradaT.push(data[i]);
                }else if (data[i].tipo === "Arte" && btnTipo.value=="Arte"){
                    listaFiltradaT.push(data[i]);   
                }else if (data[i].tipo === "Deporte" && btnTipo.value=="Deporte"){
                    listaFiltradaT.push(data[i]); 
                }else if (data[i].tipo === "Social" && btnTipo.value=="Social"){
                    listaFiltradaT.push(data[i]); 
            }
        }
        console.log(listaFiltradaT)
        mostrarEventos(listaFiltradaT) 
    });
}

             ////////POR PRECIO///////


function ordenarPrecio(){
    fetch("js/eventos.json")
        .then(res=> res.json())
        .then(data =>{
            let listaFiltradaP = [];
            for(i=0; i< data.length; i++){
                if(data[i].precio >= 500 && btnPrecio.value=="hasta 500"){
                    listaFiltradaP.push(data[i]);
                } else if (data[i].precio >= 1000 && btnPrecio.value=="hasta 1000"){
                    listaFiltradaP.push(data[i]);
                }else if (data[i].precio >= 2000 && btnPrecio.value=="hasta 2000"){
                    listaFiltradaP.push(data[i]);   
                }
                else if (data[i].precio > 2000 && btnPrecio.value=="mas de 2000"){
                    listaFiltradaP.push(data[i]);   
        }
        }
        console.log(listaFiltradaP)
        mostrarEventos(listaFiltradaP) 
    });
};
btnBuscar.addEventListener("click", ordenarPrecio)

         ////////POR FECHA///////

         function ordenarFecha(){
            fetch("js/eventos.json")
                .then(res=> res.json())
                .then(data =>{
                    let listaFiltradaF = [];
                 
                     console.log(diffDays)
                     console.log(timesDiff);
                    for(i=0; i< data.length; i++){
                        const nuevafecha = new Date();
                        const fecha = new Date(data[i].fecha);
                        var timesDiff = Math.abs(fecha.getTime() - nuevafecha.getTime());
                        var diffDays = Math.ceil(timesDiff / (1000 * 60 * 60 * 24)); 

                        if(diffDays <= 7 && btnFecha.value=="7"){
                            listaFiltradaF.push(data[i]);
                        } else if (diffDays <= 30 && btnFecha.value=="30"){
                            listaFiltradaF.push(data[i]);
                        }else if (diffDays <= 60 && btnFecha.value=="60"){
                            listaFiltradaF.push(data[i]);
                        }else if (diffDays  > 60 && btnFecha.value=="mas de 60"){
                            listaFiltradaF.push(data[i]);
                        }   
                     
                     console.log(fecha.getTime());
                     console.log(nuevafecha)
                     console.log(timesDiff)
                     console.log(diffDays)
                     
                
                    }
                
                console.log(listaFiltradaF);
                mostrarEventos(listaFiltradaF); 
                
            });
           
        };
        btnBuscar.addEventListener("click", ordenarFecha)