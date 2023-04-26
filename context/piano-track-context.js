import { createContext, useState, useRef } from 'react'

export const CameraTargetContext = createContext();

export function CameraTargetContextProvider({children}) {
    const [cameraTarget, setCameraTarget] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);
    const [sliderValue, setSliderValue] = useState(0);
    const [pianoWidth, setPianoWidth] = useState(0);
    const [thumbWidth, setThumbWidth] = useState(0);
    const [maximumValue, setMaximumValue] = useState(0.8);
    const pianoTrack = useRef();

    return(
        <CameraTargetContext.Provider value={{cameraTarget, setCameraTarget, sliderWidth, setSliderWidth, sliderValue, setSliderValue, pianoWidth, setPianoWidth, thumbWidth, setThumbWidth, maximumValue, setMaximumValue, pianoTrack, maximumValue}}>
            {children}
        </CameraTargetContext.Provider>
    )
}