import { observer } from "mobx-react"
import { useEffect, useState } from "react";
import { useContext } from 'react';
import { Context } from "../..";

const Footer = observer(() => {
    const { requests } = useContext(Context)
    const [counter, setCounter] = useState(0)

    function funCounter() {
        let sum = 0;
        requests.requestss.forEach(item => (item.StatusId === 3) ? sum += 1 : null);
        return sum;
    }

    useEffect(() => {
        setCounter(funCounter())
    }, [requests.requestss.length])

    return (
        <footer>
            <p>
                Количество решенных заявок: {counter}
            </p>
        </footer>
    )
})
export default Footer