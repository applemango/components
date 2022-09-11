import { gzipSync, unzipSync } from "zlib"
import { Buffer } from "buffer"
export function gzip (data:string) {
    let t = gzipSync(encodeURIComponent(data)).toString("base64").replaceAll("/","_").replaceAll("+","-")
    return t
}
export function unzip(data:string) {
    let t = decodeURIComponent(unzipSync(Buffer.from(data.replaceAll("-","+").replaceAll("_","/"), "base64")).toString("utf-8"))
    return t
}