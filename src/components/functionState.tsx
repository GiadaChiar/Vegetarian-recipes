//functio to use during fetch to check state and show popUp
export default function temporaryState(
    setter: any,
    startValue: any,
    endValue: any,
    duration = 3000,
    ) {
    setter(startValue);

    setTimeout(() => {
        setter(endValue);
    }, duration);
}