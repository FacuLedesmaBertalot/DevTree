import { useQueryClient } from '@tanstack/react-query';

export default function AdminNavigation() {
  const queryClient = useQueryClient();

  const logout = () => {
    localStorage.removeItem('AUTH_TOKEN');
    queryClient.invalidateQueries({ queryKey: ['user'] });
  }
  

  return (
    <button
      className=" bg-lime-500 p-2 text-white uppercase font-black text-xs rounded-lg cursor-pointer hover:bg-lime-700"
      onClick={logout}
    >
      Cerrar Sesión
    </button>
  )
}
