import { createContext, useState } from 'react'

export const CameraTargetContext = createContext();

export function CameraTargetContextProvider({children}) {
    const [cameraTarget, setCameraTarget] = useState(0);

    return(
        <CameraTargetContext.Provider value={{cameraTarget, setCameraTarget}}>
            {children}
        </CameraTargetContext.Provider>
    )
}