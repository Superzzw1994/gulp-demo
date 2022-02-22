function zDecorator(count ?: number) {
    return function (targetClass: any) {
        const l = new targetClass()
        l.buy(count || 1994)
    }
}

@zDecorator(8000)
class Zzw {
    constructor() {
    }

    buy(count: number) {
        console.log(count)
    }
}

