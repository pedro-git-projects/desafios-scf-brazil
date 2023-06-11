import fakeData from "./fakeData.js"

const checkPermissions = (req, res, next) => {
  const { name } = req.query
  const user = fakeData.find((user) => user.name === name)

  if (user) {
    // Verifica se o usuário possui permissões de delete ou update
    if (
      user.permissions.includes("delete") ||
      user.permissions.includes("update")
    ) {
      // Se tiver permissões, chama o próximo middleware ou a função de rota
      next()
    } else {
      res
        .status(403)
        .json({ message: "Usuário não possui permissões suficientes" })
    }
  } else {
    res.status(404).json({ message: "Usuário não encontrado" })
  }
}

export default checkPermissions
