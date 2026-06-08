public class SegmentTreeBasics {
    static class SegTree {
        int n; long[] tree;
        SegTree(int[] a) { n = a.length; tree = new long[4*n]; build(1,0,n-1,a); }
        void build(int idx, int l, int r, int[] a) { if (l==r) { tree[idx]=a[l]; return; } int m=(l+r)/2; build(idx*2,l,m,a); build(idx*2+1,m+1,r,a); tree[idx]=tree[idx*2]+tree[idx*2+1]; }
        long query(int ql, int qr){ return query(1,0,n-1,ql,qr); }
        long query(int idx,int l,int r,int ql,int qr){ if (ql>r||qr<l) return 0; if (ql<=l && r<=qr) return tree[idx]; int m=(l+r)/2; return query(idx*2,l,m,ql,qr) + query(idx*2+1,m+1,r,ql,qr); }
        void update(int pos, int val){ update(1,0,n-1,pos,val); }
        void update(int idx,int l,int r,int pos,int val){ if (l==r) { tree[idx]=val; return; } int m=(l+r)/2; if (pos<=m) update(idx*2,l,m,pos,val); else update(idx*2+1,m+1,r,pos,val); tree[idx]=tree[idx*2]+tree[idx*2+1]; }
    }

    public static void main(String[] args){
        boolean ci=false; if (args!=null) for (String a: args) if ("--ci".equals(a)||"--test".equals(a)) ci=true;
        int[] a={1,2,3,4,5};
        SegTree st = new SegTree(a);
        System.out.println("sum(0..2) = " + st.query(0,2));
        System.out.println("sum(1..3) = " + st.query(1,3));
        st.update(2,10);
        System.out.println("sum(0..2) after update = " + st.query(0,2));
        if (ci){ boolean ok=true; ok &= (st.query(0,2)==13); ok &= (st.query(1,3)==16); ok &= (st.query(0,2) == 1+2+10); if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1);} }
    }
}
