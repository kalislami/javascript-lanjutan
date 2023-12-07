/*
check diff string
s1 : string
s2 : string
*/
function twoStrings(s1, s2) {
    let result = "NO";
    const s1len = s1.length;
    const s2len = s2.length;
    if (s1len >= 1
         && s1len <= 100000
         && s2len >= 1
         && s2len <= 100000) {
         
         result = (s1.split('')
                  .filter((el, key) => s2.indexOf(el) > -1)
                  .length > 0) ? "YES" : "NO";
    }
    return result;
}