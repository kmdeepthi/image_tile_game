export const updateRowCol = (rowLength, colLength, tileWidth, tileHeight) => {
  return {
    type: 'UPDATE_ROW_COL',
    rowLength,
    colLength,
    tileWidth,
    tileHeight
  };
}

export const image_selected = (isImageSelected, url, width, height) => {
  return {
    type: 'IMAGE_SELECTED',
    isImageSelected,
    url,
    width,
    height
  };
}

export const updateTileParams = (index, topCounter, leftCounter) => {
  return {
    type: 'UPDATE_TILE_PARAMS',
    index,
    topCounter,
    leftCounter
  };
}

export const update_list = (content) => {
  return {
    type: 'UPDATE_LIST',
    content
  };
}

export const moveTile = (index, top, left) => {
  return {
    type: 'MOVE_TILE',
    index,
    top,
    left
  };
}

export const toggle_pause = (bool) => {
  return {
    type: 'TOGGLE_PAUSE',
    bool
  };
}

export const updateTimer = (mins, secs) => {
  return {
    type: 'UPDATE_TIMER',
    mins,
    secs
  };
}

export const ackwldgeTimer = (bool) => {
  return {
    type: 'ACKNOWLEDGE_TIMER',
    bool
  };
}

export const decrementCounter = (counter) => {
  return {
    type: 'DECREMENT_COUNTER',
    counter
  };
}

export const toggleGameReady = () => {
  return {
    type: 'TOGGLE_GAME_READY'
  };
}

export const log_out = () => {
  return {
    type: 'LOG_OUT'
  };
}

