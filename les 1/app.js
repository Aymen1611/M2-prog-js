class App
{
    runApplication()
    {
        console.log("hello world!");
        console.log(appNaam)
        console.log(versienummer)
        console.log(versiedatum)
        console.log(autheur)
        console.log(copyright)
        console.log(distributeur)
        console.log(darkmode)
    }
}

let app = new App();
app.runApplication();

let appNaam = "AymensApp"
let versienummer = "0.9 double"
let versiedatum = new Date("2022-11-25");
let autheur = "Aymen"
let copyright = "Aymen"
let distributeur = "Aymen"
let darkmode = Boolean(10 > 9)