export const makeButtonsClickable = (arr) => {
    arr.forEach(element => {
        const btn = document.querySelectorAll(`.${element}`);
        btn.forEach((ele, index) => {
            ele.style.color = "var(--secondary-text)";
            ele.style.pointerEvents = "auto";
        })
    });
}