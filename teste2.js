import fakeData from "./fakeData.js"

// postUser adiciona um usuário ao "banco de dados"
// que é o array fakeData.
export const postUser = (req, res) => {
  try {
    const { name, job } = req.body

    // Verifica se nome ou job estão faltando.
    if (!name || !job) {
      return res
        .status(400)
        .json({ error: "name e job são campos obrigatórios." })
    }

    const newUser = {
      name,
      job,
    }

    // Adiciona o novo usuário ao array fakeData.
    fakeData.push(newUser)

    // Retorna uma resposta com status 201 (Created) e o objeto JSON newUser
    res.status(201).json(newUser)
  } catch (error) {
    console.error("Erro ao processar a requisição:", error)
    // Retorna uma resposta com status 500 (Internal Server Error) e um objeto JSON com a propriedade error
    res.status(500).json({ error: "erro do servidor." })
  }
}
