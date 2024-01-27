import { useState } from "react"

export default function WithToggle(OriginalComponent) {
    function newComponent(props) {
        const [showInfo, setShowInfo] = useState(false)
        const toggleHandler = () => setShowInfo(preve => !preve)
        return <OriginalComponent onToggleHandler={toggleHandler} showInfo={showInfo} {...props} />
    }
    return newComponent
};