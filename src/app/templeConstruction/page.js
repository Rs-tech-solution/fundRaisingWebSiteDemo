"use client";

import React, { useState } from "react";
import MonthlyCampaignsComponent from "@/components/monthlyCampaignsComponent";

const TempleContruction = () => {
  const [isTemple, setIsTemmple] = useState(true);

  return (
    <div>
      <MonthlyCampaignsComponent isTemple={isTemple} />
    </div>
  );
};

export default TempleContruction;
