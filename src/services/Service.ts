import axios from "axios";

const api = axios.create({
    baseURL: 'https://farmacia-ug0p.onrender.com/'
})

export const buscar = async (url: string, setDados:Function) => {
    const response = await api.get(url)
    setDados(response.data)
}

export const cadastrar = async(url: string, dados: Object, setDados: Function) => {
    const response = await api.post(url, dados)
    setDados(response.data)
}

export const atualizar = async(url: string, dados: Object, setDados: Function) => {
    const response = await api.put(url, dados)
    setDados(response.data)
}

export const deletar = async(url: string) =>{
    await api.delete(url)
}