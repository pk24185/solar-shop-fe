export const appConfig = {
    basePath: trimEndChar(import.meta.env.BASE_URL, '/')
}

function trimEndChar(str: string, ch: string) {
    if (str.endsWith(ch)) {
        return str.slice(0, -1 * ch.length)
    }
    return str;
}