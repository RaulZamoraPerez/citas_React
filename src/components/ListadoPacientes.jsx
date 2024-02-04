//import React from 'react'
import { useEffect } from "react"
import Paciente from "./Paciente"

//el text-xl de p    aplica a todo su contenido

//el font nomrl es pq como se heredan los estilos mejor quitale ese pq no herede
//normal case para que no este en mayus


//el  h-screen overflow-y-scroll para hacer scrol de arriba a abajo 
//con <Paciente/> lo importas e usas aqui
const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente }) => {//udo rafcer, setpaciente para editar

  useEffect(()=>{
    if(pacientes.length>0){
      console.log("nuevo paciente")
    }
  },[pacientes])
 

  return (
    <div className=" md:w-1/2 lg:w-3/5 md: h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (//si tiene algo retorna el componente
        <>


    <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
    <p className="text-xl mt-5 mb-10 text-center">
      Administra tus {''}

      <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
    </p>

     { pacientes.map( (paciente ) => (//con la llave pq sea iterar sin el return y sin {}
            <Paciente  //genera un componente por cada uno con 
               key ={paciente.id}
              paciente={paciente}//prod de paciente para mandarlo a
              setPaciente={setPaciente}//es del de e
              eliminarPaciente={eliminarPaciente}
             />
                 
     ))}
   
          </>
      ): (//sino tiene nada manda esto

        <>
             <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
               <p className="text-xl mt-5 mb-10 text-center">
                  Comienza agregando pacientes {''}

                      <span className="text-indigo-600 font-bold">y apareceran aqui</span>
                           </p>
        
        </>
      )}

    
   


    </div>
  )
}

export default ListadoPacientes

