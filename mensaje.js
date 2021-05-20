const nombre = document.querySelector('#nombre')
const telefono = document.querySelector('#telefono')
const correo = document.querySelector('#correo')
const marca = document.querySelector('#marca')
const tipo = document.querySelector('#tipo')
const d_practica = document.querySelector('#d_practica')

const btn = document.querySelector('#btn')

btn.addEventListener( 'click', ()=>{
      
       nombre_p = String(nombre.value).toUpperCase()
       tel = Number(telefono.value)
       mail = String(correo.value)
       marc = String(marca.value)
       tip = String(tipo.value)
       d_p = String(d_practica.value)
      
       alert(`HOLA!!, ${nombre_p}, SE HA REGISTRADO SATISFACTORIAMENTE!!, con su telefono ${tel}, su correo ${mail}, su bicicleta de marca ${marc}, tipo ${tip}, practica ${d_p}`);
       
         
})





