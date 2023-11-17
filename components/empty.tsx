interface EmptyProps {
  label: string;
}

import Image from "next/image";
import React from "react";

const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full flex flex-col p-20 justify-center items-center">
      <div className="relative h-72 w-72">
        <Image alt="empty" fill src="/empty.png" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};

export default Empty;
