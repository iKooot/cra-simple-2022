export function getTotalPagesHelper(itemsLength, koef = 10) {
    return Math.ceil(Number(itemsLength) / koef)
}