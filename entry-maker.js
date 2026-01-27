let title = "Santa's Cookie Decorator!"
let authors = ["Olyvia Frongillo"];
let year = 2025;
let path = "santas-cookies";

let byline = '';
if (authors.length === 1) {
    byline += authors[0];
}
if (authors.length === 2) {
    byline += authors[0] + ' and ' + authors[1];
}
if (authors.length > 2) {
    for (let i = 0; i < authors.length; i++) {
        byline += authors[i];
        if (i < authors.length - 1) {
            byline += ', ';
        }
        if (i === authors.length - 2) {
            byline += 'and ';
        }
    }
}
let s = `## ${title}

by ${byline}

▶️ Play: https://ec-idds.github.io/intro-programming/${year}/${path}/

📂 Code: [${path}](${year}/${path}/)
`
console.log(s);