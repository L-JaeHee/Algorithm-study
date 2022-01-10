# 2941: 크로아티아 알파벳/ 실버 5

cro_alpha = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

result = 0
data = input()

for i in cro_alpha:
    result += data.count(i)
    data = data.replace(i, ' ')

result += sum(map(lambda x: len(x), data.split()))
print(result)