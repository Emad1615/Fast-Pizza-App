export function formatDate(str) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(str));
}
export function formatCurrency(amount) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
export function calcMinutesLeft(value) {
  const date1 = new Date().getTime();
  const date2 = new Date(value).getTime();
  return Math.round((date2 - date1) / 60000);
}
