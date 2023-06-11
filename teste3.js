import fakeData from "./fakeData.js"

export const deleteUser = (req, res) => {
  const { name } = req.query

  const index = fakeData.findIndex((user) => user.name === name)

  // Verifica se o usuário foi encontrado.
  if (index !== -1) {
    // Remove o usuário na posição index.
    fakeData.splice(index, 1)
    res.json({ message: "Usuário removido com sucesso" })
  } else {
    res.status(404).json({ message: "Usuário não encontrado" })
  }
}
