class App
{
    runApplication()
    {
        console.log("hello world!");
        let appNaam = "AymensApp"
        let versienummer = "0.9 double"
        let versiedatum = new Date("2022-11-25");
        let autheur = "Aymen"
        let copyright = "Aymen"
        let distributeur = "Aymen"
        let darkmode = Boolean(10 > 9)

        console.log(appNaam);
        console.log(versienummer);
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }
}

let App = new App();
App.runApplication();


class App
{
    
    
    runApplication()
    {
        this.callmario();
        this.returnbwa();
    }
    

    callmario()
    {
        console.log("Mario!!")
    }
        

    returnbwa()
    {
        let delach = "BWAHAHAHA";
        return delach
        
    }

    


}
let App = new App();
App.runApplication();
