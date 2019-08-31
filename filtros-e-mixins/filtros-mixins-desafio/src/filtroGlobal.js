export default (string) => {
    return string.split(/ /).map(palavra => `${palavra} (${palavra.length})`).join(' ')
}