const objetoJson = {
    key_1:'valor_1',
    llave_2:'valor_2',
    objJson:{
        key_1:'valor n',
        valor_x:'soy una X'
    },
    foo:()=>console.log('Hola mudo'),
    listJson:[
        {                     //[0]
            name:'Cristobal',
            edad:20
        },
        {                   //[1]
            name:'Rair',
            edad:26
        },
        {                   //[2]
            name:'Jared',
            edad:33
        }
    ]
}



console.log(objetoJson.key_1);

console.log(objetoJson.objJson);
console.log(objetoJson.objJson.valor_x);

console.log('Veo un valor de lista');
console.log(objetoJson.listJson[2].name);