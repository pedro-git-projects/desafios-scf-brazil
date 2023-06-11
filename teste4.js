import fakeData from "./fakeData.js"

export const putUser = (req, res) => {
  const userId = req.query.id
  const updatedUser = fakeData.find((user) => user.id === userId)

  if (updatedUser) {
    updatedUser.name = req.body.name
    updatedUser.job = req.body.job
    res.json(updatedUser)
  } else {
    res.status(404).json({ message: "Usuário não encontrado" })
  }
}
