# 10809: 알파벳 찾기/브론즈 2
# 아스키코드와 find메소드 활용

alphabets = input()

for i in range(97, 123):
    print(alphabets.find(chr(i)), end=' ')