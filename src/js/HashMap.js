const key2Hash = (string = '', size) => {
    // hashCode
    let hashCode = 0
    // 霍纳算法
    for (let i = 0; i < string.length; i++) {
        hashCode = 37 * hashCode + string.charCodeAt(i)
    }
    return hashCode % size
}
console.log(key2Hash('zzw1994', 10))