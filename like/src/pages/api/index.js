async function api(req,res) {
    console.log("recebido: ",req.query)
    var x = req.query.x
    var y = req.query.y
    var test = x>y? true:false;
    if (test== true){
        return res.status(200).json({
            status: "deu serto"
        })
    }
    return res.status(400).json({
        status:"chapolin colorado"
    })
}
export default api