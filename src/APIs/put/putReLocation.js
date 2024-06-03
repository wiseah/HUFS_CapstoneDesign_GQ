import axiosInstance from "../axiosinstance";

async function putReLocation(selectedLocation){
    try{
        const response = await axiosInstance.put(
            `/predictors/api/update/location/`,
            {
                selectedLocation: selectedLocation
            }
        )
        return response.data;
    } catch (error) {
        console.log('오류 발생', error);
    }
}
export default putReLocation;

