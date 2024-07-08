import React from "react";
import { FaCheck } from "react-icons/fa6";

type featureProps = {
  featureName: string;
};

const Feature = ({ featureName }: featureProps) => {
  return (
    <div className="flex items-center justify-start   gap-2">
      <FaCheck />
      <p className="text-start">{featureName}</p>
    </div>
  );
};

export default Feature;
