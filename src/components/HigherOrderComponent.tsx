import React from "react";

const UpdatedComponent = (OriginalComponent: any) => {
  class NewComponent extends React.Component<{}, {}> {
    render() {
      return <OriginalComponent name="Username" />;
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
