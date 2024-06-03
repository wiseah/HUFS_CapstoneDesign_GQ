import axiosInstance from "../axiosinstance";

async function postSelect(selectedLocation, selectedCrop, selectedDate){
    try{
        const response = await axiosInstance.post(
            `predictors/api/select/`,
            {
                selectedLocation: selectedLocation,
                selectedCrop: selectedCrop,
                selectedDate: selectedDate
            }
        )
        return response.data;
    } catch (error) {
        console.log('오류 발생', error);
    }
}
export default postSelect;