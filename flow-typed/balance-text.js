// @flow

type $npm$balanceText$Element = HTMLElement | Array<HTMLElement> | string;
type $npm$balanceText$Opts = { watch?: boolean };

declare module 'balance-text' {
  declare module.exports: {
    $call: ($npm$balanceText$Element, ?$npm$balanceText$Opts) => void,
    updateWatched: () => void,
  };
}
