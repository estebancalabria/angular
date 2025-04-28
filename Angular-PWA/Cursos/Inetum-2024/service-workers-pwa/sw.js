self.addEventListener("install", ()=>{
    console.log("SW Install..")
});


self.addEventListener("activate", ()=>{
    console.log("SW Activate..")
});

self.addEventListener("fetch", ()=>{
    console.log("SW Fetch..")
});