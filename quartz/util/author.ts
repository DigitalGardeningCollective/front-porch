export function getInitials(name: string) {
    let initials = name.match(/\b\w/g) || []
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase()
}

export function getWhatIDoStr(whatIDoArray: string[]) {
    return `${whatIDoArray.slice(0, whatIDoArray.length - 1).join(", ")}, and a ${ whatIDoArray[whatIDoArray.length - 1]}`
}