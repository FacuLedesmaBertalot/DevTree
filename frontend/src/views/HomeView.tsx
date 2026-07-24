import Header from "../components/Header";
import SearchForm from "../components/SearchForm";


export default function HomeView() {
  return (
    <>
        <Header />

        <main className='bg-gray-100 py-10 min-h-screen bg-no-repeat bg-top-right lg:bg-home lg:bg-home-xl'>
            <div className="max-w-5xl mx-auto mt-10">
                <div className="lg:w-1/2 px-10 lg:p-0 space-y-6">
                    <h1 className="text-6xl font-black">
                        Todas tus <span className="text-lime-500">Redes Sociales </span>
                        en un Enlace
                    </h1>

                    <p className="text-xl mt-2">Únete a más de 200 mil Developers Compartiendo sus Redes Sociales, comparte tu Perfil de Instagram, Facebook, TikTok, GitHub, Youtube y más </p>

                    <SearchForm />

                </div>
                
            </div>
        </main>

    </>
  )
}
