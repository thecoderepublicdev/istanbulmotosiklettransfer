import classNames from "classnames"
import { createElement } from "react"

export default function Grid({
    cols, 
    gap, 
    desktop,
    mobile,
    gapHorizontal, 
    gapVertical, 
    children
}) {    
    return createElement('div', {
        className: classNames(
            `grid`, {
                [`grid-cols-1`]: cols === 1,
                [`grid-cols-2`]: cols === 2,
                [`grid-cols-3`]: cols === 3,
                [`grid-cols-4`]: cols === 4,
                [`grid-cols-5`]: cols === 5,
                [`grid-cols-6`]: cols === 6,
                [`grid-cols-7`]: cols === 7,
                [`grid-cols-8`]: cols === 8,
                [`grid-cols-9`]: cols === 9,
                [`grid-cols-10`]: cols === 10,
                [`grid-cols-11`]: cols === 11,
                [`grid-cols-12`]: cols === 12,
                [`gap-${gap?.toString()}`]: (gap),
                [`gap-x-${gapHorizontal?.toString()}`]: (gapHorizontal),
                [`gap-y-${gapVertical?.toString()}`]: (gapVertical),
            })
    }, children)
}