const {app,BrowserWindow} = require("electron");
const url = require("url");

function createWindow(){
    const win = new BrowserWindow({
        width:900,
        height:726,
        frame:true,
        titleBarStyle:"hidden",
        titleBarOverlay:{
            color:"black",
            symbolColor:"white"
        },
        resizable:false,
        transparent:false,
        title:"AudioEffector",
        icon:"./public/icon/logo512x512.png",
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    });
    const starturl = process.env.ELECTRONURL || url.format({
        protocol:"file",
        slashes:true,
        pathname:__dirname+"./../build/index.html"
    });
    win.loadURL(starturl);
}
app.on("ready",function(){
    createWindow();
});
app.on("window-all-closed",function(){
    app.quit();
});