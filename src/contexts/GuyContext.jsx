import { createContext, useContext, useState } from "react";

const colors = [
    {
      color: "#6b7280",
      name: "gray",
    },
    {
      color: "#ef4444",
      name: "red",
    },
    {
      color: "#f97316",
      name: "orange",
    },
    {
      color: "#eab308",
      name: "yellow",
    },
    {
      color: "#22c55e",
      name: "green",
    },
    {
      color: "#0ea5e9",
      name: "sky",
    },
    {
      color: "#3b82f6",
      name: "blue",
    },
    {
      color: "#a855f7",
      name: "purple",
    },
    {
      color: "#ec4899",
      name: "pink",
    },
  ];

const GuyContext = createContext();

export const GuyContextProvider = ({ children }) => {

    const [material, setMaterial] = useState("stylized");
    const [color, setColor] = useState(colors[0]);
    const [animationIndex, setAnimationIndex] = useState(0);
    const [animation, setAnimation] = useState([]);

    return (
        <GuyContext.Provider
            value={{
                material,
                setMaterial,
                colors,
                color,
                setColor,
                animationIndex,
                setAnimationIndex,
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