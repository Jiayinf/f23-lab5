/**
 * DelegationSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (addt) for this count.
 *
 * @author Nora Shoemaker
 *
 */

import { IntegerList } from "./IntegerList";
import { SortedIntList } from "./hidden/SortedIntListLibrary";

class DelegationSortedIntList implements IntegerList {
  private sortedIntList: SortedIntList;

  private addt: number;

  constructor() {
      this.addt = 0
      this.sortedIntList = new SortedIntList()
  }

  getTotalAdded(): number {
    return this.addt
  }

  get(index: number): number {
    return this.sortedIntList.get(index)
  }

  add(num: number): boolean {
    this.addt++;
    return this.sortedIntList.add(num)
  }

  addAll(list: IntegerList): boolean {
    this.addt += list.size()
    return this.sortedIntList.addAll(list)
  }

  remove(num: number): boolean {
    return false
  }

  removeAll(list: IntegerList): boolean  {
    return this.sortedIntList.removeAll(list)
  }
  
  size(): number {
    return this.sortedIntList.size()
  }

}
export { DelegationSortedIntList }
