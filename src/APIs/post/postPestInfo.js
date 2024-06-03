import axiosInstance from "../axiosinstance";

export default async function postPestInfo(pestName, selectedCrop){
    try{
        const response = await axiosInstance.post(
            `/predictors/api/get/pestinfo/`,
            {
                pestName: pestName,
                selectedCrop: selectedCrop
            }
        )
        return response.data;
    } catch{
        console.log("에러발생")
    }
}