# 10809: 알파벳 찾기/브론즈 2

alphabets = {}
for i in 'abcdefghijklmnopqrstuvwxyz':
    alphabets[i] = '-1'

idx = 0
for i in input():
    if alphabets[i] != '-1':
        idx += 1
        continue
    alphabets[i] = str(idx)
    idx += 1

print(' '.join(alphabets.values()))
