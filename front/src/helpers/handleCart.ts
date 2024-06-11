import { useRouter } from "next/navigation"

const handleCart = (producto : any) => {
    const userToken : any = localStorage.getItem("userToken")
    const router = useRouter()
    if(userToken){
        router.push("/cart")
    }
    else{
        alert("Debes iniciar sesión para agregar productos al carrito")
    }
}

export default handleCart
