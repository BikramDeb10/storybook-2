type props = {
  /**Some Description **/

  variant?: "green" | "yellow" | "red";
};

/** Some comment about my light**/
const Light = ({ variant = "green" }: props) => {
  return (
    <div
      style={{
        background: variant,
        padding: "20px",
        color: "white",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Light
    </div>
  );
};

export default Light;
