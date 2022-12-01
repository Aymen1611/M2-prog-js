class App
{
    runApplication()
    {
        console.log("hello world!");
        let canvas = document.getElementById("canvasId")

        console.log(canvas)

        let g = canvas.getContext("2d");
       
        g.fillRect(0,0,10,10);

       


        
       
        g.beginPath();
        g.strokeStyle = "gray";
        g.fillStyle = "lightgray";
        g.moveTo(200, 300);
        g.lineTo(200, 500);
        g.lineTo(600, 675);
        g.lineTo(600, 400);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.strokeStyle = "gray";
        g.fillStyle = "brown"
        g.moveTo(600, 675);
        g.lineTo(815, 555);
        g.lineTo(815, 350);
        g.lineTo(600, 450)
        g.closePath();
        g.stroke();
        g.fill();

        

       


        g.beginPath();
        g.strokeStyle = "brown";
        g.fillStyle = "brown "
        g.moveTo(815, 350);
        g.lineTo(700, 200);
        g.lineTo(600, 450)
        g.closePath();
        g.stroke();
        g.fill();

        
        g.beginPath();
        g.strokeStyle = "brown";
        g.fillStyle = "green";
        g.moveTo(300, 100);
        g.lineTo(700, 200);
        g.lineTo(600, 450);
        g.lineTo(200, 300);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "lightblue";
        g.strokeStyle = "gray";
        g.moveTo(265, 350);
        g.lineTo(265, 450);
        g.lineTo(363, 490);
        g.lineTo(365, 385);
        g.lineTo(265, 350);
        g.fill();
        
    }
}

let app = new App();
app.runApplication();