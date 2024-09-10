import { createContext, useContext, useState } from "react";

const colors = [
    {
      color: "#683434",
      name: "brown",
    },
    {
      color: "#1a5e1a",
      name: "green",
    },
    {
      color: "#659994",
      name: "blue",
    },
    {
      color: "#896599",
      name: "mauve",
    },
    {
      color: "#ffa500",
      name: "orange",
    },
    {
      color: "#59555b",
      name: "grey",
    },
    {
      color: "#222222",
      name: "black",
    },
    {
      color: "#ececec",
      name: "white",
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