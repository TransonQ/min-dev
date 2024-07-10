import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// 这个组件用于渲染代码块，并进行语法高亮
export const CodeBlock: React.FC<{ children?: string | string[] }> = ({
  children,
}) => {
  const codeString = Array.isArray(children)
    ? children.join("")
    : children || "";

  return (
    <SyntaxHighlighter style={a11yDark} language={"tsx"}>
      {codeString.trim()}
    </SyntaxHighlighter>
  );
};
