const key2Hash = (string = '', size) => {
    // hashCode
    let hashCode = 0
    // 霍纳算法
    for (let i = 0; i < string.length; i++) {
        hashCode = 37 * hashCode + string.charCodeAt(i)
    }
    return hashCode % size
}

class HashMap {
    constructor() {
        this.storage = []
        // 个数
        this.count = 0
        // 可存储最大个数
        this.limit = 16
    }
}