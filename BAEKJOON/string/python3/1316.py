# 1316: 그룹 단어 체커/실버 5

N = int(input())

def checker(text):
    words = dict()
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

result = 0
for _ in range(N):
    text = input()
    result += checker(text)

print(result)