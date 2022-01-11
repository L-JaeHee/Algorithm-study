# 1316: 그룹 단어 체커/실버 5
# retry
"""
4
aba
abab
abcabc
a
-> 1
"""

def checker(text):
    words = dict() #aba
    for idx in range(len(text)):
        word = text[idx]
        if word not in words:
            words[word] = idx
        else:
            if idx - words[word] > 1:
                return 0
            else:
                words[word] = idx
    return 1

N = int(input())
result = 0
for i in range(N):
    text = input()
    result += checker(text)

print(result)