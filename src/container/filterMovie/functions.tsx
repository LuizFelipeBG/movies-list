export const formatInputsValue = (name: string , year?: string | "") => ({filterName: name.trim(), filterYear: year })

export const verifyYear = (year: string) => {
    const parseToInt = parseInt(year)
    if(!parseToInt) return false
    if(parseToInt < 1990 || parseToInt > new Date().getFullYear()) return false
    return true
}