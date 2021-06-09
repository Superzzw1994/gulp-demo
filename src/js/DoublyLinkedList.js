class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    get node() {
        return class Node {
            constructor(data) {
                this.data = data
                this.next = null
                this.prev = null
            }
        }
    }

    append(data) {
        const node = new this.node(data)
        if (this.length) {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            node.prev = current
            current.next = node
            this.tail = node
        } else {
            this.head = node
            this.tail = node
        }
        this.length += 1
        return true
    }

    insert(position, data) {
        const size = this.size()
        if (position > size) {
            return false
        }
        const node = new this.node(data)
        if (position) {
            let current = this.head
            let previous = null
            let index = 0
            while (index++ < position) {
                previous = current
                current = current.next
            }
            if (current) {
                let previous = current.prev
                node.prev = previous
                node.next = current
                previous.next = node
            } else {
                previous.next = node
                node.prev = previous
            }
        } else {
            let current = this.head
            node.next = current
            this.head = node
            if (current) {
                current.prev = node
            }
        }
        if (size === position) {
            this.tail = node
        }
        this.length += 1
    }

    get(position) {
        //如果Position大于链表的长度则直接返回false
        if (position > this.length) {
            return false
        }
        let index = 0
        let current = this.head
        while (index++ < position) {
            current = current.next
        }
        return current.data
    }

    indexOf(data, callBack) {
        let current = this.head
        let index = 0
        while (current) {
            let flag = callBack ? callBack(current.data, data) : data === current.data
            if (flag) {
                return index
            }
            current = current.next
            index += 1
        }
        return -1
    }

    update(position, data) {
        //如果Position大于链表的长度则直接返回false
        if (position > this.length) {
            return false
        }
        let index = 0
        let current = this.head
        while (index++ < position) {
            current = current.next
        }
        current.data = data
        return true
    }

    removeAt(position) {
        const size = this.size()
        //如果Position大于链表的长度则直接返回false
        if (position > this.length) {
            return false
        }
        let index = 0
        let current = this.head
        if (position === 0) {
            switch (true) {
                case size === 0:
                    return true
                case size === 1:
                    this.head = null
                    this.tail = null
                    this.length = 0
                    return true
                default:
                    current.next.prev = null
                    this.head = current.next
                    this.length -= 1
                    return true
            }
        } else {
            while (index++ < position) {
                current = current.next
            }
            const previous = current.prev
            previous.next = current.next
            if (position === size) {
                this.tail = previous
            }
            this.length -= 1
            return true
        }
    }

    remove(node, callBack) {
        const index = this.indexOf(node, callBack)
        if (index > -1) {
            return this.removeAt((index))
        }
        return false
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
        return !this.size()
    }

    getTail() {
        return this.tail
    }
}

const list = new DoublyLinkedList();
list.append({
    name: 'zzw'
});
list.append({
    name: 'kkk'
});
list.insert(0, {
    name: 'zzy'
})

list.insert(3, {
    name: 'shz'
});
list.update(0, {
    name: 'superzzw'
})
list.update(3, {
    name: 'fuck'
})
// console.log(list.toString())
// list.removeAt(3)
// console.log(list.toString())
// list.removeAt(0)
// console.log(list.toString())

// console.log(list.toString())
// console.log(list.get(0))
// console.log(list.get(1))
// console.log(list.get(2))
// console.log(list.get(3))
// console.log(list.getTail())
// console.log(list.indexOf({
//     name: 'shz'
// }, (a, b) => a.name === b.name))
