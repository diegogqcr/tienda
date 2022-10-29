import Link from 'next/Link'
import Layout from '../components/layout';

export default function FAQ(){
    return(
        <Layout>
            <h1>FAQ</h1>
            <p>Diego Gamboa</p>
                <Link href="/"> 
                Ir a Home 
                </Link>
        </Layout>
    );
}