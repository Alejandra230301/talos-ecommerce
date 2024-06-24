import { AdressProps } from "@/types/adress";

export const validateAdress = (data : AdressProps) => {
    console.log(data)
    let errors : AdressProps = {
        adress: '', phone: '', country: '', city: '', code: '', state:''
    }

    let keys : string[] = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i].toString();
        console.log(data[key])
        console.log(errors)
        if(data[key] === ''){
            console.log("entro")
            console.log(data[key])
            errors[key] = "Este campo no puede estar vacio"
        }
    }

    return errors
}
