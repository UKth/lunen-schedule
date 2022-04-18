import getData from "@libs/server/getData";
import { User } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-xl text-gray-100">
      Loading...
    </div>
  );
};

export default Loading;