// @flow
import * as React from "react";

import type { Context } from "./context";
import typeof { ItinerarySegmentProvider as ItinerarySegmentProviderType } from "./context";

export const ItinerarySegmentContext: React.Context<Context> = React.createContext({
  isNextHidden: false,
  isHidden: false,
  noElevation: false,
  opened: false,
  toggleOpened: () => {},
  index: 0,
  count: 0,
  last: false,
});

export const ItinerarySegmentProvider: ItinerarySegmentProviderType = ({
  children,
  ...ctx
}): React.Node => {
  return (
    <ItinerarySegmentContext.Provider
      value={{
        ...ctx,
      }}
    >
      {children}
    </ItinerarySegmentContext.Provider>
  );
};

export const usePart = (): Context => React.useContext(ItinerarySegmentContext);
