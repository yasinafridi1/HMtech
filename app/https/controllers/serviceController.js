function serviceController() {
    return{
        aircondition:(req,res)=>{
            res.render("./services/aircond");
        },
        handyman:(req,res)=>{
            res.render("./services/handyman");
        },
        carpenter:(req,res)=>{
            res.render("./services/carpenter");
        },
        ceiling:(req,res)=>{
            res.render("./services/ceiling");
        },
        cctv:(req,res)=>{
            res.render("./services/cctv");
        },
        glass:(req,res)=>{
            res.render("./services/glass");
        },
        pestservice:(req,res)=>{
            res.render("./services/pest");
        },
        plumbing:(req,res)=>{
            res.render("./services/plumbing");
        },
        tiles:(req,res)=>{
            res.render("./services/tiles");
        },
        swimmingpool:(req,res)=>{
            res.render("./services/swimmingpool");
        },
        watertank:(req,res)=>{
            res.render("./services/watertank");
        },
        electrical:(req,res)=>{
            res.render("./services/electrical");
        },
        maintanance:(req,res)=>{
            res.render("./services/maintanance");
        },
        paintaing:(req,res)=>{
            res.render("./services/painting");
        },
        specialcleaning:(req,res)=>{
            res.render("./services/specialcleaning");
        }
    }
}

module.exports = serviceController;