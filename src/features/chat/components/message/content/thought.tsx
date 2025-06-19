import { memo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MarkdownContent from "@/features/chat/components/message/content/markdown";

const ThoughtContent = memo(function ThoughtContent({
  name,
  thinking,
}: {
  name: string;
  thinking: string;
}) {
  return (
    <div className="w-full rounded-lg bg-sidebar px-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{name}'s thought</AccordionTrigger>
          <AccordionContent>
            <MarkdownContent content={thinking} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
});

export default ThoughtContent;
