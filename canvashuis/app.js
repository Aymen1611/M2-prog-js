class App
{
    runApplication()
    {   
        
        console.log("hello world!");
        let canvas = document.getElementById("canvasid")
        let g = canvas.getContext("2d");
         
        g.beginPath();
        g.moveTo(300, 300);
        g.lineTo(25, 25, 100, 100);
        g.lineTo(150, 40, 125, 200);
        g.lineTo(25, 150, 100, 125);
        g.closePath();
        g.stroke();
        g.fill()

    }   
}

let app = new App();
app.runApplication();

