import { useContext } from "react";
import { RecordsContext } from "../context/RecordsContext";

const useRecords = () => {
    return useContext(RecordsContext);
};

export default useRecords;