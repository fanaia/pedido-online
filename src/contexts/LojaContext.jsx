import React, { createContext, useContext, useState } from 'react';

const LojaContext = createContext();

const LojaProvider = ({ children }) => {
  const [loja, setLoja] = useState(null);
  const [categorias, setCategorias] = useState(null);
  const [produtos, setProdutos] = useState(null);

  const carregarLoja = (alias) => {
    const _loja = {
      nome: alias,
      abertaPedidosOnline: true,
    };
    setLoja(_loja);

    const _categorias = [
      { nome: "Porções" },
      { nome: "Drinks da Casa" },
      { nome: "Cervejas Longnecks" },
    ];
    setCategorias(_categorias);

    const _produtos = [
      { produtoID: "1", nome: "Bolinho de Piracui", preco: 25, categorias: [{ nome: "Porções" }] },
      { produtoID: "2", nome: "Batata Frita", preco: 20, categorias: [{ nome: "Porções" }] },
      { produtoID: "3", nome: "Caipirinha", preco: 14, categorias: [{ nome: "Drinks da Casa" }] },
    ];
    setProdutos(_produtos);

    return true;
  }

  return (
    <LojaContext.Provider value={{ carregarLoja, loja, categorias, produtos }}>
      {children}
    </LojaContext.Provider>
  );
}

const useLoja = () => {
  const context = useContext(LojaContext);
  if (context === undefined) {
    throw new Error('useLoja deve ser usado dentro de um LojaProvider');
  }
  return context;
}

export { LojaProvider, useLoja };