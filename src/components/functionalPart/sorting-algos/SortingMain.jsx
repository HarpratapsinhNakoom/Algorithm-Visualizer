import React from 'react'
import { makeButtonsUnclickable } from './utilityFunctions/unclickablebuttons'
import { getRnadomArray } from './utilityFunctions/getRandArr'
import AlgoHeader from './AlgoHeader'
import AlgoCode from './AlgoCode'
import { classArray } from './utilityFunctions/buttonClassArray'
import { mergeSort } from './sort-functions/MergeSort'
import { bubbleSort } from './sort-functions/BubbleSort'
import { insertionSort } from './sort-functions/InsertionSort'
import { selectionSort } from './sort-functions/SelectionSort'
import { quickSort } from './sort-functions/QuickSort'

export default function SortingMain() {
    const [arrayLength, setArrayLength] = React.useState(60);
    const [wait, setWait] = React.useState(4);
    const [array, setArray] = React.useState(getRnadomArray(arrayLength))
    const [arrayItemWidth, setArrayItemWidth] = React.useState(window.innerWidth*(3/4)/arrayLength);
    const [sortingMethod, setSortingMethod] = React.useState(0);

    // const ref = React.useRef(null);

    // const [arrayItemWidth, setArrayItemWidth] = React.useState(0);

    // React.useLayoutEffect(() => {
    //     setArrayItemWidth(ref.current.offsetWidth);
    // }, []);
    // const arrayItemWidth = 7

    const handleArrayItemWidth = () => {
        setArrayItemWidth(window.innerWidth*(1/2)/arrayLength);
    }
    React.useEffect(() => {
        document.title = "Sorting Visualizer"
        window.addEventListener('resize', handleArrayItemWidth);
    }, [])
    const arrayList = array.map((ele, index) => {
        return (
            <div
            className={`arrayItem${index}`} key={index}
            style={{width:`${arrayItemWidth}px`,
                    height:`${ele}px`,
                    backgroundColor:"var(--secondary-bg)",
                    border:" 0.2px solid var(--primary-bg)",
                    margin: "1px 0px"}}>
            </div>
        )
    })


    
    const changeArray = (arrSize) => {
        for (let index = 0; index < array.length; index++) {
            const bar = document.querySelector(`.arrayItem${index}`);
            bar.style.backgroundColor = "var(--secondary-bg)";
        }
        setArray(getRnadomArray(arrSize))
    }

    const handleLength = () => {
        const slider = document.getElementById('lengthSlider');
        setArrayLength(slider.value);
        changeArray(slider.value);
        handleArrayItemWidth();
    }

    const handleSpeed = () => {
        const tslider = document.getElementById('timeSlider');
        switch (tslider.value) {
            case "1":
                setWait(1000);
                break;
            case "2":
                setWait(500);
                break;
            case "3":
                setWait(100);
                break;
            case "4":
                setWait(50);
                break;
            case "5":
                setWait(8);
                break;
            default:
                break;
        }
    }

    const doMergeSort = () => {
        makeButtonsUnclickable(classArray);
        const tempArray = array;
        mergeSort(tempArray, 0, tempArray.length - 1,wait);
    }

    const doBubbleSort = () => {
        makeButtonsUnclickable(classArray);
        const tempArray = array;
        bubbleSort(tempArray, wait);
    }

    const doInsertionSort = () => {
        makeButtonsUnclickable(classArray);
        const tempArray = array;
        insertionSort(tempArray, wait);
    }

    const doSelectionSort = () => {
        makeButtonsUnclickable(classArray);
        const tempArray = array;
        selectionSort(tempArray, wait);
    }

    const doQuickSort = () => {
        makeButtonsUnclickable(classArray);
        const tempArray = array;
        quickSort(tempArray,wait);

        console.log(tempArray);
    }

    const sortChoices = [
        {
            name:"Merge",
            function: doMergeSort
        },
        {
            name:"Bubble",
            function: doBubbleSort
        },
        {
            name:"Insertion",
            function: doInsertionSort
        },
        {
            name:"Selection",
            function: doSelectionSort
        },
        {
            name:"Quick",
            function: doQuickSort
        },
    ];

    React.useEffect(() => {
        const initialFn = document.getElementById(`${sortChoices[sortingMethod].name}`);
        initialFn.classList.add("sortSelected");
      }, [])
    
      const getIndex = (str) => {
        for (let index = 0; index < sortChoices.length; index++) {
          if(sortChoices[index].name === str) return index;
        }
      }
    
      const setMethod = (event)=> {
        const initialFn = document.getElementById(`${sortChoices[sortingMethod].name}`);
        initialFn.classList.remove("sortSelected");
    
        const newFn = document.getElementById(`${event.target.id}`);
        newFn.classList.add("sortSelected");
    
        setSortingMethod(getIndex(event.target.id));
      }

  return (
    <div className='main-content'>
        <AlgoHeader changeArray = {changeArray}
            sortFunction = {sortChoices}
            handleLength = {handleLength}
            arrayLength = {arrayLength}
            handleSpeed = {handleSpeed}
            setMethod = {setMethod}
            sortingMethod = {sortingMethod}
            />

        <div className="array">
            {arrayList}
        </div>

        <AlgoCode sortingMethod = {sortingMethod}
                  sortChoices = {sortChoices}
        />
    </div>
  )
}