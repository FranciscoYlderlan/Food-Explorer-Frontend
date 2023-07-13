function validateInput(input) {
  // Verifica se a string está vazia
  if (input === '') {
    return true
  }
  // Verifica se a string é composta apenas por espaços
  if (input.trim() === '') {
    return false
  }

  // Divide a string em palavras
  const words = input.trim().split(/\s+/)

  // Verifica o número de palavras
  if (words.length > 3) {
    return false
  }

  // Verifica o comprimento máximo de cada palavra
  const maxWordLength = 20 // Exemplo: comprimento máximo de 20 caracteres
  for (const word of words) {
    if (word.length > maxWordLength) {
      return false
    }
  }

  return true
}

export { validateInput }
