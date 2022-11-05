export const getRandomNumber = (mini, maxi) => {
    const temp = Math.floor(Math.random() * (maxi - mini - 1) + mini)

    return temp
}