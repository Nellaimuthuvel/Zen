import random
choice = input("1.Sign up\n" "2.Sign in\n" "3.Exit\n")
main_dict = dict()
s1 = []
rem = 0
sub_dict = dict()


def sign_in():
    uniquekey_check = int(input("Unique key"))
    check_psswd = input("Enter password")
    for i in main_dict[uniquekey_check]:
        if i == check_psswd:
            print("Successfull Login")
            m = {"amount": 2000, "withdraw": 0, "history": []}
            sub_dict[uniquekey_check]= m
            details(uniquekey_check)


def sign_up():
    r = random.randint(100, 999)
    name = input("Enter the name:")
    email = input("Enter the email:")
    has = input("Enter the password")
    s1.append(name)
    s1.append(email)
    s1.append(has)
    main_dict[r] = s1
    print(main_dict)
    print(r)
    print("1.Sign up\n" "2.Sign in\n" "3.Exit\n")
    choice = input()
    return choice


def details(uniquekey_check):

    print()


while choice >= "1" and choice<="3" :
    if choice == "1":
        choice= sign_up()
    if choice == "2":
        choice= sign_in()

    if choice == "3":
        choice = exit()






