const adminMiddleware  = async (req , res , next) =>{
    try {
        const adminRole = await req.user.isAdmin
        if(!adminRole){
            return res.status(403).json({ message : "Access denied user is not admin"})
        }
       // res.status(200).json( {message : req.user.isAdmin} )
        next()
    } catch (error) {
        next(error)
    }

}

module.exports = adminMiddleware