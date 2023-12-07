/*
magazine: array[string]
note: array[string]
*/
function checkMagazine(magazine, note) {
    let hash_mag = {}
    let result = "Yes"

    magazine.forEach((m)=>{ //O(n)
        hash_mag[m] = hash_mag[m] ? hash_mag[m]+1 : 1
    })

   note.forEach((n) => { //O(n)
       if (hash_mag[n]>0) { //O(1)
           hash_mag[n] =  hash_mag[n] - 1 //O(1)
       }
       else {
           result = "No"
           return
       }

   })
   console.log(result)
}