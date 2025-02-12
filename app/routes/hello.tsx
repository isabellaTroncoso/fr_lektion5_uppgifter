import { Welcome } from "~/welcome/welcome";
import type { Route } from "./+types/home";
import { Hello } from "../hello/hello"


export function meta({}: Route.MetaArgs) {
    return [
      { title: "Home" },
      { name: "description", content: "Welcome to React Router!" },
    ];
  }
  
  export default function Home() {
    return <Hello />;
  }