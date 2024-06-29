export const formatCurrency = (amount) => {
    return amount > 0 ? (amount).toLocaleString("fa-IR") + " ریال" : 0

}