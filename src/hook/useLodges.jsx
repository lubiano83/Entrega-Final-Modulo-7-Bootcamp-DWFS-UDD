import { useContext } from "react";
import { LodgesContext } from "../context/LodgesContext";

const useLodges = () => {
    return useContext(LodgesContext);
};

export default useLodges;