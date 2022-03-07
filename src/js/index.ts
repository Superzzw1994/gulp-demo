/**
 * @name: index
 * @author: zhiwei.zheng
 * @date: 2022-03-07 22:51
 * @description：index
 * @update: 2022-03-07 22:51
 */
import {debounce} from "./code/debouce";

const target = document.getElementById('debounce');
if (target) {
    target.addEventListener('keyup', debounce(() => {
        console.log(target)
    }, 300))
}
