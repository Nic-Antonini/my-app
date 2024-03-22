import Link from 'next/link';
import produtos from '../../produtos';

export default function ListaProdutos(){
    return(
        <>
            <h1>Produtos</h1>
                
            {/* {produtos.map(prod => <p>{prod.nome}</p> )} */}

            <ol>

                {
                
                produtos.map( (prod) => 

                    <Link href={`/listaProdutos/${prod.id}`} key={prod.id}>
                        <li>{prod.nome}</li>
                    </Link>
                    
                )

                }

            </ol>

            <Link href={"/"}>Home</Link>
        </>
    )
}