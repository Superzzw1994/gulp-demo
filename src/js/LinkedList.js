class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    get node() {
        return class Node {
            constructor(data) {
                this.data = data
                this.next = null
            }
        }
    }

    append(data) {
        // 新建node实例
        const node = new this.node(data)
        if (this.length) {
            // 如果链表不为空
            let current = this.head
            // 找到链表中最后一个元素(该元素的next为null)
            while (current.next) {
                current = current.next
            }
            current.next = node
        } else {
            // 如果链表为空
            this.head = node
        }
        // 链表长度加一
        this.length += 1
        return true
    }

    insert(position, data) {
        // 如果插入的位置大于链表的长度则返回false
        if (this.length < position) {
            return false
        }
        // 新建node实例
        const node = new this.node(data)
        // index保存位置,current保存当前的节点,previous保存上一个节点
        let index = 0
        let current = this.head
        let previous = null
        // 如果position不为0,则遍历链表直到找到position处的原节点,和上一个节点,将node的next地址设置为原节点,将上一个节点的next地址设置为node
        if (position) {
            while (index++ < position) {
                previous = current
                current = current.next
            }
            previous.next = node
            node.next = current
        } else {
            // 如果position为0,则现将node的next地址设置为this.head, 再将this.head设置为node
            node.next = current
            this.head = node
        }
        this.length += 1
        return true
    }

    update(position, data) {
        //如果Position大于链表的长度则直接返回false
        if (position > this.length) {
            return false
        }

        if (position) {
            let index = 0
            let current = this.head
            while (index++ < position) {
                current = current.next
            }
            current.data = data
        } else {
            // 如果位置为0,则直接将this.head.data修改为data
            this.head.data = data
        }
        return true
    }

    indexOf(node, callback) {
        let current = this.head
        let index = 0
        while (current) {
            const flag = callback ? callback(current.data, node) : node === current.data
            if (flag) {
                return index
            }
            index += 1
            current = current.next
        }
        return -1
    }

    get(position) {
        //如果Position大于链表的长度则直接返回false
        if (position > this.length) {
            return false
        }
        if (position) {
            // 如果position不为0,则遍历到该位置,并且返回该节点
            let index = 0
            let current = this.head
            while (index++ < position) {
                current = current.next
            }
            return current
        } else {
            // 如果position为0,则直接返回this.head
            return this.head
        }
    }

    removeAt(position) {
        //如果Position大于链表的长度则直接返回false
        if (position > this.length) {
            return false
        }
        let current = this.head
        let previous = null
        let index = 0
        const node = this.get(position)
        if (position) {
            while (index++ < position) {
                previous = current
                current = current.next
            }
            previous.next = current.next
        } else {
            // 如果 position 为0, 则将this.head的next作为this.head
            const head = current.next
            this.head = head
        }
        this.length -= 1
        return node.data
    }

    remove(node, callback) {
        const index = this.indexOf(node, callback)
        return index > -1 ? this.removeAt(index) : false
    }

    toString() {
        let str = []
        let current = this.head
        while (current) {
            str.push(current.data)
            current = current.next
        }
        return str
    }

    size() {
        return this.length
    }

    isEmpty() {
        return !this.length
    }
}

const list = new LinkedList()
list.append(1)
list.append(2)
list.insert(2, 3)
// console.log(list.toString())


