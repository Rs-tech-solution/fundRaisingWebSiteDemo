"use client";

import React from "react";
import { useParams } from "next/navigation";
import SevaComponent from "@/components/sevaComponent";

const Sevas = () => {
  const params = useParams();
  const { id } = params;
  return <SevaComponent id={id} />;
};

export default Sevas;
