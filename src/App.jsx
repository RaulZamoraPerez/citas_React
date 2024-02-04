import { useState, useEffect } from "react"
import Formulario from "./components/formulario"
import Header from "./components/Header"//importas el componente 
import ListadoPacientes from "./components/ListadoPacientes"



function App() {

  const [pacientes, setPacientes]= useState([]);
  const [paciente, setPaciente] = useState({});//para el de ditar

  useEffect(()=>{
    const obtenerLS =()=>{//json.parse lo convierte a objeto como antes era string
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];//sino hay nada deja un arreglo vacio conn ??[]
      setPacientes(pacientesLS)

    }
    obtenerLS();
  }, []);//Recuerda que cuando la[ ] estavcacio se ejecuta una vez nomas, cudno esta list


  useEffect(()=>{
       localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente =id=>{//traer a los que son difernetes nomas , cambia el valor por nomas los que son distintos osea quita el que es el id y deja los que son distintos
     const pacienteActualizado = pacientes.filter(paciente=>paciente.id !==id)
     setPacientes(pacienteActualizado)
  }
 

 //agregamos el flex paq lo ponga a un lado
 // md:flex   se pondra flex cuando sea mediana sino no
 //el mt- es la separacion de arriba
  return (
     <div className="container mx-auto mt-20">
      
       <Header/> 
       <div className=" mt-12 md:flex ">

       <Formulario
         pacientes={pacientes}
         setPacientes={setPacientes}//setPaciente es un arreglo y es una funcion
         paciente ={paciente}//le psamos el de modificar 
         setPaciente={setPaciente}
       /> 
       <ListadoPacientes
        pacientes = {pacientes}//pasamos el props para
        setPaciente={setPaciente}//del otro estado
        eliminarPaciente ={eliminarPaciente}
       />
       
       </div>
       
     
    </div>
  )
}

export default App
