import fakeData from "./fakeData.js"

export const deleteUser = (req, res) => {
  const { name } = req.query

  const index = fakeData.findIndex((user) => user.name === name)
  // findIndex retorna -1 caso o índice não seja encontrato, notFound evita
  //  o uso de um "magic number"
  const notFound = -1

  // Verifica se o usuário foi encontrado.
  if (index !== notFound) {
    // Remove o usuário na posição index.
    fakeData.splice(index, 1)
    res.json({ message: "Usuário removido com sucesso" })
  } else {
    res.status(404).json({ message: "Usuário não encontrado" })
  }
}
