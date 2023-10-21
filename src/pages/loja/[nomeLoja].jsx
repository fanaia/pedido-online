import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLoja } from '@/contexts/LojaContext';

const Loja = () => {
  const router = useRouter();
  const { nomeLoja } = router.query;
  const { carregarLoja, loja } = useLoja();

  useEffect(() => {
    if (nomeLoja && !loja) {
      const lojaCarregada = carregarLoja(nomeLoja);

      if (lojaCarregada) {
        router.push('/pedido/cardapio');
      }
    }
  }, [router, nomeLoja, loja, carregarLoja]);

  return <div>Loja não encontrada!</div>;
}

export default Loja;