import { Link } from 'react-router-dom';

export default function HomeNavigation() {
  return (
    <>

      <Link
        className='text-white p-2 uppercase font-black text-xs cursor-pointer'
        to={'/auth/login'}
      >Iniciar Sesión</Link>

      <Link
        className=' bg-lime-500 text-white p-2 uppercase font-black text-xs cursor-pointer rounded-lg hover:bg-lime-700'
        to={'/auth/register'}
      >Registrarme</Link>

    </>
  )
}
