import random
import re
import os
import pickle

if not os.path.exists("Bank.txt"):
    f1 = open("Bank.txt", 'w+')
    f1.close()
choice = input("1.Sign up\n" "2.Sign in\n" "3.Exit\n")
main_dict = dict()
s1 = []
rem = 0
sub_dict = dict()


def sign_in():
    uniquekey_check = int(input(" Enter Unique key"))
    check_psswd = input("Enter password")
    for i in main_dict[uniquekey_check]:
        if i == check_psswd:
            print("Successfull Login")
            m = {"amount": 10000, "withdraw": 0, "history": []}
            sub_dict[uniquekey_check]= m
            f = open("Bank.txt", "a+")
            f.write(str(sub_dict))
            f.write("\n")

            f.close()
            print(sub_dict[uniquekey_check])
            details(uniquekey_check)


def sign_up():
    r = random.randint(100, 999)
    name = input("Enter the name:")
    s1.append(name)
    i = 0
    regex = "@gmail.com"
    email = input("Enter the email:")
    while not re.search(regex, email):
        email = input("Enter the email:")
    s1.append(email)
    has = input("Enter the password")
    while (not(len(has))>=4 and not(len(has)) <= 9) :
        has = input("Enter the password")
    s1.append(has)
    main_dict[r] = s1
    print(r)
    f = open("Bank.txt", "a+")
    f.write(str(main_dict))
    f.write("\n")

    f.close()
    print("1.Sign up\n" "2.Sign in\n" "3.Exit\n")
    choice = input()
    return choice


def details(uniquekey_check):

    print("USer Details")
    print("""1.balance 2.deposit 3.withdraw  4.history 5.exit""")
    y = input()
    if y == "1":

        print(sub_dict[uniquekey_check]["amount"])
        y = input("Enter the choice")
    if y == "2":
        deposit = int(input("Enter the amount you want to deposit"))
        sub_dict[uniquekey_check]["amount"] = sub_dict[uniquekey_check]["amount"]+deposit
        print(sub_dict[uniquekey_check]["amount"])

        y = input("Enter the choice")
    if y == "3":
        withdraw = int(input("Enter the amount you want to withdraw"))
        sub_dict[uniquekey_check]["amount"] = sub_dict[uniquekey_check]["amount"] - withdraw
        print(sub_dict[uniquekey_check]["amount"])
        f = open("Bank.txt", "a+")
        f.write(str(sub_dict))
        f.write("\n")

        f.close()
        y = input("Enter the choice")
    if y == "5":
        exit()

while choice >= "1" and choice<="3" :
    if choice == "1":
        choice= sign_up()
    if choice == "2":
        choice= sign_in()

    if choice == "3":
        choice = exit()






