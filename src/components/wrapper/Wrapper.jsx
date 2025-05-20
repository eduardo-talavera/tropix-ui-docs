import { useThemeMode } from "tropix-ui";


export const Wrapper = ({ children }) => {
  
  const { theme } = useThemeMode()

  return (
    <>
      <div
        style={{
          maxWidth: 884,
          width: "100%",
          marginTop: "3rem",
          backgroundColor: theme.colors.background,
          padding: '3rem'
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};
