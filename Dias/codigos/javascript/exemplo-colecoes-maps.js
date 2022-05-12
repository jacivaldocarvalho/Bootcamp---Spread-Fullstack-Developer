function getAdms(map){
    let admins = [];

    for([keys, value] of map){
        if(value === 'admin'){
            admins.push(keys);
        }
    }

    return admins;
}

const usuarios = new Map();

// popular o map
usuarios.set('Junior', 'admin');
usuarios.set('Gabriel', 'admin');
usuarios.set('Samuel', 'user');
usuarios.set('Jacivaldo', 'admin');

console.log(getAdms(usuarios))
