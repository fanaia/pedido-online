// import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import { useLoja } from '@/contexts/LojaContext';

const Loja = () => {
  const router = useRouter();
  const { nomeLoja } = router.query;

  return (
    <div>{nomeLoja}</div>
  )
}

export default Loja;