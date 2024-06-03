import axiosInstance from "../axiosinstance";

async function putReCrop(selectedCrop){
    try{
        const response = await axiosInstance.put(
            `/predictors/api/update/location/`,
            {
                selectedCrop: selectedCrop
            }
        )
        return response.data;
    } catch (error) {
        console.log('오류 발생', error);
    }
}
export default putReCrop;

