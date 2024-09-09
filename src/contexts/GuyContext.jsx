import { createContext, useContext, useState } from "react";

const GuyContext = createContext();

export const GuyContextProvider = ({ children }) => {

    const [material, setMaterial] = useState("stylized");
    const [color, setColor] = useState("black");
    const [animation, setAnimation] = useState("idle");

    return (
        <GuyContext.Provider
            value={{
                material,
                setMaterial,
                color,
                setColor,
                animation,
                setAnimation,
            }}
        >
            {children}
        </GuyContext.Provider>
    );
};

export const useGuyContext = () => {
    return useContext(GuyContext);
};