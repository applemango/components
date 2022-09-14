export function ROF(a:number, b:number):any {
    if(!b || !a) {
        return [a,b]
    }
    const c = Math.min(Math.abs(a), Math.abs(b));
    for (let i = c; i > 0; i--) {
        if(!(a%i) && !(b%i)) {
            return [a/i,b/i]
        }
    }
}
export function ROF3(a: number, b: number, c: number):any {
    if(!b || !a || !c) {
        return [a,b,c]
    }
    const t = Math.min(Math.abs(a), Math.abs(b), Math.abs(c));
    for (let i = t; i > 0; i--) {
        if(!(a%i) && !(b%i) && !(c%i)) {
            return [a/i,b/i,c/i]
        }
    }
}

export function SROF(a: number,b: number = 1):Array<number> {
    if(b == 1 && Math.sqrt(a)%1 == 0) {return [Math.sqrt(a)]}
    if(0 > a) {return [a]}
    const t = (one:number, tow:any = []):any => {
        for(let i = 2; i < one; i++) {
            if(one%i == 0) {
                return t(one/i,[...tow,i])
            }
        }
        return [one, ...tow]
    }
    const del = (one:Array<number>, index:number) => {
        let r:any = []
        one.forEach((x, i) => {
            if(i!=index) {
                r.push(x)
            }
        })
        return r
    }
    const tm = (one:Array<number>) => {
        let r = [];
        for(let i = 0; i < one.length ; i++) {
            if(one.indexOf(one[i],i+1)+1) {
                r.push(one[i])
                one = del(one,one.indexOf(one[i],i+1))
                one = del(one,i)
            }
        }
        let re = [1,1]
        if(one.length > 0) {
            for(let i = 0; i < one.length; i++) {
                re[1] = re[1] * one[i]
            }
        }
        if(r.length > 0) {
            for(let i = 0; i < r.length; i++) {
                re[0] = re[0] * r[i]
            }
        }
        return re
    }
    return tm(t(a))
}