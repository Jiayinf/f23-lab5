package edu.cmu.cs.cs214.rec04;

/**
 * DelegationSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (addt) for this count.
 *
 * @author Nora Shoemaker
 *
 */

public class DelegationSortedIntList implements IntegerList{
    private final SortedIntList sortedIntList;

    private int addt;

    public int get(int index) {
        return this.sortedIntList.get(index);
    }

    public int getTotalAdded()
    {
        return addt;
    }

    public DelegationSortedIntList() {
        this.addt = 0;
        this.sortedIntList = new SortedIntList();
    }

    public boolean add(int num) {
        addt++;
        return this.sortedIntList.add(num);
    }

    public boolean addAll(IntegerList list) {
        addt += list.size(); 
        return this.sortedIntList.addAll(list);
    }

    @Override
    public boolean remove(int num) {
        return false;
    }

    public boolean removeAll(IntegerList list) {
        return this.sortedIntList.removeAll(list);
    }

    public int size() {
        return this.sortedIntList.size();
    }

}