//pegando os dados usando destruct

const Dados = ({nivel,nome,senha}) =>{
    return(
        <>
        <hr />
        <p>O nivel do usuario é: {nivel} </p>
        <p>O nome do usuario é: {nome} </p>
        <p>A senha do usuario é: {senha} </p>
        </>
    )

}
export default Dados