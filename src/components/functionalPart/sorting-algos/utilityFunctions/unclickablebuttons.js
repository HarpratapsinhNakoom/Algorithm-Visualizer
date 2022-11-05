export const makeButtonsUnclickable = (arr) => {
    arr.forEach(element => {
        const btn = document.querySelectorAll(`.${element}`);
        btn.forEach((ele, index) => {
            ele.style.color = "lightgray";
            ele.style.pointerEvents = "none";
        })
    });
}