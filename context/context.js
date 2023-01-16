import React from "react";

const BrownContext = React.createContext();

export const BrownProvider = BrownContext.Provider;
export const BrownConsumer = BrownContext.Consumer;

export default BrownContext;