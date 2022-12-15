from django.contrib import messages, auth
from django.contrib.auth.models import User
from django.shortcuts import render, redirect


def SignIn(request):

    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(
            username=username,
            password=password
        )

        if user is not None:
            auth.login(request, user)
            return redirect('home')
        else:
            messages.info(request, 'Invalid credentials')
            return redirect('sign_in')

    return render(request, 'authorization/sign_in.html')


def SignUp(request):

    if request.method == 'POST':

        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']

        if password == confirm_password:
            if User.objects.filter(username=username).exists():
                messages.info(request, 'Username Taken')
                return redirect('sign_up')
            elif User.objects.filter(email=email).exists():
                messages.info(request, 'Email Taken')
                return redirect('sign_up')
            else:
                new_user = User.objects.create_user(
                    username=username,
                    email=email,
                    password=confirm_password
                )
                new_user.save()
                messages.success(request, 'User successfully created')
                return redirect('sign_in')
        else:
            messages.info(request, 'We declared mistakes! Repeat again, please!')
            return redirect('sign_up')

    return render(request, 'authorization/sign_up.html')


def SignOut(request):
    auth.logout(request)
    return redirect('/')