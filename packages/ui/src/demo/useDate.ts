import {useState} from "react";

function useDate() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return {
        date,
        setDate,
    }
}

export default useDate
