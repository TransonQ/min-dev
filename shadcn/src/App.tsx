function Code({ children }: { children: React.ReactNode }) {
  return <code className="bg-gray-200 rounded-md p-1 mr-2">{children}</code>;
}

function App() {
  return (
    <div className="h-[calc(100vh-1px)] flex items-center justify-center">
      <div className="flex flex-col gap-4 text-xl">
        <h1 className="text-3xl font-bold">StoryBook</h1>
        <p>
          <Code>src/compoents/ui/*</Code>shadcn/ui components
        </p>
        <p>
          <Code>src/compoents/shared/*</Code>custom components
        </p>
        <p>
          <Code>src/stories/*</Code>storybook
        </p>
        <p>
          <Code>pnpm run dev</Code>to start storybook
        </p>
      </div>
    </div>
  );
}

export default App;
