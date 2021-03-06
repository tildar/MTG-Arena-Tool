import { setData } from "./background-util";
import globals from "./globals";
import playerData from "../shared/player-data.js";

const addCustomDeck = function(customDeck) {
  const id = customDeck.id;
  const deckData = {
    // preserve custom fields if possible
    ...(playerData.deck(id) || {}),
    ...customDeck
  };

  setData({ decks: { ...playerData.decks, [customDeck.id]: deckData } });
  if (globals.debugLog || !globals.firstPass)
    globals.store.set("decks." + id, deckData);
};

export default addCustomDeck;
