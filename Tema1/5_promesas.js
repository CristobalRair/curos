const alumnos = [
    {
        id:1,
        nombre:'Rair'
    },
    {
        id:2,
        nombre:'Cristobal'
    },
    {
        id:3,
        nombre:'Jared'
    },
    {
        id:4,
        nombre:'Aldo'
    }
];

const calificaciones = [
    {
        id:1,
        calif:10
    },
    {
        id:2,
        calif:9
    },
    {
        id:3,
        calif:8
    },
];

const edad = [
    {
        id:1,
        edad:30
    },
    {
        id:2,
        edad:25
    },
    {
        id:3,
        edad:20
    },
];

const getNameUserById = (id) =>{
    return new Promise((resolve,reject)=>{
        const resultado = alumnos.find(x => x.id===id)?.nombre;
        if(resultado){
            resolve(resultado);
        }else{
            reject('No se encontro el alumno con el id: '+id);
        }
    });
}

const getCalificacionUserById = (id) =>{
    return new Promise((resolucion,error)=>{
        const resultado = calificaciones.find(res => res.id===id)?.calif;
        (resultado) ? resolucion(resultado) : error(`El usuario con id: ${id} no tiene calificacion`);
    });  
}

const getEdadUserById = (id) =>{
    return new Promise((resolve,reject)=>{
        const resultado = edad.find(res => res.id===id)?.edad;
        (resultado) ? resolve(resultado) : reject(`El usuario con id: ${id} no tiene dato de edad`);
    });  
}


const id = 4;

getNameUserById(id)
.then((result)=>{
    nombre = result;
    return getCalificacionUserById(id);
})
.then((calificacion)=>{
    calf = calificacion;
    return getEdadUserById(id);
})
.then((edad)=>{
    console.log(`El usuario ${nombre} tiene una calificacion de: ${calf} y una edad: ${edad}`);
})
.catch(function(error){
    console.log(error);
})

