import { LoginErrorProps, LoginProps, RegisterErrorProps, RegisterProps } from "@/types";

export const validateLogin = (data : LoginProps) => {
    console.log(data)
    let errors : LoginErrorProps = {
        email: '', password: ''
    }

    const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    if(data.email === ''){
        errors.email = "Este campo no puede estar vacio"
    }
    else if (!validEmail.test(data.email)) {
        errors.email = "El email no es válido"
    }
    if(data.password === ''){
        errors.password = "Este campo no puede estar vacio"
    }
    
    return errors
}

export const validateRegister = (data : RegisterProps) => {
    let errors : RegisterErrorProps = {
        name: '', email: '', password: '', confirm: ''
    }

    const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    let keys : string[] = Object.keys(data);
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

