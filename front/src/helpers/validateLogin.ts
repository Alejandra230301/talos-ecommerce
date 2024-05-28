
export const validateLogin = (data : any) => {
    let errors : any = {
        email: '', password: ''
    }

    const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i].toString();
        if(data[key] === ''){
            errors[key] = "Este campo no puede estar vacio"
        }
    }

    if(data.email != ''){
        if (!validEmail.test(data.email)) {
            errors.email = "El email no es válido"
        }
    }
    
    return errors
}

export const validateRegister = (data : any) => {
    let errors : any = {
        first_name: '', last_name: '', email: '', password: '', confirm: ''
    }

    const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i].toString();
        if(data[key] === ''){
            errors[key] = "Este campo no puede estar vacio"
        }
    }

    if(data.email != ''){
        if (!validEmail.test(data.email)) {
            errors.email = "El email no es válido"
        }
    }

    if(data.password != '' && data.confirm!= ''){
        if(data.password != data.confirm){
            errors.password = "Las contraseñas no coinciden"
            errors.confirm = "Las contraseñas no coinciden"
        }
    } 


    
    return errors
}

