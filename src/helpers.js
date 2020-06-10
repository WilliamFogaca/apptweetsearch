
export function formatDate($date) {
  const data = new Date($date);
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear();
  const hora = data.getHours().toString().padStart(2, '0');
  const minuto = data.getMinutes().toString().padStart(2, '0');
  return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
}