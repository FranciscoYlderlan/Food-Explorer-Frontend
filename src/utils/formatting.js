function currencyInputFormatter(value, type = 'string') {
  if (type === 'string') {
    const validString = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    })
    return validString
  }

  const formattedValue = value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })

  // Remove todos os caracteres que não são números ou ponto decimal
  const cleanedValue = formattedValue.replace(/[^0-9,.]/g, '')

  // Substitui a vírgula por ponto (formato válido para números)
  const validNumber = cleanedValue.replace(',', '.')

  return validNumber
}

function TwoDigitsFormatter(value) {
  // Converte o valor para string e adiciona zeros à esquerda, se necessário
  return String(value).padStart(2, '0')
}

function removeHashFileName(name) {
  const index = name.indexOf('-')
  if (index !== -1) {
    return name.slice(index + 1)
  }
  return name
}

export { currencyInputFormatter, TwoDigitsFormatter, removeHashFileName }
