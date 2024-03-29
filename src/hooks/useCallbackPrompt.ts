/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useBlocker } from "./useBlocker";

// from https://github.com/Bilal-Bangash/detecting-route-change-react-route-dom-v6
export function useCallbackPrompt(when: boolean) : [boolean, (() => void), (() => void)] {
    const navigate = useNavigate();
    const location = useLocation();
    const [showPrompt, setShowPrompt] = useState(false);
    const [lastLocation, setLastLocation] = useState<any>(null);
    const [confirmedNavigation, setConfirmedNavigation] = useState(false)

    const cancelNavigation = useCallback(() => {
        setShowPrompt(false);
    }, [])

    const handleBlockedNavigation = useCallback((nextLocation: any) => {
       if(!confirmedNavigation && nextLocation.location.pathname !== location.pathname) {
        setShowPrompt(true)
        setLastLocation(nextLocation)
        return false
       }
       return true
    }, [confirmedNavigation])

    const confirmNavigation = useCallback(() => {
        setShowPrompt(false)
        setConfirmedNavigation(true)
    }, [])

    useEffect(() => {
        if(confirmedNavigation && lastLocation) {
            navigate(lastLocation.location.pathname)
        }
    }, [confirmedNavigation, lastLocation])

    useBlocker(handleBlockedNavigation, when)

    return [showPrompt, confirmNavigation, cancelNavigation]
}

