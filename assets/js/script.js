//funcion constructora para Consultorio
function Consultorio(nombre, paciente){
//asignar variables a los valores
let _nombre=nombre
let _paciente=paciente || []

//definir con get y set la capacidad de recuperar los atributos y modificarlos

Object.defineProperty(this,'_getNombre',{
    get:function(){
        return _nombre
    }
});
Object.defineProperty(this,'_setNombre',{
    set: function(nombre){
        _nombre=nombre
    }
});
Object.defineProperty(this,'_getPaciente',{
    get:function(){
        return _paciente
    }
});
Object.defineProperty(this,'_setPaciente',{
    set: function(paciente){
        _paciente=paciente
    }
})
}

//funcion constructora para Paciente

function Paciente(nombre, edad, rut, diagnostico){
//asignar variables a los valores
let _nombre=nombre
let _edad=edad
let _rut=rut
let _diagnostico=diagnostico || []

//definir con get y set la capacidad de recuperar los atributos y modificarlos

Object.defineProperty(this,'_getNombre',{
    get:function(){
        return _nombre
    }
});
Object.defineProperty(this,'_setNombre',{
    set function(nombre) {
        _nombre=nombre
    }
});
Object.defineProperty(this, '_getEdad',{
    get: function(){
        return _edad
    }
});
Object.defineProperty(this, '_setEdad',{
    set: function(edad){
        _edad=edad
    }
});
Object.defineProperty(this,'_getRut',{
    get:function(){
        return _rut
    }
});
Object.defineProperty(this,'_setRut',{
    set: function(rut){
        _rut=rut
    }
});
Object.defineProperty(this,'_getDiagnostico',{
    get: function(){
        return _diagnostico
    }
})
Object.defineProperty(this, '_setDiagnostico',{
    set: function(diagnostico){
        _diagnostico=diagnostico
    }
});

//prototipos a la funcion constructora de consultorio
Consultorio.prototype.getNombre=function(){
    return this._getNombre
};
Consultorio.prototype.setNombre=function(nombre){
    this._setNombre=nombre
};
Consultorio.prototype.getPaciente=function(){
    return this._getPaciente
};
Consultorio.prototype.setPaciente=function(paciente){
    this._setPaciente=paciente
}

//prototipos a la funcion constructora de Paciente
Paciente.prototype.getNombre=function(){
    return this._getNombre
};
Paciente.prototype.setNombre=function(nombre){
    this._setNombre=nombre
};
Paciente.prototype.getEdad=function(){
    return this._getEdad
};
Paciente.prototype.setEdad=function(edad){
    this._setEdad=edad
};
Paciente.prototype.getRut=function(){
    return this._getRut
};
Paciente.prototype.setRut=function(rut){
    this._setRut=rut
};
Paciente.prototype.getDiagnostico=function(){ 
    return this._getDiagnostico
};
Paciente.prototype.setDiagnostico=function(diagnostico){
    this._setDiagnostico=diagnostico
};
}

//instancias
p1= new Paciente ('Consuelo', 31, '17426979-3', 'Asma Bronquial')
p2= new Paciente ('Luis', 30, '1776577-3', 'Gastritis')
p3= new Paciente ('Mario', 31, '14645654-1', 'Migraña')
p4= new Paciente ('Emilia', 28, '1565676-7', 'Alergia al polen')
p5= new Paciente ('Carlos', 40, '12345345-2', 'Celiaquía')
p6= new Paciente ('Luisa', 25, '2043534-3', 'Esguince tobillo')
consultorio1= new Consultorio ('Consultorio Ignacio Domeyko',[p1,p2,p3,p4,p5,p6]);

//pruebas de visualizacion
console.log(p1._getDiagnostico)
console.log(consultorio1._getNombre)
console.log(p4._getRut)
console.log(p6._getEdad)

//establecer nuevos valores y prueba de visualizacion (solo para probar que es funcional)
p3.setDiagnostico('lumbago')
console.log(p3._getDiagnostico)
p1.setRut('19670939-1')
console.log(p1._getRut)
p6.setEdad(50)
console.log(p6._getEdad)
p4.setDiagnostico('psoriasis')
console.log(p4._getDiagnostico)

//visualizar todos los pacientes

Consultorio.prototype.mostrarATodos=function(){
     this._getPaciente.map((paciente)=>{
         console.log(`Nombre: ${paciente._getNombre}`)
         console.log(`Edad: ${paciente._getEdad}`)
         console.log(`Rut: ${paciente._getRut}`)
         console.log(`Diagnóstico: ${paciente._getDiagnostico}`)
         console.log(``)
     })
 }
 consultorio1.mostrarATodos()

 //visualizar a un paciente por su nombre
 Consultorio.prototype.mostrarAUno=function(nombre){
     this._getPaciente
     .filter((paciente)=>paciente._getNombre==nombre)
     .map((paciente)=>{
         let boton=document.getElementById('especifico')
         especifico.addEventListener('click',()=>{
             informacionEsp.innerHTML=`Nombre: ${paciente._getNombre} <br> Edad: ${paciente._getEdad} <br> Rut: ${paciente._getRut} <br> Diagnóstico: ${paciente._getDiagnostico} <br> `
             let informacion=document.getElementById('informacionEsp')
         })
     })
 }
 
 consultorio1.mostrarAUno('Consuelo')
 
















