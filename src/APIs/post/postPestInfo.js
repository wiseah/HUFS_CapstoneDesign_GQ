import axiosInstance from "../axiosinstance";

async function postPestInfo(pestName, selectedCrop){
    try{
        const response = await axiosInstance.post(
            `predictors/api/get/pestinfo/`,
            {
                pestName: pestName,
                selectedCrop: selectedCrop
            }
        )
        return response.data;
    } catch (error) {
        console.log('오류 발생', error);
    }
}
export default postPestInfo;