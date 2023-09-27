package edu.cmu.cs.cs214.rec04;

/**
 * InheritanceSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (add) for this count.
 *
 * @author Nora Shoemaker
 *
 */

public class InheritanceSortedIntList extends SortedIntList{
    // Write your implementation below with API documentation
    private int addt;

    public InheritanceSortedIntList() {
        super();
        this.addt = 0;
    }

    public int getTotalAdded() {
        return this.addt;
    }

    @Override
    public boolean add(int num) {
        this.addt++;
        System.out.println("child added is called, add number " + num);
        return super.add(num);
    }

    @Override
    public boolean addAll(IntegerList list) {
        return super.addAll(list);
    }

}