export function getRandomNumberFromRange(max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min)
}
