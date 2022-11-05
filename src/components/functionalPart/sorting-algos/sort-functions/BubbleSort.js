import { makeButtonsClickable } from "../utilityFunctions/clickablebuttons";
import { classArray } from "../utilityFunctions/buttonClassArray";

export const bubbleSort = (tempArray, wait) => {
    let factor = 0;
    for (let index = 0; index < tempArray.length - 1; index++) {
        
        for (let j = 0; j < tempArray.length - index - 1; j++) {
            
            const bar1 = document.querySelector(`.arrayItem${j}`);
            const bar2 = document.querySelector(`.arrayItem${j + 1}`);

            window.setTimeout(() => {
                bar1.style.backgroundColor = "yellow";
                bar2.style.backgroundColor = "yellow";
            }, factor += wait);
            if(tempArray[j] > tempArray[j + 1]) {
                
                window.setTimeout(() => {
                    bar1.style.backgroundColor = "red";
                    bar2.style.backgroundColor = "red";
                }, factor += wait);
                let temp = tempArray[j];
                tempArray[j] = tempArray[j + 1];
                tempArray[j + 1] = temp;

                const h1 = tempArray[j];
                const h2 = tempArray[j + 1];

                window.setTimeout(() => {
                    bar1.style.height = `${h1}px`;
                    bar1.style.backgroundColor = "var(--secondary-bg)";
                    bar2.style.height = `${h2}px`;
                    bar2.style.backgroundColor = "var(--secondary-bg)";
                }, factor += wait);
            }else{
                window.setTimeout(() => {
                    bar1.style.backgroundColor = "var(--secondary-bg)";
                    bar2.style.backgroundColor = "var(--secondary-bg)";
                }, factor += wait);
            }
        }

        window.setTimeout(() => {
            document.querySelector(`.arrayItem${tempArray.length - index - 1}`).style.backgroundColor = "green";
        }, factor += wait);
    }

    window.setTimeout(() => {
        document.querySelector(`.arrayItem${0}`).style.backgroundColor = "green";
    }, factor += wait);

    window.setTimeout(() => {
        makeButtonsClickable(classArray);
    }, factor += 1000);
}
