import React from "react";
import { HomeIcon } from "@heroicons/react/outline";

export default function NavOnly(props) {
  const { name } = props;
  return (
    <div className="min-h-full bg-gray-800">
      <div className="bg-gray-800 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-row space-x-12">
            <a href="/"><HomeIcon className="h-10 w-8" aria-hidden="true" color="white" /></a>
            <a href="/projects" className="font-bold text-white text-4xl"> {name} </a>
          </div>
        </div>
      </div>
    </div>
  );
}