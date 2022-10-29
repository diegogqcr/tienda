import Layout from "../../components/layout";
import { getItems } from "../../services/itemService";
import Image from "next/image";

export default function Index ({products}){//variable items es la misma que viene de la function getStaticProps quien hace la peticion y estructura 
    return (
    <Layout>
            <h1>Store</h1>
            {products && 
                products.map((item) =>(
                    <div key={item.id}>
                        <Image src={item.image}  width="220" height="200" />
                        {item.title}
                    </div>
            ))}
    </Layout>
    );
}

//obtenemos los datos de la API, le damos formato y el resultado es una prop que vamos a inyectar en el componente
//funcion para hacer static generation para traer los datos de los servicios
export async function getStaticProps(){ 
    const res = await getItems();//llamamos a la function getItems de los servicios y obtenemos los datos

    //next pide enviar un objeto que se llame props esta es la estructura o formato de los datos
    return {
        props:{
            products: res,//aqui next ejecuta el codigo de res que trae los datos y los almacena en items creando un prop que usamos en el componente de index para inyectarlo y lo desestructuramos en el Idex({items})
        }
    }
}

