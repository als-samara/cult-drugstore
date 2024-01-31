import { Link } from "react-router-dom"

function NavBar() {

    return (
        <>
            <div className='w-full bg-[#C15A36] text-white flex justify-center py-12 px-14 font-semibold'>
                <div className="container flex justify-between text-lg items-center">
                    <div className='items-center'>
                        <Link to='/home' className="text-2xl font-bold">CultDrugStore</Link>
                    </div>

                    <div className='flex gap-3 cursor-pointer'>
                        <Link to='/home' className='hover:bg-[#5A1F21] py-1 px-4 rounded-3xl duration-300'>Home</Link>
                        <Link to='/categorias' className='hover:bg-[#5A1F21] py-1 px-4 rounded-3xl duration-300'>Categorias</Link>
                        <Link to='/cadastroCategoria' className='hover:bg-[#5A1F21] py-1 px-4 rounded-3xl duration-300'>Cadastrar Categoria</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar