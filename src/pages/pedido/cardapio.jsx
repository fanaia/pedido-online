import Cardapio from "@/components/Cardapio";
import { useLoja } from "@/contexts/LojaContext";

const CardapioPage = () => {
  const { loja } = useLoja();

  return (
    <main>
      <div>
        <div className='grid grid-cols-2 gap-4 p-6'>
          <div className='col-span-1 text-left'>{loja?.nome}</div>
          <div className='col-span-1 text-right'>{loja?.abertaPedidosOnline}</div>
        </div>
        <div>
          <Cardapio />
        </div>
        <div className="fixed left-1 right-1 bottom-1">
          <button className="p-3 w-full text-lg text-white text-center rounded-md bg-blue-500">
            <div>
              <span className="mr-3">Pedir</span>
            </div>
          </button >
        </div >
      </div>
    </main >
  );
}

export default CardapioPage;