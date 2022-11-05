import { getRandomNumber } from "./getRandNum";
export const getRnadomArray = (arrSize) => {
    let tempArray = []
    for (let index = 0; index < arrSize; index++) {
        tempArray.push(getRandomNumber(15, 350));
    }

    return tempArray
}