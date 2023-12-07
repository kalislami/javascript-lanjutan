/*
 * Complete the 'highestInternationalStudents' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING firstCity
 *  2. STRING secondCity
 *
 * Base URL: https://jsonmock.hackerrank.com/api/universities
 *
 */

async function highestInternationalStudents(firstCity, secondCity) {
    let page = 1;
    let first = []
    let second = []

    for (let i = page; i <= 20; i++) {
        const fetchData = await fetch(`https://jsonmock.hackerrank.com/api/universities?page=${page}`)
        const jsonData = await fetchData.json()
        // console.log(jsonData.page);
        if (first.length == 0) {
            first = jsonData.data.filter(jd => jd.location.city == firstCity)
        } 

        if (second.length == 0) {
            second = jsonData.data.filter(jd => jd.location.city == secondCity)
        } 

        if (first.length > 0 && second.length > 0) {
            break;
        }

        page++
    }

    console.log(first);

    if (first.length > 0) {
        first.sort((a,b) => parseInt(b.international_students) - parseInt(a.international_students))
    }

    if (second.length > 0) {
        second.sort((a,b) => parseInt(b.international_students) - parseInt(a.international_students))
    }

    let higher = ''
    if (first.length > 0 && second.length > 0) {
        const getMax = parseInt(first[0].international_students) > parseInt(second[0].international_students) ? first : second
        higher = getMax[0].university
    }

    if (first.length == 0 && second.length > 0) {
        higher = second[0].university
    }

    if (first.length > 0 && second.length == 0) {
        higher = first[0].university
    }

    return higher
}

highestInternationalStudents('Singapore', 'New Delhi')