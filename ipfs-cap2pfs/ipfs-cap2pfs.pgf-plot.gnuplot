set table "ipfs-cap2pfs.pgf-plot.table"; set format "%.5f"
set samples 25; plot [x=0:4] 1 - 1/(1+exp(6-3*x))
