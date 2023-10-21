import React from "react";

const Produto = (props) => {
  return (
    <div>
      <div className="grid grid-cols-5 bg-white bg-opacity-50 m-1 p-1 rounded-md h-20">
        <div className="col-span-4 row-span-2 p-1">
          <div>{props.produto.nome}</div>
          <div className="text-sm p-1">{props.produto.descricao}</div>
        </div>
        <div className="col-span-1 text-center h-fit">
          <div>
            <span className="mr-1 text-xs">R$</span>
            <span className="text-lg">{props.produto.preco}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Produto;