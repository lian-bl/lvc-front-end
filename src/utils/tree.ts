/**
 * routes生成menus
 * @param {Array} tree
 * @param {Function} fn
 */
export function mapRoutesToMenus(tree: any, fn: any, childrenKey = 'children') {
  const ret: any = [];
  let layer = -1;
  function loop(data: any, newTree: any) {
    layer += 1;
    data.forEach((node: any) => {
      const item = fn(node, layer, newTree);
      if (!item) return;
      newTree.push(item);
      if (
        node[childrenKey] &&
        node[childrenKey]?.findIndex((item: any) => !item.index && !item?.meta?.hideInMenu) !== -1
      ) {
        item[childrenKey] = [];
        loop(node[childrenKey], item[childrenKey]);
      }
    });
    layer -= 1;
  }
  loop(tree, ret);
  return ret;
}
