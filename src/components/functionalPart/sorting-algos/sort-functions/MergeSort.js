import { makeButtonsClickable } from "../utilityFunctions/clickablebuttons";
import { classArray } from "../utilityFunctions/buttonClassArray";

export const mergeSort = (arr, s, e, wait) => {
    let factor = 0;
    
    function mergeSortHelper (arr, s, e) {
        if(s >= e){
            return [arr[s]] ;
        }
        const mid = Math.floor(s + (e - s)/2);
        const midbar = document.querySelector(`.arrayItem${mid}`);
        window.setTimeout(()=>{
            midbar.style.backgroundColor = 'yellow';
        }, factor += wait);
        const firstHalf = mergeSortHelper(arr, s, mid);
        const secondHalf = mergeSortHelper(arr, mid + 1, e);
    
        const sortedPart = [];
        let i = 0, j= 0;
    
        while(i < firstHalf.length && j < secondHalf.length) {
            const bar1 = document.querySelector(`.arrayItem${i + s}`);
            const bar2 = document.querySelector(`.arrayItem${j + mid + 1}`);
    
            if(firstHalf[i] < secondHalf[j]) {
                window.setTimeout(()=>{
                    bar1.style.backgroundColor = 'red';
                }, factor += wait);
                sortedPart.push(firstHalf[i++]);
            }else{
                window.setTimeout(()=>{
                    bar2.style.backgroundColor = 'red';
                }, factor += wait);
                sortedPart.push(secondHalf[j++]);
            }
        }
    
        while(i < firstHalf.length) {
            const pos = i + s;
            window.setTimeout(()=>{
                document.querySelector(`.arrayItem${pos}`).style.backgroundColor = 'red';
            }, factor += wait);
            sortedPart.push(firstHalf[i++])
        }
        while(j < secondHalf.length){
            const pos = j + mid + 1;
            window.setTimeout(()=>{
                document.querySelector(`.arrayItem${pos}`).style.backgroundColor = 'red';
            }, factor += wait);
            sortedPart.push(secondHalf[j++])
        }
        for (let index = 0; index < sortedPart.length; index++) {
            const bar = document.querySelector(`.arrayItem${index + s}`);
            arr[index + s] = sortedPart[index];
    
            window.setTimeout(()=>{
                bar.style.height = `${sortedPart[index]}px`;
                bar.style.backgroundColor = "var(--secondary-bg)";
            }, factor += wait);
            
        }
    
        return sortedPart;
    }

    const tArray = mergeSortHelper(arr,s,e);

    for (let index = 0; index < tArray.length; index++) {
        const bar = document.querySelector(`.arrayItem${index}`);
        window.setTimeout(()=>{
            bar.style.backgroundColor = "green";
        }, factor += wait);
    }
    window.setTimeout(() => {
        makeButtonsClickable(classArray);
    }, factor += 1000);
}