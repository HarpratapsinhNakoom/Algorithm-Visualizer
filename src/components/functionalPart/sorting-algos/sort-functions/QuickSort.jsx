import { makeButtonsClickable } from "../utilityFunctions/clickablebuttons";
import { classArray } from "../utilityFunctions/buttonClassArray";

export const quickSort = (arr, wait) => {
    let factor = 0;

    console.log(arr);

    function partition(arr, s, e) {
        let count = 0;
        const bar1 = document.querySelector(`.arrayItem${s}`);
        window.setTimeout(() => {
            bar1.style.backgroundColor = "yellow";
        }, factor += wait);

        for (let index = s + 1; index <= e; index++) {
            const bar2 = document.querySelector(`.arrayItem${index}`);
            //-----Comparing two values
            window.setTimeout(()=>{
                bar2.style.backgroundColor = "yellow";
            }, factor += wait);

            if(arr[index] < arr[s]) {
                window.setTimeout(()=>{
                    bar2.style.backgroundColor = "red";
                }, factor += wait);
                count++;
            }

            window.setTimeout(()=>{
                bar2.style.backgroundColor = "var(--secondary-bg)";
            }, factor += wait);
        }

        const pivotIndex = s + count;

        const pivotBar =  document.querySelector(`.arrayItem${pivotIndex}`);

        window.setTimeout(()=>{
            bar1.style.backgroundColor = "red";
            pivotBar.style.backgroundColor = "red";
        }, factor += wait);

        const ph = arr[pivotIndex];
        const sh = arr[s];
        
        arr[pivotIndex] = sh;
        arr[s] = ph;

        window.setTimeout(()=>{
            bar1.style.height = `${ph}px`;
            pivotBar.style.height = `${sh}px`;
        }, factor += wait);

        window.setTimeout(()=>{
            bar1.style.backgroundColor = "var(--secondary-bg)";
            pivotBar.style.backgroundColor = "var(--secondary-bg)";
        }, factor += wait);

        let i = s;
        let j = e;

        while(i < pivotIndex && j > pivotIndex) {
            while(i < pivotIndex && arr[i] < arr[pivotIndex]) i++;
            while(j > pivotIndex && arr[j] >= arr[pivotIndex]) j--;

            if(i < pivotIndex && j > pivotIndex) {
                const tempBar1 = document.querySelector(`.arrayItem${i}`);
                const tempBar2 = document.querySelector(`.arrayItem${j}`);

                window.setTimeout(()=>{
                    tempBar1.style.backgroundColor = "red";
                    tempBar2.style.backgroundColor = "red";
                }, factor += wait);


                const ih = arr[i];
                const jh = arr[j];

                arr[i] = jh;
                arr[j] = ih;

                window.setTimeout(()=>{
                    tempBar1.style.height = `${jh}px`;
                    tempBar2.style.height = `${ih}px`;
                }, factor += wait);

                window.setTimeout(()=>{
                    tempBar1.style.backgroundColor = "var(--secondary-bg)";
                    tempBar2.style.backgroundColor = "var(--secondary-bg)";
                }, factor += wait);

                i++;
                j--;
            }
        }

        return pivotIndex;
    }
    function quickSortHelper(arr, s ,e) {
        if(s >= e) return;

        const partIndex = partition(arr, s, e);

        quickSortHelper(arr, s, partIndex - 1);
        quickSortHelper(arr, partIndex + 1, e);
    }

    quickSortHelper(arr, 0, arr.length - 1);

    for (let index = 0; index < arr.length; index++) {
        const bar = document.querySelector(`.arrayItem${index}`);
    
        window.setTimeout(()=>{
            bar.style.backgroundColor = "green";
        }, factor += wait);
    }
    window.setTimeout(() => {
        makeButtonsClickable(classArray);
    }, factor += 1000);

}