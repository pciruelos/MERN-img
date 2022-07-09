import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name:"dhoebryld",
    api_key:"833748293453844",
    api_secret:"7uDu_pqIn3VZvZAlUfmBMxmDeNM"

})

export const uploadImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {

    })
}

export const deleteImage = async (id) => {
    return await cloudinary.uploader.destroy(id)
}