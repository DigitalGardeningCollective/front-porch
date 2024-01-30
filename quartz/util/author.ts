// Function that gets the initials of the name
export function getInitials(name: string) {
    let initials = name.match(/\b\w/g) || []
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase()
}