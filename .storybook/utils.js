/**
 * Split a story name by group and component.
 * @param {String} name
 * @returns {Array} An array with [0] as group, and [1] as component.
 * 
 * @example
 * // returns ["Group", "Component"]
 * splitStoryName("Group/Component");
 */
const splitStoryName = (name) => name.split('/');

/**
 * It gets the position of an item inside an array.
 * @param {String} item
 * @param {Array} array
 * @returns {Number} The position of the item.
 */
const position = (item, array = []) => {
  const index = array.indexOf(item);
  // Show unsorted items at the bottom.
  return index === -1 ? 9999 : index;
}

/**
 * It sorts the stories by group and component.
 * @param {Object} sortOrder
 * @returns {Array} A list of sorted stories.
 */
export const sortStories = (sortOrder) => {
  const groups = Object.keys(sortOrder);

  return (a, b) => {
    const aStoryName = a[1].kind;
    const bStoryName = b[1].kind;

    // Preserve story sort order.
    if (aStoryName === bStoryName) {
      return 0;
    }

    const [aGroup, aComponent] = splitStoryName(aStoryName);
    const [bGroup, bComponent] = splitStoryName(bStoryName);

    // Sort stories in a group.
    if (aGroup === bGroup) {
      const group = sortOrder[aGroup];
      return position(aComponent, group) - position(bComponent, group);
    }

    // Sort groups.
    return position(aGroup, groups) - position(bGroup, groups);
  };
}
