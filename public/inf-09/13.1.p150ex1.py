import random

gen_list = []
flag = False
for i in range(10):
    gen_list.append(random.randint(-20, 20))
print('Згенерований список:', gen_list)

searchEl = int(input('Введіть шуканий елемент: '))

for i in range(10):
    if gen_list[i] == searchEl:
        flag = True
        position = i
        break

if flag == True:
    print('Шуканий елемент має індекс ', position)
else:
    print('Шуканого елементу в списку не існує.')
