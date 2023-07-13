import { JSDOM } from "jsdom";
global.DOMParser = new JSDOM().window.DOMParser

const getSemester = (rawhtml) => {
    const parser = new DOMParser();
    const html = parser.parseFromString(rawhtml, 'text/html');
    const select = html.querySelector('#sesiId')
    const options = select.querySelectorAll('option')
    const semester = []
    options.forEach((option) => {
        semester.push({
            id: option.value,
            name: option.textContent
        })
    })
    return semester
}
const parseKHS = (rawhtml) => {
    const parser = new DOMParser();
    const html = parser.parseFromString(rawhtml, 'text/html');
    const tbody = html.querySelector('tbody')
    const trs = tbody.querySelectorAll('tr')
    let allData = {}
    const khs = []
    trs.forEach((tr) => {
        const tds = tr.querySelectorAll('td')
        if (tds.length < 7) return
        khs.push({
            nama: tds[2].getElementsByTagName('b')[0].textContent,
            sks: tds[3].textContent,
            nilai: tds[6].textContent,
        })
    })
    allData.khs = khs

    // find all <div align="center"></div>
    const divs = html.querySelectorAll('div[align="center"]')
    divs.forEach((div) => {
        if (div.textContent.includes('IPS')) {
            allData.ips = div.textContent.split(/=(.*)/s)[1].trim()
        } else if (div.textContent.includes('IPK')) {
            allData.ipk = div.textContent.split(/=(.*)/s)[1].trim()
        }
    })
    return allData
}
export {getSemester, parseKHS}