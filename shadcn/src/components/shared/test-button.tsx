import { cn } from "@/lib";
import { generateArray } from "@transon/tools";
import { Button } from "../ui";

export type TestButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
};

export const TestButton = ({
  primary = false,
  label,
  ...props
}: TestButtonProps) => {
  const testMonorepo = generateArray(10, (i) => i);
  console.log("test @transon/tools: ", testMonorepo);

  return (
    <Button
      variant={primary ? "default" : "secondary"}
      {...props}
      className={cn()}
    >
      {label}
    </Button>
  );
};
