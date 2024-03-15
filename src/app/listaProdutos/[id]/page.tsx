import Link from 'next/link';

export default function Produto({params} : {params: {id: string}}){
    return(
        <>
            <h1>Produto</h1>
            <p>Dados do produto</p>
            <Link href={"/listaProdutos"}>Home</Link>
        </>
    )
}