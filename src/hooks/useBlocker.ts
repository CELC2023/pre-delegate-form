
import React from 'react';
import type { Blocker, History, Transition } from "history";
import { UNSAFE_NavigationContext } from "react-router-dom";

export function useBlocker(blocker: Blocker, when = true): void {
    const navigator = React.useContext(UNSAFE_NavigationContext)
        .navigator as History

    React.useEffect(() => {
        if(!when) return;

        const unblock = navigator.block((tx: Transition) => {
            const autoUnblockTx = {
                ...tx,
                retry() {
                    unblock();
                    tx.retry()
                },
            };

            blocker(autoUnblockTx)
        });

        return unblock;
    }, [navigator, blocker, when])
}