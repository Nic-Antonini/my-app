import Link from "next/link";

export default function about(){
    return(
        <div>
            <h1>Sobre</h1>
            <p>Tela sobre o meu projeto</p>
            <Link href={"/"}>Home</Link>
        </div>
    );
}