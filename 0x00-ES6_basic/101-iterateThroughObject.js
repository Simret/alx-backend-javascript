export default function iterateThroughObject(reportWithIterator) {
  let itemstring = ''; let
    i = 0;
  for (const item of reportWithIterator) {
    if (reportWithIterator.length - 1 === i) {
      itemstring += item;
    } else {
      itemstring += `${item} | `;
    }
    i += i;
  }
  return itemstring;
}
