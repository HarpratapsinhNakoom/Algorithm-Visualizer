import { makeButtonsClickable } from "../utilityFunctions/clickablebuttons";
import { classArray } from "../utilityFunctions/buttonClassArray";

export const insertionSort = (tempArray, wait) => {

    let factor = 0;
    for (let index = 1; index < tempArray.length; index++) {
        let key = tempArray[index];
        let j = index - 1;

        while(j >= 0 && tempArray[j] > key) {
            const bar1 = document.querySelector(`.arrayItem${j}`);
            const bar2 = document.querySelector(`.arrayItem${j + 1}`);
            window.setTimeout(() => {
                bar1.style.backgroundColor = "yellow";
                bar2.style.backgroundColor = "yellow";
            }, factor += wait);
            window.setTimeout(() => {
                bar1.style.backgroundColor = "red";
                bar2.style.backgroundColor = "red";
            }, factor += wait);
            const h1 = tempArray[j];
            const h2 = tempArray[j + 1];

            tempArray[j + 1] = h1;
            tempArray[j] = h2;

            window.setTimeout(() => {
                bar1.style.height = `${h2}px`;
                bar2.style.height = `${h1}px`;
            }, factor += wait);

            window.setTimeout(() => {
                bar1.style.backgroundColor = "var(--secondary-bg)";
                bar2.style.backgroundColor = "var(--secondary-bg)";
            }, factor += wait);

            j--;
        }
    }

    for (let index = 0; index < tempArray.length; index++) {
        const bar = document.querySelector(`.arrayItem${index}`);
        window.setTimeout(() => {
            bar.style.backgroundColor = "green";
        }, factor += wait);
        
    }

    window.setTimeout(() => {
        makeButtonsClickable(classArray);
    }, factor += 1000);

}
