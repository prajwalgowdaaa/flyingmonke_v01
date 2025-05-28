import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface ExpandableInfoProps {
  title: string;
  content: string;
}

const ExpandableInfo: React.FC<ExpandableInfoProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full py-4 border-t border-gray-200">
      <div className="flex items-center justify-between">
        <div className="text-lg">{title}</div>
        <CollapsibleTrigger asChild>
          <button>{isOpen ? "–" : "+"}</button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="pt-4 text-gray-700">
        <p>{content}</p>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ExpandableInfo;
