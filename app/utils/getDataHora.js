export function getDataHoraAtual() {
  const agora = new Date();

  // Converte para horário de Brasília (America/Sao_Paulo)
  const options = {
    timeZone: 'America/Sao_Paulo',
    hour12: false,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  const formato = new Intl.DateTimeFormat('pt-BR', options).formatToParts(agora);

  const partes = {};
  formato.forEach(({ type, value }) => {
    partes[type] = value;
  });

  const data = `${partes.day}/${partes.month}/${partes.year}`;
  const hora = `${partes.hour}:${partes.minute}`;

  return { data, hora };
}
