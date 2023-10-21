import { useLoja } from "@/contexts/LojaContext";
import Categoria from "./Categoria";

const Cardapio = () => {
  const { categorias } = useLoja();

  return (
    <div className="pb-16">
      <div>
        {categorias?.map((categoria, index) => (
          <Categoria key={index} categoria={categoria} />
        ))}
      </div>
    </div >
  )
}

export default Cardapio;