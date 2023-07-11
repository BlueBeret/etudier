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

export {getSemester}