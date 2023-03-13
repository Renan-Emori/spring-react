function Tabela({vetor, selecionar, mostrar, esconder, tabela}){
    return (
        <div>
       { 
        tabela 
        ?
        <input type="button" value="Mostrar dados" onClick={esconder} className="btn btn-primary"/>
        :
        <>
        <input type="button" value="Esconder dados" onClick={mostrar} className="btn btn-primary"/>
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Selecionar</th>
                </tr>
            </thead>
            <tbody>                   
                {vetor.map((obj, indice) => (
                    <tr key={indice}>
                    <td>{indice+1}</td>
                    <td>{obj.nome}</td>
                    <td>{obj.marca}</td>
                    <td><button onClick={() => {selecionar(indice)}} className="btn btn-success">Selecionar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>}
        </div>
    );
}

export default Tabela;