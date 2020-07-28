import React from 'react'
import produtos from '../../data/produtos'

export default props => {

    const produtosTABLE = produtos.map((produto) => {

        return (<table key={produto.id}>
            <td>
            {produto.id}
        </td>
        <td key ={produto.id}>
            {produto.nome}
        </td>
        <td key = {produto.id}>
            {produto.preco}
        </td>
        </table>
        );
    });




    return (
        <table style = {{tableStyle: "border: 1px"}}>{produtosTABLE}</table>
    );
};