import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req,res) => {
      res.status(200).json({
            message: "aur bhai aa gaya data mera pass"
        })
} )

export {registerUser}