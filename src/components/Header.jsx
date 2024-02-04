function Header(){//puedes poner props y ya o por cada uno
//los componentes inician en mayus
//el font-black pone en negrita y ancho de la letra  y el text-5xl es para tamaño y la letra es buena
//el text-indigo-600 para ponerle un color parfa reslatr
//el {''} es para dejar espaco
//el w-1/2    es que tome la mitad es como grid osea el tamaño del 50%  y pone abalo lo demas 
//mx-auto lo centra es     


//el md es como un media queri osea tamaño mediano md y lo que sigue te dice que se hara
//el de w-2/3 es del 66 % 
//el mx-auto lo entra
return(
      <div>
        
        <h1 className="font-black text-5xl text-center  md:w-2/3 mx-auto">
          Seguimiento Pacientes {''} 
            <span className="text-indigo-600">Veterinaria</span>
            </h1>
        
      </div>
    )
}

export default Header;