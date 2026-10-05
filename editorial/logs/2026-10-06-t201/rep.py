import sys
p='output/google-fonts-china.md'
s=open(p,encoding='utf-8').read()
pairs=open(sys.argv[1],encoding='utf-8').read().split('\n=====\n')
for blk in pairs:
    if not blk.strip(): continue
    a,b=blk.split('\n-----\n')
    a=a.strip('\n'); b=b.strip('\n')
    if a not in s: sys.exit('NOT FOUND: '+a[:60])
    s=s.replace(a,b,1)
open(p,'w',encoding='utf-8').write(s)
print('ok',len(pairs))
