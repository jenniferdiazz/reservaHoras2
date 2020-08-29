function inicio(){
    var button = document.getElementById("button-add-new");
  
  var todo = document.getElementById("todo");
    var e = document.getElementById("especialidad");
    var opc_esp=e.options[e.selectedIndex].value;

    var h = document.getElementById("hora");
    var opc_hor=h.options[h.selectedIndex].value;
    


    var rut=document.getElementById("rut").value;
    var nombres=document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var edad=document.getElementById("edad").value;
    var correo=document.getElementById("correo").value;
    var fecha=document.getElementById("fecha").value;

    button.onclick = ()=>{
      

        validar(rut, nombres, apellidos, edad, correo, fecha, opc_hor,opc_esp);

        
        
      
    }
  }
  function validar(rut, nombres, apellidos, edad, correo, fecha, opc_hor,opc_esp){
      console.log(rut);
      console.log(nombres);
      console.log(apellidos);
      console.log(edad);
      console.log(correo);
      console.log(opc_esp);
      console.log(fecha);
      console.log(opc_hor);
       //nombre y apellido
var expresionLetra=/^[A-Za-z\s]+$/;

//edad
var expresionEdad=/^\d{1,3}$/g;

//mail
var expresionMail=/^\w+[@]\w+\.\D{2,3}$/;

//rut
var expresionRut=/^\d{7,8}[-]\d{1}$/g;

//fecha
var expresionFecha=/^\d{2}[-]\d{2}[-]\d{4}$/g;
       
    
    if(nombres==="" || correo==="" || edad==="" || apellidos==="" || rut==="" || fecha==="" ){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(!expresionRut.test(rut)){
        console.log(rut);
        alert("rut no valido. Ingresar en el formato xxxxxxxx-x");
        return false;

    }
    else if(!expresionMail.test(correo)){
        alert("correo no valido. Ingresar en el formato correo@gmail.com");
        return false;
    }
    else if(!expresionLetra.test(nombres)||!expresionLetra.test(apellidos)){
        alert("El campo nombres o apellidos solo acepta letras");
        return false;
    }
    else if(!expresionEdad.test(edad) ||edad<=0){
        alert("edad no valida");
        return false;
    }
    else if(!expresionFecha.test(fecha)){
        alert("fecha no valida. Ingresar en el formato dd-mm-yyyy");
        return false;
    }
    else{
        imprimir_saludo(rut, nombres, apellidos, edad, correo, fecha, opc_hor,opc_esp, todo);
    }
      
  }
  function imprimir_saludo(rut, nombres, apellidos, edad, correo, fecha, opc_hor,opc_esp,html){
    html.innerHTML +=`<h2>Estimada(o) ${nombres} ${apellidos}, su hora para ${opc_esp} ha sido reservada para el día ${fecha} a las 
    ${opc_hor} HRS. Ademas se le envió un mensaje a su correo ${correo} con el detalle de su cita. 
      Gracias por preferirnos</h2>`

    
  }
 