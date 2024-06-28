import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
.prompt([
    {
        message:"give your qr code link here:",
        name:"URL",
    },
])
.then((mssg)=>{
    let qrGen=mssg.URL;
    let qrImg=qr.image(qrGen);
    qrImg.pipe(fs.createWriteStream("./qr-code-7819654_1280.jpg"));
    fs.writeFile("readme.md",qrGen,(err)=>{
        if(err)throw err;
            console.log("your qr code has been generated!");
    });
})
.catch((error)=>{
    if(error.isTtyError){

    }
    else{

    }
});