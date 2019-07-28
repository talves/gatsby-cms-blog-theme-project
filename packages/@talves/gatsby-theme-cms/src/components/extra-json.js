import React from "react";

const Extra = props => {
  return (
    <pre style={{ backgroundColor: "#aeaeae" }}>
      props: {JSON.stringify(props, null, 2)}
    </pre>
  );
};

export default Extra;
