export default function Painel() {

    async function hundleClick() {
        const resultado = 'teste'
        // const resultado = await consultarDespesas();
        alert(resultado);
    }
    return (
        <div className='painel'>
            <h1 className='titulo'>Gerenciador de Despesas Pessoais</h1>
            <p className='escolher-opção'> Escolha uma opção: </p>
            <button className='btn-adicionar-despesas'>Adicionar Despesas</button>
            <button className='btn-ver-despesas'
                onClick={hundleClick}
            >Ver Despesas</button>
            <div>
            </div>
        </div>
    );
}
