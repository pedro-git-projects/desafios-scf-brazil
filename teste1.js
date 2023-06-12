// É melhor utilizar const do que var
// para evitar que o objeto seja acidentalmente sobrescrito.
import fakeData from "./fakeData.js"

export const accessCount = {} // Exportando para o desafio 5.

export const getUser = (req, res, next) => {
  const { name } = req.query //  podemos extrair a propriedade via destructuring.

  //  Utilizar find evita que acessemos acidentalmente um índice fora
  //  dos limites e torna o código mais legível.
  //  Utilizar comparação estrtita também dá mais segurança de tipo.
  const user = fakeData.find((user) => user.name === name)

  if (user) {
    // Incrementa os acessos para o desafio 5.
    if (accessCount[name]) {
      accessCount[name]++
    } else {
      accessCount[name] = 1
    }
    res.json({ user: user })
  } else {
    // Trata o caso em que o usuário não foi encontrado.
    res.status(404).json({ message: "Usuário não encontrado" })
  }
}

export const getUsers = (req, res, next) => {
  res.json({ users: fakeData })
}
