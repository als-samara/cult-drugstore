import { useEffect, useState } from "react"
import Category from "../../../models/Category"
import { buscar } from "../../../services/Service"
import { DNA } from "react-loader-spinner"
import CardCategory from "../cardCategories/cardCategories"

{/** Componente responsavel por mostrar uma lista das Categorias */}
function ListCategories() {

    const [categories, setCategories] = useState<Category[]>([])

    {/* Função assincrona para buscar Categorias */ }
    async function buscarCategorias() {
        try {

            await buscar('/categorias', setCategories)

        } catch (error: any) {
            alert("Erro ao buscar Categorias")
            console.log(error);
        }
    }

    useEffect(() => {
        buscarCategorias()
    }, [categories.length])

    return (
        <>
            {/** Animação de busca */}
            {categories.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <>
                            {categories.map((category) => (
                                <>
                                    <CardCategory key={category.id} category={category} />
                                </>
                            ))}
                        </>
                    </div>
                </div>
            </div>
        </>


    )
}

export default ListCategories