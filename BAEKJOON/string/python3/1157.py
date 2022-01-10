# 1157: 단어 공부/브론즈 1

from collections import Counter

alphabets = Counter(input().upper())
al_keys = list(alphabets.keys())
al_values = list(alphabets.values())

if al_values.count(max(al_values)) > 1:
    print('?')
else:
    print(al_keys[al_values.index(max(al_values))])