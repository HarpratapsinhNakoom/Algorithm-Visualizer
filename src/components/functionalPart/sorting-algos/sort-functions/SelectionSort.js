import { classArray } from "../utilityFunctions/buttonClassArray";
import { makeButtonsClickable } from "../utilityFunctions/clickablebuttons";

export const selectionSort = (tempArray, wait) => {

    let factor = 0;
    for (let index = 0; index < tempArray.length; index++) {
        const currBar = document.querySelector(`.arrayItem${index}`);
        window.setTimeout(() => {
            currBar.style.backgroundColor = "yellow";
        }, factor += wait);

        let min_idx = index;
        for (let j = index + 1; j < tempArray.length; j++) {
            const bar = document.querySelector(`.arrayItem${j}`);

            window.setTimeout(() => {
                bar.style.backgroundColor = "yellow";
            }, factor += wait);

            window.setTimeout(() => {
                bar.style.backgroundColor = "var(--secondary-bg)";
            }, factor += wait);

            if(tempArray[j] < tempArray[min_idx]) {
                min_idx = j;
            }
        }


        if(min_idx !== index) {
            const newBar = document.querySelector(`.arrayItem${min_idx}`);
            window.setTimeout(() => {
            currBar.style.backgroundColor = "red";
            newBar.style.backgroundColor = "red";
            }, factor +=1.5* wait);

            let h1 = tempArray[index];
            let h2 = tempArray[min_idx];

            tempArray[index] = h2;
            tempArray[min_idx] = h1;
            window.setTimeout(() => {
                currBar.style.height = `${h2}px`;
                newBar.style.height = `${h1}px`;
                newBar.style.backgroundColor = "var(--secondary-bg)"
            }, factor += wait);
        }

        window.setTimeout(() => {
            currBar.style.backgroundColor = "green";
        }, factor += wait);
    }

    window.setTimeout(() => {
        document.querySelector(`.arrayItem${0}`).style.backgroundColor = "green";
    }, factor += wait);

    window.setTimeout(() => {
        makeButtonsClickable(classArray);
    }, factor += 1000);
}
