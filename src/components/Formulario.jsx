import { useState, useEffect } from "react"
import MensajeError from "./MensajeError";
//componente




const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {//Extraemos el paciendtes el prods

  //los estados para el fomulario
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, SetSintomas] = useState("");



  //state para el mensaje
  const [error, setError ] = useState(false)

  /*
   useEffect(()=>{
    console.log(paciente);
   }, [paciente])//el [] son dependencias, lo que coloquees aqui va a ser el valor que va a estar revisando cuando cambie y si cambia realida un readrender
   */
   
     
   //editar agregar el valor al form otra vez
   useEffect(()=>{//Esucha por los cambios en pauente
    if(Object.keys(paciente).length >0){//si el objeto tiene algo con objeb.key y .lentg que lo que tiene sea mayor 0
       setNombre(paciente.nombre)//el paicnete es el que esta en memoria
       setPropietario(paciente.propietario)
       setEmail(paciente.email)
       setFecha(paciente.fecha)
       SetSintomas(paciente.sintomas)
    }
   }, [paciente])
  

  const Generarid = ()=>{
    const ramdon = Math.random().toString(36).substring(2)//subtring elimina los 2 primer
    const fecha  = Date.now().toString(36)
    return fecha+ramdon
  }

  
  const handleSubmit = (e) => {//aqui podemos hacer tod
    e.preventDefault();

   //validar form  -> acceso a vari pq estamos dentro deml mismo component
   if([nombre, propietario, email, fecha, sintomas].includes('') ){
        console.log("hay al menos un campo vacio");


        setError(true)//cambiamos a verdadero
         return;
    }   
    setError(false)//desaparece la alerta

    //obejto de paciente
    const objetoPaciente ={
      nombre,
      propietario,
      email,
      fecha, 
      sintomas,
     // id: Generarid()//es para generar el id,  lo quitas para ponelro en el else
    }

    //verificar si editas o no
    if(paciente.id){
           //editando registro
      objetoPaciente.id = paciente.id//para que el id del registro previo no de problemas 
        console.log(objetoPaciente)// es el  actualizado
        console.log(paciente)//es el normal el primero
         
        //para editar crea un objeto distinto , este map itera  el otro crea la variable temporar de pacientestate, cuando identifica que es igual al del formulario, entonces retorna el objeto nuevo que es el que esta en el formulario, no  en el dom  sino retorna el de state
        //si el paciente es igual entonces es el que editas retorna el objeto paciente es el que esta actualizado sino el paciente estate pq ese no es el que modificas
         const  pacienteActualizado = pacientes.map(pacienteState=>pacienteState.id ===paciente.id ? objetoPaciente : pacienteState)
           setPacientes(pacienteActualizado)
           setPaciente({})//se vacia despues el estado 
          
    }else{
     //nuevo registro
     objetoPaciente.id = Generarid()//lo generas y se agrega
     setPacientes([...pacientes, objetoPaciente])
    }
  
    //console.log(objetoPaciente)
    //no uses push para agregar pq modificas el arreglo y es mejor tener una copia,
    // usa metdos inmutables has la copia con el spreackoperador
    //toma copia y le agrega el otro objeto
    //setPacientes([...pacientes, objetoPaciente])//le pasas el nombre al prods si los datos estan bien
  
      //reiniciar el form
      setNombre("")
      setPropietario("")
      setEmail("")
      setFecha("")
      SetSintomas("")
  
  }


  return (
    //el w-1/" para que ocupe un medio de espacio" wid/
    //el lg  es de tamaño mas lgrande
    //shadows es para sombra 
    //rounderx es para esquina redonda
    //block agrega display block uno se pone arr del otro
    <div  className="md:w-1/2  lg:w-2/5 mx-5">
       <h2 className="font-black text-3xl text-center">Seguimiento
        pacientes </h2>

        <p className="text-lg mt-5 text-center mb-10">
          Añade pacientes y {""}
          <span className="text-indigo-600 font-bold ">Administralos</span>
        </p>

        <form 
        onSubmit={handleSubmit}//una funcion
        action="" className="bg-white  shadow-md rounded-lg py-10 px-5 mb-10">



                    
             {error &&  <MensajeError><p>Todos los campos son obligados</p></MensajeError>
             /*mostrat error pero es un componente le das un prop, el && para eviatr el : y && es nomas espera si error es true  */}



          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
              Nombre mascotas 
              </label>
            <input 
            id="mascota"
            type="text"
             placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange={(e)=> setNombre(e.target.value)}  /* en la fun mosficadora modfica Onchange es como un evento de listener input */
              />
          </div>


          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
              Nombre propietario
              </label>
            <input 
            id="propietario"
            type="text"
             placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange={(e)=>setPropietario(e.target.value)}
              />
             
          </div>
          
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              Email
              </label>
            <input 
            id="email"
            type="email"
             placeholder="Email contacto propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              
              />
          </div>
          <div className="mb-5">
            <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold">
              Alta
              </label>
            <input 
            id="Alta"
            type="date"
           
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              value={fecha}
              onChange={(e)=>{setFecha(e.target.value)}}
              />
          </div>
          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
              Sintomas
              </label>
              <textarea  id="sintomas"
               className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              placeholder="Describe sintoms"
              value={sintomas}
              onChange={(e)=>{SetSintomas(e.target.value)}}
             
             />
      
          </div>
                                                                                      
          <input type="submit" value={paciente.id ? "Editar Paciente ": "Agregar Paciente"}
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" />
        </form>
    </div>
  )
}
//jajajaj
export default Formulario
