const Button = () =>{

    // Criando a função handleCLick
    const handleClick = () => {
        alert ("Voce clicou em um botao componente")
    }
    return(
    <>
    <button onClick={handleClick}>Button do Componente</button>


    </>
)


}
export default Button 