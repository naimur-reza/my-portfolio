"use client";

import assets from "@/assets";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import data from "../../../assets/loader.json";
const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  if (loading) return <PreLoader />;

  return (
    <div className="flex min-h-[100vh] items-center justify-center bg-primary">
      <Lottie animationData={data} loop={true} />
    </div>
  );
};

export default PreLoader;
