"use client";

import React from "react";
import ProfileComponent from "@/components/profileComponent";
import { useParams } from "next/navigation";

const ProfilePage = () => {
  const params = useParams();
  const { id } = params;

  return <ProfileComponent id={id} />;
};

export default ProfilePage;
