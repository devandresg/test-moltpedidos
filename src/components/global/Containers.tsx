interface RootContainerProps {
  children: React.ReactNode; // Definir tipo para `child`
}

export const RootContainer: React.FC<RootContainerProps> = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        padding: "20px",
      }}
    >
      {children}
    </div>
  );
};
