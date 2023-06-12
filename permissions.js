import fakeData from "./fakeData.js"

const checkPermissions = (req, res, next) => {
  const { name } = req.query
  const user = fakeData.find((user) => user.name === name)

  if (user) {
    // Verifica se o usuário possui permissões delete ou update.
    if (
      user.permissions.includes("delete") ||
      user.permissions.includes("update")
    ) {
      // Se tiver permissões, chama a função da rota.
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
