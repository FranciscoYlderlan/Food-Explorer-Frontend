function currencyInputFormatter(value) {
  const formattedValue = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })
  return formattedValue
}

function TwoDigitsFormatter(value) {
  // Converte o valor para string e adiciona zeros à esquerda, se necessário
  return String(value).padStart(2, '0')
}

export { currencyInputFormatter, TwoDigitsFormatter }
