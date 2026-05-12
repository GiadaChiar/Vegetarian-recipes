//functio to use during fetch to check state and show popUp


import React from "react";

export default function temporaryState<T>(
    setter: React.Dispatch<React.SetStateAction<T>>,
    startValue: T,
    endValue: T,
    duration = 3000,
    ) {
    setter(startValue);

    setTimeout(() => {
        setter(endValue);
    }, duration);
}