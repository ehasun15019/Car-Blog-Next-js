import SellCarFromDesign from "@/Components/Design/SellCarFromDesign";
import PrivateRoute from "@/Components/Routes/PrivateRoutes";

const SellCarPage = () => {
    return(
        <div className="w-11/12 mx-auto flex justify-center py-4">
            <SellCarFromDesign />
        </div>
    )
};

export default function pageWrapper() {
    return(
       <PrivateRoute>
        <SellCarPage />
       </PrivateRoute>
    )
}