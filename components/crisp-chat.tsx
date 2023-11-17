"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("752ac010-1e79-47ff-b37d-625cdfca3f09");
  }, []);

  return null;
};

export default CrispChat;
