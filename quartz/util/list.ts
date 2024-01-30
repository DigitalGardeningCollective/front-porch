export function isStringArray(contributors: any): contributors is string[] {
    return contributors.every((contributor: any) => typeof contributor === "string")
}