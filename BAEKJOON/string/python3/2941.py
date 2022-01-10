# 2941: 크로아티아 알파벳/ 실버 5

cro_alpha = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

data = input()

for i in cro_alpha:
    data = data.replace(i, '*')

print(len(data))