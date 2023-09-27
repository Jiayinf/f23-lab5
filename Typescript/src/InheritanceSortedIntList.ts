import { IntegerList } from './IntegerList.js';
import { SortedIntList } from './hidden/SortedIntListLibrary.js'

/**
 * InheritanceSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (addt) for this count.
 *
 * @author Nora Shoemaker
 *
 */

class InheritanceSortedIntList extends SortedIntList{
  private addt: number;
  constructor() {
      super()
      this.addt = 0
  }

  add(num: number): boolean {
    this.addt++
    console.log("child added is called, add number " + num)
    return super.add(num)
  }
   
  getTotalAdded(): number {
    return this.addt
  }

  addAll(list: IntegerList): boolean {
    return super.addAll(list)
  }

}

export { InheritanceSortedIntList }
