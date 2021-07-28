// @flow
import * as React from "react";

import type { Context } from "./context";
import typeof { ItineraryProvider as ItineraryProviderType } from "./context";

export const ItineraryContext: React.Context<Context> = React.createContext({
  setWidths: () => {},
  setCalculatedWidth: () => {},
  calculatedWidth: 0,
});

export const ItineraryProvider: ItineraryProviderType = ({ children }): React.Node => {
  const [widths, setWidths] = React.useState([]);
  const [calculatedWidth, setCalculatedWidth] = React.useState(0);

  React.useLayoutEffect(() => {
    setCalculatedWidth(Math.max(...widths));
  }, [widths, setCalculatedWidth]);

  return (
    <ItineraryContext.Provider
      value={{
        calculatedWidth,
        setCalculatedWidth,
        setWidths,
      }}
    >
      {children}
    </ItineraryContext.Provider>
  );
};
export const useWidth = (): Context => React.useContext(ItineraryContext);
