import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
interface AccordionContextType {
  expanded: string | false;
  setExpanded: (expended: string | false) => void;
}
const AccordionContext = createContext<AccordionContextType | null>(null);
type AcoordingContextProp = { children: ReactNode };
const AcoordingContext: React.FC<AcoordingContextProp> = ({ children }) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  return (
    <AccordionContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </AccordionContext.Provider>
  );
};
export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within AccordionProvider");
  }
  return context;
};

export default AcoordingContext;
