"use client";
import { useRouter } from "next/navigation";

export default function About() { 
    const router = useRouter(); // In some cases you have to use programmatic navigation, this is achieved with useRouter
    return (
    <div>
     <h1>This is the about page</h1>
     <button onClick={() => router.push("/")}>Go home</button>
    </div>
    );
}

