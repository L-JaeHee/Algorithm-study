import sys

input = [int(x) - 1 for x in sys.stdin.readline().strip().split(' ')]
year = input[0]

while True:
    if year % 28 == input[1] and year % 19 == input[2]:
        break
    year += 15

print(year + 1)
