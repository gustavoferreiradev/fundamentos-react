import React from 'react'

export default function Aleatorio(props){
    const num1 = 1;
    const num2 = 10;
    const numa = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
    return(
        <>
        <p>Número Aleatório: <strong>{ numa }</strong> </p>
        </>
    )
}