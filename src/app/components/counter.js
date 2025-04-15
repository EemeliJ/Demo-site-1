"use client" // This is for rendering a component to client side
import { useState } from "react";

export const Counter = () => {
    console.log("Counter component");
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    );
};