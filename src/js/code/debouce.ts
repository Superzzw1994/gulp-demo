/**
 * @name: debouce
 * @author: zhiwei.zheng
 * @date: 2022-03-07 22:52
 * @description：debouce
 * @update: 2022-03-07 22:52
 */
export function debounce(fn: Function, delay = 300) {
    let timer: any = null
    return (...args: Array<any>) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function () {
            fn(...args)
            timer = null
        }, delay)
    }
}

export function throttle(fn: Function, delay = 100) {
    let timer: any = null
    return (...args: Array<any>) => {
        if (timer) {
            return
        }
        timer = setTimeout(function () {
            fn(...args)
            timer = null
        }, delay)
    }
}
